
import { motion } from "motion/react";
import MemoryGallery from "./sections/MemoryGallery";
import MusicPlayer from "./components/MusicPlayer";
import LoveLetter from "./sections/LoveLetter";
import FinalSurprise from "./sections/FinalSurprise";
import {
  Heart,
  Sparkles,
  Music2,
  ArrowDown
} from "lucide-react";

import "./style.css";

function App() {
  return (
    <main className="birthday-app">

      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="top-nav">
        <span className="brand">
          <Heart size={17} fill="currentColor" />
          Forever & Always
        </span>

        <span className="nav-label">
          A special day for someone special
        </span>
      </nav>

      <section className="hero">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >

          <div className="eyebrow">
            <Sparkles size={15} />
            A LITTLE SURPRISE FOR YOU
            <Sparkles size={15} />
          </div>

          <p className="pre-title">
            To the most beautiful woman in my world
          </p>

          <h1>
            Happy Birthday
            <span>My Love</span>
          </h1>

          <p className="hero-description">
            En uyiraana pondattikku...
            <br />
            Unakkaga oru chinna surprise ❤️
          </p>

          <motion.button
            className="surprise-button"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              document
                .getElementById("welcome")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Heart size={17} fill="currentColor" />
            Made With Love
          </motion.button>

          <motion.div
            className="scroll-indicator"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity
            }}
          >
            <ArrowDown size={20} />
            <span>SCROLL TO EXPLORE</span>
          </motion.div>

        </motion.div>

      </section>

      <section className="welcome-section" id="welcome">

        <span className="section-kicker">
          A MESSAGE FROM MY HEART
        </span>

        <h2>
          You are my
          <span>favorite blessing.</span>
        </h2>

        <p>
          Oru azhagana payanam...
          Oru azhagana kaadhal...
          Innum pala ninaivugal namakkaga kaathirukku.
        </p>

      </section>
      <MemoryGallery />
      <LoveLetter />

      <FinalSurprise />

      <footer>
        <Heart size={14} fill="currentColor" />
        Made with endless love
      </footer>

      {/* <button
        className="music-placeholder"
        aria-label="Music player coming soon"
      >
        <Music2 size={20} />
      </button> */}
      <MusicPlayer />
    </main>
  );
}

export default App;
