import react from "../assets/images/react.png";
import nextjs from "../assets/images/nextjs.png";
import tailwindcss from "../assets/images/tailwindcss.png";
import typescript from "../assets/images/typescript.png";
import javascript from "../assets/images/javascript.png";
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import mongodb from "../assets/images/mongodb.png";
import node from "../assets/images/node.png";
import firebase from "../assets/images/firebase.png";
import jwt from "../assets/images/jwt.png";
import npm from "../assets/images/npm.png";

function CustomCard({ src, name }) {
  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center rounded-lg border border-white bg-[#0d0d0d] shadow-lg shadow-gray-800 hover:shadow-gray-700 hover:bg-black p-6`}
    >
      <img src={src} alt={name} className="h-10 w-auto" />
      <p className="text-sm">{name} </p>
    </div>
  );
}

function Skills() {
  return (
    <section className="flex flex-col px-5 mt-20 mb-10 max-w-3xl mx-auto text-sm md:text-lg xl:text-xl">
      <h1 className="text-4xl mb-10 md:mb-16 underline underline-offset-8 decoration-4 font-semibold mx-auto text-center">
        Skills
      </h1>
      <section className="grid grid-cols-3 lg:grid-cols-4 gap-10 justify-center mt-5 mx-auto">
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
