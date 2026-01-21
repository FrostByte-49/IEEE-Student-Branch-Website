"use client"

import { useEffect, useRef } from "react"
import { Users, Code, BookOpen, Award, Calendar, ChevronRight, Target, Globe, Heart, HeartHandshake, Lightbulb } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateCanvasSize()

    // Determine theme colors based on current theme
    const getThemeColors = () => {
      const isDark = document.documentElement.classList.contains('dark')
      return {
        particleColor: isDark ? 'rgba(255, 255, 255, ' : 'rgba(0, 0, 0, ',
        backgroundColor: isDark ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        connectionColor: isDark ? 'rgba(255, 255, 255, ' : 'rgba(0, 0, 0, ',
        accentColor: isDark ? 'rgba(59, 130, 246, ' : 'rgba(37, 99, 235, ' // Blue accent
      }
    }

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number
      type: 'primary' | 'accent'
    }> = []

    for (let i = 0; i < 60; i++) {
      const type = Math.random() > 0.8 ? 'accent' : 'primary'
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: type === 'accent' ? Math.random() * 1.2 + 0.3 : Math.random() * 1 + 0.2,
        opacity: type === 'accent' ? Math.random() * 0.4 + 0.1 : Math.random() * 0.2 + 0.05,
        type
      })
    }

    let animationId: number

    const animate = () => {
      const colors = getThemeColors()
      
      // Clear canvas with subtle background
      ctx.fillStyle = colors.backgroundColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy

        // Bounce off walls with slight randomness
        if (p.x < 0 || p.x > canvas.width) {
          p.vx *= -1
          p.vx += (Math.random() - 0.5) * 0.1
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -1
          p.vy += (Math.random() - 0.5) * 0.1
        }

        // Keep particles within bounds
        p.x = Math.max(0, Math.min(canvas.width, p.x))
        p.y = Math.max(0, Math.min(canvas.height, p.y))

        // Draw particle
        const color = p.type === 'accent' ? colors.accentColor : colors.particleColor
        ctx.fillStyle = color + p.opacity + ')'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connections between nearby particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.15
            const color = p1.type === 'accent' || p2.type === 'accent' 
              ? colors.accentColor 
              : colors.connectionColor
            ctx.strokeStyle = color + opacity + ')'
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      updateCanvasSize()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const features = [
    {
      icon: Code,
      title: "Technical Workshops",
      description: "Hands-on sessions on cutting-edge technologies",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: Users,
      title: "Networking Events",
      description: "Connect with professionals and fellow students",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Access to IEEE publications and research",
      color: "text-purple-600 dark:text-purple-400"
    },
    {
      icon: Award,
      title: "Competitions",
      description: "Participate in national and international events",
      color: "text-amber-600 dark:text-amber-400"
    },
    {
      icon: Lightbulb,
      title: "Innovation & Research",
      description: "Encouraging research, project development, and innovative ideas",
      color: "text-red-600 dark:text-red-400"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section ( Canvas Animation ) */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-12">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-4 backdrop-blur-sm">
            <HeartHandshake className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Welcome to IEEE Student Branch</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Pioneering
            <span className="relative">
              <span className="relative z-10 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                {" "}Innovation <br />
              </span>
            </span>
            In Engineering
          </h1>

          <p className="text-md sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Fostering Innovation & Collaboration  @ <br /> Vasantdada Patil Pratishthan's 
            College of Engineering & Visual Arts
          </p>

          <div className="flex flex-row sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate('/events')}
              className="group px-3 py-3 sm:px-5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl cursor-pointer"
            >
              Explore Events
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="px-5 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 font-semibold backdrop-blur-sm cursor-pointer"
            >
              Learn About IEEE
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { value: "12+", label: "Active Members", icon: Users },
              { value: "5+", label: "Events", icon: Calendar },
              { value: "0", label: "Awards Won", icon: Award },
              { value: "100%", label: "Growth", icon: Target },
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col items-center gap-3">
                  <stat.icon className="w-8 h-8 text-primary/60" />
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:pt-32  bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What We <span className="text-primary">Offer</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Empowering Students With Opportunities To Learn, Grow & Lead In The Field Of Technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-500"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-15 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5" />
            <div className="relative z-10 p-8 md:p-12 text-center">
              <Globe className="w-16 h-16 mx-auto mb-6 text-primary/60" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to <span className="text-primary">Transform</span> Your Future?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our vibrant community of innovators, thinkers, and leaders. 
                Be part of something bigger than yourself.
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
                  onClick={() => navigate('/contact')}
                  className="px-8 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-colors font-semibold cursor-pointer"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}