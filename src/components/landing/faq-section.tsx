import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const faqs = [
  {
    question: "Is CompeteKit free to use?",
    answer:
      "Yes. You can create a free account and run a comparison against your competitors without paying anything.",
  },
  {
    question: "What data does CompeteKit compare?",
    answer:
      "We benchmark SEO performance (rankings and keywords), backlink profiles, and social presence (followers, engagement, and mentions) between you and the competitors you track.",
  },
  {
    question: "How do you decide who my competitors are?",
    answer:
      "You add the competitors you want to track directly, or let us suggest likely ones based on your industry and the keywords you already rank for.",
  },
  {
    question: "Can I track more than one competitor?",
    answer:
      "Yes. Track as many competitors as you want and compare them side by side, or view a single combined gap report across all of them.",
  },
  {
    question: "CompeteKit is in alpha, what does that mean?",
    answer:
      "The platform is still under active development, so features may change and you may run into occasional bugs. Feedback is welcome.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqSection() {
  return (
    <section className="border-t py-16">
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex flex-col gap-2 text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to know before jumping in.
          </p>
        </div>
        <Accordion type="single" collapsible>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
