import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Github,
  Instagram
} from "lucide-react";
import icon from "/JIQ_main_logo_no_bg.png";

const Contact = () => {
  useEffect(() => window.scrollTo({ behavior: "smooth", top: 0 }), []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Address",
      details: "juveniq105@gmail.com",
      action: "mailto:contact@juveniq.co.za",
    },
     {
      icon: Phone,
      title: "Phone Number #1",
      details: "+27 60 743 1268",
      action: "tel:+27607431268"
    },
    {
      icon: Phone,
      title: "Phone Number #2",
      details: "+27 78 332 2419",
      action: "tel:+27783322419"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: "eMalahleni, South Africa",
      action: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 8AM - 6PM",
      action: "#",
    },
  ];

   const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100066476117731 ",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/JuveniQ",
      color: "hover:text-blue-400"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/juveniq",
      color: "hover:text-blue-700"
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://instagram.com/juveniq',
      color: 'hover:text-purple-700'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <div className="mb-8 flex justify-center">
            <div className="logo-space-small w-24 h-24 rounded-full text-2xl shadow-xl">
              <img src={icon} alt="Logo" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-tertiary max-w-3xl mx-auto">
            Ready to transform your business with technology? Let's discuss your
            project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="fade-in-up">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/mvgrrkdq"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-2 min-h-[120px]"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Card
                    key={info.title}
                    className="hover:shadow-lg transition-all duration-300 border-border"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.action.startsWith("mailto:") ||
                      info.action.startsWith("tel:") ? (
                        <a
                          href={info.action}
                          className="text-tertiary hover:text-primary transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-tertiary">{info.details}</p>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-border">
              <CardContent className="p-0">
                <div className="h-48 bg-accent/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-tertiary">Interactive Map Coming Soon</p>
                    <p className="text-sm text-tertiary">eMalahleni, South Africa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-6">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        className={`text-tertiary ${social.color} transition-colors`}
                        aria-label={social.name}
                      >
                        <Icon className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
                <p className="text-sm text-tertiary mt-4">
                  Stay updated with our latest projects and tech insights.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-20 fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-tertiary">
              Quick answers to questions you may have
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer:
                  "Most projects take 2-8 weeks depending on complexity. We'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes! All our packages include support periods, and we offer extended maintenance plans for long-term partnerships.",
              },
              {
                question: "Can you work with existing systems?",
                answer:
                  "Absolutely. We specialize in integrating with existing software and databases to enhance your current setup.",
              },
              {
                question: "What technologies do you use?",
                answer:
                  "We use modern, proven technologies like React, Node.js, Python, and cloud platforms to ensure reliability and scalability.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-tertiary text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
