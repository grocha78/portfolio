import { motion } from "framer-motion";

export default function ProfessionalExperience() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6 md:px-12 lg:px-24 font-sans">
      <motion.div
        className="max-w-4xl mx-auto text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold mb-8 text-center">Professional Experience</h2>

        <div className="bg-white bg-opacity-20 backdrop-blur-lg text-gray-100 rounded-lg p-6 shadow-lg space-y-8">
          {/* A Yancy Life */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">Multilingual Tutor</h3>
            <p className="font-light text-sm mb-1">A Yancy Life — Houston, TX (Jan 2024 – Present)</p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>Provide tutoring support to 1–8 students per session in small groups or one-on-one.</li>
              <li>Engage students throughout the entire session, following campus/Yancy guidelines.</li>
              <li>Track daily attendance, maintain logs of student progress, prepare mini-lessons from assessments.</li>
              <li>Collaborate with teachers to ensure effective learning environments.</li>
            </ul>
          </div>

          {/* Instacart */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">Full Service Shopper</h3>
            <p className="font-light text-sm mb-1">Instacart — Houston, TX (Oct 2014 – Present)</p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>Shop and deliver groceries, ensuring exceptional customer service.</li>
              <li>Adapt to evolving customer requests and handle all transactions accurately.</li>
            </ul>
          </div>

          {/* Child Food Program of Texas */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">Food Program Representative</h3>
            <p className="font-light text-sm mb-1">Child Food Program of Texas — Houston, TX (June 2021 – Feb 2022)</p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>Collaborated with daycare centers to ensure compliance with Texas nutritional guidelines.</li>
              <li>Observed meal services, recorded findings, and monitored related expenses in a company database.</li>
            </ul>
          </div>

          {/* Texas Children’s Hospital */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">Research Assistant</h3>
            <p className="font-light text-sm mb-1">Texas Children’s Hospital — Houston, TX (Mar 2019 – Jan 2021)</p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>Assisted with 10+ research projects in the PM&R department.</li>
              <li>Organized and led the Rehab Lecture Series, overseeing lecturer coordination and event setup.</li>
              <li>Managed Therapy Observation scheduling, paperwork, and volunteer assignments.</li>
              <li>Created/maintained databases in Excel and REDCap for research data entry and tracking.</li>
            </ul>
          </div>

          {/* Brighter Bites */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">Program Associate</h3>
            <p className="font-light text-sm mb-1">Brighter Bites — Houston, TX (Sept 2018 – Mar 2019)</p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>Managed produce bagging/distribution at multiple sites weekly.</li>
              <li>Coordinated volunteers, engaged participants with nutrition education, recorded family participation data.</li>
              <li>Collaborated with site contacts and families to create a fun, health-conscious environment.</li>
            </ul>
          </div>

          {/* The Parris Foundation */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">Program Tutor</h3>
            <p className="font-light text-sm mb-1">The Parris Foundation — Houston, TX (Feb 2018 – Oct 2018)</p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>Tutored individuals and small groups in TRIO Talent Search/Upward Bound programs.</li>
              <li>Helped students improve academic performance, refine study skills, and prepare for exams.</li>
              <li>Chaperoned College Day trips, providing students with exposure to various universities.</li>
            </ul>
          </div>

          {/* UT Health */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">Research Assistant</h3>
            <p className="font-light text-sm mb-1">UT Health — Houston, TX (Nov 2008 – Sept 2014)</p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>Supported research for grants through data collection, evaluation, and interpretation.</li>
              <li>Served as a bilingual paraprofessional in HISD Pre-K to boost literacy for Dual Language Learners (DLL).</li>
              <li>Scheduled/performed observations and child assessments, contributing to publishable research.</li>
              <li>Created and managed Excel/databases; performed live/written translations for faculty/staff.</li>
              <li>Trained new data collectors and led fieldwork data collection teams.</li>
            </ul>
          </div>

          {/* Language & Culture Center @ University of Houston */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-300 mb-2">Program Assistant</h3>
            <p className="font-light text-sm mb-1">Language & Culture Center @ University of Houston — Houston, TX (Jan 2005 – Sept 2006)</p>
            <ul className="list-disc list-inside text-lg mb-4">
              <li>Administered and graded assignments in the Computer Assisted Language Lab (CALL).</li>
              <li>Tutored lower-level students in conversational English.</li>
              <li>Processed tuition payments, managed mail, and assisted prospective international students.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
