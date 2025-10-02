const About = ({ setOpenModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3d3d3d] p-8 rounded-2xl shadow-lg max-w-3xl w-full relative overflow-y-auto max-h-[90vh]">
        <button onClick={() => setOpenModal(null)} className="absolute top-4 right-4 text-white text-2xl hover:text-[#e99b63]">&times;</button>
        <h2 className="text-3xl font-semibold mb-6 text-[#e99b63] text-center">About Me</h2>
        <div className="text-gray-300 text-lg space-y-4">
          <p>Hello! I’m <span className="text-[#e99b63] font-bold">Mohit Bora</span> from <span className="font-medium">Bageshwar, Uttarakhand</span>.</p>
          <p>I graduated in <span className="font-medium">2025 from Chandigarh University</span> with a B.Sc. in Computer Science — CGPA: 8.68/10.</p>
          <p>Contact: <a href="mailto:boramohit3@gmail.com" className="text-[#e99b63] underline">boramohit3@gmail.com</a> | +91 7417494748 | <a href="https://linkedin.com/in/mohit-bora-89805621a" target="_blank" className="text-[#e99b63] underline">LinkedIn</a> | <a href="https://github.com/MohitBora12" target="_blank" className="text-[#e99b63] underline">GitHub</a></p>
          <p>I enjoy problem solving and have solved 1300+ problems across coding platforms with a peak LeetCode rating of 1996 (top 2.54%).</p>
          <p>Check out my LeetCode profile here: <a href="https://leetcode.com/Mohit_Bora/" target="_blank" className="text-[#e99b63] underline font-semibold">Mohit_Bora</a></p>
        </div>
      </div>
    </div>
  );
};

export default About;
