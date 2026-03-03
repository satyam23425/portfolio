export const About = () => {
  const aboutData = {
    description:
      "Computer Science student and Full Stack Developer passionate about building scalable applications and solving real-world problems. Strong in DSA and backend architecture.",
    github: "https://github.com/satyam23425",
    linkedin: "https://www.linkedin.com/in/satyampandit",
    leetcode: "https://leetcode.com/u/satyampandit396/",
  };

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          {aboutData.description}
        </p>

        <div className="flex gap-6 text-primary font-medium">
          <a href={aboutData.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={aboutData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={aboutData.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </div>
    </section>
  );
};