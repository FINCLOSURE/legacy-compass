import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Eye, EyeOff, ArrowLeft, CheckCircle2, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    secondaryEmail: "",
    agreeTerms: false,
    agreePrivacy: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSecondaryEmail, setShowSecondaryEmail] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeTerms || !formData.agreePrivacy) {
      toast({
        title: "Consent required",
        description: "Please agree to the terms and privacy policy to continue.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords are identical.",
        variant: "destructive",
      });
      return;
    }

    if (formData.password.length < 8) {
      toast({
        title: "Password too short",
        description: "Password must be at least 8 characters long.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulate registration - replace with actual auth
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration successful!",
        description: "Please check your email to verify your account.",
      });
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen gradient-warm flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-lg">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <Card variant="elevated" className="border-0">
          <CardHeader className="text-center pb-2">
            {/* Logo */}
            <div className="mx-auto mb-4">
              <div className="h-14 w-14 rounded-xl bg-primary flex items-center justify-center mx-auto">
                <Shield className="h-7 w-7 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-2xl">Start Your Claim</CardTitle>
            <CardDescription>
              Create an account to begin the claims process
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name (as per ID)</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="h-11"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-11"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-11"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Min. 8 characters"
                      value={formData.password}
                      onChange={handleChange}
                      className="h-11 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="h-11"
                    required
                  />
                </div>
              </div>

              {/* Secondary Email Section */}
              <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="addSecondary"
                    checked={showSecondaryEmail}
                    onCheckedChange={(checked) => setShowSecondaryEmail(checked as boolean)}
                  />
                  <div>
                    <Label htmlFor="addSecondary" className="cursor-pointer font-medium">
                      Add Secondary Access Email (Optional)
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1">
                      A trusted person who can access this account as backup. They will be notified and can act on your behalf if needed.
                    </p>
                  </div>
                </div>
                
                {showSecondaryEmail && (
                  <div className="space-y-2 ml-6">
                    <Input
                      id="secondaryEmail"
                      name="secondaryEmail"
                      type="email"
                      placeholder="trusted-person@example.com"
                      value={formData.secondaryEmail}
                      onChange={handleChange}
                      className="h-11"
                    />
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Info className="h-3 w-3" />
                      This person will receive a verification email
                    </p>
                  </div>
                )}
              </div>

              {/* Consent checkboxes */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }))
                    }
                    required
                  />
                  <Label htmlFor="agreeTerms" className="text-sm cursor-pointer">
                    I agree to the{" "}
                    <Link to="/terms" className="text-accent hover:underline">
                      Terms of Service
                    </Link>
                  </Label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agreePrivacy"
                    name="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onCheckedChange={(checked) =>
                      setFormData((prev) => ({ ...prev, agreePrivacy: checked as boolean }))
                    }
                    required
                  />
                  <Label htmlFor="agreePrivacy" className="text-sm cursor-pointer">
                    I consent to the processing of my personal data as described in the{" "}
                    <Link to="/privacy" className="text-accent hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    and understand this includes sensitive documents like death certificates.
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 mt-4"
                variant="cta"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account & Start Claim"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-accent font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </div>

            {/* Security note */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="h-3.5 w-3.5 text-success" />
              <span>Your data is encrypted and securely stored</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
