import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight, Globe, Smartphone, Brain, Wrench,
  Lightbulb, Users, Zap, Shield, Briefcase, School, Heart, 
  ChevronRight, ChevronsRight, Star, Award 
} from "lucide-react";

const Home = () => {
  const contentStartRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      contentStartRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Web Applications",
      description: "Custom web solutions that drive your business forward"
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications"
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Smart tools to streamline your operations"
    },
    {
      icon: Wrench,
      title: "Tech Support",
      description: "Ongoing support and training for your team"
    }
  ];

  const whyJuveniQ = [
    { icon: Lightbulb, title: "Tailored Simplicity", desc: "We build only what you need—no bloated features, just smart, simple tools." },
    { icon: Users, title: "Community-Centric", desc: "We empower local businesses and uplift underserved markets." },
    { icon: Zap, title: "All-in-One Support", desc: "From design to training to support—we handle it all." },
    { icon: Shield, title: "People First", desc: "We educate, listen, and ensure you’re in control of your tech." }
  ];

  

  const targetAudience = [
    { icon: Briefcase, label: "Small Businesses", desc: "Shops, salons, restaurants, logistics" },
    { icon: School, label: "Educators", desc: "Tutors, schools, training centers" },
    { icon: Heart, label: "NGOs", desc: "Community projects, outreach programs" },
    { icon: Star, label: "Entrepreneurs", desc: "Startups, freelancers, creatives" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* === Hero Banner: 3D + Slogan === */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/3 to-accent/5">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_30%_70%,hsl(var(--primary)/0.08),transparent),radial-gradient(circle_at_70%_30%,hsl(var(--accent)/0.06),transparent)]"></div>
        </div>

        <div className="pointer-events-none absolute -top-28 -right-28 w-60 h-60 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="pointer-events-none absolute -bottom-28 -left-28 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center max-w-4xl mx-auto fade-in" style={{ '--delay': '0.2s' } as React.CSSProperties}>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              Simple Tech.{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient">
                Real Impact.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We don’t just code, we empower. At JuveniQ, technology is a tool for growth, not complexity.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button className="btn-primary lift px-8 py-6 text-lg gap-3 group">
                  Get a Quote
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button className="btn-ghost lift px-8 py-6 text-lg border-primary text-primary">
                  See Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      

      {/* === Why JuveniQ? === */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Why Choose Juveni<span className='font-bold  font-quando'>Q</span>?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We don’t just build software, we build partnerships. Here’s what sets us apart.
            </p>
          </div>

          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJuveniQ.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="card-3d border-2 border-primary lift group border-primary/20 hover:border-primary/40 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6 text-center h-full flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-5 text-primary group-hover:scale-110 transition-transform">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-center flex-grow">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      

      {/* === Target Audience === */}
      <section className="py-24 bg-gradient-to-br from-primary/3 to-secondary/3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Who We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We design solutions for African businesses and communities with real challenges and real goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetAudience.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <Card
                  key={index}
                  className="card-3d lift group border-primary/20 text-center p-6 hover:bg-primary/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary">
                    {audience.label}
                  </h3>
                  <p className="text-muted-foreground">{audience.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* === Services Section === */}
      <section className="py-24 bg-app">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What We Do Best
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We specialize in creating technology solutions that are simple, effective, and tailored to African business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="card-3d lift group cursor-pointer border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 transition-colors duration-300 group-hover:text-primary">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:80px_80px]"></div>
        </div>
        <div className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Grow with Smart Tech?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Let’s build a solution that works for your business—simple, scalable, and sustainable.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/95 lift px-8 py-6 text-lg gap-3 group">
                Start Your Project
                <ChevronRight className="w-5 h-5 transition-transform  duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                variant="outline"
                className="border-2  border-primary-foreground text-primary hover:text-primary-foreground hover:bg-white/10 lift px-8 py-6 text-lg gap-3 group"
              >
                View All Services
                <ChevronsRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
