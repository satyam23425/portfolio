export const Projects = () => {
  const projectsData = [
    {
      title: "WanderLust – Airbnb Clone",
      description: "Production-ready Airbnb clone with authentication and CRUD.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/satyam23425/WanderLust",
    },
    {
      title: "Blog App – Express",
      description: "Full-stack blog platform with authentication and CRUD posts.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/satyam23425/BlogApp_Express",
    },
    {
      title: "Mini WhatsApp Clone",
      description: "Messaging-style backend system with structured routing.",
      tech: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/satyam23425/Mini-WhatShapp",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-sm bg-muted rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};