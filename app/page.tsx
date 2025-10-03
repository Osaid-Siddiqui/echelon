"use client"

import { useState, type ChangeEvent, type FormEvent } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import {
  Sparkles,
  Shield,
  Award,
  Droplets,
  Wrench,
  Zap,
  Check,
  ChevronRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Send,
  CheckCircle2,
} from "lucide-react"

const services = [
  {
    title: "Exterior Detailing",
    description: "Meticulous hand wash, decontamination, and gloss enhancement for a showroom finish.",
    icon: Sparkles,
  },
  {
    title: "Ceramic Coating",
    description: "Years of protection with hydrophobic properties and a radiant, glass-like shine.",
    icon: Shield,
  },
  {
    title: "Paint Correction",
    description: "Multi-stage polishing to eliminate swirls, scratches, and oxidation for flawless paint.",
    icon: Award,
  },
  {
    title: "Interior Renewal",
    description: "Steam cleaning, leather conditioning, and deep sanitation for a pristine cabin.",
    icon: Droplets,
  },
  {
    title: "Full Concierge Detail",
    description: "Comprehensive inside-and-out treatment tailored to your vehicle's specific needs.",
    icon: Zap,
  },
  {
    title: "Specialized Enhancements",
    description: "Headlight restoration, engine bay treatments, and bespoke finishing touches.",
    icon: Wrench,
  },
]

const pricingOptions = [
  {
    name: "Signature Detail",
    price: "$189",
    cadence: "Sedans & Coupes",
    description: "Ideal for well-kept vehicles needing a premium refresh.",
    features: [
      "Two-bucket hand wash & foam pre-soak",
      "Wheel, tire, and wheel-well treatment",
      "Interior vacuum and surface wipe-down",
      "Glass cleaning inside and out",
      "Express spray sealant protection",
    ],
  },
  {
    name: "Elite Enhancement",
    price: "$349",
    cadence: "SUVs & Performance",
    description: "Balanced package for vehicles needing deeper correction and protection.",
    features: [
      "Decontamination clay treatment",
      "Single-stage paint enhancement polish",
      "Full interior steam sanitation",
      "Leather conditioning or fabric protectant",
      "6-month ceramic spray sealant",
    ],
  },
  {
    name: "Echelon Ceramic",
    price: "From $899",
    cadence: "Multi-Day Premium",
    description: "Ultimate ceramic coating experience with long-term protection.",
    features: [
      "Multi-stage paint correction",
      "Professional-grade ceramic coating",
      "Wheel face and glass coating",
      "Interior protection add-on available",
      "Maintenance plan consultation",
    ],
  },
]

const testimonials = [
  {
    name: "Michael Rodriguez",
    location: "Scottsdale, AZ",
    rating: 5,
    text: "Absolutely incredible work! My Tesla looks better than the day I bought it. The ceramic coating is phenomenal.",
  },
  {
    name: "Sarah Chen",
    location: "Phoenix, AZ",
    rating: 5,
    text: "Best detailing service in Arizona. The attention to detail is unmatched. Highly recommend!",
  },
  {
    name: "David Thompson",
    location: "Cave Creek, AZ",
    rating: 5,
    text: "Professional, thorough, and the results speak for themselves. My Porsche has never looked this good.",
  },
]

const galleryItems = [
  {
    title: "Luxury Sedan Transformation",
    image: "/pristine-luxury-sedan-after-professional-detailing.jpg",
    category: "Exterior Detailing",
  },
  {
    title: "Leather Interior Restoration",
    image: "/restored-leather-car-interior-after-professional-d.jpg",
    category: "Interior Renewal",
  },
  {
    title: "Ceramic Coating Hydrophobicity",
    image: "/ceramic-coating-water-beading-on-car-paint.jpg",
    category: "Ceramic Coating",
  },
  {
    title: "Swirl Mark Removal",
    image: "/flawless-car-paint-after-correction-mirror-finish.jpg",
    category: "Paint Correction",
  },
  {
    title: "Sports Car Gloss",
    image: "/gleaming-sports-car-after-premium-detailing.jpg",
    category: "Exterior Detailing",
  },
  {
    title: "SUV Interior Renewal",
    image: "/spotless-suv-interior-after-deep-cleaning.jpg",
    category: "Interior Renewal",
  },
]

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.service || "General Inquiry",
          message: formData.message,
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({ name: "", email: "", phone: "", service: "", message: "" })
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      console.error("Contact submission failed", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-48 pb-24">
          <div className="absolute inset-0">
            <Image
              src="/gleaming-sports-car-after-premium-detailing.jpg"
              alt="Detailed luxury sports car"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-3 px-5 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm text-foreground"
                >
                  <span className="font-semibold">Scottsdale | Phoenix | Cave Creek</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-serif text-5xl md:text-7xl font-bold leading-tight text-balance"
                >
                  <span className="bg-gradient-to-r from-foreground via-accent-1 to-foreground bg-clip-text text-transparent">
                    Precision Detailing
                  </span>
                  <br />
                  Elevated to an Art Form
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl"
                >
                  Concierge-level automotive detailing, ceramic coating, and paint correction crafted for discerning vehicle owners who demand nothing less than excellence.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <Link
                    href="#contact"
                    className="group px-8 py-4 bg-gradient-to-r from-primary via-accent-2 to-secondary text-foreground rounded-full font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    Book Your Detail
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:602-710-4211"
                    className="px-8 py-4 bg-surface/60 backdrop-blur-sm border border-border text-foreground rounded-full font-semibold hover:bg-surface transition-all duration-300"
                  >
                    Call 602-710-4211
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent-1/30 to-secondary/30 rounded-3xl blur-3xl" />
                <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-3xl p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-2 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted">Trusted by 500+ luxury owners</p>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, index) => (
                          <Star key={index} className="w-4 h-4 fill-secondary text-secondary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted leading-relaxed">
                    "The meticulous craftsmanship and transparent care truly set Echelon apart. My vehicle receives the red-carpet treatment every time."
                  </p>
                  <p className="text-foreground font-semibold">— Lauren Mitchell, Paradise Valley</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm text-foreground">
                  Our Story
                </div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">
                  Where passion for craftsmanship meets uncompromising standards.
                </h2>
                <p className="text-lg text-muted leading-relaxed">
                  Hi! I’m Zachary Laursen, the proud owner and operator of Echelon Precision Detailing, your go-to mobile detailing service. With a passion for cars and a commitment to excellence, I started this business to bring high-quality detailing directly to you—whether you're at home, work, or anywhere in between.

At Echelon Precision, we treat every vehicle like it’s our own. From hand washes to full interior and exterior detailing, we use only premium products and proven techniques to restore your car’s shine and protect its value. Our goal is simple: to provide convenient, professional, and reliable service that exceeds your expectations every time.

Your time is valuable, and your car deserves the best. Let us bring the detail shop to your doorstep.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {["500+ Happy Clients", "1000+ Vehicles Detailed", "5+ Years Experience", "100% Satisfaction"].map((stat) => (
                    <div key={stat} className="bg-surface/60 border border-border rounded-2xl p-5">
                      <p className="text-2xl font-semibold text-foreground">{stat.split(" ")[0]}</p>
                      <p className="text-sm text-muted">{stat.split(" ").slice(1).join(" ")}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent-2/30 rounded-3xl blur-2xl" />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border">
                  <Image
                    src="/professional-car-detailing-team-working-on-luxury-.jpg"
                    alt="Echelon Precision Detailing team at work"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="services" className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                  Signature Services
                </span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Each service is meticulously crafted to restore, protect, and celebrate your vehicle with unparalleled attention to detail.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-2/20 rounded-2xl blur-xl" />
                  <div className="relative bg-surface/70 backdrop-blur-sm border border-border rounded-2xl p-8 h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent-2 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                  Transparent Investment
                </span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Tailored packages designed to deliver premium results while fitting your vehicle's needs and lifestyle.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {pricingOptions.map((option, index) => (
                <motion.div
                  key={option.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative h-full ${index === 1 ? "lg:-mt-8" : ""}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-2/20 rounded-3xl blur-2xl" />
                  <div className={`relative bg-background/80 backdrop-blur-sm border border-border rounded-3xl p-10 flex flex-col gap-6 h-full ${
                    index === 1 ? "border-primary/60 shadow-xl shadow-primary/30" : ""
                  }`}>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-muted">{option.cadence}</p>
                      <h3 className="font-serif text-3xl font-bold text-foreground mt-2">{option.name}</h3>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-foreground">{option.price}</p>
                      <p className="text-sm text-muted mt-1">Includes consultation and tailored recommendations</p>
                    </div>
                    <p className="text-muted leading-relaxed">{option.description}</p>
                    <ul className="space-y-3">
                      {option.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-muted">
                          <span className="mt-1 inline-flex w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent-2 items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-foreground" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="#contact"
                      className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary via-accent-2 to-secondary text-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                    >
                      Reserve This Package
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                  Recent Transformations
                </span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                A curated look at vehicles rejuvenated by the Echelon Precision Detailing team.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-3xl border border-border"
                >
                  <Image src={item.image} alt={item.title} width={640} height={480} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 border border-primary/30 text-foreground">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                  Client Testimonials
                </span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Hear from Arizona drivers who trust us with their most prized vehicles.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-surface/70 backdrop-blur-sm border border-border rounded-3xl p-8 flex flex-col gap-6"
                >
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                  Ready to Transform Your Vehicle?
                </span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                Connect with our team for tailored recommendations, premium detailing schedules, and ceramic coating consultations.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="bg-surface/70 backdrop-blur-sm border border-border rounded-3xl p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-2 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Call or Text</h3>
                      <p className="text-muted">602-710-4211</p>
                      <p className="text-sm text-muted mt-1">Mon - Sat: 8 AM — 6 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-2 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted break-all">Zlaursen@echelonprecision.com</p>
                      <p className="text-sm text-muted mt-1">Expect a response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent-2 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Mobile Service Areas</h3>
                      <p className="text-muted">Scottsdale • Phoenix • Paradise Valley • Cave Creek</p>
                    </div>
                  </div>

                  <a
                    href="https://facebook.com/EchelonPrecisionDetailing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-foreground hover:text-accent-1 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    Follow us for recent projects
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-2/20 rounded-3xl blur-2xl" />
                <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-3xl p-8">
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-primary/20 border border-primary/30 rounded-xl flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent-1" />
                      <p className="text-foreground font-semibold">Message sent successfully! We'll be in touch shortly.</p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-foreground">
                          Name*
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/60 border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-semibold text-foreground">
                          Email*
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/60 border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background/60 border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="(602) 555-0123"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-semibold text-foreground">
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background/60 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="Signature Detail">Signature Detail</option>
                          <option value="Elite Enhancement">Elite Enhancement</option>
                          <option value="Echelon Ceramic">Echelon Ceramic</option>
                          <option value="Custom Project">Custom Project</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-foreground">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background/60 border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                        placeholder="Tell us about your vehicle and goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-4 bg-gradient-to-r from-primary via-accent-2 to-secondary text-foreground rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent-2/20" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center space-y-8"
            >
              <h2 className="font-serif text-4xl md:text-6xl font-bold text-balance">
                Experience the Echelon Difference
              </h2>
              <p className="text-xl text-muted leading-relaxed">
                Our commitment to excellence ensures every vehicle leaves with a breathtaking finish and long-lasting protection.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="#pricing"
                  className="px-10 py-5 bg-gradient-to-r from-primary via-accent-2 to-secondary text-foreground rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  Explore Packages
                </Link>
                <a
                  href="tel:602-710-4211"
                  className="px-10 py-5 bg-surface/60 backdrop-blur-sm border-2 border-border text-foreground rounded-full font-bold text-lg hover:bg-surface transition-all duration-300"
                >
                  Speak with a Specialist
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
