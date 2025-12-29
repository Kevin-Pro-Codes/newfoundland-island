import { FaMountain, FaChevronDown, FaChevronRight } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920')] bg-cover bg-[center_25%] opacity-20"></div>
      <div className="relative">
        <div className="px-4 sm:px-6 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span><FaMountain /></span>
              <span className="text-sm">Province of Newfoundland and Labrador</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Newfoundland</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Canada's easternmost province, where rugged coastlines meet vibrant communities.
              Discover our rich heritage, natural beauty, and forward-looking governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                Explore Newfoundland <FaChevronRight className="ml-2" />
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-black px-6 py-3 rounded-lg font-bold border-2 border-white/30 hover:bg-white/30 transition-all duration-300">
                Government Services
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaChevronDown className="text-2xl" />
      </div>
    </section>
  )
}