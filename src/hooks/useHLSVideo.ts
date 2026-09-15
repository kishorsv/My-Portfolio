import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

interface UseHLSVideoOptions {
  src: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
}

export function useHLSVideo({
  src,
  autoPlay = true,
  muted = true,
  loop = true,
}: UseHLSVideoOptions) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    video.autoplay = autoPlay;
    video.muted = muted;
    video.loop = loop;
    video.playsInline = true;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: false,
        backBufferLength: 60,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoPlay) {
          video.play().catch(() => {
            // Autoplay policies might require user interaction; handled gracefully
          });
        }
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls?.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls?.recoverMediaError();
              break;
            default:
              hls?.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Native HLS support (Safari / iOS)
      video.src = src;
      video.addEventListener('loadedmetadata', () => {
        if (autoPlay) {
          video.play().catch(() => {});
        }
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
      if (video) {
        video.src = '';
      }
    };
  }, [src, autoPlay, muted, loop]);

  return videoRef;
}
