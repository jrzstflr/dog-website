'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
    description: `In the heart of a bustling barangay in the Philippines, where the scent of sampaguita flowers mingles with the aroma of sizzling street food, an ordinary day was about to become extraordinary. It was here, amidst the vibrant tapestry of Filipino life, that a heroic tale of canine rescue would unfold – a story that would touch hearts and remind us of the unbreakable bond between humans and their faithful companions.

Our protagonist is Aling Maria, a kind-hearted widow known in her community for her love of animals, especially the street dogs she often fed. Among these dogs was a scruffy, medium-sized Aspin (short for Asong Pinoy, or native Filipino dog) she had named Bantay. With his alert ears, intelligent eyes, and a coat the color of golden sand, Bantay was a typical example of this resilient breed, beloved across the Philippines for their loyalty and adaptability.

Bantay had been a fixture in the neighborhood for years, sleeping under the awning of Aling Maria's small sari-sari store by night and roaming the streets by day. Though he wasn't officially her pet, the bond between Aling Maria and Bantay was evident to all who saw them together. She would save scraps from her modest meals for him, and he, in turn, would guard her store with a vigilance that deterred even the wiliest of potential thieves.

On this fateful day, as the afternoon sun beat down on the corrugated tin roofs of the barangay, Aling Maria was startled by a commotion outside. The air was filled with panicked shouts and the acrid smell of smoke. To her horror, she realized that a fire had broken out in one of the nearby houses, its flames already licking hungrily at the neighboring structures.

As people rushed to evacuate, grabbing whatever possessions they could, Aling Maria's first thought was of Bantay. She had last seen him napping in the narrow alley beside her store, his usual spot during the heat of the day. But now, with smoke billowing and flames spreading rapidly, she couldn't spot him anywhere.

Without hesitation, Aling Maria pushed against the tide of fleeing neighbors, her heart pounding with fear – not for herself, but for the loyal Aspin who had been her constant companion through years of loneliness. The heat was intense, the smoke thickening with each passing second, but she pressed on, calling Bantay's name over the crackling of the fire and the shouts of the gathering crowd.

As she neared her store, now perilously close to the flames, she heard a faint whimper. There, trapped behind a fallen beam, was Bantay. The loyal dog had tried to run to safety but had become pinned, his hind leg caught beneath the heavy wood. His eyes, usually so bright and alert, were wide with fear, pleading for help.

Aling Maria didn't hesitate. Despite the danger, despite the flames that were now licking at the edges of her own store, she rushed to Bantay's side. The heat was unbearable, the smoke making it hard to breathe, but she knew she couldn't leave him behind. With strength born of desperation and love, she heaved at the beam, her muscles straining, her lungs burning.

For a moment, it seemed hopeless. The beam was too heavy, the fire too close. But then, as if sensing her struggle, several of her neighbors appeared through the smoke. Together, they lifted the beam, freeing Bantay from his trap. Aling Maria scooped the whimpering dog into her arms, holding him close as they all ran to safety.

As they emerged from the smoke, gasping for air, the gathered crowd cheered. Bantay, though injured and frightened, was alive, thanks to Aling Maria's unwavering devotion and the community's spirit of bayanihan – the Filipino value of communal unity and cooperation.

In the days that followed, as the community began the difficult task of rebuilding, Bantay's rescue became a symbol of hope and resilience. The local veterinarian treated his injuries free of charge, moved by the story of Aling Maria's bravery. Neighbors who had lost their homes found comfort in visiting Bantay as he recovered, his wagging tail and gentle demeanor a reminder of the joy that persists even in the darkest times.

For Aling Maria, the fire had taken her store and most of her possessions, but it had given her something far more valuable – a deepened appreciation for the unconditional love of a dog and the strength of a community united in compassion. She officially adopted Bantay, and together they became a living testament to the special bond between Filipinos and their beloved Aspins.

The story of Aling Maria and Bantay spread beyond the barangay, touching hearts across the Philippines. It sparked conversations about the value of native dogs, often overlooked in favor of purebreds, and the importance of animal welfare. Local animal rescue organizations saw an increase in adoptions of Aspins, with many families inspired by Bantay's loyalty and Aling Maria's courage.

In time, with the help of donations from those moved by their story, Aling Maria was able to rebuild her store. Bantay, now with a shiny new collar and a permanent home, could often be seen lounging contentedly in the doorway, keeping watch as always. Visitors would come from far and wide, not just to buy from the store, but to meet the heroic duo and hear their tale firsthand.

As the years passed, Aling Maria and Bantay's story became legend in the barangay, a cherished reminder of the extraordinary depths of the human-canine bond. It stood as a powerful testament to the resilience of the Filipino spirit, the loyalty of man's best friend, and the transformative power of compassion in the face of adversity.

Their tale serves as an inspiration, reminding us all that in the most challenging moments, the love between a person and their dog can overcome any obstacle, illuminate the darkest days, and reveal the very best of our shared humanity. In the end, it's not the grandest gestures but the simplest acts of love – like an old woman rushing into a burning building to save a street dog – that truly change the world, one heart at a time.` 
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

function DogRescueWebsite() {
  const [activeTab, setActiveTab] = useState('Home')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [isSubmitting, setIsSubmitting] = useState(false)

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
      
      console.log("Message sent! We'll get back to you as soon as possible.")
      
      // Reset form
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error("There was a problem sending your message. Please try again.")
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
                  <p>Every year, millions of dogs end up in shelters. By adopting, you are not just saving one life, you are making room for another dog to be rescued. Join us in making a difference!</p>
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
                <p className="mb-6">We'd love to hear from you! Whether you have questions about adoption, want to volunteer, or need to report a dog in distress, we are here to help.</p>
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

export default DogRescueWebsite;

