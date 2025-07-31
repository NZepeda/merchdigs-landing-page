import { Button } from "@/components/ui/button";

export const Nav = () => {
  const scrollToWaitlist = () => {
    const emailInput = document.querySelector(
      'input[type="email"]'
    ) as HTMLInputElement;
    if (emailInput) {
      const navHeight = 80; // Approximate navbar height
      const elementPosition =
        emailInput.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      emailInput.focus();
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-light">
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo - centered on mobile, left on desktop */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <img
            src="/logo.png"
            alt="Merchdigs"
            className="h-4 w-auto max-w-[120px]"
          />
        </div>

        {/* CTA Button - hidden on mobile, visible on desktop */}
        <div className="hidden md:block">
          <Button onClick={scrollToWaitlist} variant="merchdigs" size="default">
            Join waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};
