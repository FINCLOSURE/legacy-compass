import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => {
  const highlights = [
    { icon: Shield, text: "Bank-grade encryption" },
    { icon: Clock, text: "7-10 day processing" },
    { icon: CheckCircle2, text: "Government verified" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      />

      <div className="container relative mx-auto px-4 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <Shield className="h-4 w-4" />
                <span>Trusted by 10,000+ families across India</span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Claim Your Loved One's Financial Legacy
              </h1>
              
              <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
                A secure, compassionate process to discover and claim bank accounts, 
                mutual funds, and other assets of a deceased relative—with verified 
                documentation and step-by-step guidance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" asChild>
                <Link to="/register" className="gap-2">
                  Start Your Claim
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/how-it-works">See How It Works</Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm opacity-80">
                  <item.icon className="h-5 w-5" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Card */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-foreground/5 rounded-3xl blur-xl" />
              <img 
                src={heroImage} 
                alt="Family reviewing important documents together" 
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground rounded-xl shadow-large p-4 animate-fade-up">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-xl">₹2,500 Cr+</p>
                    <p className="text-xs text-muted-foreground">Successfully claimed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
