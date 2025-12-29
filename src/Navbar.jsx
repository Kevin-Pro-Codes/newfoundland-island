import { useState } from 'react'
import {
  FaHome,
  FaInfoCircle,
  FaBuilding,
  FaTools,
  FaChartBar,
  FaPhone,
  FaGlobeAmericas,
  FaSignInAlt,
  FaBars,
  FaTimes,
  FaCanadianMapleLeaf
} from 'react-icons/fa'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home', icon: <FaHome /> },
    { name: 'About', href: '#about', icon: <FaInfoCircle /> },
    { name: 'Departments', href: '#departments', icon: <FaBuilding /> },
    { name: 'Services', href: '#services', icon: <FaTools /> },
    { name: 'Data', href: '#data', icon: <FaChartBar /> },
    { name: 'Contact', href: '#contact', icon: <FaPhone /> },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="w-full px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl"><FaCanadianMapleLeaf /></span>
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900">Newfoundland Island</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200"
              >
                <span className="mr-2">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-3 py-1.5 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors flex items-center">
              <FaGlobeAmericas className="mr-2" />
              Français
            </button>
          
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
            <div className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                </a>
              ))}
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 flex items-center justify-center">
                <FaGlobeAmericas className="mr-2" />
                Français
              </button>
              <button className="flex-1 py-2 bg-gradient-to-r from-blue-700 to-cyan-600 text-white rounded-lg font-medium flex items-center justify-center">
                <FaSignInAlt className="mr-2" />
                Portal Login
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

