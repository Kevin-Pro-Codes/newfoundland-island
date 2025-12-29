import {
  FaCanadianMapleLeaf,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaLock,
  FaFileContract,
  FaUniversalAccess,
  FaFlag
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white pt-12 pb-6">
      <div className="w-full px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-8 mb-8">
          {/* Column 1 - Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <FaCanadianMapleLeaf className="text-white text-xl" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Government of Newfoundland and Labrador</h2>
                <p className="text-gray-400 text-xs">Serving with pride since 1949</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Committed to the prosperity and well-being of all Newfoundlanders and Labradorians.
              Together, we build a stronger, more sustainable province.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-white rounded-sm flex items-center justify-center hover:bg-gray-200">
                <FaTwitter className="text-black" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-sm flex items-center justify-center hover:bg-gray-200">
                <FaFacebook className="text-black" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-sm flex items-center justify-center hover:bg-gray-200">
                <FaLinkedin className="text-black" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded-sm flex items-center justify-center hover:bg-gray-200">
                <FaYoutube className="text-black" />
              </a>
            </div>
          </div>

          {/* Columns 2-4 */}
          {[
            {
              title: 'Quick Links',
              links: ['Public Notices', 'Job Opportunities', 'Tenders & Bids', 'Legislation', 'Newsroom']
            },
            {
              title: 'Services',
              links: ['Business Support', 'Health Services', 'Education', 'Transportation', 'Housing']
            },
            {
              title: 'Resources',
              links: ['Annual Reports', 'Budget Documents', 'Statistics', 'Maps & Data', 'Archives']
            }
          ].map((column, idx) => (
            <div key={idx}>
              <h3 className="text-sm font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <p className="text-gray-400 text-xs">
                © {new Date().getFullYear()} Government of Newfoundland and Labrador. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Official website of the Province of Newfoundland and Labrador, Canada
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white text-xs flex items-center">
                <FaLock className="mr-1 text-xs" /> Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs flex items-center">
                <FaFileContract className="mr-1 text-xs" /> Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-black text-xs flex items-center">
                <FaUniversalAccess className="mr-1 text-xs" /> Accessibility
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xs flex items-center">
                <FaFlag className="mr-1 text-xs" /> Français
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}