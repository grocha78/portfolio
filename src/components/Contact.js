import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import backgroundImg from "../assets/images/my-background.jpg";

export default function Contact() {
  return (
    <section
      className="
        relative
        w-full
        min-h-screen
        bg-cover bg-center bg-no-repeat
        flex items-center justify-center
        px-6 py-20
        font-sans
      "
      style={{
        backgroundImage: `url(${backgroundImg})`,
        fontFamily: " 'Playfair Display', serif",
      }}
    >
      <div className="bg-black bg-opacity-40 absolute inset-0"></div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-6xl font-extrabold font-playfair mb-8 text-center">Get in Touch</h2>
        <p className="text-lg mb-8">
          I’d love to connect! Whether you want to collaborate, discuss opportunities, or just say hi...
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-40 backdrop-blur-lg px-4 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            <FaLinkedin size={28} className="text-blue-300" />
            <span className="text-lg ml-2">LinkedIn</span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-40 backdrop-blur-lg px-4 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            <FaGithub size={28} className="text-gray-300" />
            <span className="text-lg ml-2">GitHub</span>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:your.email@example.com"
            className="inline-flex items-center justify-center bg-white bg-opacity-20 hover:bg-opacity-40 backdrop-blur-lg px-4 py-3 rounded-lg shadow-lg transition transform hover:scale-105"
          >
            <FaEnvelope size={28} className="text-yellow-300" />
            <span className="text-lg ml-2">Email</span>
          </motion.a>
        </div>
      </motion.div>
       {/* Back Button at the bottom center - linking to Home page */}
       <div className="absolute bottom-6 left-0 w-full flex justify-center z-20">
        <Link
          to="/"
          className="
            bg-white bg-opacity-20
            hover:bg-opacity-40
            text-white font-semibold
            px-6 py-3
            rounded-full
            shadow-lg
            transition
            transform
            hover:-translate-y-1
          "
        >
          Back
        </Link>
      </div>
    </section>
  );
}
