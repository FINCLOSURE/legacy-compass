import { Card, CardContent } from "@/components/ui/card";
import { FileText, CreditCard, UserCheck, FileImage, Receipt, HelpCircle } from "lucide-react";

const documents = [
  {
    icon: FileText,
    name: "Death Certificate",
    description: "Government-issued death certificate with registration number",
    required: true,
  },
  {
    icon: CreditCard,
    name: "PAN Card",
    description: "PAN card of the deceased (copy/scan)",
    required: true,
  },
  {
    icon: UserCheck,
    name: "Aadhaar Card",
    description: "Aadhaar card of the deceased (masked copy acceptable)",
    required: true,
  },
  {
    icon: FileImage,
    name: "Relationship Proof",
    description: "Legal heir certificate, succession certificate, or family tree",
    required: true,
  },
  {
    icon: Receipt,
    name: "Bank Statements",
    description: "Last 6 months statements for known accounts (optional)",
    required: false,
  },
  {
    icon: FileText,
    name: "Additional Documents",
    description: "Any other relevant financial documents or receipts",
    required: false,
  },
];

const DocumentChecklistSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-medium text-accent mb-3">
            Before You Begin
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Document Checklist
          </h2>
          <p className="text-muted-foreground text-lg">
            Gather these documents before starting your claim. Having them ready 
            will speed up the verification process significantly.
          </p>
        </div>

        {/* Document Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {documents.map((doc, idx) => (
            <Card 
              key={idx} 
              variant="elevated"
              className={`relative ${doc.required ? 'border-l-4 border-l-accent' : ''}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${
                    doc.required ? 'bg-accent/10' : 'bg-muted'
                  }`}>
                    <doc.icon className={`h-6 w-6 ${
                      doc.required ? 'text-accent' : 'text-muted-foreground'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-foreground">{doc.name}</h3>
                      {doc.required && (
                        <span className="text-[10px] font-medium bg-destructive/10 text-destructive px-2 py-0.5 rounded">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{doc.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Help note */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted rounded-full px-4 py-2">
            <HelpCircle className="h-4 w-4" />
            <span>Don't have all documents? Our team can guide you on alternatives.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentChecklistSection;
