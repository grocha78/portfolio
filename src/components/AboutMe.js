// AboutMe.js
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import backgroundImg from "../assets/images/my-background.jpg";

export function AboutMe() {
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
      {/* Overlay to darken the background if needed */}
      <div className="bg-black bg-opacity-40 absolute inset-0"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-6xl font-extrabold font-playfair mb-8">About Me</h2>
        <p className="font-playfair text-2xl leading-relaxed mb-6">
          As a linguistics-trained educator and dedicated web-developer, I bring a unique perspective
          to every project by blending my love for teaching with a deep understanding of how language
          shapes our interactions. My <span className="font-bold text-blue-300">Bachelor of Arts in English/Linguistics with a Minor in Mandarin Chinese</span> from the University of Houston instilled in me a strong appreciation for cross-cultural communication, while my experience tutoring multilingual learners taught me how to break down complex ideas into approachable steps. Building on this foundation, I earned my <span className="font-bold text-blue-300">Full Stack Web Development certification</span> from Rice University Coding Boot Camp, where I discovered my passion for creating stunning mobile-first applications. Whether leading a classroom or collaborating on a development team, I strive to deliver impactful results that exceed expectations and uplift users, learners, and stakeholders alike.
        </p>
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