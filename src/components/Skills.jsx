const Skills = ({ setOpenModal }) => {
  const skillCategories = [
    { title: "Languages", items: ["C/C++", "JavaScript", "HTML/CSS", "SQL"] },
    { title: "Frameworks & Libraries", items: ["React", "Redux"] },
    { title: "Tools & Infra", items: ["Git/GitHub", "Postman", "AWS S3", "Nginx", "CDN (Akamai)", "Grafana", "Datadog"] }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-r from-[#2c2c2c] to-[#3d3d3d] p-8 rounded-2xl shadow-lg max-w-3xl w-full relative overflow-y-auto max-h-[90vh]">
        <button onClick={() => setOpenModal(null)} className="absolute top-4 right-4 text-white text-2xl hover:text-[#e99b63]">&times;</button>
        <h2 className="text-3xl font-semibold mb-6 text-[#e99b63] text-center">Technical Skills</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-black/50 p-4 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <ul className="list-disc list-inside text-gray-300">
                {category.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
