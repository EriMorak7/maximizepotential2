import React from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Briefcase, 
  Calculator, 
  FileText,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Award,
  Globe
} from 'lucide-react'

const Header = () => (
  <motion.header 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '32px', height: '32px', background: 'var(--bg-dark)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
          <TrendingUp size={20} />
        </div>
        <div style={{ fontSize: '1.25rem', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>
          Maximize <span style={{ color: 'var(--accent)' }}>Potential</span> Group
        </div>
      </div>
      <nav>
        <ul style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <li><a href="#home" style={{ fontSize: '0.9rem', fontWeight: '500' }}>Home</a></li>
          <li><a href="#about" style={{ fontSize: '0.9rem', fontWeight: '500' }}>About Us</a></li>
          <li><a href="#services" style={{ fontSize: '0.9rem', fontWeight: '500' }}>Services</a></li>
          <li><a href="#insights" style={{ fontSize: '0.9rem', fontWeight: '500' }}>Insights</a></li>
          <li><a href="#contact" style={{ fontSize: '0.9rem', fontWeight: '500' }}>Contact</a></li>
          <li><button className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>Book Consultation</button></li>
        </ul>
      </nav>
    </div>
  </motion.header>
)

const Hero = () => (
  <section id="home" style={{ paddingTop: '180px', paddingBottom: '120px' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '80px', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label">Premier Advisory Firm</span>
        <h1 style={{ fontSize: '4.8rem', marginBottom: '24px', lineHeight: '1.1' }}>
          Expert Insights <br />
          Powering Your <br />
          <span style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: '400' }}>Business Success.</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '540px', lineHeight: '1.7' }}>
          Delivering elite accounting, tax, and strategic consulting services tailored for visionary businesses and high-growth organizations.
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button className="btn btn-primary">Get a Free Consultation <ArrowRight size={18} style={{ marginLeft: '10px' }} /></button>
          <button className="btn btn-secondary">Our Case Studies</button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ position: 'relative' }}
      >
        <div style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden', boxShadow: '0 50px 100px rgba(5,25,45,0.15)' }}>
          <img src="/hero_workspace.jpg" alt="Strategic Hub" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,25,45,0.2), transparent)' }}></div>
        </div>
        
        {/* Floating Metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{ 
            position: 'absolute', 
            top: '10%', 
            right: '-40px', 
            background: 'white', 
            padding: '24px', 
            borderRadius: '20px', 
            boxShadow: '0 25px 50px rgba(0,0,0,0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={20} color="var(--accent)" />
            <span style={{ fontWeight: '700', fontSize: '1.4rem' }}>#1</span>
          </div>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>Firms in NY 2025</span>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

const Stats = () => (
  <section style={{ background: 'white', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '60px' }}>
      {[
        { val: "12+", label: "Years Serving NY" },
        { val: "47+", label: "Consumers Helped" },
        { val: "98%", label: "Success Rate" },
        { val: "98%", label: "Record Verdicts" }
      ].map((stat, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          style={{ textAlign: 'left', padding: '60px 0' }}
        >
          <div style={{ fontSize: '3.5rem', fontWeight: '700', fontFamily: 'Playfair Display', marginBottom: '8px', color: 'var(--bg-dark)' }}>{stat.val}</div>
          <div style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.9rem', letterSpacing: '0.5px' }}>{stat.label}</div>
        </motion.div>
      ))}
    </div>
  </section>
)

const AboutUs = () => (
  <section id="about" style={{ padding: '120px 0' }}>
    <div className="container" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: '100px', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img src="/about_team.webp" alt="Our Team" style={{ borderRadius: '30px', boxShadow: '0 40px 80px rgba(0,0,0,0.1)', width: '100%' }} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label">About Us</span>
        <h2 style={{ fontSize: '3.2rem', marginBottom: '32px' }}>Trusted Advisors for Your Business Success</h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.8' }}>
          With decades of experience across industries, we offer tailored consulting services that align with your goals. Our team is dedicated to turning challenges into opportunities by delivering actionable strategies and measurable results.
        </p>
        <ul style={{ marginBottom: '48px' }}>
          {[
            "Industry-leading expertise in complex tax structures",
            "Data-driven business growth strategies",
            "Dedicated audit and compliance professionals",
            "Personalized approach to corporate consultation"
          ].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.05rem' }}>
              <CheckCircle2 size={20} color="var(--accent)" /> {item}
            </li>
          ))}
        </ul>
        <button className="btn btn-primary" style={{ padding: '16px 40px' }}>Discover Our Story <ArrowRight size={18} style={{ marginLeft: '10px' }} /></button>
      </motion.div>
    </div>
  </section>
)

const ServicesGrid = () => (
  <section id="services" style={{ background: '#fdfdfd' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '700px', margin: '0 auto 80px' }}>
        <span className="section-label">Our Expertise</span>
        <h2 style={{ fontSize: '3.2rem', marginBottom: '24px' }}>Strategic Solutions for Global Growth</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>We provide specialized services designed to scale your operations and secure your financial future.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
        {[
          { icon: <Calculator />, title: "Accounting & Audit", desc: "Rigorous financial oversight and auditing to ensure transparency and excellence." },
          { icon: <ShieldCheck />, title: "Tax Strategy", desc: "Advanced tax planning for corporations and individuals to drive efficiency." },
          { icon: <Globe />, title: "Market Expansion", desc: "Strategic insights to help your business penetrate new markets and demographics." },
          { icon: <Briefcase />, title: "Business Consulting", desc: "High-level advisory for organizational restructuring and growth acceleration." },
          { icon: <TrendingUp />, title: "Financial Planning", desc: "Wealth management and retirement planning for long-term security." },
          { icon: <Users />, title: "Risk Management", desc: "Mitigating operational risks with proven frameworks and adaptive strategies." }
        ].map((service, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10, borderColor: 'var(--text-primary)' }}
            initial={{ opacity:0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ 
              padding: '48px', 
              background: 'white', 
              borderRadius: '32px', 
              border: '1px solid var(--border)',
              transition: 'var(--transition)'
            }}
          >
            <div style={{ background: 'var(--bg-primary)', padding: '20px', borderRadius: '20px', display: 'inline-block', color: 'var(--bg-dark)', marginBottom: '32px' }}>
              {React.cloneElement(service.icon, { size: 32 })}
            </div>
            <h3 style={{ fontSize: '1.6rem', marginBottom: '16px' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', lineHeight: '1.6' }}>{service.desc}</p>
            <a href="#" style={{ fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--bg-dark)' }}>
              See Details <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const Insights = () => (
  <section id="insights">
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '80px' }}>
        <div>
          <span className="section-label">Insights</span>
          <h2 style={{ fontSize: '3.2rem', marginTop: '12px' }}>Latest Industry Updates</h2>
        </div>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '350px' }}>
          Stay informed with expert strategies, business insights, and deep-dive industry analysis.
        </p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
        {[
          { date: "12 May 25", title: "How Strategic Planning Drives Sustainable Growth", img: "/insights.webp" },
          { date: "15 May 25", title: "Key Trends Shaping The Future Of Global Business", img: "/hero_alt.webp" },
          { date: "20 May 25", title: "Improving Operational Efficiency With Proven Frameworks", img: "/insights.webp" }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '24px', height: '280px' }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px', display: 'block' }}>{item.date}</span>
            <h3 style={{ fontSize: '1.4rem', lineHeight: '1.4', marginBottom: '16px' }}>{item.title}</h3>
            <a href="#" style={{ fontWeight: '600', color: 'var(--bg-dark)' }}>Read More</a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

const CTA = () => (
  <section style={{ padding: '80px 5%' }}>
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      style={{ 
        background: 'var(--bg-dark)', 
        color: 'white', 
        borderRadius: '50px', 
        padding: '120px 40px', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'url("/cta_bg.webp")', backgroundSize: 'cover' }}></div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '4.2rem', marginBottom: '48px', lineHeight: '1.1' }}>Let's Build Your Business Success Together</h2>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <button className="btn" style={{ background: 'white', color: 'var(--bg-dark)', padding: '18px 48px', fontSize: '1rem' }}>Schedule a Free Consultation</button>
          <button className="btn" style={{ border: '1px solid white', color: 'white', padding: '18px 48px', fontSize: '1rem' }}>Contact Our Team</button>
        </div>
      </div>
    </motion.div>
  </section>
)

const Footer = () => (
  <footer style={{ background: 'var(--bg-dark)', color: 'white', padding: '100px 0 40px' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '100px', marginBottom: '100px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
            <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg-dark)' }}>
              <TrendingUp size={24} />
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Playfair Display' }}>
              Maximize <span style={{ color: 'rgba(255,255,255,0.7)' }}>Potential</span> Group
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '40px', maxWidth: '320px', lineHeight: '1.8' }}>
            A premier global consulting firm dedicated to turning challenges into opportunities by delivering actionable strategies and measurable ROI.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Facebook size={20} style={{ opacity: 0.6 }} />
            <Twitter size={20} style={{ opacity: 0.6 }} />
            <Linkedin size={20} style={{ opacity: 0.6 }} />
            <Instagram size={20} style={{ opacity: 0.6 }} />
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '32px', fontWeight: '700' }}>Company</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '18px', color: 'rgba(255,255,255,0.5)' }}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press & Media</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '32px', fontWeight: '700' }}>Services</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '18px', color: 'rgba(255,255,255,0.5)' }}>
            <li><a href="#">Tax Advisory</a></li>
            <li><a href="#">Market Research</a></li>
            <li><a href="#">Digital Strategy</a></li>
            <li><a href="#">Audit & Assurance</a></li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '32px', fontWeight: '700' }}>Support</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '18px', color: 'rgba(255,255,255,0.5)' }}>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Client Portal</a></li>
          </ul>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
        <p>&copy; 2026 Maximize Potential Group LLC. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '32px' }}>
          <a href="#">Cookie Policy</a>
          <a href="#">Compliance</a>
        </div>
      </div>
    </div>
  </footer>
)

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Stats />
      <AboutUs />
      <ServicesGrid />
      <Insights />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
