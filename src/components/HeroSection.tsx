import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const HeroSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Supabase for email capture
    console.log("Email signup:", email);
    // For now, just show success message
    alert("Thanks for joining the waitlist! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-20 bg-gradient-to-b from-background to-slate-light/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headlines */}
        <div className="mb-12 space-y-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-tight">
            The marketplace
            <br />
            <span className="text-slate-dark">for music fans.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate max-w-2xl mx-auto leading-relaxed">
            Buy, sell, and discover rare merch, collectibles, and vinyl—direct
            from fans.
          </p>
        </div>

        {/* Email Capture Form */}
        <div className="max-w-md mx-auto mb-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-base"
            />
            <Button
              type="submit"
              variant="merchdigs"
              size="xl"
              className="w-full sm:w-auto"
            >
              Join the waitlist
            </Button>
          </form>
          <p className="text-sm text-slate mt-3">
            No spam. Just launch updates.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-slate rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
