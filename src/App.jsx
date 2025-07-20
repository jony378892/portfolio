import "./App.css";
import Projects from "./components/Projects";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./components/RootLayout";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<RootLayout />} />
        <Route path="projects/:id" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
