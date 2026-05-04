import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      <div className="text-center max-w-3xl">
        <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500">
          <Image
            src="https://placehold.co/400x400/1a1a2e/4a90d9?text=YN"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Hello, I&apos;m Younes EL BORAKI
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Software Engineer
        </p>
        <p className="text-gray-300 mb-10 text-lg">
          I build modern web applications with clean code and thoughtful design. 
          Passionate about creating seamless user experiences and solving complex problems.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
            View My Work
          </a>
          <a href="/contact" className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition-colors">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
