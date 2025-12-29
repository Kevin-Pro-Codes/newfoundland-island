import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import DepartmentsSection from './sections/DepartmentSection'
import ServicesSection from './sections/ServiceSection'
import DataSection from './sections/DataSection'
import ContactSection from './sections/ContactSection'

function App() {
  const [visitCount, setVisitCount] = useState(() => {
    const saved = localStorage.getItem('newfoundlandVisitCount')
    return saved ? parseInt(saved) : Math.floor(Math.random() * 10000) + 5000
  })

  useEffect(() => {
    const now = Date.now()
    const lastVisit = localStorage.getItem('lastVisitTime')
    const visitInterval = 30 * 60 * 1000

    if (!lastVisit || (now - parseInt(lastVisit)) > visitInterval) {
      const newCount = visitCount + 1
      setVisitCount(newCount)
      localStorage.setItem('newfoundlandVisitCount', newCount.toString())
      localStorage.setItem('lastVisitTime', now.toString())
    }

    const interval = setInterval(() => {
      setVisitCount(prev => {
        if (Math.random() > 0.7) {
          const updated = prev + Math.floor(Math.random() * 3) + 1
          localStorage.setItem('newfoundlandVisitCount', updated.toString())
          return updated
        }
        return prev
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 overflow-x-hidden">
      <Navbar />
      
      <div className="pt-16">
        <main className="w-full">
          <HeroSection />
          <AboutSection />
          <DepartmentsSection />
          <ServicesSection />
          <DataSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App