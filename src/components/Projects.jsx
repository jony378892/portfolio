import { Link } from "react-router";
import { projectsData } from "../assets/data";

const url = import.meta.env.URL;

function Projects() {
  return (
    <section className="h-screen mt-14">
      <h1 className="text-4xl mb-10 md:mb-16 underline underline-offset-8 decoration-4 font-semibold mx-auto text-center">
        Projects
      </h1>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 lg:gap-x-10 gap-y-10 text-center max-w-2xl lg:max-w-4xl xl:max-w-5xl md:px-10 px-5 mx-auto pb-10">
        {projectsData.map((project) => {
          return (
            <div
              className="flex flex-col gap-3 border border-white/30 rounded-xl overflow-hidden"
              key={project.id}
            >
              <img src={project.demo} alt={project.title} />
              <div className="mb-3 p-3">
                <h3 className="text-left font-semibold text-xl mb-5 hover:underline underline-offset-4 line-clamp-1">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technology.map((tech, index) => {
                    return (
                      <div
                        className="border border-white/30 rounded-md px-5 py-1 text-sm"
                        key={index}
                      >
                        {tech}
                      </div>
                    );
                  })}
                </div>
                <Link to={`${url}`}>
                  <button className="w-full py-2 text-sm text-white border border-white/30 rounded-lg mt-5 hover:bg-white hover:text-black cursor-pointer">
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
