import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Search, 
  ShieldCheck, 
  ClipboardCheck, 
  Banknote,
  ArrowRight 
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Upload Documents",
    description: "Submit death certificate, ID proofs (PAN, Aadhaar), and relationship documents securely.",
    time: "Day 1",
  },
  {
    icon: ShieldCheck,
    title: "Verification",
    description: "Our system verifies documents via OCR and manual review by certified officers.",
    time: "Day 1-2",
  },
  {
    icon: Search,
    title: "Asset Discovery",
    description: "We search and identify all linked bank accounts, mutual funds, FDs, SIPs, and more.",
    time: "Day 3-5",
  },
  {
    icon: ClipboardCheck,
    title: "Claim Submission",
    description: "File claims for each discovered asset with required documentation.",
    time: "Day 5-7",
  },
  {
    icon: Banknote,
    title: "Resolution",
    description: "Receive guidance on transferring assets or closure, with full status tracking.",
    time: "Day 7-10",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-accent mb-3">
            Simple 5-Step Process
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            How ClaimSecure Works
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process guides you through every step, from document 
            upload to final resolution—with 24/7 support along the way.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-[80%] h-0.5 bg-border" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                <Card variant="step" className="h-full">
                  <CardContent className="p-6 space-y-4">
                    {/* Step number badge */}
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-accent" />
                      </div>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                        {step.time}
                      </span>
                    </div>

                    {/* Step number */}
                    <div className="flex items-center gap-2">
                      <span className="text-4xl font-serif font-bold text-primary/20">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow connector for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 z-10 h-8 w-8 rounded-full bg-background border-2 border-accent items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
