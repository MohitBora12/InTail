const Hobbies = ({ setOpenModal }) => {
  const hobbies = [
    "Cricket 🏏",
    "Travelling 🌍",
    "Chess ♟️",
    "Problem Solving 🧩",
    "Reading Tech Blogs 📖",
    "Watching E-Sports 📷"
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3d3d3d] p-8 rounded-2xl shadow-lg max-w-2xl w-full relative overflow-y-auto max-h-[90vh]">
        <button onClick={() => setOpenModal(null)} className="absolute top-4 right-4 text-white text-2xl hover:text-[#e99b63]">&times;</button>
        <h2 className="text-3xl font-semibold mb-6 text-[#e99b63] text-center">Hobbies & Interests</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {hobbies.map((hobby, idx) => (
            <div key={idx} className="bg-black/50 p-4 rounded-xl shadow-md text-lg font-medium">
              {hobby}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
