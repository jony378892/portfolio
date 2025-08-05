import demo1 from "../assets/demo/Screenshot From 2025-07-18 16-37-06.png";
import demo2 from "../assets/demo/Screenshot From 2025-08-03 10-23-44.png";

export const projectsData = [
  {
    id: 1,
    demo: demo1,
    title: "Forever Clothing Store",
    description:
      "Forever Clothing is your go-to destination for stylish and affordable fashion for kids of all ages. From trendy outfits for boys and girls to adorable essentials for babies and toddlers, we offer a curated collection designed for comfort, confidence, and everyday adventures. Discover seasonal must-haves, timeless classics, and playful pieces — all in one place. Dressing your little ones has never been this fun or easy.",
    live: "https://forever-clothing-store.vercel.app/",
    github: "https://github.com/jony378892/forever-store",
    technology: [
      "React",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "React Router",
      "JWT",
    ],
    challenge:
      "Building a robust authentication system with JWT and handling user sessions securely was complex. Ensuring the UI remained responsive and intuitive across all device sizes required multiple design iterations.",
    future_improvement:
      "Integrate real-time order tracking and notifications. Add multi-language support and implement AI-powered product recommendations.",
  },
  {
    id: 2,
    demo: demo2,
    title: "The Travel Blog",
    description:
      "This is a personal travel blog web application built that designed to serve as a personal travel journal and a public-facing platform to share travel experiences, destination guides, and tips with a broader audience.",
    live: "https://thetravelblog.vercel.app/",
    github: "https://github.com/jony378892/thetravelguy",
    technology: [
      "React",
      "tailwindCSS",
      "Typescript",
      "Shadcn Ui",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "React Router",
    ],
    challenge:
      "One of the main challenges I faced during this project was integrating the frontend and backend seamlessly. Managing asynchronous data fetching and handling CORS issues required in-depth debugging and configuration. Structuring dynamic routes in React for individual blog posts and destinations also proved complex, especially when passing and rendering data correctly. Ensuring full responsiveness across devices while maintaining a clean layout took significant effort. Additionally, designing a flexible and scalable schema using Mongoose for blog content, including nested fields and relationships, required thoughtful planning and iteration. These challenges helped me strengthen my problem-solving and full-stack development skills.",
    future_improvement:
      "IThe purpose of this project is to demonstrate proficiency in full-stack web development and create a real-world, content-driven application. It serves as both a personal project and a portfolio piece, showcasing skills in frontend development, backend API design, database modeling, and UI/UX responsiveness.",
  },
  {
    id: 3,
    demo: demo1,
    title: "Forever Clothing Store",
    description:
      "Forever Clothing is your go-to destination for stylish and affordable fashion for kids of all ages. From trendy outfits for boys and girls to adorable essentials for babies and toddlers, we offer a curated collection designed for comfort, confidence, and everyday adventures. Discover seasonal must-haves, timeless classics, and playful pieces — all in one place. Dressing your little ones has never been this fun or easy.",
    live: "https://forever-clothing-store.vercel.app/",
    github: "https://github.com/jony378892/forever-store",
    technology: [
      "React",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "React Router",
      "JWT",
    ],
    challenge:
      "Implementing secure image uploads and storage, while keeping the site performant, was tricky. Handling edge cases in the checkout flow and payment integration required extensive testing.",
    future_improvement:
      "Enable guest checkout and social login options. Add support for multiple currencies and regional shipping rates.",
  },
];
