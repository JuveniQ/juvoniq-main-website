
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe, Smartphone, Brain, Wrench } from "lucide-react";

const Home = () => {
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-accent/10 to-background py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23e5e7eb" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center fade-in">
            <div className="mb-8 flex justify-center">
              <div className="logo-space w-20 h-20 text-3xl shadow-2xl">
                J
              </div>
            </div>
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Join hundreds of African businesses that trust JuvoniQ for their technology needs. 
            Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-accent shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
                Start Your Project
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-8 py-6 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
