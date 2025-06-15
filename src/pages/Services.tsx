
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ServicePackages } from "@/components/ServicePackages";

// Removed duplicate and non-existent icon import here

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

const webPackages = [
  {
    type: "Web",
    name: "Basic Website",
    description:
      "Approx. 5 pages (Home, About, Contact, 1–2 services); custom UI/UX design; responsive layout; basic SEO; contact form; 1 month maintenance (updates, bug fixes).",
    delivery: "~4–6 weeks",
    oldZar: 15000,
    oldUsd: 1000,
    features: [
      "5-page website",
      "Custom UI/UX",
      "Responsive layout",
      "Basic SEO",
      "Contact form",
      "1 month maintenance",
    ],
  },
  {
    type: "Web",
    name: "Standard Website",
    description:
      "10-page corporate site; professional design; CMS (e.g. WordPress); e-commerce or booking; on-page SEO; 3 months maintenance (minor updates, security patches).",
    delivery: "~8–10 weeks",
    oldZar: 60000,
    oldUsd: 4000,
    features: [
      "10-page corporate site",
      "Professional design",
      "CMS for updates",
      "E-commerce or booking",
      "SEO optimization",
      "3 months maintenance",
    ],
  },
  {
    type: "Web",
    name: "Premium Website",
    description:
      "20+ page enterprise portal or web app; premium UI/UX; custom integrations (CRM, payments); advanced features (user accounts, admin dashboard); 6 months support (major upgrades, priority response).",
    delivery: "~12–16 weeks",
    oldZar: 150000,
    oldUsd: 10000,
    features: [
      "20+ page web app",
      "Premium UI/UX",
      "Custom CRM & payments",
      "Advanced features",
      "Admin dashboard",
      "6 months support",
    ],
  },
];

const appPackages = [
  {
    type: "App",
    name: "Basic App",
    description:
      "Simple mobile app (React Native) – e.g. informational or portfolio app. Login/sign-up, content feed, push notifications, standard UI, Android & iOS, 1 month bug-fix support.",
    delivery: "~8–10 weeks",
    oldZar: 200000,
    oldUsd: 12000,
    features: [
      "Simple mobile app",
      "Sign-up/login",
      "Basic feed",
      "Push notifications",
      "Android & iOS",
      "1 month bug-fix support",
    ],
  },
  {
    type: "App",
    name: "Standard App",
    description:
      "SME-level app (eCommerce or booking): user profiles, search, shopping cart/booking engine, payment, chat support, custom UI/UX, cross-platform, 3 months maintenance.",
    delivery: "~16 weeks",
    oldZar: 600000,
    oldUsd: 40000,
    features: [
      "eCommerce/booking app",
      "User profiles & chat",
      "Payment integration",
      "Custom UI/UX",
      "Cross-platform",
      "3 months maintenance",
    ],
  },
  {
    type: "App",
    name: "Premium App",
    description:
      "Full-featured enterprise app. Includes all Standard features, plus advanced modules (real-time chat, analytics, admin panel, high security), priority support, 6+ months maintenance.",
    delivery: "~24+ weeks",
    oldZar: 1200000,
    oldUsd: 80000,
    features: [
      "Enterprise features",
      "Real-time chat/analytics",
      "Complex admin panel",
      "High security",
      "Priority support",
      "6+ months maintenance",
    ],
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

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="flex gap-2 justify-center mb-8">
              <TabsTrigger value="web" className="flex items-center gap-2 text-base">
                {/* Use Globe icon for Web Packs tab, since Web does not exist */}
                <Globe className="h-5 w-5" />
                Web Packs
              </TabsTrigger>
              <TabsTrigger value="apps" className="flex items-center gap-2 text-base">
                {/* Show both Android and iOS icon using Smartphone twice for visual parity */}
                <Smartphone className="h-5 w-5" />
                Mobile Apps
                <Smartphone className="h-5 w-5 opacity-60 -ml-2" />
              </TabsTrigger>
            </TabsList>
            <TabsContent value="web">
              <ServicePackages packages={webPackages} />
            </TabsContent>
            <TabsContent value="apps">
              <ServicePackages packages={appPackages} />
            </TabsContent>
          </Tabs>
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
