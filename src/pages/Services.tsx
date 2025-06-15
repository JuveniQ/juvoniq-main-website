import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Brain, 
  Database, 
  Headphones, 
  ArrowRight,
  Check
} from "lucide-react";
import { useEffect } from "react";
import icon from '/JIQ_main_logo_no_bg.png'

const promoNote = "Promotion: 85% OFF for 2025 (prices return to normal next year)";

// Helper to display both ZAR and USD & strikethrough
function PriceDisplay({ oldZar, oldUsd }: { oldZar: number, oldUsd: number }) {
  const newZar = Math.round(oldZar * 0.15);
  const newUsd = Math.round(oldUsd * 0.15);
  return (
    <div>
      <span className="line-through text-sm text-muted-foreground mr-2">R{oldZar.toLocaleString()} (~${oldUsd.toLocaleString()})</span>
      <span className="text-3xl font-bold text-primary">R{newZar.toLocaleString()} (~${newUsd.toLocaleString()})</span>
    </div>
  );
}

const packages = [
  {
    type: "Web",
    name: "Basic Website",
    description: "Up to 5 pages (Home, About, Contact, 1–2 service pages) with custom UI/UX design, responsive layout, basic SEO, contact form, and 1 month maintenance (content updates and bug fixes).",
    delivery: "~4–6 weeks",
    oldZar: 15000,
    oldUsd: 1000,
    features: [
      "5-page website",
      "Custom design",
      "Responsive layout",
      "Basic SEO",
      "Contact form",
      "1 month maintenance"
    ]
  },
  {
    type: "Web",
    name: "Standard Website",
    description: "10-page corporate site with professional design, CMS (e.g. WordPress), e-commerce or booking plugin, on-page SEO, 3 months maintenance (updates, security patches).",
    delivery: "~8–10 weeks",
    oldZar: 60000,
    oldUsd: 4000,
    features: [
      "10-page site",
      "Professional design",
      "CMS integration",
      "E-commerce or booking",
      "SEO optimization",
      "3 months maintenance"
    ]
  },
  {
    type: "Web",
    name: "Premium Website",
    description: "20+ page enterprise portal or web app with premium UI/UX, custom integrations (e.g. CRM, payments), user accounts, admin dashboard, 6 months priority support and upgrades.",
    delivery: "~12–16 weeks",
    oldZar: 150000,
    oldUsd: 10000,
    features: [
      "20+ pages or enterprise web app",
      "Premium UI/UX",
      "Custom integrations",
      "User accounts & dashboard",
      "6 months support"
    ]
  },
  {
    type: "App",
    name: "Basic App",
    description: "Simple cross-platform mobile app (React Native), e.g. informational or portfolio app. Includes login, basic content feed, push notifications, Android & iOS, 1 month bug-fix support.",
    delivery: "~8–10 weeks",
    oldZar: 200000,
    oldUsd: 12000,
    features: [
      "Simple mobile app",
      "Login/sign-up",
      "Basic content feed",
      "Push notifications",
      "Android & iOS",
      "1 month support"
    ]
  },
  {
    type: "App",
    name: "Standard App",
    description: "SME eCommerce or booking app—user profiles, search, cart or booking engine, payments, chat support, custom UI/UX, cross-platform, 3 months maintenance.",
    delivery: "~16 weeks",
    oldZar: 600000,
    oldUsd: 40000,
    features: [
      "eCommerce or booking",
      "User profiles & chat",
      "Payments integration",
      "Custom UI/UX",
      "Cross-platform",
      "3 months maintenance"
    ]
  },
  {
    type: "App",
    name: "Premium App",
    description: "Full-featured enterprise app—advanced modules (real-time chat, analytics, admin panel, high security), all Standard features, 6+ months dedicated priority support.",
    delivery: "~24+ weeks",
    oldZar: 1200000,
    oldUsd: 80000,
    features: [
      "Enterprise features",
      "Advanced modules",
      "High security",
      "Analytics dashboard",
      "Admin panel",
      "6+ months support"
    ]
  },
];

const Services = () => {
//Scroll the page to the top on page load
useEffect(()=> window.scrollTo({behavior: 'smooth', top: 0}), [])

  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Custom web applications built with modern technologies to streamline your business operations and enhance customer experiences.",
      features: ["Responsive Design", "Cloud Deployment", "SEO Optimized", "Analytics Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications that connect you with your customers wherever they are.",
      features: ["iOS & Android", "Cross-Platform", "Push Notifications", "Offline Capability"]
    },
    {
      icon: Brain,
      title: "AI & Automation Tools",
      description: "Intelligent automation solutions that reduce manual work and improve efficiency across your organization.",
      features: ["Process Automation", "AI Chatbots", "Data Analysis", "Smart Workflows"]
    },
    {
      icon: Database,
      title: "Business Systems",
      description: "Comprehensive business management systems including POS, CRM, and inventory management solutions.",
      features: ["Point of Sale", "Customer Management", "Inventory Tracking", "Financial Reports"]
    },
    {
      icon: Headphones,
      title: "Tech Support & Training",
      description: "Ongoing technical support and user training to ensure your team gets the most out of your technology investments.",
      features: ["24/7 Support", "User Training", "System Maintenance", "Performance Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in">
          <div className="mb-8 flex justify-center">
            <div className="logo-space-small w-24 h-24 rounded-full text-2xl shadow-xl">
              <img src={icon} alt="Logo"/>
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Our Services
          </h1>
          <p className="text-xl text-tertiary max-w-4xl mx-auto leading-relaxed">
            From web applications to AI automation, we provide comprehensive 
            technology solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="hover-lift transition-all duration-300 fade-in-up border-border group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-tertiary leading-relaxed text-lg">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3" />
                        <span className="text-tertiary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Packages Section */}
        <div className="mb-20">
          <div className="text-center mb-8 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              JuveniQ Service Packages
            </h2>
            <p className="text-xl text-tertiary max-w-3xl mx-auto leading-relaxed">
              Tiered web and mobile app packages for every business ambition. {promoNote}
            </p>
          </div>

          {/* Category badges */}
          <div className="flex gap-3 justify-center mb-6">
            <Badge variant="outline" className="bg-primary/5 text-primary">Web Packages</Badge>
            <Badge variant="outline" className="bg-primary/5 text-primary">App Packages</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name} 
                className={`hover-lift transition-all duration-300 fade-in-up relative group border-border`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-tertiary mb-3 leading-relaxed">
                    <span className="font-medium">{pkg.type} Package</span>
                  </p>
                  <div className="mb-2">
                    <PriceDisplay oldZar={pkg.oldZar} oldUsd={pkg.oldUsd} />
                  </div>
                  <div className="text-sm text-muted-foreground mb-2 italic">{pkg.delivery} delivery</div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="mb-4 text-tertiary">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-tertiary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      className="w-full transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <span className="text-xs text-muted-foreground">{promoNote}</span>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl p-12 lg:p-16 fade-in-up shadow-lg">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Need Something Custom?
          </h2>
          <p className="text-xl text-tertiary mb-10 max-w-3xl mx-auto leading-relaxed">
            Every business is unique. Let us create a tailored solution that perfectly 
            fits your specific requirements and budget.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
              Discuss Your Project
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
