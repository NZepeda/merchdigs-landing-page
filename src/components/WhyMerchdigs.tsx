import { Card } from "@/components/ui/card";
import { X, Check } from "lucide-react";

export const WhyMerchdigs = () => {
  const problems = [
    "Confusing UI",
    "No trust between buyers and sellers", 
    "Overpriced gear"
  ];

  const solutions = [
    "Simple, clean experience",
    "Verified profiles and fair transactions",
    "Fan-first community and culture"
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Why Merchdigs?
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            We're building a marketplace that actually works for music fans, not resellers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems with other platforms */}
          <Card className="p-8 border-2 border-destructive/20 bg-destructive/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-destructive/10 rounded-full">
                <X className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal">
                Other platforms
              </h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate text-lg">{problem}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* How Merchdigs is better */}
          <Card className="p-8 border-2 border-charcoal/20 bg-slate-light/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-charcoal/10 rounded-full">
                <Check className="w-5 h-5 text-charcoal" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal">
                Merchdigs
              </h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-charcoal rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-charcoal text-lg font-medium">{solution}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Additional context */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto p-6 bg-slate-light/50 rounded-lg border border-slate/20">
            <p className="text-slate-dark text-lg font-medium">
              "Finally, a platform that gets it. No more dealing with flippers who don't even know the bands they're selling."
            </p>
            <p className="text-slate mt-2">— Early community feedback</p>
          </div>
        </div>
      </div>
    </section>
  );
};