import { motion } from "framer-motion";

export default function Education() {
  return (
    // Added min-h-screen to ensure full gradient coverage
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen py-20 px-6 md:px-12 lg:px-24 font-sans">
      <motion.div
        className="max-w-4xl mx-auto text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center">Education</h2>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg text-gray-100 rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-300">Bachelor of Arts</h3>
          <p className="text-lg mt-2">
            🎓 English/Linguistics, Minor in Mandarin Chinese<br />
            University of Houston
          </p>

          <h3 className="text-2xl font-semibold text-blue-300 mt-6">
            Full Stack Web Development
          </h3>
          <p className="text-lg mt-2">
            💻 Rice University Coding Boot Camp (2022)
          </p>
        </div>
      </motion.div>
    </section>
  );
}
