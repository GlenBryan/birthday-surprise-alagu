
import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Music2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import "./MusicPlayer.css";

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Unable to play music:", error);
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/music/our-song.mp3"
        loop
        preload="metadata"
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <motion.div
        className="music-player"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="music-panel"
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <div className="music-panel-top">
                <div>
                  <span className="music-eyebrow">
                    OUR LITTLE SOUNDTRACK
                  </span>
                  <h3>For My Love ❤️</h3>
                </div>

                <button
                  className="music-collapse"
                  onClick={() => setIsExpanded(false)}
                  aria-label="Collapse music player"
                >
                  <ChevronDown size={19} />
                </button>
              </div>

              <div className="music-song-info">
                <motion.div
                  className={`vinyl-disc ${isPlaying ? "vinyl-playing" : ""}`}
                  animate={{ rotate: isPlaying ? 360 : 0 }}
                  transition={{
                    repeat: isPlaying ? Infinity : 0,
                    duration: 5,
                    ease: "linear",
                  }}
                >
                  <div className="vinyl-center">
                    <HeartIcon />
                  </div>
                </motion.div>

                <div className="music-song-text">
                  <strong>Our Special Song</strong>
                  <span>Made for you, my love</span>
                  <div className="music-wave">
                    {[1, 2, 3, 4, 5, 6, 7].map((bar) => (
                      <span
                        key={bar}
                        className={isPlaying ? "wave-active" : ""}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="music-controls">
                <button
                  className="music-main-control"
                  onClick={toggleMusic}
                  aria-label={isPlaying ? "Pause music" : "Play music"}
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>

                <div className="music-volume">
                  <button
                    className="volume-toggle"
                    onClick={() => setIsMuted(!isMuted)}
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX size={17} />
                    ) : (
                      <Volume2 size={17} />
                    )}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={(event) =>
                      setVolume(Number(event.target.value))
                    }
                    aria-label="Music volume"
                  />
                </div>
              </div>

              <p className="music-footer-text">
                A song for every memory we make ✨
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="music-floating-row">
          <AnimatePresence>
            {!isExpanded && (
              <motion.span
                className="music-floating-label"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                {isPlaying ? "Now Playing" : "Our Song"}
              </motion.span>
            )}
          </AnimatePresence>

          <button
            className={`music-floating-button ${
              isPlaying ? "music-is-playing" : ""
            }`}
            onClick={() =>
              isExpanded ? toggleMusic() : setIsExpanded(true)
            }
            aria-label={
              isExpanded
                ? isPlaying
                  ? "Pause music"
                  : "Play music"
                : "Open music player"
            }
          >
            {isPlaying ? (
              <Pause size={21} fill="currentColor" />
            ) : (
              <Music2 size={21} />
            )}
          </button>

          <button
            className="music-expand-button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? "Close music panel" : "Open music panel"}
          >
            {isExpanded ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronUp size={16} />
            )}
          </button>
        </div>
      </motion.div>
    </>
  );
}

function HeartIcon() {
  return <span className="vinyl-heart">♥</span>;
}

export default MusicPlayer;
