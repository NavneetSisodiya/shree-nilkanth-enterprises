"use client"

import { useEffect, useRef, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Award, Users, Factory, Target, Eye, CheckCircle, TrendingUp } from "lucide-react"

export default function EnhancedAboutPage() {
  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    satisfaction: 0,
  })
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "ISO 14001:2015 Environmental Management",
    "BIS Certification",
    "HDPE Pipe Standards Compliance",
  ]

  const milestones = [
    {
      year: "2003",
      event: "Company Founded",
      description: "Started with a vision to revolutionize pipe manufacturing",
    },
    {
      year: "2008",
      event: "First Major Government Contract",
      description: "Secured our first large-scale infrastructure project",
    },
    { year: "2015", event: "ISO Certification Achieved", description: "Obtained international quality certifications" },
    {
      year: "2020",
      event: "Expanded Manufacturing Facility",
      description: "Doubled production capacity with modern equipment",
    },
    { year: "2024", event: "500+ Successful Projects", description: "Milestone achievement in project completion" },
  ]

  const founder = {
    name: "Mr. Akshay Sisodiya",
    position: "Founder & Managing Director",
    image: "Founder.jpg",
    description:
      "With over 25 years of experience in the pipe manufacturing industry, Mr. Akshay founded Shree Nilkanth Enterprises with a vision to provide high-quality, sustainable piping solutions. His leadership and commitment to innovation have made the company a trusted name in the industry.",
    achievements: [
      "25+ years industry experience",
      "Pioneer in HDPE pipe technology",
      "Advocate for sustainable manufacturing",
      "Mentor to 100+ industry professionals",
    ],
  }

  const team = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Chief Technology Officer",
      image: "/placeholder.svg?height=200&width=200&text=CTO",
      expertise: "Advanced Materials & Innovation",
    },
    {
      name: "Ms. Priya Sharma",
      position: "Head of Quality Assurance",
      image: "/placeholder.svg?height=200&width=200&text=QA",
      expertise: "Quality Control & Standards",
    },
    {
      name: "Mr. Amit Patel",
      position: "Production Manager",
      image: "/placeholder.svg?height=200&width=200&text=PM",
      expertise: "Manufacturing Operations",
    },
    {
      name: "Ms. Sunita Desai",
      position: "Sales Director",
      image: "/placeholder.svg?height=200&width=200&text=SD",
      expertise: "Client Relations & Business Development",
    },
    {
      name: "Mr. Vikram Singh",
      position: "R&D Engineer",
      image: "/placeholder.svg?height=200&width=200&text=RD",
      expertise: "Product Development & Testing",
    },
    {
      name: "Ms. Meera Joshi",
      position: "Sustainability Officer",
      image: "/placeholder.svg?height=200&width=200&text=SO",
      expertise: "Environmental Compliance",
    },
  ]

  // Counter animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)

          // Animate counters
          const targets = { years: 20, clients: 500, projects: 1000, satisfaction: 99 }
          const duration = 2000
          const steps = 60
          const stepTime = duration / steps

          let currentStep = 0
          const timer = setInterval(() => {
            currentStep++
            const progress = currentStep / steps

            setCounters({
              years: Math.floor(targets.years * progress),
              clients: Math.floor(targets.clients * progress),
              projects: Math.floor(targets.projects * progress),
              satisfaction: Math.floor(targets.satisfaction * progress),
            })

            if (currentStep >= steps) {
              clearInterval(timer)
              setCounters(targets)
            }
          }, stepTime)
        }
      },
      { threshold: 0.5 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-gray-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up">About Shree Nilkanth Enterprises</h1>
            <p className="text-2xl text-green-100 animate-slide-in-left">
              Two decades of excellence in pipe manufacturing, serving industries with quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Animated Counter Section */}
      <section ref={counterRef} className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-count-up">
              <div className="bg-white bg-opacity-20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="h-12 w-12" />
              </div>
              <h3 className="text-5xl font-bold mb-2">{counters.years}+</h3>
              <p className="text-green-100 text-lg">Years of Experience</p>
            </div>

            <div className="animate-count-up">
              <div className="bg-white bg-opacity-20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-5xl font-bold mb-2">{counters.clients}+</h3>
              <p className="text-green-100 text-lg">Happy Clients</p>
            </div>

            <div className="animate-count-up">
              <div className="bg-white bg-opacity-20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-5xl font-bold mb-2">{counters.projects}+</h3>
              <p className="text-green-100 text-lg">Projects Completed</p>
            </div>

            <div className="animate-count-up">
              <div className="bg-white bg-opacity-20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-12 w-12" />
              </div>
              <h3 className="text-5xl font-bold mb-2">{counters.satisfaction}%</h3>
              <p className="text-green-100 text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2003, Shree Nilkanth Enterprises began as a small pipe manufacturing unit with a vision to
                provide high-quality piping solutions to the growing infrastructure needs of India. Over the years, we
                have evolved into a leading manufacturer of HDPE, garden, and agricultural pipes.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has enabled us to build lasting
                relationships with distributors, builders, government agencies, and farmers across the region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we operate from a state-of-the-art manufacturing facility equipped with modern machinery and
                quality control systems, ensuring that every pipe meets international standards.
              </p>
            </div>

            <div className="relative animate-slide-in-right">
              <img
                src="/placeholder.svg?height=500&width=600&text=Manufacturing+Facility"
                alt="Manufacturing Facility"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Founder</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leadership that has shaped our company's journey and success.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{founder.name}</h3>
                  <p className="text-green-600 font-semibold text-xl mb-6">{founder.position}</p>
                  <p className="text-gray-600 leading-relaxed mb-8">{founder.description}</p>

                  <div className="space-y-3">
                    {founder.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who drive our innovation and ensure exceptional quality in everything we
              do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-green-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-8">
                <Target className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To manufacture and supply high-quality, durable, and cost-effective piping solutions that meet the
                diverse needs of our customers while contributing to the development of infrastructure and agricultural
                sectors in India.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mb-8">
                <Eye className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the most trusted and preferred brand in the pipe manufacturing industry, known for innovation,
                quality, and customer satisfaction, while expanding our reach across national and international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Manufacturing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a rigorous manufacturing process to ensure the highest quality standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Raw Material Selection",
                description: "Premium quality raw materials sourced from certified suppliers.",
              },
              {
                step: "02",
                title: "Extrusion Process",
                description: "Advanced extrusion technology for precise pipe formation.",
              },
              {
                step: "03",
                title: "Quality Testing",
                description: "Comprehensive testing at every stage of production.",
              },
              {
                step: "04",
                title: "Final Inspection",
                description: "Final quality check before packaging and dispatch.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Certifications & Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is validated by various certifications and compliance with industry standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our journey of growth and excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-600"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                      <h3 className="text-2xl font-bold text-green-600 mb-3">{milestone.year}</h3>
                      <h4 className="text-xl font-semibold text-gray-800 mb-3">{milestone.event}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
