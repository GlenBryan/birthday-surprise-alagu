
import { motion } from "motion/react";
import { Heart, Sparkles, Star, ArrowUp, Gift } from "lucide-react";
import "./FinalSurprise.css";

const floatingHearts = [
  { left: "8%", delay: 0, duration: 8, size: 17 },
  { left: "18%", delay: 2, duration: 10, size: 12 },
  { left: "30%", delay: 1, duration: 9, size: 20 },
  { left: "43%", delay: 3, duration: 11, size: 14 },
  { left: "58%", delay: 0.5, duration: 9, size: 18 },
  { left: "70%", delay: 2.5, duration: 10, size: 13 },
  { left: "82%", delay: 1.5, duration: 8, size: 19 },
  { left: "94%", delay: 3.5, duration: 11, size: 15 },
];

const stars = [
  { left: "12%", top: "20%", delay: 0 },
  { left: "25%", top: "70%", delay: 1 },
  { left: "75%", top: "18%", delay: 0.5 },
  { left: "88%", top: "65%", delay: 1.5 },
  { left: "50%", top: "12%", delay: 2 },
  { left: "7%", top: "55%", delay: 0.8 },
  { left: "93%", top: "38%", delay: 1.8 },
];

function FinalSurprise() {
  const scrollToLetter = () => {
    document.getElementById("love-letter")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="final-surprise" id="final-surprise">
      <div className="final-background-glow final-glow-one" />
      <div className="final-background-glow final-glow-two" />

      <div className="final-particles" aria-hidden="true">
        {floatingHearts.map((heart, index) => (
          <motion.div
            key={`heart-${index}`}
            className="final-floating-heart"
            style={{ left: heart.left }}
            initial={{ y: "110vh", opacity: 0 }}
            animate={{
              y: "-15vh",
              opacity: [0, 0.75, 0.75, 0],
              rotate: [0, 18, -18, 0],
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Heart size={heart.size} fill="currentColor" />
          </motion.div>
        ))}

        {stars.map((star, index) => (
          <motion.div
            key={`star-${index}`}
            className="final-twinkle"
            style={{ left: star.left, top: star.top }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 2.5,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Star size={13} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="final-content">
        <motion.div
          className="final-top-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles size={15} />
          <span>ONE LAST THING, MY LOVE</span>
          <Sparkles size={15} />
        </motion.div>

        <motion.div
          className="final-gift-icon"
          initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, type: "spring" }}
        >
          <Gift size={27} />
        </motion.div>

        <motion.p
          className="final-small-heading"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          To the woman who makes my world beautiful
        </motion.p>

        <motion.h2
          className="final-birthday-title"
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 1 }}
        >
          HAPPY BIRTHDAY
          <span>MY LOVE</span>
        </motion.h2>

        <motion.div
          className="final-heart-scene"
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1, type: "spring" }}
        >
          <motion.div
            className="final-heart-ring ring-one"
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="final-heart-ring ring-two"
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="final-main-heart"
            animate={{
              scale: [1, 1.12, 1],
              filter: [
                "drop-shadow(0 0 15px rgba(255, 130, 180, 0.35))",
                "drop-shadow(0 0 35px rgba(255, 130, 180, 0.8))",
                "drop-shadow(0 0 15px rgba(255, 130, 180, 0.35))",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart size={72} fill="currentColor" strokeWidth={1} />
          </motion.div>
        </motion.div>

        <motion.div
          className="final-message"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="final-thanglish">
            En uyiraana pondatti...
            <br />
            <strong>Un sirippu endrum ippadiye irukkanum.</strong>
            <br />
            Un kooda vaazhum ovvoru naalum enakku oru birthday gift maadhiri.
            <br />
            Namma kaadhalum, namma azhagana family-um endrum ippadiye
            santhoshama irukkanum.
          </p>

          <p className="final-english">
            In every lifetime, in every universe,
            <br />
            <span>I would still choose you.</span>
          </p>
        </motion.div>

        <motion.div
          className="final-wishes"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.1 }}
        >
          <span>LOTS OF LOVE</span>
          <Heart size={14} fill="currentColor" />
          <span>FOREVER & ALWAYS</span>
        </motion.div>

        <motion.div
          className="final-actions"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.3 }}
        >
          <button
            className="final-replay-button"
            onClick={scrollToLetter}
          >
            <Heart size={16} />
            Read My Letter Again
          </button>
        </motion.div>

        <motion.p
          className="final-signature"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Made with endless love, just for you.
        </motion.p>
      </div>

      <button
        className="final-back-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>

      <div className="final-bottom-decoration" aria-hidden="true">
        <span>♥</span>
        <span>♥</span>
        <span>♥</span>
      </div>
    </section>
  );
}

export default FinalSurprise;
