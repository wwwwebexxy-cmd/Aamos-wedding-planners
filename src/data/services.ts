export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export const services: ServiceItem[] = [
  {
    title: "Wedding Planning & Coordination",
    description:
      "From the first conversation to the final farewell, we bring every moving part together with calm, thoughtful coordination.",
    image: "/service-wedding-planning-v2.png",
    alt: "Floral wedding ceremony aisle prepared at golden hour",
    featured: true,
  },
  {
    title: "Traditional & Destination Weddings",
    description:
      "Celebrations shaped around your traditions, setting and people, with a plan that keeps the experience beautifully personal.",
    image: "/service-destination-wedding-v2.png",
    alt: "Destination wedding ceremony overlooking a bright coastal landscape",
  },
  {
    title: "Budget Planning",
    description:
      "Flexible planning support that keeps your priorities clear and helps every detail work beautifully within your budget.",
    image: "/service-budget-planning-v2.png",
    alt: "Wedding planning notebook, calculator and fabric swatches on a desk",
    featured: true,
  },
  {
    title: "Decor & Styling",
    description:
      "Floral details, stage styling and considered finishing touches that make your venue feel unmistakably yours.",
    image: "/service-decor-styling-v2.png",
    alt: "Candlelit wedding reception table layered with florals and glassware",
  },
  {
    title: "Venue Selection & Guest Management",
    description:
      "Practical support with venue preparation, guest flow and the details that help everyone feel cared for.",
    image: "/service-venue-selection-v2.png",
    alt: "Elegant wedding venue and garden prepared for guests at sunset",
  },
  {
    title: "Photography Coordination",
    description:
      "We help shape the photography plan around the moments, people and details you will want to remember.",
    image: "/service-photography-v2.png",
    alt: "Newly married couple walking outdoors with a photographer in the background",
  },
];
