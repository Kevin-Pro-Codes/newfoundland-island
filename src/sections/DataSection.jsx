import { FaDatabase } from 'react-icons/fa'

export default function DataSection() {
  return (
    <section id="data" className="py-16 bg-gradient-to-r from-blue-900 to-cyan-800 text-white">
      <div className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open <span className="text-cyan-300">Government</span>
            </h2>
            <p className="text-lg text-blue-200">
              Transparency and accountability are core to our governance. Explore public data, budgets, and performance metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-3xl font-bold mb-1">$9.4B</div>
              <div className="text-xs text-blue-200">Annual Budget</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-3xl font-bold mb-1">92%</div>
              <div className="text-xs text-blue-200">Service Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-xs text-blue-200">Emergency Access</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-3xl font-bold mb-1">100+</div>
              <div className="text-xs text-blue-200">Open Datasets</div>
            </div>
          </div>

          <div className="text-center">
            <button className="inline-flex items-center bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:shadow-xl transition-all duration-300">
              <FaDatabase className="mr-2" />
              Explore Public Data Portal
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}