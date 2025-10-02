import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Company from "./components/Company";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import About from "./components/About";

export default function App() {
  const [openModal, setOpenModal] = useState(null); 
  return (
    <main className="bg-black text-white font-sans relative overflow-hidden min-h-screen">
      <img
        className="absolute top-0 right-0 opacity-40 -z-10"
        src="/gradient.png"
        alt="Gradient-img"
      />

      <Header setOpenModal={setOpenModal} />
      <Hero />

      {openModal === "company" && <Company setOpenModal={setOpenModal} />}
      {openModal === "skills" && <Skills setOpenModal={setOpenModal} />}
      {openModal === "hobbies" && <Hobbies setOpenModal={setOpenModal} />}
      {openModal === "about" && <About setOpenModal={setOpenModal} />}
    </main>
  );
}
