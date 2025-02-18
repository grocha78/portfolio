import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    // min-h-screen ensures gradient fills full viewport height
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen py-20 px-6 md:px-12 lg:px-24 font-sans">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          As a linguistics-trained web developer and dedicated educator, I bring a unique perspective
          to every project by blending my love for teaching with a deep understanding of how language
          shapes our interactions. My <span className="font-bold text-blue-300">
          Bachelor of Arts in English/Linguistics with a Minor in Mandarin Chinese
          </span> from the University of Houston instilled in me a strong appreciation for 
          cross-cultural communication, while my experience tutoring multilingual learners taught 
          me how to break down complex ideas into approachable steps. Building on this foundation, 
          I earned my <span className="font-bold text-blue-300">
          Full Stack Web Development certification
          </span> from Rice University Coding Boot Camp, where I discovered my passion for creating 
          stunning mobile-first applications. Whether leading a classroom or collaborating on a 
          development team, I strive to deliver impactful results that exceed expectations and 
          uplift users, learners, and stakeholders alike.
        </p>
      </motion.div>
    </section>
  );
}
