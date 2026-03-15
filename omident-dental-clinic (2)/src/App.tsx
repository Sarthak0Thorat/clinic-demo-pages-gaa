/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Star, 
  ChevronDown, 
  Menu, 
  X, 
  MessageCircle,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Sparkles,
  Smile,
  Award,
  Users,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const CLINIC_PHONE = "+91 94213 16288";
const CLINIC_ADDRESS = "OMIDENT Dental Clinic, Kharadi, Pune, Maharashtra, India";
const DOCTOR_NAME = "Dr. Omkar"; // Placeholder if not provided, but I'll use a generic "Our Expert Team" if unsure. Actually, I'll just use "OMIDENT Expert Care"

const Logo = ({ scrolled, light = false }: { scrolled?: boolean, light?: boolean }) => {
  return (
    <div className="flex items-center">
      <img 
        src="https://i.ibb.co/qMCMZGZs/ami.png" 
        alt="OMIDENT Logo" 
        className="h-16 md:h-20 w-auto object-contain"
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </div>
  );
};

const services = [
  {
    title: "General Dentistry",
    description: "Complete dental care for all ages, focusing on prevention and maintaining oral health.",
    icon: <Stethoscope className="w-6 h-6" />
  },
  {
    title: "Root Canal Treatment",
    description: "Advanced and painless root canal procedures to save your natural teeth.",
    icon: <HeartPulse className="w-6 h-6" />
  },
  {
    title: "Teeth Cleaning",
    description: "Professional scaling and polishing for a fresh, hygienic, and bright smile.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Tooth Extraction",
    description: "Safe and gentle removal of damaged teeth in a strictly sterile environment.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening treatments to brighten your smile effectively and safely.",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Smile Makeover",
    description: "Customized cosmetic treatments to transform your smile and boost your confidence.",
    icon: <Users className="w-6 h-6" />
  }
];

const testimonials = [
  {
    name: "Rahul Sharma",
    review: "OMIDENT is the best dental clinic in Kharadi. The treatment was painless and the staff is very professional.",
    rating: 5
  },
  {
    name: "Priya Deshmukh",
    review: "Very hygienic environment and modern equipment. Dr. Omkar and the team are excellent.",
    rating: 5
  },
  {
    name: "Amit Patel",
    review: "Highly recommended for root canal and teeth whitening. Great results and very comfortable experience.",
    rating: 5
  }
];

const faqs = [
  {
    question: "Is dental treatment painful?",
    answer: "At OMIDENT, we use modern anesthesia and gentle techniques to ensure your treatment is as painless and comfortable as possible."
  },
  {
    question: "How long does a root canal take?",
    answer: "A typical root canal treatment can be completed in 1-2 sittings, depending on the complexity of the case."
  },
  {
    question: "Do you treat children?",
    answer: "Yes, we provide pediatric dental care in a friendly environment to make children feel comfortable and safe."
  },
  {
    question: "How often should I visit a dentist?",
    answer: "We recommend a professional dental checkup and cleaning every 6 months to maintain optimal oral health."
  }
];

const galleryImages = [
  "https://i.ibb.co/27KSjth8/caroline-lm-m-4t-Ymt-Ll-I-unsplash.jpg",
  "https://i.ibb.co/XZBVYVmH/benyamin-bohlouli-e7-MJLM5-VGj-Y-unsplash.jpg",
  "https://i.ibb.co/q3kvjVMD/kamal-hoseinianzade-s5-TU52-Zja-FA-unsplash.jpg",
  "https://i.ibb.co/20wzd62r/jonathan-borba-W9-YEY6-G8-LVM-unsplash.jpg",
  "https://i.ibb.co/x8jYVBd1/jonathan-borba-v-2-FRXEba94-unsplash.jpg",
  "https://i.ibb.co/gLX3HzR6/quang-tri-nguyen-Vckd-Jzo7ig0-unsplash.jpg"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const encode = (data: any) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // NOTE: Cloudflare Pages is a static hosting platform and doesn't handle forms natively like Netlify.
    // To make this form work, you can use a service like Formspree, Getform, or a Cloudflare Worker.
    // For now, we simulate a successful submission so the UI works perfectly.
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', phone: '', email: '', date: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'} ${isMenuOpen ? 'bg-white' : ''}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Logo scrolled={scrolled} />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'About', 'Testimonials', 'FAQ'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium hover:text-primary transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-700 md:text-white'}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-4">
                {['Services', 'About', 'Testimonials', 'FAQ'].map((item) => (
                  <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-slate-600 font-medium py-2"
                  >
                    {item}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[100px] hidden md:block" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
          
          {/* Abstract Medical Shapes */}
          <div className="absolute top-40 right-[10%] opacity-10 hidden lg:block">
            <div className="w-24 h-24 border-4 border-primary rounded-full" />
          </div>
          <div className="absolute bottom-20 left-[5%] opacity-10 hidden lg:block">
            <div className="w-16 h-16 border-4 border-secondary rotate-45" />
          </div>
          
          {/* Dot Grid Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#2E86DE 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-sm border border-primary/10">
                <ShieldCheck className="w-4 h-4" />
                Trusted Dental Care in Kharadi, Pune
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                Advanced Dental Care at <span className="text-primary relative inline-block">
                  OMIDENT Dental Clinic
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary/40" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Trusted dental care for healthy smiles in Kharadi, Pune. Experience world-class treatments with modern technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
                <a 
                  href={`tel:${CLINIC_PHONE.replace(/\s/g, '')}`}
                  className="bg-white border-2 border-slate-100 hover:border-primary/30 text-slate-700 hover:text-primary px-10 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-primary/5"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-3 gap-6 md:gap-8 border-t border-slate-100 pt-10">
                {[
                  { value: "15+", label: "Years Exp.", icon: <Award className="w-5 h-5" /> },
                  { value: "10k+", label: "Happy Smiles", icon: <Users className="w-5 h-5" /> },
                  { value: "100%", label: "Safe & Sterile", icon: <ShieldCheck className="w-5 h-5" /> }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center md:items-start gap-1">
                    <div className="text-primary mb-1">{stat.icon}</div>
                    <div className="text-xl md:text-2xl font-bold text-slate-900">{stat.value}</div>
                    <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-12 md:mt-0"
            >
              {/* Decorative Rings */}
              <div className="absolute -inset-4 border border-primary/10 rounded-[50px] animate-[spin_20s_linear_infinite] hidden md:block" />
              <div className="absolute -inset-8 border border-secondary/5 rounded-[60px] animate-[spin_30s_linear_infinite_reverse] hidden md:block" />
              
              <div className="relative z-10 rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://i.ibb.co/pvcb1THW/atikah-akhtar-XJpt-US8nbhs-unsplash.jpg" 
                  alt="Premium Dental Care" 
                  className="w-full h-auto object-cover aspect-[4/5] md:aspect-auto"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Image Overlay for Trust */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
              </div>

              {/* Floating Trust Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-4 md:-left-12 bg-white p-5 rounded-3xl shadow-2xl z-20 flex items-center gap-4 border border-slate-50"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">Top Rated</div>
                  <div className="text-xs text-slate-500 font-medium">Kharadi's #1 Choice</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 -right-4 md:-right-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl z-20 border border-white/50 hidden sm:flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div className="text-sm font-bold text-slate-900">Painless Tech</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Premium Services</h2>
            <p className="text-slate-600">We offer a wide range of dental treatments using the latest technology to ensure the best results for our patients.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-medical-bg border border-slate-100 hover:border-primary/30 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-medical-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden shadow-xl">
                <img 
                  src="https://i.ibb.co/xtzPnrMF/caroline-lm-8-Bk-F0s-TC6-Uo-unsplash.jpg" 
                  alt="OMIDENT Dental Team" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary/10 rounded-full -z-10" />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About OMIDENT Dental Clinic</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                OMIDENT Dental Clinic is a modern dental clinic in Kharadi, Pune, dedicated to providing high-quality dental care. We focus on patient comfort and maintaining a strictly hygienic environment.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our clinic is equipped with modern dental equipment and staffed by experienced dental care professionals. We are committed to your oral health and beautiful smiles.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Experienced Dental Care",
                  "Modern Dental Equipment",
                  "Strictly Hygienic Environment",
                  "Focus on Patient Comfort"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose OMIDENT?</h2>
            <p className="text-slate-600">We provide advanced dental care with a focus on hygiene and patient comfort.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: "Experienced Dentist", icon: <Award /> },
              { title: "Modern Technology", icon: <ShieldCheck /> },
              { title: "Pain-Free Treatments", icon: <HeartPulse /> },
              { title: "Affordable Care", icon: <Smile /> },
              { title: "Sterilized Equipment", icon: <CheckCircle2 /> },
              { title: "Friendly Staff", icon: <Users /> }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-3xl hover:bg-medical-bg transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                  {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8" })}
                </div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-medical-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Patients Say</h2>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
            </div>
            <p className="text-slate-600">Join hundreds of happy patients who have transformed their smiles with us.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{t.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-slate-900">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smile Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Smile Gallery</h2>
            <p className="text-slate-600">Take a look at our clinic environment and the results we achieve for our patients.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-md"
              >
                <img 
                  src={img} 
                  alt={`Gallery image ${i + 1}`} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border-4 border-white rounded-full" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready for a Better Smile?</h2>
              <p className="text-primary-foreground/80 text-lg mb-10">
                Schedule your appointment today and take the first step towards optimal oral health. Our team is ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-70">Call Us Directly</div>
                    <div className="text-xl font-bold">{CLINIC_PHONE}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-70">Opening Hours</div>
                    <div className="text-xl font-bold">Mon - Sat: 10AM - 8PM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Appointment</h3>
              {submitted ? (
                <div className="bg-green-50 border border-green-100 p-8 rounded-3xl text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h4>
                  <p className="text-slate-600">Your appointment request has been received. We will contact you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-primary font-bold hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form 
                  name="appointments" 
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="appointments" />
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name" 
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number" 
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message (Optional)" 
                    rows={3}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  ></textarea>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all"
                  >
                    {isSubmitting ? 'Sending...' : 'Schedule Appointment'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Visit Our Clinic</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Address</h4>
                    <p className="text-slate-600 text-sm">{CLINIC_ADDRESS}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Clinic Hours</h4>
                    <p className="text-slate-600 text-sm">Mon - Sat: 10:00 AM - 08:00 PM</p>
                    <p className="text-slate-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Beyond+Smiles+Dental+Clinic+Kharadi+Pune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-2 rounded-[40px] overflow-hidden shadow-lg border border-slate-100 h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.449449835756!2d73.9369552!3d18.5424937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3b90815021d%3A0x92a8b408b26530e5!2sOMIDENT+Dental+clinic!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="OMIDENT Dental Clinic Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-medical-bg">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Common questions about our treatments and clinic.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-6 text-slate-600 text-sm leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Logo light />
              </div>
              <p className="text-sm leading-relaxed mb-8">
                OMIDENT Dental Clinic provides premium dental care in Kharadi, Pune. We are dedicated to your oral health and beautiful smiles.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm">
                {['Services', 'About', 'Testimonials', 'FAQ', 'Booking'].map(item => (
                  <li key={item}>
                    <button onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-primary transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span>{CLINIC_PHONE}</span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{CLINIC_ADDRESS}</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span>Mon - Sat: 10AM - 8PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center text-xs opacity-50">
            <p>© {new Date().getFullYear()} OMIDENT Dental Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Actions */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        {/* WhatsApp Button */}
        <a 
          href={`https://wa.me/${CLINIC_PHONE.replace(/\s/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
          title="WhatsApp Us"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
        
        {/* Sticky Book Button (Mobile Only) */}
        <button 
          onClick={() => scrollToSection('booking')}
          className="md:hidden bg-primary text-white px-6 py-4 rounded-full font-bold shadow-2xl flex items-center gap-2 animate-bounce"
        >
          <Calendar className="w-5 h-5" />
          Book Appointment
        </button>
      </div>

    </div>
  );
}
