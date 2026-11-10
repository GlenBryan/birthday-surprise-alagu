
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Heart,
  Mail,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
} from "lucide-react";
import "./LoveLetter.css";

const chapters = [
  {
    number: "01",
    label: "En Uyiraana Pondatti",
    subtitle: "You changed my world",
    paragraphs: [
      "En vazhkaila nee vandhadhukku apram dhaan ellaame romba azhaga maari irukku.",
      "Unkooda irukkura ovvoru naalum enakku avlo santhosham, unna en pondattiya adanjadhukku naan daily romba lucky-ah feel panren.",
      "Un anbu, un sirippu, nee enakku kudukura support—idhellam en vazhkaikku kedacha periya varam.",
      "Nee en vazhkaikku vandha naal mudhal, en ulagame maaripochu. En kastamaana nerathula enakku thunaiya ninnu, en chinna chinna santhoshathaiyum perusa celebrate panna vecha devadhai nee.",
      "Un madiyil saayum bodhu kedaikira amaidhi, ulagathula vera engayume kedaikaadhu. Un kooda vaazhra ovvoru nodiyum naan evlo lucky-nu enakku puriyavaikudhu.",
    ],
  },
  {
    number: "02",
    label: "Namma Kaadhaloda Adayaalam",
    subtitle: "Our little world",
    paragraphs: [
      "Namma kaadhaloda adaiyaalama namma paiyan namma kaila vandha andha tharunam...",
      "Namma rendu peroda anbum serndhu uruvaana namma chinna ulagathai paarkumbodhu, enakku kidaicha periya santhosham idhu dhaan-nu thonudhu.",
      "Namma family-oda ovvoru chinna moment-um en manasula endrum azhiyaadha ninaivugal.",
    ],
  },
  {
    number: "03",
    label: "Forever Promise",
    subtitle: "My love, always and forever",
    paragraphs: [
      "Intha varushamum, eppovume nee ninaikira ellaa aasaigalum niraiveti, santhoshama irukka kadavul kitta vendikiren.",
      "Nee en manaivi mattum illa, en nalla thozhi, en uyir, en ellaame!",
      "En uyiraana pondattikku pirandha naal vaazhthukkal!",
      "Happy Birthday en uyire! Love you forever and ever!",
    ],
  },
];

function LoveLetter() {
  const [isOpened, setIsOpened] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const currentChapter = chapters[activeChapter];

  const nextChapter = () => {
    setActiveChapter((current) =>
      Math.min(current + 1, chapters.length - 1)
    );
  };

  const previousChapter = () => {
    setActiveChapter((current) => Math.max(current - 1, 0));
  };

  const closeLetter = () => {
    setIsOpened(false);
    setActiveChapter(0);
  };

  return (
    <section className="love-letter-section" id="love-letter">
      <div className="letter-glow letter-glow-one" />
      <div className="letter-glow letter-glow-two" />

      <motion.div
        className="letter-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <span className="letter-eyebrow">
          <Sparkles size={14} />
          WORDS FROM MY HEART
          <Sparkles size={14} />
        </span>

        <h2>
          A Letter <span>For You</span>
        </h2>

        <p>
          Solla ninaicha vaarthaigal neraya irukku...
          Adhula konjam unakkaga.
        </p>
      </motion.div>

      <div className="letter-stage">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
              key="envelope"
              className="envelope-container"
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="envelope"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="envelope-back" />
                <div className="envelope-paper">
                  <span>To My Love</span>
                  <Heart size={24} fill="currentColor" />
                </div>
                <div className="envelope-flap" />
                <div className="envelope-front" />

                <div className="envelope-seal">
                  <Heart size={24} fill="currentColor" />
                </div>
              </motion.div>

              <p className="envelope-caption">
                A little letter, with a lifetime of love.
              </p>

              <motion.button
                className="open-letter-button"
                onClick={() => setIsOpened(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
              >
                <Mail size={17} />
                Open My Letter
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              className="letter-card"
              initial={{ opacity: 0, y: 40, rotateX: 8 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.65 }}
            >
              <div className="letter-paper-decoration">
                <Heart size={17} fill="currentColor" />
              </div>

              <div className="letter-card-header">
                <span className="letter-date-label">
                  A MESSAGE FROM MY HEART
                </span>
                <span className="letter-chapter-number">
                  {currentChapter.number} / 03
                </span>
              </div>

              <div className="letter-progress">
                {chapters.map((chapter, index) => (
                  <button
                    key={chapter.number}
                    className={`letter-progress-step ${
                      index === activeChapter ? "active" : ""
                    } ${index < activeChapter ? "completed" : ""}`}
                    onClick={() => setActiveChapter(index)}
                    aria-label={`Open chapter ${index + 1}`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter}
                  className="letter-chapter-content"
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="chapter-kicker">
                    CHAPTER {currentChapter.number}
                  </span>

                  <h3>{currentChapter.label}</h3>
                  <p className="chapter-subtitle">
                    {currentChapter.subtitle}
                  </p>

                  <div className="letter-divider">
                    <span />
                    <Heart size={14} fill="currentColor" />
                    <span />
                  </div>

                  <div className="letter-paragraphs">
                    {currentChapter.paragraphs.map((paragraph, index) => (
                      <motion.p
                        key={`${activeChapter}-${index}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.12 + index * 0.12,
                          duration: 0.5,
                        }}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>

                  {activeChapter === 2 && (
                    <motion.div
                      className="letter-final-heart"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7, type: "spring" }}
                    >
                      <Heart size={30} fill="currentColor" />
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="letter-navigation">
                <button
                  className="letter-nav-button"
                  onClick={previousChapter}
                  disabled={activeChapter === 0}
                >
                  <ChevronLeft size={17} />
                  Previous
                </button>

                {activeChapter < chapters.length - 1 ? (
                  <button
                    className="letter-nav-button letter-next-button"
                    onClick={nextChapter}
                  >
                    Next Chapter
                    <ChevronRight size={17} />
                  </button>
                ) : (
                  <button
                    className="letter-nav-button letter-next-button"
                    onClick={closeLetter}
                  >
                    <RotateCcw size={15} />
                    Read Again
                  </button>
                )}
              </div>

              <p className="letter-signature">
                With all my love, forever yours <Heart size={13} fill="currentColor" />
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default LoveLetter;
