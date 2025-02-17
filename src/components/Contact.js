import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6 md:px-12 lg:px-24 font-sans">
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8">
          I'd love to connect! Whether you want to collaborate, discuss opportunities, or just say hi, feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* LinkedIn */}
          <motion.a 
            href="https://www.linkedin.com/in/guadalupe-rocha-394b2b13/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-lg shadow-lg hover:bg-opacity-40 transition"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin size={28} className="text-blue-300" />
            <span className="text-lg">LinkedIn</span>
          </motion.a>

          {/* GitHub */}
          <motion.a 
            href="https://github.com/grocha78" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-lg shadow-lg hover:bg-opacity-40 transition"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub size={28} className="text-gray-300" />
            <span className="text-lg">GitHub</span>
          </motion.a>

          {/* Email */}
          <motion.a 
            href="mailto:rochalupe@gmail.com" 
            className="flex items-center gap-3 bg-white bg-opacity-20 backdrop-blur-lg p-4 rounded-lg shadow-lg hover:bg-opacity-40 transition"
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope size={28} className="text-yellow-300" />
            <span className="text-lg">Email</span>
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
}
