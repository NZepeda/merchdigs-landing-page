import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

export const SocialProof = () => {
  return (
    <section className="py-20 px-4 bg-slate-light/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-6 h-6 text-charcoal" />
            <Badge variant="outline" className="border-charcoal text-charcoal px-4 py-2 text-sm font-semibold">
              Founding Member
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Join 200+ fans already on the waitlist
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Be part of the community that's shaping the future of music merch trading.
          </p>
        </div>

        {/* Community highlight */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-charcoal mb-2">200+</div>
            <div className="text-slate">Fans waiting</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-charcoal mb-2">50+</div>
            <div className="text-slate">Bands represented</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-charcoal mb-2">12</div>
            <div className="text-slate">Countries</div>
          </div>
        </div>

        {/* Fan testimonial style quote */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-background p-6 rounded-lg border border-slate/20 shadow-sm">
            <p className="text-charcoal text-lg mb-3">
              "Been collecting vinyl for 15 years. The current platforms are a nightmare for actual fans. 
              Can't wait to try something built FOR us."
            </p>
            <div className="flex items-center justify-center gap-2 text-slate">
              <div className="w-8 h-8 bg-slate-light rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold">MF</span>
              </div>
              <span className="text-sm">Music Fan since 2008</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};