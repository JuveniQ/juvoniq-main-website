import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import icon from '/JIQ_main_logo_no_bg.png';
import { projects } from "@/lib/data";

const Portfolio = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, []);

  return (
    <div className="min-h-screen py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Header === */}
        <div className="text-center mb-16 fade-in">
          <div className="mb-8 flex justify-center">
            <div className="logo-space-small w-24 h-24  bg-primary rounded-full shadow-xl group">
              <img src={icon} alt="JuveniQ Logo" className="h-24 y  w-auto transition-transform duration-300 group-hover:scale-105" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across Africa transform their operations with custom technology solutions.
          </p>
        </div>

        {/* === Slogan Anchor === */}
        <div className="text-center mb-16 fade-in">
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            “<span className="font-semibold text-primary">Simple Tech. Real Impact.</span>” — We build tools that solve real problems for real people.
          </p>
        </div>

        {/* === Projects Grid === */}
        <div className="space-y-16 mb-20">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="card-3d lift overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
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
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-primary/20 text-primary text-sm px-2 py-1 hover:bg-primary/10 transition-colors"
                          >
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
                          <li key={feature} className="flex items-center text-sm text-muted-foreground group">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Business Impact */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
                        Business Impact
                      </h4>
                      <p className="text-primary font-medium italic">
                        "{project.impact}"
                      </p>
                    </div>

                    {/* Action Buttons */}
                    {project.link && (
                      <Link to={project.link}>
                        <Button
                          variant="outline"
                          className="flex items-center gap-2 border-primary text-primary hover:bg-primary/10 hover:text-primary lift px-6 py-2 text-sm group"
                        >
                          <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          View Project
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* === Stats Section (Now Enabled) === */}
        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12 mb-16 card-3d shadow-lg relative overflow-hidden fade-in">
          {/* Floating accent shape */}
          <div className="pointer-events-none absolute -top-16 -right-16 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact in Numbers</h2>
            <p className="text-lg text-muted-foreground">
              Real results for real businesses across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" },
              { number: "1", label: "Countries Served" },
              { number: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center fade-in"
                style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* === CTA Section === */}
        <div className="text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 card-3d shadow-xl fade-in-up">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can create a custom solution that drives real results for your business.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="btn-primary lift px-8 py-3 text-lg gap-3 group"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;