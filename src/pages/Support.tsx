import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/Chatbot";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageCircle, FileQuestion, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Our team will get back to you within 2 hours.",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              We're Here to Help
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
              Our compassionate support team is available 24/7 to guide you through 
              every step of the claims process.
            </p>
          </div>
        </section>

        {/* Contact options */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  value: "1800-XXX-XXXX",
                  sub: "Toll-free, 24/7",
                },
                {
                  icon: Mail,
                  title: "Email Support",
                  value: "support@claimsecure.com",
                  sub: "Response within 2 hours",
                },
                {
                  icon: MessageCircle,
                  title: "Live Chat",
                  value: "Chat with us now",
                  sub: "Click the chat button below",
                },
              ].map((contact, idx) => (
                <Card key={idx} variant="feature" className="text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <contact.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-1">{contact.title}</h3>
                    <p className="font-serif text-lg font-semibold text-primary mb-1">
                      {contact.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{contact.sub}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form & FAQ */}
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Form */}
              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" variant="cta" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* FAQ */}
              <div>
                <h2 className="font-serif text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "What documents do I need to start a claim?",
                      a: "You'll need the death certificate, PAN card, Aadhaar card of the deceased, and proof of your relationship (legal heir certificate or succession certificate).",
                    },
                    {
                      q: "How long does the verification process take?",
                      a: "Document verification typically takes 1-2 business days. The complete claim process takes 7-10 days.",
                    },
                    {
                      q: "Is my data secure?",
                      a: "Absolutely. We use 256-bit SSL encryption and AES-256 for stored documents. We're ISO 27001 certified.",
                    },
                    {
                      q: "What assets can you help discover?",
                      a: "Bank accounts, fixed deposits, mutual funds, SIPs, insurance policies, EPF/PPF accounts, and personal loans.",
                    },
                    {
                      q: "What are your fees?",
                      a: "We charge a small processing fee based on the value of assets discovered. There are no upfront costs.",
                    },
                  ].map((faq, idx) => (
                    <div key={idx} className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                        <FileQuestion className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                        {faq.q}
                      </h4>
                      <p className="text-sm text-muted-foreground ml-7">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office info */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span>10,000+ Families Helped</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Support;
