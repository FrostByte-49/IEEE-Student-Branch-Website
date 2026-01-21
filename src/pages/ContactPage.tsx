import { 
  MapPin, Mail, Phone, Globe, Instagram,
  Twitter, Facebook, Linkedin, Send, 
  Clock, ExternalLink,
  MessageSquare
} from 'lucide-react';
import { useState, useRef } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  // Import Web3Forms API Key From .env
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_KEY || '';

  const socialLinks = [
    {
      name: 'Website',
      url: 'https://ieee.org',
      icon: Globe,
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/ieee_vppcoe',
      icon: Instagram,
      color: 'bg-pink-600',
      hoverColor: 'hover:bg-pink-700'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ieee_vppcoe',
      icon: Twitter,
      color: 'bg-sky-500',
      hoverColor: 'hover:bg-sky-600'
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/ieee.vppcoe',
      icon: Facebook,
      color: 'bg-blue-700',
      hoverColor: 'hover:bg-blue-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/ieee-vppcoe',
      icon: Linkedin,
      color: 'bg-blue-800',
      hoverColor: 'hover:bg-blue-900'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'ieee26@pvppcoe.ac.in',
      link: 'mailto:ieee26@pvppcoe.ac.in'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 22 2401 2345',
      link: 'tel:+912224012345'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Monday - Friday: \n 10:00 AM - 5:00 PM',
      link: null
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!web3FormsKey) {
      console.error('Web3Forms API key is not configured');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'IEEE VPPCOE',
          redirect: false, 
          honeypot: '', 
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset Success Message After 5 Seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
        console.error('Web3Forms error:', result);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactInfoClick = (e: React.MouseEvent, link: string | null) => {
    e.stopPropagation(); 
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  // Map URL
  const embedMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.302099273045!2d72.87585417492937!3d19.050450752774697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c7fb7cb41d%3A0xd2376785df725550!2sVasantdada%20Patil%20Pratishthan's%20College%20of%20Engineering%20and%20Visual%20Arts!5e0!3m2!1sen!2sin!4v1768654412586"`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
            <MessageSquare className='w-4 h-4 text-primary' />
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Reach Out To The IEEE Student Branch at VPPCOE For Collaborations, Queries 
            & To Learn More About Our Activities & Initiatives
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              {/* Branch Logo Placeholder */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dhn92qb61/image/upload/v1768981698/IEEE_Logo_ghxnop.webp"
                    alt="IEEE Logo"
                    className="w-10 h-10 scale-[1.2] object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">IEEE Student Branch</h2>
                  <p className="text-sm text-muted-foreground">VPPCOE & VA</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-8">
                The IEEE Student Branch at VPPCOE is dedicated to fostering technical innovation, professional growth, 
                and community engagement among students.
              </p>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className={`relative group w-10 h-10 rounded-xl ${social.color} ${social.hoverColor} flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5`}
                        aria-label={social.name}
                        onClick={(e) => e.stopPropagation()} 
                      >
                        <Icon className="w-5 h-5 text-white" />
                        <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div 
                      key={index}
                      className={`flex items-start gap-4 p-3 rounded-lg hover:bg-accent transition-colors ${info.link ? 'cursor-pointer' : 'cursor-default'}`}
                      onClick={(e) => handleContactInfoClick(e, info.link)}
                      onMouseDown={(e) => e.stopPropagation()} 
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1" onClick={(e) => e.stopPropagation()}>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-sm text-muted-foreground whitespace-pre-line">{info.details}</p>
                      </div>
                      {info.link && (
                        <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-6 h-100vh">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Send us a Message</h2>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl">
                  <div className="flex items-center gap-2 text-green-800 dark:text-green-400">
                    <Send className="w-5 h-5" />
                    <span className="font-medium">Message Sent Successfully!</span>
                  </div>
                  <p className="text-sm text-green-900 dark:text-green-300 mt-1">
                    Thank you for contacting us. We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl">
                  <div className="flex items-center gap-2 text-red-800 dark:text-red-400">
                    <Send className="w-5 h-5" />
                    <span className="font-medium">Failed To Send Message</span>
                  </div>
                  <p className="text-sm text-red-900 dark:text-red-300 mt-1">
                    Please try again or contact us directly via email.
                  </p>
                </div>
              )}

              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
                method="POST"
                action="https://api.web3forms.com/submit"
                onClick={(e) => e.stopPropagation()} 
              >
                {/* Hidden Honeypot Field */}
                <input 
                  type="checkbox" 
                  name="botcheck" 
                  className="hidden" 
                  style={{display: 'none'}}
                />
                
                {/* Hidden Access Key */}
                <input 
                  type="hidden" 
                  name="access_key" 
                  value={web3FormsKey} 
                />
                
                {/* Hidden Redirect Option */}
                <input 
                  type="hidden" 
                  name="redirect" 
                  value="false" 
                />
                
                {/* Hidden Subject For Web3Forms */}
                <input 
                  type="hidden" 
                  name="subject" 
                  value="New Contact Form Submission - IEEE VPPCOE" 
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Enter Your Name..."
                      onClick={(e) => e.stopPropagation()} 
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="Enter Your Email..."
                      onClick={(e) => e.stopPropagation()} 
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      placeholder="How can we help?"
                      onClick={(e) => e.stopPropagation()} 
                    />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your inquiry..."
                    onClick={(e) => e.stopPropagation()} 
                    onFocus={(e) => e.stopPropagation()} 
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  onClick={(e) => e.stopPropagation()} 
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-s text-muted-foreground text-center mb-5">
                  By Submitting This Form, You Agree To Our Privacy Policy. <br /> We'll Never Share Your Information.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Find Us</h2>
          </div>
          
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Embedded Map */}
              <div className="h-80 md:h-96">
                <iframe
                  src={embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IEEE VPPCOE Location"
                  className="dark:grayscale dark:brightness-90 transition-all duration-300"
                />
              </div>

              {/* Address Details */}
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-4">Our Location</h3>
                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground">
                    Vasantdada Patil Educational Complex, Eastern Express Highway, 
                    Padmabhushan Vasantdada Patil Marg, Sion Mumbai 400022
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Getting Here</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <b>Nearest Railway Station:</b> Sion (0.5 km)</li>
                      <li>• <b>Bus Stop:</b> Sion Depot (100 m)</li>
                      <li>• <b>Metro Station:</b> Sion (Coming Soon)</li>
                      <li>• Parking available on campus</li>
                    </ul>
                  </div>
                </div>

                <a
                  href="https://maps.app.goo.gl/LnPE5W5Hp6b5Yg149"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:bg-accent hover:border-primary/30 transition-colors font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                  <ExternalLink className="w-4 h-4" />
                </a>
                
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}