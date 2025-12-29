import { 
  FaGlobe, 
  FaMapMarkerAlt, 
  FaChevronRight,
  FaArrowRight
} from 'react-icons/fa'
import { MdLocationOn, MdEmail, MdPhone, MdAccessTime } from 'react-icons/md'
import { RiGovernmentLine } from 'react-icons/ri'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact <span className="text-blue-700">Government</span>
            </h2>
            <p className="text-lg text-gray-600">
              Reach our government offices across Newfoundland and Labrador.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                  <RiGovernmentLine className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">St. John's Office</h3>
                  <p className="text-gray-600 text-sm">Provincial Capital</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700 text-sm">
                  <MdPhone className="text-gray-500 mr-2" />
                  <span>+1 (709) 729-1234</span>
                </div>
                <div className="flex items-center text-gray-700 text-sm">
                  <MdEmail className="text-gray-500 mr-2" />
                  <span>contact@gov.nl.ca</span>
                </div>
                <div className="flex items-start text-gray-700 text-sm">
                  <MdLocationOn className="text-gray-500 mr-2 mt-0.5" />
                  <span>Confederation Building<br/>St. John's, NL A1B 4J6</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                  <FaGlobe className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Regional Offices</h3>
                  <p className="text-gray-600 text-sm">Across the Province</p>
                </div>
              </div>
              <div className="space-y-3">
                {['Corner Brook', 'Gander', 'Happy Valley-Goose Bay', 'Labrador City'].map((city) => (
                  <div key={city} className="flex items-center justify-between p-2 bg-white rounded-md text-sm">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="text-blue-500 mr-2" />
                      <span className="font-medium">{city}</span>
                    </div>
                    <span className="text-blue-600 text-xs font-medium">View <FaChevronRight className="inline ml-1" /></span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                  <MdAccessTime className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Service Hours</h3>
                  <p className="text-gray-600 text-sm">When we're available</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-white rounded-md text-sm">
                  <span className="font-medium">Weekdays</span>
                  <span className="text-blue-600">8:30 AM - 4:30 PM</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded-md text-sm">
                  <span className="font-medium">Emergency</span>
                  <span className="text-green-600">24/7 Available</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-white rounded-md text-sm">
                  <span className="font-medium">Online Portal</span>
                  <span className="text-blue-600">Always Open</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-2 rounded-md font-bold hover:shadow-md transition-all duration-300 flex items-center justify-center">
                Emergency Contact <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}