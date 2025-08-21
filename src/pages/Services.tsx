import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Brain,
  Database,
  Headphones,
  ArrowRight,
  Check,
} from "lucide-react";
import { useEffect } from "react";
import { FaAndroid, FaApple } from 'react-icons/fa';
import icon from '/JIQ_main_logo_no_bg.png';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ServicePackages } from "@/components/ServicePackages";
import { webPackages, appPackages } from '@/lib/data';

const promoNote = "Promotion: 85% OFF for 2025 (prices return to normal next year)";

// Helper to display both ZAR and USD & strikethrough
function PriceDisplay({ oldZar, oldUsd }: { oldZar: number, oldUsd: number }) {
  const newZar = Math.round(oldZar * 0.15);
  const newUsd = Math.round(oldUsd * 0.15);
  return (
    <div className="text-center sm:text-left">
      <span className="line-through text-sm text-muted-foreground mr-2">
        R{oldZar.toLocaleString()} (~${oldUsd.toLocaleString()})
      </span>
      <div className="text-2xl sm:text-3xl font-bold text-primary mt-1">
        R{newZar.toLocaleString()} (~${newUsd.toLocaleString()})
      </div>
    </div>
  );
}

const Services = () => {
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, []);

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
    <div className="min-h-screen py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Header === */}
        <div className="text-center mb-20 fade-in">
          <div className="mb-8 flex justify-center">
            <div className="logo-space-small w-24 h-24 bg-primary rounded-full shadow-xl group">
              <img src={icon} alt="JuveniQ Logo" className="h-24 w-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From web applications to AI automation, we provide comprehensive 
            technology solutions tailored to your business needs.
          </p>
        </div>

        {/* === Mission Anchor === */}
        <div className="text-center mb-16 fade-in">
          <p className="text-lg text-muted-foreground italic max-w-3xl mx-auto">
            “<span className="font-semibold text-primary">Simple Tech. Real Impact.</span>” — We build only what you need, so you can focus on what matters.
          </p>
        </div>

        {/* === Core Services Grid === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="card-3d lift group border-primary/20 hover:border-primary/40 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center group">
                        <Check className="h-5 w-5 text-primary mr-3 transition-transform group-hover:translate-x-1" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* === Service Packages === */}
        <div className="mb-20">
          <div className="text-center mb-10 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              JuveniQ Service Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-4">
              Ready-made solutions for African businesses — simple, affordable, and scalable.
            </p>
            <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30">
              {promoNote}
            </div>
          </div>

          <Tabs defaultValue="web" className="w-full">
            <TabsList className="flex gap-2 justify-center mb-8 flex-wrap">
              <TabsTrigger value="web" className="flex items-center gap-2 text-base px-6 py-3">
                <Globe className="h-5 w-5" />
                Web Packs
              </TabsTrigger>
              <TabsTrigger value="apps" className="flex items-center gap-2 text-base px-6 py-3">
                Mobile Apps
                <FaApple className="h-5 w-5 opacity-70 -ml-1" />
                <FaAndroid className="h-5 w-5 opacity-70 -ml-1" />
              </TabsTrigger>
            </TabsList>

            <TabsContent value="web">
              <ServicePackages packages={webPackages} />
            </TabsContent>
            <TabsContent value="apps">
              <ServicePackages packages={appPackages} />
            </TabsContent>
          </Tabs>

          <div className="text-center mt-4">
            <span className="text-sm text-muted-foreground">{promoNote}</span>
          </div>
        </div>

        {/* === CTA Section === */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 lg:p-16 card-3d shadow-xl relative overflow-hidden fade-in-up">
          {/* Floating accent shape */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>

          <h2 className="text-4xl font-bold text-foreground mb-6">
            Need Something Custom?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Every business is unique. Let us create a tailored solution that perfectly 
            fits your specific requirements and budget.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="btn-primary lift px-8 py-6 text-lg gap-3 group"
            >
              Discuss Your Project
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;