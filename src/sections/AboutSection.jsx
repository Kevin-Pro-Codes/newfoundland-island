import { 
  FaCheck, 
  FaChartLine,
  FaWater,
  FaMountain as FaMountains,
  FaTree,
  FaAnchor,
  FaFish,
  FaShip,
  FaCity,
  FaCampground
} from 'react-icons/fa'

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About <span className="text-blue-700">Newfoundland</span>
            </h2>
            <p className="text-lg text-gray-600">
              As Canada's youngest province, we combine rich cultural heritage with innovative governance.
              Our commitment to sustainable development, community engagement, and economic growth shapes every decision.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <FaChartLine className="mr-3" />
                  Our Vision
                </h3>
                <p className="text-gray-700 mb-4">
                  To be Canada's leading province in sustainable development, where natural beauty,
                  economic prosperity, and community well-being thrive in harmony.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {['Environmental Stewardship', 'Economic Innovation', 'Cultural Preservation', 'Community Health'].map((item) => (
                    <div key={item} className="flex items-center bg-white p-2 rounded-lg">
                      <FaCheck className="text-blue-500 mr-2" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-gradient-to-br from-slate-900 to-gray-800 text-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <FaChartLine className="mr-3" />
                  Quick Facts
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">520K+</div>
                    <div className="text-sm text-gray-300">Population</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">405K km²</div>
                    <div className="text-sm text-gray-300">Land Area</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">29K km</div>
                    <div className="text-sm text-gray-300">Coastline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">1949</div>
                    <div className="text-sm text-gray-300">Joined Canada</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl overflow-hidden shadow-lg">
              <div className="h-full p-6 text-white">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Geographic Highlights</h3>
                  <p className="text-blue-100 text-sm">Discover Newfoundland's unique landscape</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col items-center text-center p-3">
                    <FaWater className="text-xl mb-2" />
                    <h4 className="font-bold text-sm mb-1">Atlantic Ocean Access</h4>
                    <p className="text-blue-100 text-xs">Strategic location for shipping & fisheries</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-3">
                    <FaMountains className="text-xl mb-2" />
                    <h4 className="font-bold text-sm mb-1">Long Range Mountains</h4>
                    <p className="text-blue-100 text-xs">Ancient Appalachian mountain range</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-3">
                    <FaTree className="text-xl mb-2" />
                    <h4 className="font-bold text-sm mb-1">Boreal Forests</h4>
                    <p className="text-blue-100 text-xs">Vast wilderness & natural resources</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-3">
                    <FaAnchor className="text-xl mb-2" />
                    <h4 className="font-bold text-sm mb-1">Historic Ports</h4>
                    <p className="text-blue-100 text-xs">St. John's & coastal communities</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-3">
                    <FaFish className="text-xl mb-2" />
                    <h4 className="font-bold text-sm mb-1">Grand Banks Fisheries</h4>
                    <p className="text-blue-100 text-xs">World's richest fishing grounds</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-3">
                    <FaShip className="text-xl mb-2" />
                    <h4 className="font-bold text-sm mb-1">Iceberg Alley</h4>
                    <p className="text-blue-100 text-xs">Annual iceberg migration route</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-3">
                    <FaCity className="text-xl mb-2" />
                    <h4 className="font-bold text-sm mb-1">Urban Centers</h4>
                    <p className="text-blue-100 text-xs">St. John's, Corner Brook, Gander</p>
                  </div>
                  
                  <div className="flex flex-col items-center text-center p-3">
                    <FaCampground className="text-xl mb-2" />
                    <h4 className="font-bold text-sm mb-1">National Parks</h4>
                    <p className="text-blue-100 text-xs">Gros Morne, Terra Nova parks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}