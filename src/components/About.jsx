function About() {
  return (
    <section
      id="about"
      className="flex flex-col gap-8 px-5 lg:px-0 mt-16 lg:mt-20 max-w-4xl xl:max-w-5xl mx-auto text-sm md:text-base leading-7"
    >
      <h1 className="text-4xl mb-10 underline underline-offset-8 decoration-4 font-semibold mx-auto text-balance">
        About Me
      </h1>
      <p className="leading-loose">
        I'm a passinate fullstack developer with a strong passion for learning
        and creating user-friendly websites and applications. I started coding a
        while ago, and since then, I've enjoyed the process of solving problems
        and seeing my ideas come to life through code.
      </p>
      <p className="leading-loose">
        I'm comfortable working with technologies like{" "}
        <span className="text-white mr-1 font-medium">
          React, Next.js, Typescript, Javascript Redux, Firebase, Node.js,
          Tailwindcss, HTML, CSS.
        </span>
        Express.js, MongoDB and Mongoose and I'm currently diving deeper into
        React to build dynamic, interactive user interfaces. I enjoy working on
        projects that allow me to improve my skills and apply new concepts, and
        I'm always eager to take on challenge that push me to grow as a
        developer.
      </p>
      <p className="leading-loose">
        Outside of coding, I love playing sports such as football, which help me
        stay active and develop teamwork skills. I also enjoy painting, as it
        gives me a creative outlet and helps me think outside the box.
      </p>
      As I continue to build my career as a web developer, I am excited to
      collaborate with others and learn from experienced professionals. I am
      always eager to take on new opportunities that will help me grow both as a
      developer and as an individual.
    </section>
  );
}

export default About;
