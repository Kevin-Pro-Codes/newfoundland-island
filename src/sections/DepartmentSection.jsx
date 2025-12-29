import { GiFishingNet, GiOilPump } from 'react-icons/gi'
import { 
  FaMountain,
  FaShieldAlt,
  FaCampground,
  FaHandshake,
  FaChevronRight,
  FaPlus
} from 'react-icons/fa'

export default function DepartmentSection() {
  const departments = [
    {
      name: 'Marine & Fisheries',
      icon: <GiFishingNet />,
      description: 'Managing coastal resources and maritime activities',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Northern Development',
      icon: <FaMountain />,
      description: 'Infrastructure and community growth in northern regions',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'Public Safety',
      icon: <FaShieldAlt />,
      description: 'Emergency services and community protection',
      color: 'from-red-500 to-orange-500'
    },
    {
      name: 'Tourism & Culture',
      icon: <FaCampground />,
      description: 'Promoting Newfoundland heritage and attractions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Energy Resources',
      icon: <GiOilPump />,
      description: 'Managing oil, gas, and renewable energy sectors',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      name: 'Indigenous Affairs',
      icon: <FaHandshake />,
      description: 'Partnerships with First Nations communities',
      color: 'from-indigo-500 to-violet-500'
    },
  ]

  return (
    <section id="departments" className="py-16 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Government <span className="text-blue-700">Departments</span>
            </h2>
            <p className="text-lg text-gray-600">
              Our specialized departments work together to serve all Newfoundlanders and Labradorians
              across our diverse province.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept) => (
              <div key={dept.name} className="group">
                <div className={`bg-gradient-to-br ${dept.color} text-white p-4 rounded-lg shadow-md h-full transform transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg`}>
                  <div className="flex items-start mb-3">
                    <div className="text-2xl mr-3">{dept.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{dept.name}</h3>
                      <p className="text-white/90 text-xs">{dept.description}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs opacity-75">Learn More <FaChevronRight className="inline ml-1" /></span>
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <FaPlus className="text-xs" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}