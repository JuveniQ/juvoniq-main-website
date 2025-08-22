import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

// Helper to display price range
function PriceDisplay({ minZar, maxZar }: { minZar: number; maxZar: number }) {
  return (
    <div className="text-center">
      <div className="text-2xl sm:text-3xl font-bold text-primary">
        R{minZar.toLocaleString()} – R{maxZar.toLocaleString()}
      </div>
    </div>
  );
}

type Package = {
  type: string;
  name: string;
  description: string;
  delivery: string;
  minZar: number;
  maxZar: number;
  features: string[];
};

export function ServicePackages({ packages }: { packages: Package[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {packages.map((pkg, index) => (
        <Card
          key={pkg.name}
          className="card-3d lift group border-primary/20 hover:border-primary/40 transition-all duration-300"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              {pkg.name}
            </CardTitle>
            <p className="text-muted-foreground mb-3 leading-relaxed">
              <span className="font-medium">{pkg.type} Package</span>
            </p>
            <div className="mb-2">
              <PriceDisplay minZar={pkg.minZar} maxZar={pkg.maxZar} />
            </div>
            <div className="text-sm text-muted-foreground italic">
              {pkg.delivery} delivery
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <p className="mb-4 text-muted-foreground text-sm leading-relaxed">
              {pkg.description}
            </p>
            <ul className="space-y-2 mb-6">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-center group">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <Button className="btn-primary lift w-full text-lg gap-3 group">
                Get Started
                <Check className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}