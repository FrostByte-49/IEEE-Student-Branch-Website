import { 
  Globe, Users, Award, BookOpen, 
  Zap, Heart, Code, BookText,
  Calendar, Briefcase, FileText, Trophy,
  ChevronRight, GraduationCap, Lightbulb,
  Network, Shield, Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AboutPage() {
  const navigate = useNavigate();

  const missionStats = [
    { value: "420,000+", label: "Global Members", icon: Users, color: "dark:text-blue-400" },
    { value: "160+", label: "Countries", icon: Globe, color: "text-green-600 dark:text-green-400" },
    { value: "5,000+", label: "Chapters Worldwide", icon: Network, color: "text-purple-600 dark:text-purple-400" },
    { value: "200+", label: "Publications", icon: BookOpen, color: "text-amber-600 dark:text-amber-400" },
  ];

  const chapterFeatures = [
    {
      icon: Code,
      title: "Technical Workshops",
      description: "Hands-on sessions on emerging technologies like AI, ML, IoT, and Blockchain",
      color: "dark:text-blue-400"
    },
    {
      icon: Briefcase,
      title: "Industry Mentorship",
      description: "Guidance from industry professionals and alumni network",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: Calendar,
      title: "Hackathons & Competitions",
      description: "Regular coding competitions and innovation challenges",
      color: "text-purple-600 dark:text-purple-400"
    },
  ];

  const resources = [
    {
      category: "Learning Resources",
      items: [
        {
          title: "IEEE Xplore Digital Library",
          description: "Access to millions of technical documents",
          icon: BookOpen,
          link: "https://ieeexplore.ieee.org"
        },
        {
          title: "IEEE Learning Network",
          description: "Online courses and certifications",
          icon: GraduationCap,
          link: "https://iln.ieee.org"
        },
        {
          title: "IEEE Spectrum",
          description: "Technology news and insights",
          icon: FileText,
          link: "https://spectrum.ieee.org"
        },
      ]
    },
    {
      category: "Publications",
      items: [
        {
          title: "IEEE Journals",
          description: "Peer-reviewed research papers",
          icon: BookOpen,
          link: "https://ieee.org/journals"
        },
        {
          title: "Conference Proceedings",
          description: "Latest research from global conferences",
          icon: Calendar,
          link: "https://ieee.org/conferences"
        },
        {
          title: "Technical Standards",
          description: "Industry standards and guidelines",
          icon: Shield,
          link: "https://standards.ieee.org"
        },
      ]
    },
    {
      category: "Student Benefits",
      items: [
        {
          title: "Competitions & Awards",
          description: "Participate in global IEEE competitions",
          icon: Trophy,
          link: "https://ieee.org/students/competitions"
        },
        {
          title: "Scholarships & Grants",
          description: "Financial support for students",
          icon: Award,
          link: "https://ieee.org/students/scholarships"
        },
        {
          title: "Networking Events",
          description: "Connect with professionals worldwide",
          icon: Users,
          link: "https://ieee.org/events"
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6">
              <BookText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Advancing Technology For <span className="text-primary">Humanity</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The IEEE Student Branch @ VPPCOE & VA <br /> Fostering Innovation, Collaboration 
              & Professional Growth 
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {missionStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.color.replace('text-', 'bg-').replace('dark:', 'dark:bg-')}/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About IEEE */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">About IEEE</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                The World's Largest <span className="text-primary">Technical Organization</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                IEEE is the world's largest professional organization dedicated to advancing 
                technology for the benefit of humanity. Through its members, IEEE is a leading 
                authority on areas ranging from aerospace systems, computers and telecommunications 
                to biomedical engineering, electric power and consumer electronics.
              </p>
              
              <div className="space-y-4">
                {[
                  "Global network of 420,000+ members across 160+ countries",
                  "Advancing innovation and technological development",
                  "Professional development and networking opportunities",
                  "Cutting-edge publications and international conferences"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dhn92qb61/image/upload/v1768416413/IEEE_Logo_diabpu.svg"
                  alt="IEEE Global Community"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Chapter */}
      <section className="py-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-4">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Chapter</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              IEEE @ <span className="text-primary">VPPCOE & VA</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The IEEE Student Branch at VPPCOE Is Committed To Bridging Academia & Industry 
              While Fostering Technical Excellence Among Students
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">About VPPCOE & VA</span>
              </div>
          
              <p className="text-lg text-muted-foreground mb-6">
                VPPCOE & VA established in 1990, is a reputed engineering institution in Mumbai. The college is approved by AICTE, DTE & DOA, accredited by NAAC for 5 years (2019 – 2024). It has earned significant recognition, including ranking 2nd among Mumbai colleges in the "Top 100 Engineering Colleges in India"  and receiving several national and international awards.
              </p>

              <p className="text-lg text-muted-foreground mb-6">
                IEEE VPPCOE is dedicated to promoting technological innovation, professional excellence, and knowledge sharing for the benefit of society. The chapter encourages technical growth, research, leadership, and overall personal development through various academic and professional activities.
              </p>
              
            </div>
            
            <div className="relative">
              <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dhn92qb61/image/upload/v1768653934/1_2_thbgkb.webp"
                  alt="IEEE Global Community"
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {chapterFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color.replace('text-', 'bg-').replace('dark:', 'dark:bg-')}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="bg-card border border-border rounded-2xl p-8 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Our Achievements</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: "5+", label: "Events Organized" },
                { value: "0", label: "National Awards" },
                { value: "20+", label: "Projects Completed" },
                { value: "95%", label: "Member Satisfaction" },
              ].map((achievement, index) => (
                <div key={index} className="text-center p-4">
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.value}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 pb-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-4">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Resources</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              IEEE <span className="text-primary">Resources</span> & Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access Exclusive IEEE Resources To Enhance Your Learning & Career Growth
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {resources.map((category, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-border">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-3 rounded-lg hover:bg-accent transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5" />
            <div className="relative z-10 p-8 md:p-12 text-center">
              <Lightbulb className="w-16 h-16 mx-auto mb-6 text-primary/60" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to <span className="text-primary">Join</span> Our Community?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Become part of the global IEEE network and accelerate your technical career
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => navigate('/join')}
                  className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold flex items-center gap-2 group cursor-pointer"
                >
                  <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Join IEEE Today
                </button>
                <button 
                  onClick={() => navigate('/events')}
                  className="px-8 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-semibold cursor-pointer"
                >
                  View Upcoming Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}