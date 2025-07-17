import react from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import tailwindcss from "../assets/tailwindcss.png";
import typescript from "../assets/typescript.png";
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import firebase from "../assets/firebase.png";
import jwt from "../assets/jwt.png";
import npm from "../assets/npm.png";

function CustomCard({ src, name }) {
  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center rounded-lg border border-white bg-[#0d0d0d] shadow-lg shadow-gray-800 hover:shadow-gray-700 p-6`}
    >
      <img src={src} alt={name} className="h-10 w-auto" />
      <p className="text-sm">{name} </p>
    </div>
  );
}

function Skills() {
  return (
    <section className="flex flex-col px-5 mt-10 max-w-3xl xl:max-w-5xl mx-auto text-sm md:text-lg xl:text-xl">
      <h1 className="text-4xl md:text-5xl mb-16 underline underline-offset-8 decoration-4 font-semibold mx-auto text-center">
        Skills
      </h1>
      <section className="grid grid-cols-3 lg:grid-cols-4 gap-10 justify-center mt-14 mx-auto">
        <CustomCard src={react} name="react" />
        <CustomCard src={nextjs} name="nextjs" />
        <CustomCard src={typescript} name="typescript" />
        <CustomCard src={javascript} name="javascript" />
        <CustomCard src={tailwindcss} name="tailwindcss" />
        <CustomCard src={node} name="node" />
        <CustomCard src={mongodb} name="mongodb" />
        <CustomCard src={firebase} name="firebase" />
        <CustomCard src={jwt} name="jwt" />
        <CustomCard src={npm} name="npm" />
        <CustomCard src={html} name="html" />
        <CustomCard src={css} name="css" />
      </section>
    </section>
  );
}

export default Skills;
