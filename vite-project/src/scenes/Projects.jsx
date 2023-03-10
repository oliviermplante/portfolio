import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, realTitle, desc }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2l font-playfair opacity-0">{title}</p>
        <p className="text-2xl font-playfair">{realTitle}</p>
        <p className="mt-7">
          {desc}
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here's a list of my projects, past, present & future. 
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue hover:filter hover:saturate-200 transition duration-500 z-10
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <a href="https://elle-gym.vercel.app" target="_blank"><Project title="Project 1" realTitle="ELLE Gym" desc="A React-Typescript website for an online gym"/></a>
          <a href="https://facespace.vercel.app" target="_blank"><Project title="Project 2" realTitle="FaceSpace" desc="A MERN stack social media. Active project"/></a>
          {/* ROW 2 */}
          <a href="https://admindashboard-woad.vercel.app/dashboard" target="_blank"><Project title="Project 3" realTitle="Modern Admin Dashboard" desc="A complete dashboard for web admins that has everything you wish for"/></a>
          <Project title="Project 4" realTitle="Coming soon" desc="Sullivan's Bazaar (e-commerce)"/>
          <Project title="Project 5" realTitle="Coming less soon" desc="Reminisce MTL (Mobile App)" />

          {/* ROW 3 */}
          <Project title="Project 6" realTitle="Coming at some point" desc="TBD" />
          <Project title="Project 7" realTitle="Coming one day" desc="TBD" />
          <div
            className="flex justify-center text-center items-center p-10 bg-red hover:filter hover:saturate-200 transition duration-500 z-10 
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
