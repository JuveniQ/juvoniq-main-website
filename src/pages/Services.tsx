
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
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-tertiary max-w-3xl mx-auto">
            From web applications to AI automation, we provide comprehensive 
            technology solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title} 
                className="hover:shadow-lg transition-all duration-300 fade-in-up border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-tertiary leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm text-tertiary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Packages Section */}
        <div className="mb-16">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Solution Packages
            </h2>
            <p className="text-lg text-tertiary max-w-2xl mx-auto">
              Choose from our pre-designed packages or let us create a custom solution for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card 
                key={pkg.name} 
                className={`hover:shadow-lg transition-all duration-300 fade-in-up relative ${
                  pkg.highlight ? 'border-primary shadow-lg' : 'border-border'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {pkg.highlight && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-sm text-tertiary mb-4">
                    {pkg.description}
                  </p>
                  <div className="text-2xl font-bold text-primary">
                    {pkg.price}
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-tertiary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button 
                      className={`w-full ${
                        pkg.highlight 
                          ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
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
        <div className="text-center bg-accent/30 rounded-2xl p-8 lg:p-12 fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Something Custom?
          </h2>
          <p className="text-lg text-tertiary mb-8 max-w-2xl mx-auto">
            Every business is unique. Let us create a tailored solution that perfectly 
            fits your specific requirements and budget.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
