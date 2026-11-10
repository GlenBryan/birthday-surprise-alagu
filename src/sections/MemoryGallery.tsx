import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight, Heart, Expand } from "lucide-react";
import "./MemoryGallery.css";

const photos = [
  {
    src: "/assets/images/photo1.jpg",
    title: "The beginning of us",
    description: "Every beautiful story has a beginning ❤️",
    className: "memory-featured",
  },
  {
    src: "/assets/images/photo2.jpg",
    title: "My favourite smile",
    description: "Your smile makes everything brighter.",
    className: "memory-tall",
  },
  {
    src: "/assets/images/photo3.jpg",
    title: "Little moments",
    description: "The simplest moments become my favourites.",
    className: "",
  },
  {
    src: "/assets/images/photo4.jpg",
    title: "Together",
    description: "Anywhere feels special when I'm with you.",
    className: "",
  },
  {
    src: "/assets/images/photo5.jpg",
    title: "My happiness",
    description: "You make ordinary days unforgettable.",
    className: "",
  },
  {
    src: "/assets/images/photo6.jpg",
    title: "Forever and always",
    description: "Here's to a lifetime of memories together.",
    className: "memory-wide",
  },
];

export default function MemoryGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const closeViewer = () => setSelectedPhoto(null);

  const showPrevious = () => {
    setSelectedPhoto((current) =>
      current === null
        ? null
        : (current - 1 + photos.length) % photos.length
    );
  };

  const showNext = () => {
    setSelectedPhoto((current) =>
      current === null ? null : (current + 1) % photos.length
    );
  };

  return (
    <section className="memory-section" id="memories">
      <div className="memory-glow memory-glow-one" />
      <div className="memory-glow memory-glow-two" />

      <motion.div
        className="memory-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <span className="memory-kicker">
          <Heart size={14} fill="currentColor" />
          OUR LITTLE WORLD
          <Heart size={14} fill="currentColor" />
        </span>

        <h2>
          Every picture holds
          <span> a thousand memories.</span>
        </h2>

        <p>
          Sila ninaivugal photos-la mattum illa...
          <br />
          En manasula endrum irukkum ❤️
        </p>
      </motion.div>

      <div className="memory-grid">
        {photos.map((photo, index) => (
          <motion.button
            type="button"
            key={photo.src}
            className={`memory-card ${photo.className}`}
            onClick={() => setSelectedPhoto(index)}
            initial={{ opacity: 0, y: 45, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: index * 0.09,
              ease: "easeOut",
            }}
            whileHover={{ y: -7 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Open photo: ${photo.title}`}
          >
            <div className="memory-image-wrap">
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
              />

              <span className="memory-expand">
                <Expand size={17} />
              </span>
            </div>

            <div className="memory-caption">
              <span className="memory-number">
                MEMORY 0{index + 1}
              </span>
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <motion.p
        className="memory-ending"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        "The best part of my life is having you in it."
        <span> — Made with endless love ❤️</span>
      </motion.p>

      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            className="memory-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeViewer}
          >
            <button
              className="lightbox-close"
              onClick={closeViewer}
              aria-label="Close photo viewer"
            >
              <X size={25} />
            </button>

            <button
              className="lightbox-arrow lightbox-previous"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={30} />
            </button>

            <motion.div
              className="lightbox-content"
              key={selectedPhoto}
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].title}
              />

              <div className="lightbox-caption">
                <span>
                  MEMORY 0{selectedPhoto + 1} / 06
                </span>
                <h3>{photos[selectedPhoto].title}</h3>
                <p>{photos[selectedPhoto].description}</p>
              </div>
            </motion.div>

            <button
              className="lightbox-arrow lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
            >
              <ChevronRight size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}