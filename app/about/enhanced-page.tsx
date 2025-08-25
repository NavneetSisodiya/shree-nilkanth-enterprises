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

const qualityAssurance = [
  "Premium-Grade Raw Materials",
  "Rigorous Quality Checks",
  "Industry-Standard Manufacturing",
  "Customer Satisfaction Guarantee",
]

  const milestones = [
    {
      year: "2013",
      event: "A Humble Start",
      description: "Our story began with Mr. Akshay Singh Sisodiya entering the piping industry as a dedicated professional, gaining real-world experience in distribution, client servicing, and understanding the evolving needs of infrastructure and agriculture sectors.",
    },
    {
      year: "2015-2021",
      event: "Mashtering the Industry",
      description: "Over the years, Mr. Sisodiya built strong networks, collaborated with top manufacturers, and gained hands-on expertise in the latest piping technologies, quality standards, and business operations — laying the foundation for a future vision.",
    },
    { year: "2022", event: "The Spark of Entrepreneurship", description: "Encouraged by industry leaders and mentors, the idea of creating a home-grown brand that blends quality with trust took root. Backed by nearly a decade of insight, the groundwork for a new enterprise began." },
    {
      year: "2023",
      event: "Birth of Shree Nilkanth Enterprises",
      description: "Shree Nilkanth Enterprises was officially founded with the mission of delivering high-performance piping solutions under its own banner. The brand was born with the belief that quality and trust are built over time and delivered consistently.",
    },
    { year: "2024-Present", event: "Expanding Horizons", description: "Operating with strategic partnerships and modern production support, the company continues to serve a growing customer base. With a clear focus on innovation, customer satisfaction, and long-term growth, Shree Nilkanth Enterprises is preparing for its next leap — the establishment of its own full-scale manufacturing facility." },
  ]

  const founder = {
    name: "Mr. Akshay Singh Sisodiya",
    position: "Founder & Managing Director",
    image: "Founder.jpg",
    description:
      "Mr. Akshay Singh Sisodiya established the company with a vision to innovate and bring modern pipe solutions to market. With a sharp eye for quality and a passion for sustainable infrastructure, he is laying the foundation for a trusted brand in Indian manufacturing.",
    achievements: [
      "10+ years industry experience",
      "Pioneer in HDPE pipe technology",
      "Advocate for sustainable manufacturing",
      "Mentor to 10+ industry professionals",
    ],
  }

const team = [
  {
    name: "Future Expert 1",
    position: "Manufacturing Maestro (In Progress)",
    image: "/avatar3.png", 
  },
  {
    name: "Future Expert 2",
    position: "Customer Relations Star (Coming Soon)",
    image: "avatar1.png",
  },
  {
    name: "Future Expert 3",
    position: "R&D Innovator (Joining Soon)",
    image: "/avatar2.png",
  },
];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)

          // Animate counters
          const targets = { years: 10, clients: 500, projects: 1000, satisfaction: 99 }
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
      <section className="bg-gray-700 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 animate-fade-in-up text-gray-200">About Shree Nilkanth Enterprises</h1>
            <p className="text-2xl text-green-100 animate-slide-in-left">
              Two decades of excellence in pipe manufacturing, serving industries with quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Animated Counter Section */}
      <section ref={counterRef} className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-count-up">
              <div className="bg-white bg-opacity-20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory className="h-12 w-12" />
              </div>
              <h3 className="text-5xl font-bold mb-2 text-gray-100">{counters.years}+</h3>
              <p className="text-green-100 text-lg">Years of Experience</p>
            </div>

            <div className="animate-count-up">
              <div className="bg-white bg-opacity-20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-5xl font-bold mb-2 text-gray-100">{counters.clients}+</h3>
              <p className="text-green-100 text-lg">Happy Clients</p>
            </div>

            <div className="animate-count-up">
              <div className="bg-white bg-opacity-20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-5xl font-bold mb-2 text-gray-100">{counters.projects}+</h3>
              <p className="text-green-100 text-lg">Projects Completed</p>
            </div>

            <div className="animate-count-up">
              <div className="bg-white bg-opacity-20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-12 w-12" />
              </div>
              <h3 className="text-5xl font-bold mb-2 text-gray-100">{counters.satisfaction}%</h3>
              <p className="text-green-100 text-lg">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>


      {/* Company Overview */}
      <section className="py-20 bg-gray-800 ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-100 mb-8">Our Story</h2>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Founded in 2024, Shree Nilkanth Enterprises is an emerging force in pipe manufacturing. Our mission is to deliver durable, efficient, and sustainable piping solutions for infrastructure and agriculture. Built on innovation and quality, our vision is to become a trusted partner for government and private sector projects alike.

              </p>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has enabled us to build lasting
                relationships with distributors, builders, government agencies, and farmers across the region.
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                Today, we operate from a state-of-the-art manufacturing facility equipped with modern machinery and
                quality control systems, ensuring that every pipe meets international standards.
              </p>
            </div>

            <div className="relative animate-slide-in-right">
              <img
                src="aboutus.png"
                alt="Manufacturing Facility"
                className="rounded-2xl hover:shadow-xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-200 mb-6">Meet Our Founder</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visionary leadership that has shaped our company's journey and success.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl hover:shadow-xl overflow-hidden">
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

<section className="py-20 bg-gray-800">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-300 mb-6">Building Our Expert Team</h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Currently led by our founder, we are expanding our dedicated team of experts to deliver excellence.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {team.map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-105 group border border-gray-100"
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
            <p className="text-gray-600 text-sm">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
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

            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-xl transition-shadow duration-500 transform hover:scale-105">
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
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-300 mb-6">Our Manufacturing Process</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
                <h3 className="text-xl font-semibold text-gray-300 mb-4">{process.title}</h3>
                <p className="text-gray-400 leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Quality Commitment Section */}
<section className="py-20 bg-gray-800">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-300 mb-6">Quality Commitment</h2>
      <p className="text-xl text-gray-100 max-w-3xl mx-auto">
        We follow strict quality practices to ensure durability, safety, and customer trust in every product.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {qualityAssurance.map((point, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105"
        >
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Award className="h-10 w-10 text-green-600" />
          </div>
          <h3 className="font-bold text-gray-800 text-lg">{point}</h3>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Company Timeline */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in our journey of growth and excellence.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-600 "></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <div className="bg-gradient-to-br from-[#003d4d] to-[#00796b] p-8 rounded-2xl shadow-xl hover:shadow-xl transition-all duration-500 transform hover:scale-105">
                      <h3 className="text-2xl font-bold text-green-400 mb-3">{milestone.year}</h3>
                      <h4 className="text-xl font-semibold text-white mb-3">{milestone.event}</h4>
                      <p className="text-gray-200">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg "></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="py-12 bg-gradient-to-br from-[#003d4d] to-[#00796b] text-white text-center rounded-2xl ">
  <h2 className="text-3xl text-white font-bold mb-4">Let’s Build Something Great Together</h2>
  <p className="text-lg text-white mb-6">Have a project or need pipes? Get in touch today.</p>
  <a href="/contact" className="bg-white text-green-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
    Contact Us
  </a>
</section>

      </section>

      <Footer />
    </main>
  )
}
