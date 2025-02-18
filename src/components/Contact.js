import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen py-20 px-6 md:px-12 lg:px-24 font-sans">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8">
          I’d love to connect! Whether you want to collaborate, discuss opportunities, 
          or just say hi, feel free to reach out.
        </p>

        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* LinkedIn */}
          <motion.a 
            href="https://www.linkedin.com/in/guadalupe-rocha-394b2b13/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white bg-opacity-20 
                       hover:bg-opacity-40 backdrop-blur-lg px-4 py-3 rounded-lg 
                       shadow-lg transition transform hover:scale-105"
          >
            <FaLinkedin size={28} className="text-blue-300" />
            <span className="text-lg ml-2">LinkedIn</span>
          </motion.a>

          {/* GitHub */}
          <motion.a 
            href="https://github.com/grocha78" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white bg-opacity-20 
                       hover:bg-opacity-40 backdrop-blur-lg px-4 py-3 rounded-lg 
                       shadow-lg transition transform hover:scale-105"
          >
            <FaGithub size={28} className="text-gray-300" />
            <span className="text-lg ml-2">GitHub</span>
          </motion.a>

          {/* Email */}
          <motion.a 
            href="mailto:rochalupe@gmail.com" 
            className="inline-flex items-center justify-center bg-white bg-opacity-20 
                       hover:bg-opacity-40 backdrop-blur-lg px-4 py-3 rounded-lg 
                       shadow-lg transition transform hover:scale-105"
          >
            <FaEnvelope size={28} className="text-yellow-300" />
            <span className="text-lg ml-2">Email</span>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}