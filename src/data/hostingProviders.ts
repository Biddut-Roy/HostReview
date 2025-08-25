export interface HostingProvider {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  startingPrice: string;
  features: string[];
  pros: string[];
  cons: string[];
  isRecommended?: boolean;
  affiliate?: string;
  fullDescription: string;
  uptime: string;
  support: string;
  moneyBackGuarantee: string;
}

export const hostingProviders: HostingProvider[] = [
  {
    id: "siteground",
    name: "SiteGround",
    logo: "/logos/siteground.png",
    rating: 4.8,
    reviewCount: 2547,
    startingPrice: "$2.99",
    features: ["Free SSL", "Daily Backups", "WordPress Optimized", "24/7 Support", "Free CDN"],
    pros: [
      "Excellent customer support with quick response times",
      "Strong security features including free SSL certificates",
      "WordPress-optimized hosting with automatic updates",
      "99.9% uptime guarantee with reliable performance",
      "Free website migration service"
    ],
    cons: [
      "Renewal prices are significantly higher than introductory rates",
      "Limited storage on basic plans",
      "No unlimited bandwidth on entry-level plans"
    ],
    isRecommended: true,
    fullDescription: "SiteGround is a premium web hosting provider known for exceptional customer support and WordPress optimization. With data centers across multiple continents and advanced security features, it's an excellent choice for businesses and developers.",
    uptime: "99.9%",
    support: "24/7 Live Chat, Phone, Tickets",
    moneyBackGuarantee: "30 days"
  },
  {
    id: "bluehost",
    name: "Bluehost",
    logo: "/logos/bluehost.png", 
    rating: 4.6,
    reviewCount: 1893,
    startingPrice: "$2.95",
    features: ["1-Click WordPress", "Free Domain", "Free SSL", "24/7 Support", "Marketing Credits"],
    pros: [
      "Official WordPress recommended hosting provider",
      "Free domain name for the first year",
      "Easy-to-use control panel with one-click installations",
      "Comprehensive marketing tools and credits included",
      "Reliable performance with good uptime"
    ],
    cons: [
      "Upselling can be aggressive during checkout",
      "Site backups cost extra on basic plans", 
      "Customer support response times can vary"
    ],
    fullDescription: "Bluehost is one of the most popular hosting providers globally, officially recommended by WordPress. It offers beginner-friendly hosting solutions with robust features and marketing tools.",
    uptime: "99.8%",
    support: "24/7 Live Chat, Phone, Help Center",
    moneyBackGuarantee: "30 days"
  },
  {
    id: "hostgator",
    name: "HostGator",
    logo: "/logos/hostgator.png",
    rating: 4.4,
    reviewCount: 1567,
    startingPrice: "$2.75",
    features: ["Unlimited Bandwidth", "Free SSL", "Website Builder", "45-Day Guarantee", "$100 Ad Credits"],
    pros: [
      "Unlimited bandwidth and storage on most plans",
      "45-day money-back guarantee (longer than most)",
      "Free website builder with drag-and-drop functionality",
      "Good value for money with competitive pricing",
      "Reliable uptime and server performance"
    ],
    cons: [
      "Customer support quality can be inconsistent",
      "Renewal rates are higher than promotional prices",
      "Basic plan includes only single domain hosting"
    ],
    fullDescription: "HostGator offers affordable and scalable web hosting solutions with unlimited resources on most plans. Known for its reliability and value pricing, it's suitable for small to medium businesses.",
    uptime: "99.7%", 
    support: "24/7 Live Chat, Phone, Email",
    moneyBackGuarantee: "45 days"
  },
  {
    id: "a2hosting",
    name: "A2 Hosting",
    logo: "/logos/a2hosting.png",
    rating: 4.5,
    reviewCount: 1234,
    startingPrice: "$2.99",
    features: ["Turbo Speed", "Free SSL", "Anytime Guarantee", "Developer Friendly", "Free Site Migration"],
    pros: [
      "SwiftServer platform delivers up to 20x faster loading speeds",
      "Developer-friendly with support for multiple programming languages",
      "Anytime money-back guarantee (unique in the industry)",
      "Free automatic backups and site migration",
      "Green hosting with carbon-neutral commitments"
    ],
    cons: [
      "Turbo features only available on higher-tier plans",
      "Control panel can be overwhelming for beginners",
      "Higher renewal rates compared to promotional pricing"
    ],
    fullDescription: "A2 Hosting specializes in high-performance hosting with their signature Turbo servers. Perfect for developers and businesses requiring fast loading speeds and technical flexibility.",
    uptime: "99.9%",
    support: "24/7 Live Chat, Phone, Tickets",
    moneyBackGuarantee: "Anytime"
  }
];

export const getProviderById = (id: string): HostingProvider | undefined => {
  return hostingProviders.find(provider => provider.id === id);
};