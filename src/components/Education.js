import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import backgroundImg from "../assets/images/my-background.jpg";

export default function Education() {
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
      }}
    >
      <div className="bg-black bg-opacity-40 absolute inset-0"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-left text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold mb-6 text-center">Education</h2>
        <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-blue-300">Bachelor of Arts</h3>
          <p className="text-lg mt-2">
            🎓 English/Linguistics, Minor in Mandarin Chinese<br />
            University of Houston
          </p>

          <h3 className="text-2xl font-semibold text-blue-300 mt-6">Full Stack Web Development</h3>
          <p className="text-lg mt-2">
            💻 Rice University Coding Boot Camp (2022)
          </p>
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
