
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import icon from '/JIQ_main_logo_no_bg.png'
import { projects } from "@/lib/data";

const Portfolio = () => {

  //Scroll the page to the top on page load
  useEffect(() => window.scrollTo({ behavior: 'smooth', top: 0 }), [])

  
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="mb-8 flex justify-center">
            <div className="logo-space-small w-24 h-24 rounded-full text-2xl shadow-xl">
              <img src={icon} alt="Logo" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-tertiary max-w-3xl mx-auto">
            Discover how we've helped businesses across Africa transform their
            operations with custom technology solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 mb-20">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 fade-in-up border-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </CardTitle>
                    <p className="text-tertiary leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0">
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-primary/20 text-primary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-tertiary">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
                        Business Impact
                      </h4>
                      <p className="text-primary font-medium">
                        {project.impact}
                      </p>
                    </div>

                    {/* Action Buttons */}
                    {project.link &&
                      <Link to={project.link}>
                        <div className="flex flex-col sm:flex-row gap-3">
                          
                            <Button
                              variant="outline"
                              className="flex-1 border-primary text-primary hover:bg-primary/10"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Go to
                            </Button>
                        </div>
                      </Link>
                    }
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        {false && <div className="bg-accent/30 rounded-2xl p-8 lg:p-12 mb-16 fade-in-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-tertiary">
              Real results for real businesses across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "5", label: "Countries Served" },
              { number: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-tertiary font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>}

        {/* CTA Section */}
        <div className="text-center fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-tertiary mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a custom solution that drives real results for your business.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
