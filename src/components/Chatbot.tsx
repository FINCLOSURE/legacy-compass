import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const faqResponses: Record<string, string> = {
  "documents": "To start a claim, you'll need:\n\n1. **Death Certificate** - Government-issued with registration number\n2. **PAN Card** - Of the deceased\n3. **Aadhaar Card** - Masked copy acceptable\n4. **Relationship Proof** - Legal heir or succession certificate\n\nOptionally, bank statements of the last 6 months can speed up asset discovery.",
  "time": "The typical claim process takes **7-10 business days**:\n\n• Day 1-2: Document verification\n• Day 3-5: Asset discovery\n• Day 5-7: Claim submission\n• Day 7-10: Resolution & guidance\n\nComplex cases may take longer. You'll receive updates at every stage.",
  "security": "Your data is protected with:\n\n• **256-bit SSL encryption** for all transfers\n• **AES-256 encryption** for stored documents\n• **ISO 27001 certified** infrastructure\n• **GDPR compliant** data handling\n\nOnly authorized personnel can access your documents during verification.",
  "assets": "We can help discover and claim:\n\n• **Bank accounts** (savings, current)\n• **Fixed deposits (FDs)**\n• **Mutual funds**\n• **SIP investments**\n• **Insurance policies**\n• **Personal loans** (owed to/by deceased)\n• **EPF/PPF accounts**\n\nWe search across major banks and AMCs.",
  "cost": "ClaimSecure charges a **small processing fee** based on the value of assets discovered. There are **no upfront costs**—you only pay when claims are successfully processed.\n\nContact our team for detailed pricing based on your situation.",
  "human": "I'll connect you with a human support agent. Please share your:\n\n• Name\n• Phone number or email\n• Brief description of your query\n\nOur team will contact you within **30 minutes** during business hours, or first thing next morning.",
  "default": "I can help you with:\n\n• 📄 **Documents required** - What you need to start\n• ⏱️ **Processing time** - How long it takes\n• 🔒 **Security** - How we protect your data\n• 💰 **Assets covered** - What we can find\n• 💵 **Pricing** - Our fee structure\n• 👤 **Human support** - Talk to a person\n\nType any of these topics or ask your question!",
};

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes("document") || lower.includes("upload") || lower.includes("certificate") || lower.includes("pan") || lower.includes("aadhaar")) {
    return faqResponses["documents"];
  }
  if (lower.includes("time") || lower.includes("long") || lower.includes("days") || lower.includes("duration") || lower.includes("process")) {
    return faqResponses["time"];
  }
  if (lower.includes("secure") || lower.includes("safe") || lower.includes("privacy") || lower.includes("encrypt") || lower.includes("data")) {
    return faqResponses["security"];
  }
  if (lower.includes("asset") || lower.includes("bank") || lower.includes("mutual") || lower.includes("fd") || lower.includes("sip") || lower.includes("loan") || lower.includes("discover")) {
    return faqResponses["assets"];
  }
  if (lower.includes("cost") || lower.includes("price") || lower.includes("fee") || lower.includes("charge") || lower.includes("pay")) {
    return faqResponses["cost"];
  }
  if (lower.includes("human") || lower.includes("person") || lower.includes("agent") || lower.includes("talk") || lower.includes("call") || lower.includes("support") || lower.includes("help")) {
    return faqResponses["human"];
  }
  return faqResponses["default"];
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm here to help you with the claims process. How can I assist you today?\n\nYou can ask about:\n• Documents required\n• Processing time\n• Security & privacy\n• Types of assets we cover\n\nOr type 'human' to speak with a support agent.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = getResponse(userMessage.content);
    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: response,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-cta text-cta-foreground shadow-large hover:bg-cta/90 flex items-center justify-center transition-all hover:scale-105"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-card rounded-2xl shadow-large border overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="gradient-hero p-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">ClaimSecure Assistant</h3>
                <p className="text-xs opacity-80">24/7 Support • Typically replies instantly</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-accent" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  {msg.content}
                </div>
                {msg.role === "user" && (
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4 text-accent" />
                </div>
                <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-muted rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent"
              />
              <Button type="submit" size="icon" variant="cta" disabled={!input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
