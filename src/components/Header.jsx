const Header = () => {
    // Toggle Visibility of mobile menu

    const toggleMobileMenu = () => {
        const mobilemenu = document.getElementById('mobileMenu');

        if (mobilemenu.classList.contains('hidden')) {
            mobilemenu.classList.remove('hidden');
        }
        else {
            mobilemenu.classList.add('hidden')
        }
    }
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">Mohit</h1>

      {/*Navigation Bar */}

      <nav className="hidden md:flex items-center gap-12">
        <a
          className="text-base tracking-wider transition-colors hover:text"
          href="#"
        >
          Current Company
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text"
          href="#"
        >
          Skills 
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text"
          href="#"
        >
          Hobbies
        </a>
        <a
          className="text-base tracking-wider transition-colors hover:text"
          href="#"
        >
          About
        </a>
      </nav>

      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
        Magic
      </button>

      {/*Mobile Menu Button */}

      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill={"currentColor"}
          viewBox="0 0 24 24"
        >
          {}
          <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"></path>
        </svg>
      </button>

      {/*Mobile menu */}
      <div id='mobileMenu' className=" hidden fixed top-16 bottom-0 right-0 left-0 p-5 md-hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
        <nav className="flex flex-col gap-6 items-center">
          <a
            className="text-base tracking-wider transition-colors hover:text"
            href="#"
          >
            Current Company
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text"
            href="#"
          >
            Skills
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text"
            href="#"
          >
            Hobbies 
          </a>
          <a
            className="text-base tracking-wider transition-colors hover:text"
            href="#"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
