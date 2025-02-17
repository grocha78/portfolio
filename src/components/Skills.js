import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6 md:px-12 lg:px-24 font-sans">
      <motion.div
        className="max-w-4xl mx-auto text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center">Skills & Expertise</h2>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg text-gray-100 rounded-lg p-6 shadow-lg">
          <p className="text-lg mt-2">
            🔹 Frontend & Backend Development<br />
            🔹 JavaScript (ES6+), React, Node.js, Express, MongoDB, SQL<br />
            🔹 UI/UX Design, Accessibility, Multilingual Applications
          </p>
        </div>
      </motion.div>
    </section>
  );
}
