import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-8 md:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-primary-foreground space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Start Your Claim?
              </h2>
              <p className="text-lg opacity-90 max-w-lg">
                Our compassionate team is here to guide you through every step. 
                Begin your claim today and let us handle the complexity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="xl" asChild>
                  <Link to="/register" className="gap-2">
                    Start Your Claim
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <Link to="/support" className="gap-2">
                    <Phone className="h-5 w-5" />
                    Talk to Us
                  </Link>
                </Button>
              </div>
            </div>

            {/* Stats/Trust indicators */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10,000+", label: "Families Helped" },
                { value: "₹2,500 Cr", label: "Assets Claimed" },
                { value: "7-10 Days", label: "Avg. Processing" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/70 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
