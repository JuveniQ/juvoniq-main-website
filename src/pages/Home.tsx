
import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe, Smartphone, Brain, Wrench, ChevronsRight, ChevronRight } from "lucide-react";

const Home = () => {
  const contentStartRef = useRef(null)

  useEffect(()=>{
    setTimeout(()=>{
      contentStartRef.current.scrollIntoView({behavior: 'smooth'})
    }, 1500)
  }, [])

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

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="w-full relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent/10">
        <div className="w-f h-61 "> {/* 16:9 aspect ratio */}
          <img
            src="/banner.png"
            alt="JuveniQ Main Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/10 to-background py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30" ref={contentStartRef}>
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:60px_60px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative" >
          <div className="text-center fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
              Simple Tech.{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Real Impact.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-tertiary mb-12 max-w-4xl mx-auto leading-relaxed">
              Empowering African businesses with custom software solutions.
              From startups to NGOs, we build technology that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-delay">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
                  Get a Quote
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
                  See Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What We Do Best
            </h2>
            <p className="text-xl text-tertiary max-w-3xl mx-auto leading-relaxed">
              We specialize in creating technology solutions that are simple,
              effective, and tailored to African business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  className="hover-lift transition-all duration-300 border-border group cursor-pointer fade-in-up"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-tertiary leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:80px_80px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Join hundreds of African businesses that trust JuveniQ for their technology needs.
            Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-accent shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
                Start Your Project
                <ChevronRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
                View All Services
                <ChevronsRight className='ml-3 h-5 w-5'/>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


