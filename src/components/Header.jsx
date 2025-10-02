
const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px-20"> 
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
                Mohit
            </h1>

            {/*Navigation Bar */}
            
            <nav className="hidden md:flex items-center gap-12">
                <a className="text-base tracking-wider transition-colors hover:text" href="#">
                    Company
                </a>
                <a className="text-base tracking-wider transition-colors hover:text" href="#">
                    Features
                </a>
                <a className="text-base tracking-wider transition-colors hover:text" href="#">
                    Resources
                </a>
                <a className="text-base tracking-wider transition-colors hover:text" href="#">
                    Docs
                </a>
            </nav>

            <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
                Sign In
            </button>
        </header>
    );
}

export default Header;
