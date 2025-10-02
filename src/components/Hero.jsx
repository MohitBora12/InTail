const Hero = () => {
  return (
    <main className="flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center min-h-screen relative px-6 lg:px-20 pt-28 lg:pt-32">

      {/* My Info Section */}
      <div className="flex-1 z-10 flex flex-col justify-center mt-0 lg:mt-0 lg:mr-10">
        <div className="relative w-[90%] sm:w-52 h-12 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-md rounded-full mb-6">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center text-sm font-medium text-white">
            Hello, I'm Mohit
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold tracking-wide mb-6
          bg-gradient-to-r from-[#e99b63] via-[#ffd87f] to-[#e99b63]
          bg-clip-text text-transparent drop-shadow-xl">
          Engineer | Problem Solver
        </h1>

        {/* Who Am I */}
        <div className="text-gray-300 text-base sm:text-lg max-w-lg mb-8 space-y-4 leading-relaxed text-justify">
          <p>
            I am Mohit Bora, a software engineer from Bageshwar, Uttarakhand.  
            Driven by curiosity, I love learning new technologies and building scalable, user-friendly solutions.
          </p>
          <p>
            My goal is to contribute to impactful projects, collaborate with innovative minds, and grow as a technologist.  
            I am always open to exploring new ideas and improving myself every day.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#1f1f1f]/80 via-[#2c2c2c]/80 to-[#1f1f1f]/80 
                        border-2 rounded-4xl border-gradient-to-r from-[#e99b63] via-[#ffd87f] to-[#e99b63] 
                        p-6 sm:p-8 max-w-md shadow-2xl hover:shadow-3xl 
                        hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
          <p className="text-gray-100 text-center text-lg sm:text-xl leading-relaxed">
            Interested in knowing more about my work and expertise? <br />
            Explore the sections above to see my <span className="font-semibold text-[#e99b63]">skills</span>, 
            <span className="font-semibold text-[#e99b63]"> experience</span>, and 
            <span className="font-semibold text-[#e99b63]"> projects</span> that define my journey in technology.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mb-10 lg:mb-0 lg:flex-1">
        <div className="relative
                        w-40 h-40 sm:w-56 sm:h-56 rounded-full
                        lg:w-96 lg:h-96 lg:rounded-3xl
                        overflow-hidden shadow-xl border-4 border-[#e99b63]
                        hover:scale-105 transition-transform duration-500">
          <img
            src="myImage.jpg"
            alt="Mohit Bora"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#e99b63]/20 rounded-full -z-10 blur-3xl"></div>
    </main>
  );
};

export default Hero;
