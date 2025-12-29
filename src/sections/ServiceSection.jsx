import { GiFishingNet } from 'react-icons/gi'
import { 
  FaBriefcase,
  FaHospital,
  FaGraduationCap,
  FaBus,
  FaHome as FaHouse,
  FaHouseUser,
  FaLeaf,
  FaArrowRight
} from 'react-icons/fa'

export default function ServiceSection() {
  const services = [
    { name: 'Fishing Licenses', icon: <GiFishingNet />, desc: 'Commercial and recreational permits' },
    { name: 'Business Registration', icon: <FaBriefcase />, desc: 'Start and manage local businesses' },
    { name: 'Property Tax', icon: <FaHouse />, desc: 'Pay and manage property taxes' },
    { name: 'Healthcare', icon: <FaHospital />, desc: 'Public health services and records' },
    { name: 'Education', icon: <FaGraduationCap />, desc: 'Schools, colleges, and scholarships' },
    { name: 'Transportation', icon: <FaBus />, desc: 'Ferry schedules and road maintenance' },
    { name: 'Housing', icon: <FaHouseUser />, desc: 'Public housing and development' },
    { name: 'Environmental Permits', icon: <FaLeaf />, desc: 'Construction and development approvals' },
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Public <span className="text-blue-700">Services</span>
            </h2>
            <p className="text-lg text-gray-600">
              Access essential government services designed for the unique needs of our province.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {services.map((service) => (
              <div key={service.name} className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-md flex items-center justify-center mr-3">
                    <span className="text-xl">{service.icon}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm">{service.name}</h3>
                </div>
                <p className="text-gray-600 text-xs mb-3">{service.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 text-xs font-medium">Access Service</span>
                  <div className="w-5 h-5 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-blue-100">
                    <FaArrowRight className="text-blue-600 text-xs" />
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