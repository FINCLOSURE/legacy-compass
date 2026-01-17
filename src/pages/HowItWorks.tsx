import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/Chatbot";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, 
  ShieldCheck, 
  Search, 
  ClipboardCheck, 
  Banknote,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    step: 1,
    icon: FileText,
    title: "Register & Upload Documents",
    description: "Create your account and upload the required documents: death certificate, PAN card, Aadhaar card, and relationship proof.",
    details: [
      "Create a secure account with email verification",
      "Upload death certificate (JPG or PDF format)",
      "Upload identity proofs of deceased",
      "Add relationship documentation",
    ],
    time: "Day 1",
  },
  {
    step: 2,
    icon: ShieldCheck,
    title: "Document Verification",
    description: "Our system automatically extracts and validates information from your documents using OCR technology, followed by manual verification.",
    details: [
      "OCR extracts key data (names, IDs, dates)",
      "Cross-verification of document details",
      "Fuzzy matching to catch minor discrepancies",
      "Manual review by certified officers",
    ],
    time: "Day 1-2",
  },
  {
    step: 3,
    icon: Search,
    title: "Asset Discovery",
    description: "We search across financial institutions to discover all linked assets including bank accounts, mutual funds, FDs, and more.",
    details: [
      "Search across major banks and AMCs",
      "Discover savings accounts, FDs, and SIPs",
      "Identify mutual fund folios",
      "Find outstanding loans and liabilities",
    ],
    time: "Day 3-5",
  },
  {
    step: 4,
    icon: ClipboardCheck,
    title: "Claim Submission",
    description: "File claims for each discovered asset with the necessary documentation. Our platform handles the paperwork.",
    details: [
      "One-click claim filing for each asset",
      "Automatic document compilation",
      "Track claim status in real-time",
      "Admin verification of each claim",
    ],
    time: "Day 5-7",
  },
  {
    step: 5,
    icon: Banknote,
    title: "Resolution & Transfer",
    description: "Receive step-by-step guidance on transferring assets. Our team provides support until final resolution.",
    details: [
      "Detailed transfer instructions",
      "Coordination with financial institutions",
      "Complete audit trail of all actions",
      "Closure confirmation and documentation",
    ],
    time: "Day 7-10",
  },
];

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              How ClaimSecure Works
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              A simple, secure, 5-step process to help you claim your loved one's 
              financial assets with complete transparency.
            </p>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {/* Timeline */}
            <div className="max-w-4xl mx-auto">
              {steps.map((step, idx) => (
                <div key={step.step} className="relative">
                  {/* Connector line */}
                  {idx < steps.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-border" />
                  )}
                  
                  <div className="flex gap-6 pb-12">
                    {/* Step number */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <Card variant="elevated" className="flex-1">
                      <CardHeader>
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                              <step.icon className="h-5 w-5 text-accent" />
                            </div>
                            <div>
                              <CardTitle className="text-xl">{step.title}</CardTitle>
                            </div>
                          </div>
                          <span className="text-xs font-medium bg-muted px-3 py-1.5 rounded-full flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {step.time}
                          </span>
                        </div>
                        <CardDescription className="text-base mt-2">
                          {step.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust indicators */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-center mb-12">
              Why Families Trust ClaimSecure
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Lock,
                  title: "Bank-Grade Security",
                  description: "256-bit encryption protects your documents and data at every step.",
                },
                {
                  icon: Users,
                  title: "Expert Support",
                  description: "24/7 access to trained professionals who understand your situation.",
                },
                {
                  icon: CheckCircle2,
                  title: "Verified Process",
                  description: "Government-compliant verification with complete audit trails.",
                },
              ].map((item, idx) => (
                <Card key={idx} variant="feature" className="text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-serif font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Ready to Begin?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Start your claim today and let our team guide you through every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/register" className="gap-2">
                  Start Your Claim <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/support">Talk to Support</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default HowItWorks;
