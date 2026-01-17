import { Card, CardContent } from "@/components/ui/card";
import iconSecureDocs from "@/assets/icon-secure-docs.png";
import iconAssets from "@/assets/icon-assets.png";
import iconSupport from "@/assets/icon-support.png";
import { FileCheck, Landmark, Headphones, Clock, Shield, Eye } from "lucide-react";

const features = [
  {
    icon: iconSecureDocs,
    fallbackIcon: FileCheck,
    title: "Secure Document Verification",
    description: "Upload death certificates, PAN, and Aadhaar securely. Our OCR technology extracts and validates key information automatically.",
    highlights: ["256-bit encryption", "OCR extraction", "Manual review backup"],
  },
  {
    icon: iconAssets,
    fallbackIcon: Landmark,
    title: "Complete Asset Discovery",
    description: "Discover all linked financial assets—bank accounts, mutual funds, SIPs, fixed deposits, and even outstanding loans owed to or by the deceased.",
    highlights: ["Multi-bank search", "Mutual fund tracking", "Loan discovery"],
  },
  {
    icon: iconSupport,
    fallbackIcon: Headphones,
    title: "24/7 Guided Support",
    description: "Our AI chatbot and human support team are available round-the-clock to answer questions and guide you through every step.",
    highlights: ["AI assistance", "Human escalation", "Video tutorials"],
  },
];

const trustBadges = [
  { icon: Shield, label: "Bank-grade Security" },
  { icon: Clock, label: "7-10 Day Processing" },
  { icon: Eye, label: "Full Transparency" },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent mb-3">
            Why Choose ClaimSecure
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Trust, Designed with Care
          </h2>
          <p className="text-muted-foreground text-lg">
            We understand this is a sensitive time. Our platform is designed to be 
            secure, simple, and supportive—every step of the way.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, idx) => (
            <Card key={idx} variant="feature" className="group">
              <CardContent className="p-8 space-y-6">
                {/* Icon */}
                <div className="h-16 w-16 rounded-2xl bg-accent/10 p-3 group-hover:scale-110 transition-transform">
                  <img 
                    src={feature.icon} 
                    alt="" 
                    className="h-full w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, i) => (
                    <span 
                      key={i}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-8">
          {trustBadges.map((badge, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-3 bg-card shadow-soft rounded-xl px-6 py-4"
            >
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <badge.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
