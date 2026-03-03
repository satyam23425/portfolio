export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm <span className="text-primary">Satyam Pandit</span>
        </h1>

        <h2 className="mt-4 text-2xl text-muted-foreground">
          Full Stack Developer
        </h2>

        <p className="mt-6 text-lg text-muted-foreground">
          I build scalable backend systems and modern frontend applications using React, Node.js & MongoDB.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a href="#projects" className="px-6 py-3 bg-primary text-white rounded-lg">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-border rounded-lg">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};