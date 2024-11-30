'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { 
    name: 'Home', 
    description: `Welcome to our Dog Rescue mission, where compassion meets action in the noble pursuit of saving and improving the lives of our canine companions. Our organization stands as a beacon of hope for dogs in need, driven by an unwavering commitment to their welfare and a deep-seated belief in the transformative power of the human-animal bond. Founded on the principles of love, respect, and responsibility, we strive to create a world where every dog has a chance at a happy, healthy life.

    At the heart of our mission is the rescue and rehabilitation of dogs from various challenging situations. Whether they're strays struggling to survive on the streets, victims of abuse or neglect, or simply in need of a new home due to changing circumstances, we're here to provide a lifeline. Our team of dedicated volunteers and professionals works tirelessly to ensure that each dog receives the care, attention, and love they deserve.

    Our rescue efforts extend beyond mere physical salvation. We believe in holistic care that addresses not just the immediate needs of the dogs but also their long-term well-being. This includes comprehensive medical care, behavioral assessment and training, and emotional support to help them overcome past traumas and prepare for their new lives. We understand that each dog is unique, with its own personality, needs, and challenges, and we tailor our approach accordingly.

    Education is another crucial aspect of our mission. We're committed to spreading awareness about responsible pet ownership, the importance of spaying and neutering, and the joys and responsibilities of adopting a rescue dog. Through community outreach programs, school visits, and online resources, we aim to foster a culture of compassion and understanding towards all animals.

    Our adoption program is the culmination of our rescue efforts. We take great care in matching dogs with their perfect forever homes, ensuring that both the dog and the adopting family are set up for a lifetime of happiness together. We provide ongoing support to our adopters, offering advice, resources, and a community of fellow dog lovers.

    Join us in our mission to make the world a better place for dogs, one rescue at a time. Whether you're looking to adopt, volunteer, donate, or simply learn more about dog welfare, you've come to the right place. Together, we can create a future where every dog knows the warmth of a loving home and the joy of a life well-lived.`
  },
  { 
    name: 'About', 
    description: `Our Dog Rescue organization is more than just a shelter; it's a movement dedicated to transforming the lives of dogs in need and promoting a world where all animals are treated with kindness and respect. Founded in 2010 by a group of passionate animal lovers, we've grown from a small, local initiative into a nationally recognized force for canine welfare.

    At the core of our organization is a team of diverse individuals united by their love for dogs. Our staff includes experienced veterinarians, professional dog trainers, animal behaviorists, and a network of dedicated volunteers. This multidisciplinary approach allows us to provide comprehensive care for every dog that comes through our doors, addressing their physical, emotional, and behavioral needs.

    Our rescue facility is designed with the comfort and well-being of our canine residents in mind. We provide spacious, clean kennels, outdoor play areas, and quiet spaces for dogs who need a calm environment. Our on-site veterinary clinic ensures that all medical needs are promptly addressed, from routine check-ups to complex surgeries.

    We believe in the power of second chances. Many of the dogs we rescue come from challenging backgrounds - abandoned, abused, or neglected. Our rehabilitation program is tailored to help these dogs overcome their past traumas and learn to trust again. Through patience, positive reinforcement training, and lots of love, we've witnessed countless transformations, with even the most traumatized dogs blossoming into loving, confident companions.

    Education and community outreach form a significant part of our mission. We regularly host workshops and seminars on responsible pet ownership, animal welfare, and the importance of adoption. Our school program, "Paws for Thought," introduces children to the concepts of animal care and empathy, nurturing the next generation of animal advocates.

    We're proud of our innovative programs that go beyond traditional rescue work. Our "Seniors for Seniors" initiative matches older dogs with senior citizens, providing companionship and purpose for both. The "Healing Paws" program partners with local hospitals and nursing homes, bringing the therapeutic benefits of canine companionship to those in need.

    Transparency and accountability are paramount in our operations. We're committed to responsible financial management, ensuring that donations are used effectively to benefit the dogs in our care. Our annual reports and financial statements are publicly available, reflecting our dedication to openness and trust.

    Looking to the future, we have ambitious goals. We're working towards expanding our facility to accommodate more dogs, launching a mobile veterinary clinic to serve underprivileged areas, and advocating for stronger animal protection laws at the local and national levels.

    Join us in our journey to create a world where every dog is valued, protected, and loved. Whether through adoption, volunteering, or supporting our cause, you can make a difference in the lives of these incredible animals. Together, we can turn the tide on animal abandonment and cruelty, one wagging tail at a time.`
  },
  { name: 'Contact Us', description: 'Get in touch with our team' },
  { 
    name: 'Donate', 
    description: `Your generous donation is the lifeline that enables us to continue our vital work in rescuing and rehabilitating dogs in need. Every contribution, no matter the size, makes a tangible difference in the lives of these vulnerable animals. When you donate to our Dog Rescue organization, you're not just giving money; you're giving hope, health, and happiness to dogs who have often known nothing but hardship.

    Your donations directly fund a wide range of essential services and programs. First and foremost, they help us cover the basic needs of our rescue dogs - nutritious food, comfortable bedding, and necessary medical care. Many of the dogs we rescue require extensive veterinary treatment, from vaccinations and spay/neuter surgeries to more complex procedures for injuries or chronic conditions. Your support ensures that we can provide this care without hesitation, giving every dog the chance to heal and thrive.

    Beyond immediate care, your donations support our rehabilitation programs. This includes behavioral training for dogs with special needs, enrichment activities to keep our canine residents mentally and physically stimulated, and specialized care for senior or disabled dogs. We believe that every dog, regardless of their past or current challenges, deserves the opportunity to become a beloved pet.

    Your contributions also fuel our education and outreach initiatives. By funding our community programs, you're helping to spread awareness about responsible pet ownership, the importance of adoption, and animal welfare issues. This proactive approach is crucial in preventing future cases of abandonment and neglect, creating lasting change in how society views and treats animals.

    We offer various ways to donate, catering to different preferences and capacities:

    1. One-time donations: Perfect for those who want to make an immediate impact.
    2. Monthly giving: Join our "Faithful Friends" program with a recurring monthly donation, providing us with sustainable support.
    3. In-kind donations: We always welcome donations of food, toys, bedding, and other essential supplies.
    4. Legacy giving: Consider including our organization in your will or estate planning, ensuring your love for animals lives on.
    5. Corporate sponsorship: For businesses looking to make a significant impact and demonstrate their commitment to animal welfare.

    Every donation is tax-deductible, and we provide receipts for your records. We're committed to transparency in our financial operations, and we regularly publish reports detailing how donations are used.

    Remember, when you donate to our Dog Rescue, you're not just helping the dogs currently in our care. You're contributing to a larger mission of creating a world where all dogs are valued and protected. Your generosity ripples out, touching not only the lives of rescued dogs but also the families who adopt them, the communities we serve, and the broader fight for animal welfare.

    We deeply appreciate your support and promise to use your gift wisely and effectively. Together, we can continue to save lives, one paw at a time. Thank you for being a crucial part of our rescue family and for choosing to make a difference in the lives of dogs in need.`
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
    answer: "To adopt a dog, start by browsing our available dogs on our website. Once you find a potential match, fill out our adoption application form. Our team will review your application and contact you to schedule a meet-and-greet with the dog. If it's a good fit, we'll proceed with the adoption process, which includes a home check and adoption fee." 
  },
  { 
    question: "What is included in the adoption fee?", 
    answer: "Our adoption fee covers spaying/neutering, up-to-date vaccinations, microchipping, deworming, and a basic health check. It also includes a starter pack with food samples, a collar, and an ID tag." 
  },
  { 
    question: "Do you offer fostering opportunities?", 
    answer: "Yes, we have a fostering program! Fostering is a great way to help a dog in need and see if adoption is right for you. We provide all necessary supplies and cover medical expenses for foster dogs. Contact us for more information on becoming a foster parent." 
  },
  { 
    question: "How can I volunteer or get involved?", 
    answer: "We always welcome volunteers! You can help in various ways, such as walking dogs, assisting with events, or providing administrative support. Check our 'Get Involved' page for current volunteer opportunities and an application form." 
  },
  
  { 
    question: "What is your return policy for adopted dogs?",
    answer: "We have a commitment to our dogs for life. If for any reason you can no longer care for a dog adopted from us, we ask that you return the dog to our rescue rather than rehoming on your own. We'll work with you to find the best solution for both you and the dog."
  }
]

export default function DogRescueWebsite() {
  const [activeTab, setActiveTab] = useState('Home')
  const [hoveredTab, setHoveredTab] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={{backgroundImage: "url('https://img.freepik.com/free-vector/frame-with-dogs-white-background_53876-99295.jpg?size=626&ext=jpg')"}}>
      <div className="bg-white bg-opacity-90 min-h-screen">
        <nav className="bg-blue-600 p-4 sticky top-0 z-50">
          <ul className="flex flex-wrap justify-center gap-4">
            {navItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  className={`px-4 py-2 rounded-full text-white font-semibold transition-colors ${
                    activeTab === item.name
                      ? 'bg-blue-800 shadow-md'
                      : 'bg-blue-500 hover:bg-blue-700 focus:bg-blue-700'
                  }`}
                  onClick={() => setActiveTab(item.name)}
                  onMouseEnter={() => setHoveredTab(item.name)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="container mx-auto p-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-4 text-blue-600">{activeTab}</h1>
            {activeTab === 'Home' && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Giving Every Dog a Second Chance</h2>
                <p className="mb-4">We rescue, rehabilitate, and rehome dogs in need. Our mission is to create a world where every dog has a loving forever home.</p>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Our Services</h3>
                  <ul className="list-disc list-inside">
                    <li>Dog Rescue and Rehabilitation</li>
                    <li>Adoption Services</li>
                    <li>Foster Care Program</li>
                    <li>Community Education</li>
                    <li>Veterinary Care for Rescued Dogs</li>
                  </ul>
                </div>
                <div className="flex gap-4 mb-6">
                  <Link href="#" onClick={() => setActiveTab('Contact Us')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Contact Us</Link>
                  <Link href="#" onClick={() => setActiveTab('Donate')} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">Donate Now</Link>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">What Our Adopters Say</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-gray-100 p-4 rounded hover:shadow-md transition-shadow">
                        <p className="italic mb-2">"{testimonial.text}"</p>
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
                  <div className="bg-gray-100 p-4 rounded hover:shadow-md transition-shadow">
                    <Image
                      src="/Dog1.jpg" // Ensure Dog1.jpg is in the public folder
                      alt="Team Member 1"
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-2"
                    />
                    <h3 className="text-lg font-semibold text-center">John Doe</h3>
                    <p className="text-center">Founder & Director</p>
                   </div>
                   <div className="bg-gray-100 p-4 rounded hover:shadow-md transition-shadow">
                    <Image
                      src="/Dog2.jpg"
                      alt="Team Member 2"
                      width={150}
                      height={150}
                      className="rounded-full mx-auto mb-2"
                    />
                    <h3 className="text-lg font-semibold text-center">Jane Smith</h3>
                    <p className="text-center">Operations Manager</p>
                  </div>
                  <div className="bg-gray-100 p-4 rounded hover:shadow-md transition-shadow">
                  <Image
                    src="/Dog3.jpg"
                    alt="Team Member 3"
                    width={150}
                    height={150}
                     className="rounded-full mx-auto mb-2"
                     />
                    <h3 className="text-lg font-semibold text-center">Alice Brown</h3>
                    <p className="text-center">Volunteer Coordinator</p>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <ul className="list-disc list-inside mb-6">
                  <li>Compassion for all animals</li>
                  <li>Commitment to excellence in animal care</li>
                  <li>Transparency in our operations</li>
                  <li>Education and community involvement</li>
                  <li>Respect for the human-animal bond</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4">Milestones</h2>
                <ul className="list-disc list-inside">
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
                    <p><strong>Address:</strong> 123 Rescue Road, Dogtown, CA 90210</p>
                    <p><strong>Phone:</strong> (555) 123-4567</p>
                    <p><strong>Email:</strong> info@dogrescue.org</p>
                    <p><strong>Hours:</strong> Monday-Saturday, 9am-5pm</p>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                      <div className="flex gap-4">
                        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">Facebook</a>
                        <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">Twitter</a>
                        <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">Instagram</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          rows={4}
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        ></textarea>
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline transition-colors">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'FAQ' && (
              <div>
                <p className="mb-6">Here are some frequently asked questions about our dog rescue services:</p>
                {faqItems.map((item, index) => (
                  <div key={index} className="mb-6 hover:shadow-md transition-shadow p-4 rounded">
                    <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </div>
            )}
            {(activeTab === 'Donate' || activeTab === 'Story') && (
              <p className="text-gray-700 whitespace-pre-line">{navItems.find(item => item.name === activeTab)?.description}</p>
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
        transition={{ type: 'spring', damping: 3, stiffness: 50, restDelta: 0.001 }}
      >
        <div className="w-8 h-8 bg-contain bg-no-repeat" style={{backgroundImage: "url('https://img.freepik.com/free-vector/cute-dog-barking-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3671.jpg?w=740&t=st=1684997401~exp=1684998001~hmac=7b4f3f9e9f5e0c5d9b5f5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e')"}}></div>
      </motion.div>
    </div>
  )
}