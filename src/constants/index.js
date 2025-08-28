import {
  people01,
  people02,
  people03,
  airbnb,
  binance,
  coinbase,
  dropbox,
  star,
  shield,
  send,
  facebook,
  instagram,
  twitter,
  linkedin,
} from "../assets";

// Navbar
export const navLinks = [
  { id: "home", title: "Home" },
  { id: "features", title: "Features" },
  { id: "product", title: "Product" },
  { id: "clients", title: "Clients" },
  { id: "contact", title: "Contact" },
];

// Home stats
export const stats = [
  { id: "stats-1", title: "User Active", value: "3800+" },
  { id: "stats-2", title: "Trusted by Company", value: "230+" },
  { id: "stats-3", title: "Transaction", value: "$230M+" },
];

// Feature cards (use existing icon assets)
export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewarded Transactions",
    content: "Get rewarded for every transaction you make with our services.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Secure Payments",
    content: "Your payments are secure and protected with our advanced system.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Fast Transfers",
    content: "Lightning-fast transfers with low fees and great reliability.",
  },
];

// Testimonials (a.k.a. feedback)
// Export both names so either import works: `testimonials` or `feedback`
const _testimonials = [
  {
    id: "testimonial-1",
    content:
      "This is the best banking app I've ever used. Seamless and easy.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "testimonial-2",
    content:
      "HooBank makes everything so simple and fast. Highly recommended!",
    name: "Steve Mark",
    title: "CTO",
    img: people02,
  },
  {
    id: "testimonial-3",
    content:
      "I love how user-friendly HooBank is. It saved me so much time.",
    name: "Kenn Gallagher",
    title: "COO",
    img: people03,
  },
];
export const testimonials = _testimonials;
export const feedback = _testimonials;

// Client logos
export const clients = [
  { id: "client-1", logo: airbnb },
  { id: "client-2", logo: binance },
  { id: "client-3", logo: coinbase },
  { id: "client-4", logo: dropbox },
];

// Footer columns + social icons (needed by Footer.jsx)
export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      { name: "Content", link: "#" },
      { name: "How it Works", link: "#" },
      { name: "Create", link: "#" },
      { name: "Explore", link: "#" },
      { name: "Terms & Services", link: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Help Center", link: "#" },
      { name: "Partners", link: "#" },
      { name: "Suggestions", link: "#" },
      { name: "Blog", link: "#" },
      { name: "Newsletters", link: "#" },
    ],
  },
  {
    title: "Partner",
    links: [
      { name: "Our Partners", link: "#" },
      { name: "Become a Partner", link: "#" },
    ],
  },
];

export const socialMedia = [
  { id: "instagram", icon: instagram, link: "https://instagram.com" },
  { id: "facebook", icon: facebook, link: "https://facebook.com" },
  { id: "twitter", icon: twitter, link: "https://twitter.com" },
  { id: "linkedin", icon: linkedin, link: "https://linkedin.com" },
];
