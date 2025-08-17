import { Link } from "react-router";
import { projectsData } from "../assets/data";

function Projects() {
  return (
    <section
      id="projects"
      className="px-4 md:px-5 lg:px-0 mt-20  max-w-4xl xl:max-w-5xl"
    >
      <h1 className="text-4xl mb-16 underline underline-offset-8 decoration-4 font-semibold mx-auto text-center">
        Projects
      </h1>
      <section className="grid grid-cols-1 gap-x-5 lg:gap-x-10 gap-y-10 text-center pb-10">
        {projectsData.map((project) => {
          return (
            <div
              className="flex flex-col md:flex-row gap-5 border border-white/20 rounded-2xl overflow-hidden p-4"
              key={project.id}
            >
              <img
                src={project.demo}
                alt={project.title}
                className="w-full md:w-1/2 object-cover rounded-xl"
              />

              <div className="md:w-1/2 my-3 flex flex-col justify-between">
                <Link to={`/projects/${project.id}`}>
                  {" "}
                  <h3 className="text-left font-semibold text-xl lg:text-2xl mb-5 hover:underline underline-offset-4 line-clamp-1">
                    {project.title}
                  </h3>
                </Link>

                <p className="text-left text-white/80 line-clamp-3 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.technology.map((tech, index) => {
                    return (
                      <div
                        className="border border-white/20 rounded-md px-5 py-1 text-sm"
                        key={index}
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
                <Link to={`/projects/${project.id}`}>
                  <button className="w-full py-2 text-sm text-white border border-white/30 rounded-lg mt-5 hover:bg-primary hover:text-black hover:font-semibold cursor-pointer">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default Projects;
