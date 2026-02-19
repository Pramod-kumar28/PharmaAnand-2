import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  FaClock, 
  FaMapMarkerAlt, 
  FaPills, 
  FaHandshake, 
  FaChevronDown,
  FaBullseye,
  FaEye,
  FaRocket,
  FaUsers,
  FaGem,
  FaHeart,
  FaHeartbeat,
  FaShieldAlt,
  FaHandHoldingMedical,
  FaQuoteLeft,
  FaQuoteRight
} from 'react-icons/fa'

const About = () => {
  const navigate = useNavigate()

  // Enhanced animations for About page
  useEffect(() => {
    // Counter animation
    const animateCounters = () => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        let count = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const updateCount = () => {
          if (count < target) {
            count += increment;
            counter.textContent = Math.floor(count) + '+';
            setTimeout(updateCount, 16);
          } else {
            counter.textContent = target + '+' ;
          }
        };
        
        updateCount();
      });
    };

    // Enhanced fade in on scroll with staggered delays
    const checkFadeIn = () => {
      const fadeElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
      fadeElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          setTimeout(() => {
            element.classList.add('visible');
          }, index * 100);
        }
      });
    };

    // Initialize animations
    const timer = setTimeout(() => {
      animateCounters();
      checkFadeIn();
    }, 100);

    window.addEventListener('scroll', checkFadeIn);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', checkFadeIn);
    };
  }, []);

  // Stats Section Component
  const StatsSection = () => (
    <section className="py-12 md:py-16 text-black w-full bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {[
            { count: 30, label: 'Delivery Time', icon: <FaClock /> },
            { count: 100, label: 'Cities Covered', icon: <FaMapMarkerAlt /> },
            { count: 50000, label: 'Medicines Available', icon: <FaPills /> },
            { count: 100, label: 'Pharmacy Partners', icon: <FaHandshake /> }
          ].map((stat, index) => (
            <div key={index} className="p-4 md:p-6 fade-in group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="text-blue-600 text-2xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl text-blue-800 font-bold mb-1 md:mb-2 counter" data-count={stat.count}>0</div>
              <div className="text-sm md:text-lg text-black font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  const missionPillars = [
    {
      icon: <FaBullseye />,
      title: 'Our Mission',
      description: 'To make healthcare truly accessible by delivering genuine medicines to every doorstep in just 15 to 30 minutes through advanced technology and trusted partnerships.',
    },
    {
      icon: <FaEye />,
      title: 'Our Vision',
      description: 'A world where timely access to medication is never a privilege, but a fundamental right for every individual, regardless of their location or circumstances.',
    },
    {
      icon: <FaHandshake />,
      title: 'Our Promise',
      description: 'To deliver trust, transparency, and timely care through genuine medicines, transparent pricing, and reliable service that puts patient safety first.',
    }
  ]

  const teamValues = [
    {
      icon: <FaRocket />,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology to revolutionize healthcare delivery'
    },
    {
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'Working with licensed pharmacies and healthcare professionals'
    },
    {
      icon: <FaGem />,
      title: 'Integrity',
      description: 'Maintaining highest standards of transparency and ethics'
    },
    {
      icon: <FaHeart />,
      title: 'Compassion',
      description: 'Putting patient well-being at the center of everything we do'
    }
  ]

  return (
    <div className="overflow-hidden break-words">
      {/* Enhanced Hero Section */}
      <section className="relative text-white py-12 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 min-h-[50vh] md:min-h-[60vh] overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-white/20 rounded-full"></div>
        </div>
        
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-6 h-6 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-4 h-4 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-10 right-10 w-5 h-5 bg-white/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        </div>
       
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 fade-in leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            DP Pharma
          </motion.h1>
          <div className="w-16 md:w-24 h-1 bg-blue-300 mx-auto mb-4 md:mb-6 scale-in"></div>
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6 md:mb-8 fade-in animation-delay-300 text-blue-100 leading-relaxed px-2">
            Revolutionizing healthcare delivery through innovation, trust, and accessibility
          </p>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto mt-8 md:mt-12 px-2">
            {[
              { value: '15-30 min', label: 'Delivery Promise' },
              { value: '24/7', label: 'Support' },
              { value: '100%', label: 'Genuine' },
              { value: '50+', label: 'Cities' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 fade-in text-center"
                style={{ animationDelay: `${index * 200 + 500}ms` }}
              >
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-blue-200 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 fade-in animation-delay-2000">
          <div className="animate-bounce">
            <FaChevronDown className="text-white text-xl md:text-2xl" />
          </div>
        </div>
      </section>

      {/* Founder & Story Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 p-6 md:p-8 lg:p-12 items-stretch">
              
              {/* Founder Image Column */}
              <div className="relative flex justify-center items-stretch h-full">
                <img
                  src="/CEO.jpg"
                  alt="Founder DP"
                  className="w-full max-w-md h-full object-cover object-top rounded-xl md:rounded-2xl shadow-lg transform hover:scale-105 transition duration-700"
                />
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 backdrop-blur-lg bg-white/80 px-4 py-3 md:px-5 md:py-4 rounded-lg md:rounded-xl shadow-lg border border-white/30 transform hover:scale-105 transition">
                  <p className="uppercase text-base md:text-lg font-extrabold text-blue-600 text-center leading-tight">DP</p>
                  <p className="text-xs text-gray-600 text-center leading-tight">Founder & Chairman</p>
                </div>
              </div>

              {/* Founder Story Column */}
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Our Story
                </h2>
                <p className="text-blue-600 font-semibold text-base md:text-lg">
                  Visionary Entrepreneur & Healthcare Innovator
                </p>

                {/* CEO Titles */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Founder & Chairman – DP Pharma",
                    "Founder & CEO – Levitate Technologies Pvt Ltd",
                    "Founder & CEO – DesignCareerMetrics Pvt Ltd"
                  ].map((title, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-blue-100 leading-tight"
                    >
                      {title}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div className="space-y-3 md:space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
                  <p>
                    Under the visionary leadership of <span className="font-bold text-blue-600">Mr. Durga Prasad</span>, DP Pharma was founded on the principle of 
                    <span className="font-bold"> "Healthcare for All"</span>.
                  </p>
                  <p>
                    With a background in pharmaceutical sciences and technology innovation, he is transforming healthcare accessibility through digital platforms.
                  </p>
                  <p>
                    His entrepreneurial journey spans healthcare, technology, and career platforms, impacting thousands of users across India.
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="bg-blue-50 border-l-4 border-blue-600 p-4 md:p-5 rounded-xl italic text-gray-700 shadow-sm text-sm md:text-base">
                  "We don't just deliver medicines; we deliver trust. Every prescription fulfilled is a life improved."
                </blockquote>

                {/* Core Values */}
                <div className="space-y-3 md:space-y-4">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800">Core Values</h3>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      "Healthcare as a Fundamental Right",
                      "Speed with Safety",
                      "Patient-Centric Care",
                      "Trust & Transparency"
                    ].map((text, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-2 md:p-3 rounded-lg hover:bg-blue-50 transition transform hover:translate-x-2"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                        <span className="font-medium text-sm md:text-base">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Promise Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-3 md:mb-4 fade-in leading-tight">
              Our Guiding Principles
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-500 mx-auto mb-6 md:mb-8 scale-in"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {missionPillars.map((pillar, index) => (
              <div 
                key={index} 
                className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl text-center fade-in group hover:-translate-y-2 transition-all duration-500 border border-gray-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-4 md:mb-6">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white text-xl md:text-2xl">
                      {pillar.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-3 md:mb-4 fade-in leading-tight">
                Our Approach to Healthcare
              </h2>
              <div className="w-16 md:w-20 h-1 bg-blue-500 mx-auto mb-6 md:mb-8 scale-in"></div>
            </div>
            
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
              <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                <p className="fade-in">
                  At DP Pharma, we believe that <span className="font-semibold text-blue-600">when it comes to health, every moment matters</span>. 
                  Our innovative platform was built on the conviction that timely access to medication should never be a privilege, but a fundamental right.
                </p>
                
                <p className="fade-in">
                  We empower users with <span className="font-semibold text-blue-600">real choices</span>, offering equivalent medicines with the same formula across multiple trusted brands, 
                  complete with transparent pricing. This ensures that every customer can choose confidently balancing quality, affordability, and trust.
                </p>
                
                <p className="fade-in">
                  By combining <span className="font-semibold text-blue-600">advanced technology, licensed pharmacy expertise, and intelligent logistics</span>, 
                  we are building a healthcare ecosystem that's faster, safer, and more reliable than ever before.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg md:rounded-xl p-4 md:p-6 mt-6 md:mt-8 border border-blue-200 fade-in">
                  <p className="font-semibold text-blue-700 text-center text-base md:text-lg">
                    <FaQuoteLeft className="text-blue-400 mr-2 inline" />
                    At DP Pharma, we don't just deliver medicines we deliver trust, transparency, and timely care to every home, every time.
                    <FaQuoteRight className="text-blue-400 ml-2 inline" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-3 md:mb-4 fade-in leading-tight">
              Our Values
            </h2>
            <div className="w-16 md:w-20 h-1 bg-blue-500 mx-auto mb-6 md:mb-8 scale-in"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {teamValues.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-md hover:shadow-lg border border-gray-100 fade-in group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <div className="text-blue-600 text-base md:text-xl">
                      {value.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 text-center leading-tight">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Enhanced Animation Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .fade-in {
          opacity: 0;
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .slide-in-left {
          opacity: 0;
          animation: slide-in-left 0.8s ease-out forwards;
        }
        
        .slide-in-right {
          opacity: 0;
          animation: slide-in-right 0.8s ease-out forwards;
        }
        
        .scale-in {
          opacity: 0;
          animation: scale-in 0.6s ease-out forwards;
        }
        
        .visible {
          opacity: 1;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}

export default About