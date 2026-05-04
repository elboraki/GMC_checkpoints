export const metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch with me",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Get In Touch
      </h1>
      <p className="text-gray-400 mb-12 text-lg">
        Have a question or want to work together? Feel free to reach out!
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <p className="text-white">younes.elboraki@gmail.com</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-white">Your City, Country</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Availability</p>
                <p className="text-green-400">Open to opportunities</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Social Links</h2>
            <div className="space-y-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                GitHub Profile
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                LinkedIn Profile
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors">
                Twitter Profile
              </a>
            </div>
          </div>
        </div>

        <form className="bg-gray-900 rounded-lg p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
