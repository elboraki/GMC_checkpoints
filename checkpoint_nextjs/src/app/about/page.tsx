export const metadata = {
  title: "About | Portfolio",
  description: "Learn more about my background, skills, and experience",
};

export default function AboutPage() {
  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma", "Postman"] },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h1>
      <div className="space-y-8">
        <section className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
          <p className="text-gray-400 leading-relaxed">
            I&apos;m Younes EL BORAKI, a software engineer with a strong foundation in computer science and a love for building web applications. I specialize in creating responsive, user-friendly interfaces backed by robust server-side logic. My journey in tech started with curiosity and has evolved into a career driven by continuous learning and innovation.
          </p>
        </section>

        <section className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-lg font-medium text-blue-400 mb-3">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Education & Experience</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-blue-500 pl-4">
              <h3 className="font-medium text-white">Computer Science Degree</h3>
              <p className="text-gray-400">University Name • 2020 - 2024</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h3 className="font-medium text-white">Full-Stack Developer Internship</h3>
              <p className="text-gray-400">Company Name • Summer 2023</p>
            </div>
            <div className="border-l-2 border-blue-500 pl-4">
              <h3 className="font-medium text-white">Open Source Contributor</h3>
              <p className="text-gray-400">Various Projects • 2022 - Present</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
