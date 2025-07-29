"use client";

import { useState, useEffect } from "react";
import { 
  Dumbbell, 
  Menu, 
  X, 
  Award, 
  Users, 
  Clock, 
  Star,
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  Play,
  Calendar,
  MapPin,
  Phone
} from "lucide-react";

export default function EnhancedFitnessWebsite() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  

  return (
    <div className="min-h-screen bg-black text-white">
     

        

      

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-200 to-red-500 bg-clip-text text-transparent leading-tight">
            Transform Your Body
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unlock your potential with personalized training, expert nutrition guidance, and unwavering support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full font-semibold text-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Start Your Journey
            </button>
            <button className="flex items-center gap-2 px-8 py-4 border border-red-500/50 rounded-full font-semibold text-lg hover:bg-red-500/10 transition-all duration-300">
              <Play className="w-5 h-5" />
              Watch Success Stories
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-red-500" />
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="relative py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Meet Your Trainer
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Certified expertise meets personalized care for your fitness journey
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Hi, I'm <span className="text-red-500">Alex Stone</span>
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  With over a decade of experience transforming lives through fitness, I specialize in creating personalized training programs that deliver real, lasting results. My holistic approach combines strength training, mindset coaching, and nutrition planning tailored specifically to your unique goals and lifestyle.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Whether you're a complete beginner taking your first steps toward fitness or an experienced athlete looking to break through plateaus, I'll be there to guide, motivate, and support you every step of the way.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-colors duration-300">
                  <Users className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-400">Clients Transformed</div>
                </div>
                <div className="text-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-colors duration-300">
                  <Clock className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">10+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold flex items-center gap-2">
                  <Award className="w-5 h-5 text-red-500" />
                  Certifications & Expertise
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Star className="w-4 h-4 text-red-500" />
                    NASM Certified Personal Trainer
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Star className="w-4 h-4 text-red-500" />
                    Precision Nutrition Coach
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Star className="w-4 h-4 text-red-500" />
                    Functional Movement Screen
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Star className="w-4 h-4 text-red-500" />
                    Mental Performance Coach
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-700">
                <a href="#contact" className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </a>
                <a href="#contact" className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  Downtown Fitness Studio
                </a>
                <a href="#contact" className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-colors duration-300">
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </a>
              </div>
            </div>

            {/* Image & Social */}
            <div className="relative">
              {/* Main Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative rounded-3xl overflow-hidden border-2 border-red-500/30 group-hover:border-red-500/50 transition-colors duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&crop=face"
                    alt="Alex Stone - Personal Trainer"
                    className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex justify-center gap-4 mt-8">
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition-colors duration-300 group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition-colors duration-300 group">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition-colors duration-300 group">
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute top-8 -left-4 bg-red-600 text-white p-4 rounded-2xl shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs">Client Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}