import { Link, useParams } from "react-router";
import { projectsData } from "../assets/data";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Project() {
  const { id } = useParams();
  const project = projectsData.find((p) => String(p.id) === id);

  if (!project) {
    return (
      <div className="text-center py-10 text-white">Project not found.</div>
    );
  }

  return (
    <section>
      <Navbar />
      <div className="relative min-h-screen bg-black flex items-center justify-center pt-28 pb-20 px-2">
        <div className="w-full max-w-4xl xl:max-w-5xl bg-black/60 rounded-2xl shadow-2xl p-5 lg:p-0">
          <img
            src={project.demo}
            alt={project.title}
            className="w-full rounded-xl mb-8 border border-white/10"
          />
          <div className="flex gap-5 py-5 items-center justify-center">
            <Link target="_blank" to={project.github}>
              <button className="border border-white px-10 py-2 text-white/80 rounded-md cursor-pointer hover:bg-white hover:text-black font-semibold">
                Github
              </button>
            </Link>
            <Link target="_blank" to={project.live}>
              <button className="border border-white px-10 py-2 text-white/80 rounded-md cursor-pointer hover:bg-white hover:text-black font-semibold">
                Live
              </button>
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-6 text-white">
            {project.title}
          </h1>
          <p className="mb-8 text-white/80 text-lg">{project.description}</p>
          <div className="grid grid-cols-3 mb-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-3">
                Technologies
              </h2>
              <ul className="space-y-3 list-disc pl-5">
                {project.technology.map((tech, idx) => (
                  <li key={idx} className="text-sm text-white">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-8 col-span-2">
              <h2 className="text-xl font-semibold text-white mb-3">
                Challenge
              </h2>
              <p className=" text-white/80 space-y-2">{project.challenge}</p>
              <h2 className="text-xl font-semibold text-white mb-3 mt-5">
                Future Improvement
              </h2>
              <p className=" text-white/80 space-y-2">
                {project.future_improvement}
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Project;
