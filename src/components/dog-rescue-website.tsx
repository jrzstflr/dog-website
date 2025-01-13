'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { PawPrint } from 'lucide-react'

const navItems = [
  { 
    name: 'Home', 
    description: `Welcome to our Dog Rescue mission, where compassion meets action in the noble pursuit of saving and improving the lives of our canine companions. Our organization stands as a beacon of hope for dogs in need, driven by an unwavering commitment to their welfare and a deep-seated belief in the transformative power of the human-animal bond.` 
  },
  { 
    name: 'About', 
    description: `Our Dog Rescue organization is more than just a shelter; it&#39;s a movement dedicated to transforming the lives of dogs in need and promoting a world where all animals are treated with kindness and respect. Founded in 2010 by a group of passionate animal lovers, we&#39;ve grown from a small, local initiative into a nationally recognized force for canine welfare.` 
  },
  { name: 'Contact Us', description: 'Get in touch with our team' },
  { 
    name: 'Donate', 
    description: `Your generous donation is the lifeline that enables us to continue our vital work in rescuing and rehabilitating dogs in need. Every contribution, no matter the size, makes a tangible difference in the lives of these vulnerable animals.` 
  },
  { 
    name: 'Story', 
    description: `In the heart of a bustling barangay in the Philippines, where the scent of sampaguita flowers mingles with the aroma of sizzling street food, an ordinary day was about to become extraordinary. It was here, amidst the vibrant tapestry of Filipino life, that a heroic tale of canine rescue would unfold...` 
  },
  { name: 'FAQ', description: 'Frequently Asked Questions about our dog rescue services' },
]

function DogRescueWebsite() {
  const [activeTab, setActiveTab] = useState('Home')
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-cover bg-center relative" 
         style={{backgroundImage: "url('/placeholder.svg?height=800&width=1200')"}}>
      <div className="bg-white bg-opacity-90 min-h-screen">
        <nav className="bg-primary p-4 sticky top-0 z-50">
          <ul className="flex flex-wrap justify-center gap-4">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={activeTab === item.name ? "secondary" : "ghost"}
                  className="font-semibold"
                  onClick={() => setActiveTab(item.name)}
                >
                  {item.name}
                </Button>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="container mx-auto p-8">
          <motion.div
            className="bg-card rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-primary">{activeTab}</h1>

            {activeTab === 'Home' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Giving Every Dog a Second Chance</h2>
                <p className="mb-4">{navItems.find(item => item.name === 'Home')?.description}</p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Our Services</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Dog Rescue and Rehabilitation</li>
                    <li>Adoption Services</li>
                    <li>Foster Care Program</li>
                    <li>Community Education</li>
                    <li>Veterinary Care for Rescued Dogs</li>
                  </ul>
                </div>
                <div className="flex gap-4 mb-6">
                  <Button onClick={() => setActiveTab('Contact Us')}>
                    Contact Us
                  </Button>
                  <Button onClick={() => setActiveTab('Donate')} variant="secondary">
                    Donate Now
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'About' && (
              <div>
                <p className="mb-6">{navItems.find(item => item.name === 'About')?.description}</p>
                <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-muted p-4 rounded-lg hover:shadow-md transition-shadow">
                    <div className="card-glass p-6">
                      <Image
                        src="/images/Dog1.jpg"
                        alt="John Doe, Founder & Director"
                        width={150}
                        height={150}
                        className="rounded-full mx-auto mb-2"
                      />
                      <h3 className="text-lg font-semibold text-center">John Doe</h3>
                      <p className="text-center">Founder & Director</p>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg hover:shadow-md transition-shadow">
                    <div className="card-glass p-6">
                      <Image
                        src="/images/Dog2.jpg"
                        alt="Jane Smith, Operations Manager"
                        width={150}
                        height={150}
                        className="rounded-full mx-auto mb-2"
                      />
                      <h3 className="text-lg font-semibold text-center">Jane Smith</h3>
                      <p className="text-center">Operations Manager</p>
                    </div>
                  </div>
                  <div className="bg-muted p-4 rounded-lg hover:shadow-md transition-shadow">
                    <div className="card-glass p-6">
                      <Image
                        src="/images/Dog3.jpg"
                        alt="Alice Brown, Volunteer Coordinator"
                        width={150}
                        height={150}
                        className="rounded-full mx-auto mb-2"
                      />
                      <h3 className="text-lg font-semibold text-center">Alice Brown</h3>
                      <p className="text-center">Volunteer Coordinator</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: cursorPosition.x - 16,
          y: cursorPosition.y - 16,
        }}
        transition={{ type: "spring", damping: 3, stiffness: 50, restDelta: 0.001 }}
      >
        <PawPrint className="w-8 h-8 text-primary" />
      </motion.div>
    </div>
  )
}

export default DogRescueWebsite
