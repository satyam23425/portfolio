export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-xl font-bold text-primary">
          Satyam.dev
        </h1>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#experience" className="hover:text-primary transition">Experience</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>

        <a 
          href="#contact" 
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition"
        >
          Hire Me
        </a>

      </div>
    </header>
  )
}