const Company = ({ setOpenModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3d3d3d] p-8 rounded-2xl shadow-lg max-w-3xl w-full relative overflow-y-auto max-h-[90vh]">
        <button onClick={() => setOpenModal(null)} className="absolute top-4 right-4 text-white text-2xl hover:text-[#e99b63]">&times;</button>
        <h2 className="text-3xl font-semibold mb-6 text-[#e99b63] text-center">Professional Experience</h2>
        <div className="text-gray-300 text-lg leading-relaxed space-y-4">
          <p><span className="font-bold">OYO (Oravel Stays Limited)</span> – Software Engineer Intern</p>
          <p><span className="font-medium">Oct 2024 – Jul 2025</span></p>
          <ul className="list-disc list-inside ml-5 space-y-2">
            <li>Developed dynamic widgets including Newsletter Subscription, Deal Cards, and App Install Nudge using React, Redux, and Emotion.js to enhance user engagement.</li>
            <li>Worked on migration tasks and theming for scalable, consistent UI across multiple platforms.</li>
            <li>Resolved critical bugs such as query parameter retention, ensuring seamless navigation and booking flows.</li>
            <li>Improved Core Web Vitals (CLS) by adding layout placeholders and leveraging prefetch & preload for faster rendering.</li>
            <li>Integrated Google Analytics into widgets, enabling data-driven insights and optimization of marketing campaigns.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Company;
