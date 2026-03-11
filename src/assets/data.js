import demo1 from "../assets/demo/Screenshot From 2025-07-18 16-37-06.png";
import demo2 from "../assets/demo/Screenshot From 2026-03-11 22-00-33.png";
import demo3 from "../assets/demo/Screenshot From 2026-03-11 23-13-25.png";

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
    title: "HomeNest Property",
    description:
      "HomeNest is a real estate listing platform where property owners can post their available rentals or sale listings, and users can browse, search, and filter properties by location, price, or type.",
    live: "https://homenest-property.vercel.app/",
    github: "https://github.com/jony378892/homenest-client",
    technology: [
      "React",
      "tailwindCSS",
      "Typescript",
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
    demo: demo3,
    title: "Fabrico",
    description:
      "Fabrico Client is a frontend for a garments e‑commerce marketplace. It supports three roles (admin, manager, buyer), product browsing, ordering, payment flows and dashboard pages for management and administration.",
    live: "https://fabricoo.vercel.app/",
    github: "https://github.com/jony378892/fabrico-client",
    technology: [
      "Nextjs",
      "Next API Route",
      "Shadcn UI",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "JWT",
    ],
    challenge:
      "Building the modern furniture store with Next.js was challenging. Creating responsive layouts with TailwindCSS, handling imageWhile building the project, one of the main challenges was managing the application state while integrating multiple API calls. Ensuring that the UI remained synchronized with backend data required careful handling of asynchronous operations, loading states, and error handling. Another challenge was designing a scalable and maintainable frontend architecture. Organizing components, utilities, and services in a structured way took several iterations and refactoring to keep the code modular and easier to extend as the project grows. scaling, and managing cart state using Context API and localStorage required extra effort. Integrating server-side rendering with MongoDB and deploying the full-stack app introduced issues like routing, environment variables, and CORS.",
    future_improvement:
      "In the future, the project can be improved by focusing on performance optimization, such as reducing unnecessary re-renders, implementing lazy loading for larger components, and optimizing API requests. Additionally, the user experience can be enhanced by adding stronger form validation, better error handling, and more responsive UI feedback to make the application more interactive and user-friendly.",
  },
];
