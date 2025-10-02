"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Heart, PawPrint, Users, HomeIcon, Mail, Phone, MapPin, Menu, X } from "lucide-react"

const navItems = [
  {
    name: "Home",
    description: `Welcome to our Dog Rescue mission, where compassion meets action in the noble pursuit of saving and improving the lives of our canine companions. Our organization stands as a beacon of hope for dogs in need, driven by an unwavering commitment to their welfare and a deep-seated belief in the transformative power of the human-animal bond.`,
  },
  {
    name: "About",
    description: `Our Dog Rescue organization is more than just a shelter; it's a movement dedicated to transforming the lives of dogs in need and promoting a world where all animals are treated with kindness and respect. Founded in 2010 by a group of passionate animal lovers, we've grown from a small, local initiative into a nationally recognized force for canine welfare.`,
  },
  { name: "Contact Us", description: "Get in touch with our team" },
  {
    name: "Donate",
    description: `Your generous donation is the lifeline that enables us to continue our vital work in rescuing and rehabilitating dogs in need. Every contribution, no matter the size, makes a tangible difference in the lives of these vulnerable animals.`,
  },
  {
    name: "Story",
    description: `In the heart of a bustling barangay in the Philippines, where the scent of sampaguita flowers mingles with the aroma of sizzling street food, an ordinary day was about to become extraordinary. It was here, amidst the vibrant tapestry of Filipino life, that a heroic tale of canine rescue would unfold...`,
  },
  { name: "FAQ", description: "Frequently Asked Questions about our dog rescue services" },
]

const stats = [
  { number: "500+", label: "Dogs Rescued", icon: PawPrint },
  { number: "350+", label: "Successful Adoptions", icon: Heart },
  { number: "100+", label: "Active Volunteers", icon: Users },
  { number: "15", label: "Years of Service", icon: HomeIcon },
]

const faqs = [
  {
    question: "How can I adopt a dog?",
    answer:
      "Visit our shelter, fill out an adoption application, meet our dogs, and complete a home visit. Our team will guide you through every step.",
  },
  {
    question: "What is the adoption fee?",
    answer:
      "Adoption fees range from $100-$300 depending on the dog's age and medical needs. This covers vaccinations, spaying/neutering, and initial medical care.",
  },
  {
    question: "Can I volunteer?",
    answer:
      "We welcome volunteers for dog walking, socialization, events, and administrative tasks. Contact us to learn more about opportunities.",
  },
  {
    question: "Do you accept dog surrenders?",
    answer:
      "Yes, we accept surrenders when space permits. Please contact us to discuss your situation and explore all available options.",
  },
]

function DogRescueWebsite() {
  const [activeTab, setActiveTab] = useState("Home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <PawPrint className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Paws & Hearts</span>
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <motion.li key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={activeTab === item.name ? "default" : "ghost"}
                    className="font-medium"
                    onClick={() => setActiveTab(item.name)}
                  >
                    {item.name}
                  </Button>
                </motion.li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pb-4"
              >
                <ul className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Button
                        variant={activeTab === item.name ? "default" : "ghost"}
                        className="w-full justify-start font-medium"
                        onClick={() => {
                          setActiveTab(item.name)
                          setMobileMenuOpen(false)
                        }}
                      >
                        {item.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "Home" && (
              <div className="space-y-12 md:space-y-16">
                {/* Hero Section */}
                <section className="hero-gradient rounded-3xl p-8 md:p-16 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
                      Giving Every Dog a <span className="text-primary">Second Chance</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                      {navItems.find((item) => item.name === "Home")?.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="text-lg px-8" onClick={() => setActiveTab("Contact Us")}>
                        <Heart className="w-5 h-5 mr-2" />
                        Get Involved
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-8 bg-transparent"
                        onClick={() => setActiveTab("Donate")}
                      >
                        Support Our Mission
                      </Button>
                    </div>
                  </motion.div>
                </section>

                {/* Stats Section */}
                <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="card-glass p-6 md:p-8 text-center hover:shadow-2xl transition-shadow"
                    >
                      <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mx-auto mb-3" />
                      <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                      <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </section>

                {/* Services Section */}
                <section className="card-glass p-8 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { title: "Dog Rescue & Rehabilitation", desc: "Saving and healing dogs in need" },
                      { title: "Adoption Services", desc: "Finding forever homes for our rescues" },
                      { title: "Foster Care Program", desc: "Temporary homes while awaiting adoption" },
                      { title: "Community Education", desc: "Teaching responsible pet ownership" },
                      { title: "Veterinary Care", desc: "Medical treatment for all rescued dogs" },
                      { title: "Volunteer Opportunities", desc: "Join our mission to help dogs" },
                    ].map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-secondary/50 rounded-xl p-6 hover:bg-secondary transition-colors"
                      >
                        <PawPrint className="w-6 h-6 text-primary mb-3" />
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === "About" && (
              <div className="space-y-12">
                <section className="card-glass p-8 md:p-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    {navItems.find((item) => item.name === "About")?.description}
                  </p>

                  <h2 className="text-3xl font-bold mb-8 mt-12">Meet Our Team</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { name: "John Doe", role: "Founder & Director", img: "/images/Dog1.jpg" },
                      { name: "Jane Smith", role: "Operations Manager", img: "/images/Dog2.jpg" },
                      { name: "Alice Brown", role: "Volunteer Coordinator", img: "/images/Dog3.jpg" },
                    ].map((member, index) => (
                      <motion.div
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-secondary/50 rounded-2xl p-6 text-center hover:shadow-xl transition-shadow"
                      >
                        <div className="relative w-32 h-32 mx-auto mb-4">
                          <Image
                            src={member.img || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                        <p className="text-muted-foreground">{member.role}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {activeTab === "Contact Us" && (
              <div className="max-w-4xl mx-auto">
                <section className="card-glass p-8 md:p-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Have questions or want to get involved? We'd love to hear from you!
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Mail className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Email</h3>
                          <p className="text-muted-foreground">info@pawsandhearts.org</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <Phone className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Phone</h3>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold mb-1">Address</h3>
                          <p className="text-muted-foreground">
                            123 Rescue Lane
                            <br />
                            Compassion City, CA 90210
                          </p>
                        </div>
                      </div>
                    </div>

                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <Input placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <Textarea placeholder="How can we help you?" rows={4} />
                      </div>
                      <Button className="w-full" size="lg">
                        Send Message
                      </Button>
                    </form>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "Donate" && (
              <div className="max-w-4xl mx-auto">
                <section className="card-glass p-8 md:p-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h1>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    {navItems.find((item) => item.name === "Donate")?.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {[
                      { amount: "$25", impact: "Provides food for one dog for a week" },
                      { amount: "$100", impact: "Covers basic veterinary care" },
                      { amount: "$500", impact: "Rescues and rehabilitates one dog" },
                    ].map((option, index) => (
                      <motion.div
                        key={option.amount}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-secondary/50 rounded-xl p-6 text-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        <div className="text-3xl font-bold mb-2">{option.amount}</div>
                        <p className="text-sm">{option.impact}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-secondary/50 rounded-xl p-8 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Make a Custom Donation</h3>
                    <p className="text-muted-foreground mb-6">Every contribution helps us save more lives</p>
                    <Button size="lg" className="px-12">
                      <Heart className="w-5 h-5 mr-2" />
                      Donate Now
                    </Button>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "Story" && (
              <div className="max-w-4xl mx-auto">
                <section className="card-glass p-8 md:p-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                      {navItems.find((item) => item.name === "Story")?.description}
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                      Our journey began with a single rescue, but it sparked a movement that has touched hundreds of
                      lives—both canine and human. Today, we continue to grow, driven by the same passion and dedication
                      that inspired our founding.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Every dog we rescue has a story, and every adoption creates a new chapter filled with love, hope,
                      and second chances. Join us in writing these stories of transformation and compassion.
                    </p>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "FAQ" && (
              <div className="max-w-4xl mx-auto">
                <section className="card-glass p-8 md:p-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                  <p className="text-lg text-muted-foreground mb-8">
                    Find answers to common questions about our dog rescue services
                  </p>

                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="bg-secondary/50 rounded-xl overflow-hidden"
                      >
                        <button
                          className="w-full text-left p-6 font-semibold text-lg hover:bg-secondary/70 transition-colors flex justify-between items-center"
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        >
                          {faq.question}
                          <span className="text-2xl">{expandedFaq === index ? "−" : "+"}</span>
                        </button>
                        <AnimatePresence>
                          {expandedFaq === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="px-6 pb-6"
                            >
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <PawPrint className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">Paws & Hearts</span>
              </div>
              <p className="text-muted-foreground">Dedicated to rescuing and rehoming dogs in need since 2010.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button onClick={() => setActiveTab("About")} className="hover:text-primary transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("Contact Us")} className="hover:text-primary transition-colors">
                    Contact
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("Donate")} className="hover:text-primary transition-colors">
                    Donate
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveTab("FAQ")} className="hover:text-primary transition-colors">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <p className="text-muted-foreground mb-2">info@pawsandhearts.org</p>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Paws & Hearts Dog Rescue. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DogRescueWebsite
