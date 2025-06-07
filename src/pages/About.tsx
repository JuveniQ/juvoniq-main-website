
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices in everything we do."
    },
    {
      icon: Target,
      title: "Simplicity",
      description: "Complex problems deserve simple solutions. We focus on creating technology that just works."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're committed to growing alongside our clients and the broader African tech ecosystem."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We measure our impact by the positive change we create for you."
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
            About JuvoniQ
          </h1>
          <p className="text-xl text-tertiary max-w-4xl mx-auto leading-relaxed">
            We're a young, dynamic African tech startup on a mission to make 
            technology accessible and impactful for businesses across the continent.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="fade-in-up">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Mission</h2>
            <p className="text-lg text-tertiary leading-relaxed">
              To democratize technology access for African businesses by providing 
              simple, affordable, and impactful software solutions. We believe that 
              every business, regardless of size, deserves access to world-class technology.
            </p>
          </div>
          <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Vision</h2>
            <p className="text-lg text-tertiary leading-relaxed">
              To become Africa's most trusted technology partner, known for creating 
              solutions that drive real business growth and positive social impact 
              across the continent.
            </p>
          </div>
        </div>

        {/* Founders Story */}
        <div className="bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl p-12 lg:p-16 mb-24 fade-in-up shadow-lg">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Our Founding Story
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Founders working together" 
                className="rounded-2xl w-full h-80 object-cover shadow-2xl hover-lift"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-lg text-tertiary leading-relaxed mb-6">
                JuvoniQ was founded by <strong className="text-foreground">Jay</strong> and{" "}
                <strong className="text-foreground">Sthembiso</strong>, two passionate 
                technologists who met while studying computer science in Cape Town.
              </p>
              <p className="text-lg text-tertiary leading-relaxed mb-6">
                After witnessing countless small businesses struggle with outdated systems 
                and expensive software solutions, they decided to create a company that 
                would bridge the technology gap for African entrepreneurs.
              </p>
              <p className="text-lg text-tertiary leading-relaxed">
                Starting from a small shared workspace, they've grown JuvoniQ into a 
                trusted partner for businesses, NGOs, and individuals across South Africa 
                and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-tertiary max-w-3xl mx-auto leading-relaxed">
              These principles guide every decision we make and every solution we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className="hover-lift transition-all duration-300 fade-in-up border-border group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-10">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-tertiary leading-relaxed text-lg">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Image */}
        <div className="text-center fade-in-up">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
            alt="JuvoniQ team collaborating" 
            className="rounded-3xl w-full max-w-5xl mx-auto h-80 lg:h-96 object-cover shadow-2xl hover-lift"
          />
          <p className="text-tertiary mt-6 text-lg">
            The JuvoniQ team collaborating on the next big project
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
