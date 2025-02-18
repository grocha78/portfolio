// Home.js
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Import your local image
import backgroundImg from "../assets//images/my-background.jpg";

export default function Home() {
  return (
    <section
      className="
        relative w-full h-screen
        bg-cover bg-center bg-no-repeat
        flex items-center justify-center
      "
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      {/* Optional Overlay - make it lighter if you need to see the image clearly */}
      <div className="bg-black bg-opacity-20 absolute inset-0"></div>

      <motion.div
        className="relative z-10 text-white text-center max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
          Explore my journey as a linguistics-trained web developer, educator,
          and creative thinker.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/about"
            className="
              inline-flex items-center justify-center
              bg-white bg-opacity-20 hover:bg-opacity-40
              backdrop-blur-lg text-white px-6 py-3
              rounded-full font-semibold shadow-lg
              transition transform hover:-translate-y-1
              text-center
            "
          >
            About Me
          </Link>

          <Link
            to="/education"
            className="
              inline-flex items-center justify-center
              bg-white bg-opacity-20 hover:bg-opacity-40
              backdrop-blur-lg text-white px-6 py-3
              rounded-full font-semibold shadow-lg
              transition transform hover:-translate-y-1
              text-center
            "
          >
            Education
          </Link>

          <Link
            to="/skills"
            className="
              inline-flex items-center justify-center
              bg-white bg-opacity-20 hover:bg-opacity-40
              backdrop-blur-lg text-white px-6 py-3
              rounded-full font-semibold shadow-lg
              transition transform hover:-translate-y-1
              text-center
            "
          >
            Skills
          </Link>

          <Link
            to="/professional-experience"
            className="
              inline-flex items-center justify-center
              bg-white bg-opacity-20 hover:bg-opacity-40
              backdrop-blur-lg text-white px-6 py-3
              rounded-full font-semibold shadow-lg
              transition transform hover:-translate-y-1
              text-center
            "
          >
            Professional Experience
          </Link>

          <Link
            to="/contact"
            className="
              inline-flex items-center justify-center
              bg-white bg-opacity-20 hover:bg-opacity-40
              backdrop-blur-lg text-white px-6 py-3
              rounded-full font-semibold shadow-lg
              transition transform hover:-translate-y-1
              text-center
            "
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
