import { useState } from "react";

const Header = ({ setOpenModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = (modal) => {
    setOpenModal(modal);
    setIsMobileMenuOpen(false); 
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 fixed w-full bg-black/90 z-50">
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-light cursor-pointer"
        onClick={() => setOpenModal(null)}
      >
        Mohit
      </h1>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-12">
        <button onClick={() => openModal("company")} className="hover:text-[#e99b63]">Experience</button>
        <button onClick={() => openModal("skills")} className="hover:text-[#e99b63]">Skills</button>
        <button onClick={() => openModal("hobbies")} className="hover:text-[#e99b63]">Hobbies</button>
        <button onClick={() => openModal("about")} className="hover:text-[#e99b63]">About</button>
      </nav>

      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium hover:bg-white transition-all">
        Magic
      </button>

      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-3xl p-2"
      >
        ☰
      </button>

      {/* Mobile vertical menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 p-5 bg-black bg-opacity-90 backdrop-blur-md z-40 flex flex-col gap-6 items-center">
          <button onClick={() => openModal("company")} className="text-lg hover:text-[#e99b63]">Experience</button>
          <button onClick={() => openModal("skills")} className="text-lg hover:text-[#e99b63]">Skills</button>
          <button onClick={() => openModal("hobbies")} className="text-lg hover:text-[#e99b63]">Hobbies</button>
          <button onClick={() => openModal("about")} className="text-lg hover:text-[#e99b63]">About</button>
        </div>
      )}
    </header>
  );
};

export default Header;
