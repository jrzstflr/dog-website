'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { PawPrint } from 'lucide-react'

const navItems = [
  { 
    name: 'Home', 
    description: `Welcome to our Dog Rescue mission, where compassion meets action in the noble pursuit of saving and improving the lives of our canine companions. Our organization stands as a beacon of hope for dogs in need, driven by an unwavering commitment to their welfare and a deep-seated belief in the transformative power of the human-animal bond.` 
  },
  { 
    name: 'About', 
    description: `Our Dog Rescue organization is more than just a shelter; it's a movement dedicated to transforming the lives of dogs in need and promoting a world where all animals are treated with kindness and respect. Founded in 2010 by a group of passionate animal lovers, we've grown from a small, local initiative into a nationally recognized force for canine welfare.` 
  },
  { name: 'Contact Us', description: 'Get in touch with our team' },
  { 
    name: 'Donate', 
    description: `Your generous donation is the lifeline that enables us to continue our vital work in rescuing and rehabilitating dogs in need. Every contribution, no matter the size, makes a tangible difference in the lives of these vulnerable animals.` 
  },
  { 
    name: 'Story', 
    description: `In the heart of our community, countless stories unfold of rescued dogs finding their forever homes. Each tale is unique, filled with hope, love, and transformation.` 
  },
  { name: 'FAQ', description: 'Frequently Asked Questions about our dog rescue services' },
]

const testimonials = [
  { name: "John D.", text: "Adopting from this rescue was the best decision we ever made. Our new furry friend has brought so much joy to our family!" },
  { name: "Sarah M.", text: "The dedication of the staff is truly inspiring. They went above and beyond to help us find the perfect match." },
  { name: "Mike R.", text: "I've been volunteering here for a year, and the impact they make on these dogs' lives is incredible. Highly recommend supporting their cause!" },
]

const faqItems = [
  { 
    question: "How can I adopt a dog from your rescue?", 
    answer: "To adopt a dog, start by browsing our available dogs on our website. Once you find a potential match, fill out our adoption application form. Our team will review your application and contact you to schedule a meet-and-greet with the dog." 
  },
  { 
    question: "What is included in the adoption fee?", 
    answer: "Our adoption fee covers spaying/neutering, up-to-date vaccinations, microchipping, deworming, and a basic health check. It also includes a starter pack with food samples, a collar, and an ID tag." 
  },
  { 
    question: "Do you offer fostering opportunities?", 
    answer: "Yes, we have a fostering program! Fostering is a great way to help a dog in need and see if adoption is right for you. We provide all necessary supplies and cover medical expenses for foster dogs." 
  },
  { 
    question: "How can I volunteer or get involved?", 
    answer: "We always welcome volunteers! You can help in various ways, such as walking dogs, assisting with events, or providing administrative support. Check our 'Get Involved' page for current opportunities." 
  },
  { 
    question: "What is your return policy for adopted dogs?",
    answer: "We have a commitment to our dogs for life. If for any reason you can no longer care for a dog adopted from us, we ask that you return the dog to our rescue rather than rehoming on your own."
  }
]

export default function DogRescueWebsite() {
  const [activeTab, setActiveTab] = useState('Home')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
      
      // Reset form
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">What Our Adopters Say</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-muted p-4 rounded-lg hover:shadow-md transition-shadow">
                        <p className="italic mb-2">&ldquo;{testimonial.text}&rdquo;</p>
                        <p className="font-semibold">- {testimonial.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Did You Know?</h3>
                  <p>Every year, millions of dogs end up in shelters. By adopting, you're not just saving one life, you're making room for another dog to be rescued. Join us in making a difference!</p>
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
                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Compassion for all animals</li>
                  <li>Commitment to excellence in animal care</li>
                  <li>Transparency in our operations</li>
                  <li>Education and community involvement</li>
                  <li>Respect for the human-animal bond</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4">Milestones</h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>2010: Founded our organization</li>
                  <li>2015: Opened our first dedicated rescue facility</li>
                  <li>2018: Launched our mobile veterinary clinic</li>
                  <li>2020: Reached 5,000 successful adoptions</li>
                  <li>2023: Expanded to three locations across the country</li>
                </ul>
              </div>
            )}

{activeTab === 'Contact Us' && (
              <div>
                <p className="mb-6">We'd love to hear from you! Whether you have questions about adoption, want to volunteer, or need to report a dog in distress, we're here to help.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                    <div className="space-y-2">
                      <p><strong>Address:</strong> 123 Rescue Road, Dogtown, CA 90210</p>
                      <p><strong>Phone:</strong> (555) 123-4567</p>
                      <p><strong>Email:</strong> info@dogrescue.org</p>
                      <p><strong>Hours:</strong> Monday-Saturday, 9am-5pm</p>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                      <div className="flex gap-4">
                        <Button variant="ghost" asChild>
                          <Link href="#">Facebook</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                          <Link href="#">Twitter</Link>
                        </Button>
                        <Button variant="ghost" asChild>
                          <Link href="#">Instagram</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          rows={4}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'FAQ' && (
              <div>
                <p className="mb-6">Here are some frequently asked questions about our dog rescue services:</p>
                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index} className="bg-muted p-4 rounded-lg hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {(activeTab === 'Donate' || activeTab === 'Story') && (
              <div className="prose prose-blue max-w-none">
                <p className="text-muted-foreground whitespace-pre-line">
                  {navItems.find(item => item.name === activeTab)?.description}
                </p>
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