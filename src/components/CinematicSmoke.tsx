import { useEffect, useRef, memo } from 'react';

interface CinematicSmokeProps {
  progress: number; // 0 to 100
  phase: 'dot' | 'identity' | 'structure' | 'scan' | 'complete' | 'exit';
  mouse?: { x: number; y: number };
  isDispersing: boolean;
}

const VERTEX_SHADER_SOURCE = `
attribute vec2 a_position;
varying vec2 v_uv;

void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER_SOURCE = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_progress;
uniform float u_disperse;

varying vec2 v_uv;

// Fast 2D Gradient Noise for organic fluidity
vec2 hash2(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float gnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
        dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
    mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
        dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
    u.y
  );
}

// 4-Octave Fractional Brownian Motion (FBM)
float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  mat2 rot = mat2(0.87758, 0.47942, -0.47942, 0.87758);
  for (int i = 0; i < 4; i++) {
    value += amplitude * gnoise(p);
    p = rot * p * 2.05 + vec2(1.3, 2.7);
    amplitude *= 0.5;
  }
  return value;
}

// Domain Warped Cinematic Fluid Smoke Simulation
float domainWarpedSmoke(vec2 p, out vec2 q, out vec2 r, float speed) {
  vec2 drift = vec2(0.0, u_time * speed);
  
  // Layer 01: Deep warp
  q = vec2(
    fbm(p + drift + vec2(0.0, 0.0)),
    fbm(p + drift + vec2(5.2, 1.3))
  );

  // Layer 02: Mid curling vortex eddies
  r = vec2(
    fbm(p + 3.2 * q + vec2(1.7, 9.2) + 0.12 * u_time * speed),
    fbm(p + 3.2 * q + vec2(8.3, 2.8) + 0.15 * u_time * speed)
  );

  // Final volumetric density
  return fbm(p + 3.8 * r);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);
  vec2 p = (uv - 0.5) * aspect;

  // Gentle cursor parallax displacement (subtle 3D shift)
  vec2 mouseNorm = (u_mouse - 0.5) * 0.10;
  p -= mouseNorm;

  // Outward explosive smoke dispersal at 100%
  if (u_disperse > 0.001) {
    vec2 dir = normalize(p + vec2(0.0001));
    p += dir * (u_disperse * u_disperse * 2.8);
  }

  // Multi-scale fluid smoke coordinates (slow, calm, luxurious motion)
  vec2 smokeCoord = p * 1.6;
  smokeCoord.y += u_time * 0.025; // Gentle upward drift

  vec2 q, r;
  float smoke = domainWarpedSmoke(smokeCoord, q, r, 0.035);
  smoke = smoothstep(-0.35, 0.65, smoke);

  // Color Palette
  vec3 colObsidian = vec3(0.039, 0.039, 0.043); // #0A0A0B
  vec3 colCharcoal = vec3(0.075, 0.075, 0.082); // #121214
  vec3 colViolet   = vec3(0.486, 0.361, 1.000); // #7C5CFF
  vec3 colChampagne= vec3(0.847, 0.765, 0.604); // #D8C39A
  vec3 colCoral    = vec3(1.000, 0.502, 0.400); // #FF8066

  // Central Atmospheric Backlight
  vec2 lightCenter = vec2(0.0, 0.0) + mouseNorm * 0.4;
  float distLight = length(p - lightCenter);

  // Progressive light intensity: dark at 0% -> faint -> radiant at 80% -> flare at 100%
  float lightSpread = mix(0.16, 0.70, u_progress);
  float lightGlow = exp(-distLight * (3.6 / lightSpread));

  // Flare spike at 100% convergence moment
  float flash = sin(clamp(u_disperse * 3.14159, 0.0, 3.14159)) * 1.8;
  lightGlow += flash;

  // Volumetric scattering through smoke density
  float smokeDensity = smoke * (0.35 + 0.65 * u_progress);

  // Layer 01: Deep Charcoal smoke base
  vec3 baseColor = mix(colObsidian, colCharcoal, clamp(smoke * 1.25, 0.0, 1.0));

  // Layer 02: Subtle violet illumination inside smoke folds
  float violetFactor = clamp(length(q) * 0.70 * u_progress, 0.0, 1.0);
  baseColor = mix(baseColor, colViolet, violetFactor * 0.26 * smokeDensity);

  // Layer 03: Soft champagne highlight along curling edges
  float champagneFactor = clamp(length(r) * 0.75 * u_progress, 0.0, 1.0);
  baseColor = mix(baseColor, colChampagne, champagneFactor * 0.20 * lightGlow);

  // Central core light emerging from darkness
  vec3 coreColor = mix(colChampagne, colViolet, 0.35);
  coreColor = mix(coreColor, colCoral, 0.12);
  baseColor += coreColor * (lightGlow * 0.52 * (0.12 + 0.88 * u_progress));

  // Vignette falloff
  float vignette = smoothstep(1.35, 0.25, length((uv - 0.5) * aspect));
  baseColor *= vignette;

  // Rapid dispersal unmasking
  float alpha = 1.0 - clamp(u_disperse * 1.15, 0.0, 1.0);

  gl_FragColor = vec4(baseColor, alpha);
}
`;

export const CinematicSmoke = memo(function CinematicSmoke({
  progress,
  phase: _phase,
  mouse,
  isDispersing,
}: CinematicSmokeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const uniformsRef = useRef<{
    resolution: WebGLUniformLocation | null;
    time: WebGLUniformLocation | null;
    mouse: WebGLUniformLocation | null;
    progress: WebGLUniformLocation | null;
    disperse: WebGLUniformLocation | null;
  }>({
    resolution: null,
    time: null,
    mouse: null,
    progress: null,
    disperse: null,
  });

  const stateRef = useRef({
    startTime: 0,
    progressNorm: 0,
    disperseAmount: 0,
    mouseSmooth: { x: 0.5, y: 0.5 },
    mouseTarget: { x: 0.5, y: 0.5 },
  });

  // Initialize start timestamp and sync progress into ref
  useEffect(() => {
    stateRef.current.startTime = performance.now();
  }, []);

  useEffect(() => {
    stateRef.current.progressNorm = progress / 100;
  }, [progress]);

  // Handle cursor movement internally for zero parent re-render lag
  useEffect(() => {
    if (mouse) {
      stateRef.current.mouseTarget.x = mouse.x;
      stateRef.current.mouseTarget.y = mouse.y;
    }
  }, [mouse]);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      stateRef.current.mouseTarget.x = e.clientX / window.innerWidth;
      stateRef.current.mouseTarget.y = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  // Choreograph dispersal timing
  useEffect(() => {
    if (isDispersing) {
      const disperseStart = performance.now();
      const runDispersal = (now: number) => {
        const elapsed = (now - disperseStart) / 750; // 750ms dispersal expansion
        const eased = Math.min(elapsed, 1.0);
        stateRef.current.disperseAmount = eased;
        if (eased < 1.0) {
          requestAnimationFrame(runDispersal);
        }
      };
      requestAnimationFrame(runDispersal);
    }
  }, [isDispersing]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize WebGL context with low-power friendly settings
    const gl =
      canvas.getContext('webgl', {
        alpha: true,
        depth: false,
        stencil: false,
        antialias: false,
        powerPreference: 'high-performance',
      }) ||
      (canvas.getContext('experimental-webgl') as WebGLRenderingContext | null);

    if (!gl) {
      return;
    }
    glRef.current = gl;

    // Compile shader helper
    const compileShader = (type: number, source: string): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertShader = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER_SOURCE);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);

    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program linking error:', gl.getProgramInfoLog(program));
      return;
    }
    programRef.current = program;
    gl.useProgram(program);

    // Full-screen Quad geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posAttr = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    // Fetch uniform locations
    uniformsRef.current = {
      resolution: gl.getUniformLocation(program, 'u_resolution'),
      time: gl.getUniformLocation(program, 'u_time'),
      mouse: gl.getUniformLocation(program, 'u_mouse'),
      progress: gl.getUniformLocation(program, 'u_progress'),
      disperse: gl.getUniformLocation(program, 'u_disperse'),
    };

    // Resize handler (render at 0.75x for optimal 60fps performance & soft volumetric feel)
    const resizeCanvas = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      const width = Math.floor(window.innerWidth * dpr * 0.75);
      const height = Math.floor(window.innerHeight * dpr * 0.75);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Render loop
    const render = () => {
      if (!gl || !programRef.current) return;

      const now = performance.now();
      const elapsed = (now - stateRef.current.startTime) * 0.001;
      const speed = prefersReducedMotion ? 0.15 : 0.85;

      // Smooth mouse lerping
      stateRef.current.mouseSmooth.x +=
        (stateRef.current.mouseTarget.x - stateRef.current.mouseSmooth.x) * 0.04;
      stateRef.current.mouseSmooth.y +=
        (stateRef.current.mouseTarget.y - stateRef.current.mouseSmooth.y) * 0.04;

      gl.useProgram(programRef.current);

      if (uniformsRef.current.resolution) {
        gl.uniform2f(uniformsRef.current.resolution, canvas.width, canvas.height);
      }
      if (uniformsRef.current.time) {
        gl.uniform1f(uniformsRef.current.time, elapsed * speed);
      }
      if (uniformsRef.current.mouse) {
        gl.uniform2f(
          uniformsRef.current.mouse,
          stateRef.current.mouseSmooth.x,
          1.0 - stateRef.current.mouseSmooth.y
        );
      }
      if (uniformsRef.current.progress) {
        gl.uniform1f(uniformsRef.current.progress, stateRef.current.progressNorm);
      }
      if (uniformsRef.current.disperse) {
        gl.uniform1f(uniformsRef.current.disperse, stateRef.current.disperseAmount);
      }

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (positionBuffer) gl.deleteBuffer(positionBuffer);
      if (vertShader) gl.deleteShader(vertShader);
      if (fragShader) gl.deleteShader(fragShader);
      if (program) gl.deleteProgram(program);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
      {/* High-Performance WebGL Volumetric Smoke Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover scale-105 filter blur-[1px] opacity-90 transition-opacity duration-1000"
      />

      {/* Atmospheric Depth Shadows & Ambient Diffusion */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A0B]/30 to-[#0A0A0B]/90 pointer-events-none" />
    </div>
  );
});
