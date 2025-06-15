
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

// Helper to display both ZAR and USD & strikethrough
function PriceDisplay({ oldZar, oldUsd }: { oldZar: number, oldUsd: number }) {
  const newZar = Math.round(oldZar * 0.15);
  const newUsd = Math.round(oldUsd * 0.15);
  return (
    <div>
      <span className="line-through text-sm text-muted-foreground mr-2">
        R{oldZar.toLocaleString()} (~${oldUsd.toLocaleString()})
      </span>
      <span className="text-3xl font-bold text-primary">
        R{newZar.toLocaleString()} (~${newUsd.toLocaleString()})
      </span>
    </div>
  );
}

type Package = {
  type: string;
  name: string;
  description: string;
  delivery: string;
  oldZar: number;
  oldUsd: number;
  features: string[];
};

export function ServicePackages({ packages }: { packages: Package[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((pkg, index) => (
        <Card
          key={pkg.name}
          className="hover-lift transition-all duration-300 fade-in-up relative group border-border"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              {pkg.name}
            </CardTitle>
            <p className="text-tertiary mb-3 leading-relaxed">
              <span className="font-medium">{pkg.type} Package</span>
            </p>
            <div className="mb-2">
              <PriceDisplay oldZar={pkg.oldZar} oldUsd={pkg.oldUsd} />
            </div>
            <div className="text-sm text-muted-foreground mb-2 italic">
              {pkg.delivery} delivery
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="mb-4 text-tertiary">{pkg.description}</p>
            <ul className="space-y-2 mb-6">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                  <span className="text-tertiary">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button className="w-full transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                Get Started
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
