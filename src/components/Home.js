import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center px-6 py-20 font-sans">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          Welcome to My Portfolio
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white opacity-90 mb-10 leading-relaxed">
          Explore my journey as a linguistics-trained web developer, educator, and creative thinker.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* About Me */}
          <Link 
            to="/about"
            className="inline-flex items-center justify-center
    bg-white bg-opacity-20 hover:bg-opacity-40
    backdrop-blur-lg text-white px-6 py-3
    rounded-full font-semibold shadow-lg
    transition transform hover:-translate-y-1
    text-center"
          >
            About Me
          </Link>

          {/* Education */}
          <Link 
            to="/education"
            className="inline-flex items-center justify-center
    bg-white bg-opacity-20 hover:bg-opacity-40
    backdrop-blur-lg text-white px-6 py-3
    rounded-full font-semibold shadow-lg
    transition transform hover:-translate-y-1
    text-center"
          >
            Education
          </Link>

          {/* Skills */}
          <Link 
            to="/skills"
            className="inline-flex items-center justify-center
    bg-white bg-opacity-20 hover:bg-opacity-40
    backdrop-blur-lg text-white px-6 py-3
    rounded-full font-semibold shadow-lg
    transition transform hover:-translate-y-1
    text-center"
          >
            Skills
          </Link>

          {/* Professional Experience */}
          <Link 
            to="/professional-experience"
            className="inline-flex items-center justify-center
    bg-white bg-opacity-20 hover:bg-opacity-40
    backdrop-blur-lg text-white px-6 py-3
    rounded-full font-semibold shadow-lg
    transition transform hover:-translate-y-1
    text-center"
          >
            Professional Experience
          </Link>

          {/* Contact */}
          <Link 
            to="/contact"
            className="inline-flex items-center justify-center
    bg-white bg-opacity-20 hover:bg-opacity-40
    backdrop-blur-lg text-white px-6 py-3
    rounded-full font-semibold shadow-lg
    transition transform hover:-translate-y-1
    text-center"
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
