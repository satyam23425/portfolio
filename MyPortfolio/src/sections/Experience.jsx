export const Experience = () => {
  const experienceData = [
    {
      role: "Full Stack Developer",
      company: "WanderLust – Airbnb Clone",
      duration: "2025 - Present",
      points: [
        "Built full-stack Airbnb clone using Node.js, Express, MongoDB & EJS",
        "Implemented authentication & secure authorization",
        "Designed RESTful APIs & CRUD operations",
      ],
    },
    {
      role: "Backend Developer",
      company: "Smart Irrigation System",
      duration: "2025",
      points: [
        "Developed optimized Python automation logic",
        "Integrated sensor-based water decision system",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>

        {experienceData.map((exp, index) => (
          <div key={index} className="mb-10">
            <h3 className="text-xl font-semibold">
              {exp.role} – {exp.company}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{exp.duration}</p>

            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};