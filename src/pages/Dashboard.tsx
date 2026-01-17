import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  FileText,
  Upload,
  CheckCircle2,
  Clock,
  AlertCircle,
  Landmark,
  PiggyBank,
  TrendingUp,
  CreditCard,
  Users,
  Eye,
  ArrowRight,
  Bell,
} from "lucide-react";

// Mock data
const claimStatus = {
  currentStep: 3,
  totalSteps: 5,
  status: "In Progress",
  lastUpdate: "2 hours ago",
};

const documents = [
  { name: "Death Certificate", status: "verified", date: "Jan 15, 2026" },
  { name: "PAN Card", status: "verified", date: "Jan 15, 2026" },
  { name: "Aadhaar Card", status: "verified", date: "Jan 15, 2026" },
  { name: "Legal Heir Certificate", status: "pending", date: "Jan 16, 2026" },
];

const assets = [
  { type: "Bank Account", icon: Landmark, name: "HDFC Bank", id: "XXXX4523", value: "₹2,45,000", status: "discovered" },
  { type: "Fixed Deposit", icon: PiggyBank, name: "SBI FD", id: "FD892XXX", value: "₹5,00,000", status: "claim_pending" },
  { type: "Mutual Fund", icon: TrendingUp, name: "SBI Bluechip", id: "Folio: 123XXX", value: "₹1,82,500", status: "claimed" },
  { type: "SIP", icon: CreditCard, name: "ICICI Prudential", id: "SIP4567XX", value: "₹45,000", status: "discovered" },
];

const loans = [
  { type: "Owed TO deceased", party: "Ramesh Kumar", amount: "₹50,000", status: "unverified" },
  { type: "Owed BY deceased", party: "Personal Loan - HDFC", amount: "₹1,20,000", status: "verified" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "verified":
    case "claimed":
      return (
        <span className="inline-flex items-center gap-1 text-xs font-medium bg-success/10 text-success px-2 py-1 rounded-full">
          <CheckCircle2 className="h-3 w-3" />
          {status === "verified" ? "Verified" : "Claimed"}
        </span>
      );
    case "pending":
    case "claim_pending":
      return (
        <span className="inline-flex items-center gap-1 text-xs font-medium bg-warning/10 text-warning px-2 py-1 rounded-full">
          <Clock className="h-3 w-3" />
          {status === "pending" ? "Pending Review" : "Claim Pending"}
        </span>
      );
    case "discovered":
      return (
        <span className="inline-flex items-center gap-1 text-xs font-medium bg-accent/10 text-accent px-2 py-1 rounded-full">
          <Eye className="h-3 w-3" />
          Discovered
        </span>
      );
    case "unverified":
      return (
        <span className="inline-flex items-center gap-1 text-xs font-medium bg-destructive/10 text-destructive px-2 py-1 rounded-full">
          <AlertCircle className="h-3 w-3" />
          Needs Receipt
        </span>
      );
    default:
      return null;
  }
};

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Welcome header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Welcome back, Priya
            </h1>
            <p className="text-muted-foreground">
              Claim ID: #CLM-2026-78945 • Started Jan 14, 2026
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </Button>
            <Button variant="cta" size="sm" className="gap-2">
              <Upload className="h-4 w-4" />
              Upload Document
            </Button>
          </div>
        </div>

        {/* Progress Card */}
        <Card variant="trust" className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="font-serif text-lg font-semibold text-foreground">
                  Claim Progress
                </h2>
                <p className="text-sm text-muted-foreground">
                  Step {claimStatus.currentStep} of {claimStatus.totalSteps} • Last updated {claimStatus.lastUpdate}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium bg-accent/10 text-accent px-3 py-1.5 rounded-full">
                <Clock className="h-4 w-4" />
                {claimStatus.status}
              </span>
            </div>
            <Progress value={(claimStatus.currentStep / claimStatus.totalSteps) * 100} className="h-3" />
            <div className="flex justify-between mt-3 text-xs text-muted-foreground">
              <span>Documents</span>
              <span>Verification</span>
              <span className="font-medium text-accent">Asset Discovery</span>
              <span>Claims</span>
              <span>Resolution</span>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left column - Documents & Assets */}
          <div className="lg:col-span-2 space-y-6">
            {/* Documents Section */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  Documents
                </CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/documents">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {documents.map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-sm text-foreground">{doc.name}</p>
                          <p className="text-xs text-muted-foreground">Uploaded {doc.date}</p>
                        </div>
                      </div>
                      {getStatusBadge(doc.status)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Assets Section */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-accent" />
                  Discovered Assets
                </CardTitle>
                <Button variant="outline" size="sm" className="gap-1">
                  Discover More <ArrowRight className="h-3 w-3" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {assets.map((asset, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:border-accent/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center">
                          <asset.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{asset.name}</p>
                          <p className="text-xs text-muted-foreground">{asset.type} • {asset.id}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-serif font-semibold text-foreground">{asset.value}</p>
                        {getStatusBadge(asset.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personal Loans Section */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  Personal Loans
                </CardTitle>
                <Button variant="ghost" size="sm">
                  Add Loan Record
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {loans.map((loan, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                          loan.type.includes("TO") ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                        }`}>
                          {loan.type}
                        </span>
                        <p className="font-medium text-foreground mt-2">{loan.party}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-serif font-semibold text-foreground">{loan.amount}</p>
                        {getStatusBadge(loan.status)}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  Upload payment receipts to verify loan claims
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right column - Quick Actions & Summary */}
          <div className="space-y-6">
            {/* Summary Card */}
            <Card variant="trust" className="gradient-hero text-primary-foreground">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-lg font-semibold">Asset Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="opacity-80">Total Discovered</span>
                    <span className="font-serif font-bold">₹9,72,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">Claims Filed</span>
                    <span className="font-serif font-bold">₹1,82,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="opacity-80">Pending Claims</span>
                    <span className="font-serif font-bold">₹7,90,000</span>
                  </div>
                </div>
                <Button variant="cta" className="w-full mt-4">
                  File All Claims
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { label: "Upload Document", icon: Upload },
                  { label: "Search for Assets", icon: Eye },
                  { label: "View Verification Status", icon: CheckCircle2 },
                  { label: "Contact Support", icon: Users },
                ].map((action, idx) => (
                  <Button 
                    key={idx} 
                    variant="ghost" 
                    className="w-full justify-start gap-3 h-11"
                  >
                    <action.icon className="h-4 w-4 text-accent" />
                    {action.label}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6 text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Need Help?</h3>
                <p className="text-sm text-muted-foreground">
                  Our support team is available 24/7 to guide you through the process.
                </p>
                <Button variant="accent" size="sm" className="w-full">
                  Chat with Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Dashboard;
