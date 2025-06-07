
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

const Services = () => {
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

  const packages = [
    {
      name: "LaunchPad",
      description: "Perfect for startups and small businesses getting started",
      price: "From R15,000",
      features: [
        "Basic website or mobile app",
        "Responsive design",
        "1 month support",
        "Training session",
        "Basic analytics"
      ],
      highlight: false
    },
    {
      name: "BizBooster",
      description: "Comprehensive solution for growing businesses",
      price: "From R45,000",
      features: [
        "Custom web application",
        "Mobile app included",
        "3 months support",
        "Advanced features",
        "Team training",
        "SEO optimization"
      ],
      highlight: true
    },
    {
      name: "SmartClinic",
      description: "Specialized solutions for healthcare and clinics",
      price: "From R75,000",
      features: [
        "Patient management system",
        "Appointment scheduling",
        "Medical records",
        "Billing integration",
        "Compliance features",
        "Staff training"
      ],
      highlight: false
    },
    {
      name: "EduTech",
      description: "Educational technology for schools and training centers",
      price: "From R60,000",
      features: [
        "Learning management system",
        "Student portal",
        "Assessment tools",
        "Progress tracking",
        "Mobile access",
        "Teacher training"
      ],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 fade-in">
          <div className="mb-8 flex justify-center">
            <div className="logo-space w-16 h-16 text-2xl shadow-xl">
              J
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
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Solution Packages
            </h2>
            <p className="text-xl text-tertiary max-w-3xl mx-auto leading-relaxed">
              Choose from our pre-designed packages or let us create a custom solution for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name} 
                className={`hover-lift transition-all duration-300 fade-in-up relative group ${
                  pkg.highlight ? 'border-primary shadow-xl scale-105' : 'border-border'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.highlight && (
                  <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground shadow-lg">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-tertiary mb-6 leading-relaxed">
                    {pkg.description}
                  </p>
                  <div className="text-3xl font-bold text-primary">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-tertiary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      className={`w-full transition-all duration-300 hover:scale-105 ${
                        pkg.highlight 
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg' 
                          : 'bg-accent hover:bg-accent/80 text-accent-foreground'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
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
