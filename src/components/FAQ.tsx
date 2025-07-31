import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "When are you launching?",
      answer: "We're aiming for early 2024. Founding members on the waitlist will get first access to the beta and exclusive launch perks."
    },
    {
      question: "Will you support vinyl?",
      answer: "Absolutely! Vinyl records are a huge part of music culture. We'll support vinyl, CDs, cassettes, and all kinds of band merch from day one."
    },
    {
      question: "Is it US-only at first?",
      answer: "We're starting in the US, but we have fans from 12+ countries already on the waitlist. International expansion is a top priority for 2024."
    },
    {
      question: "How will you verify real fans vs. resellers?",
      answer: "We're building verification through Spotify integration, community vouching, and activity patterns. Real fans trade differently than flippers."
    },
    {
      question: "What makes this different from Discogs?",
      answer: "Discogs is great for cataloging, but the marketplace experience is clunky and full of overpriced listings. We're focusing purely on the trading experience with modern UI and fan-first features."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate">
            Got questions? We've got answers.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-slate/20 rounded-lg px-6 bg-slate-light/20"
            >
              <AccordionTrigger className="text-left text-charcoal font-semibold hover:text-charcoal/80">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};