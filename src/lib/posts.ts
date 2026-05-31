export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  /** Unsplash image URL (auto-format, ~900w) */
  image: string;
};

// Unsplash photos — public, hot-linkable per Unsplash terms.
// Replace with your own photography when available.
export const posts: Post[] = [
  {
    slug: "understanding-fasting-blood-sugar-results",
    title: "Understanding Your Fasting Blood Sugar Results",
    excerpt:
      "A comprehensive guide to interpreting what your fasting glucose numbers mean for your long-term health and diabetes risk.",
    category: "Health Tips",
    date: "Feb 15, 2026",
    author: "Dr. L. Perera",
    image:
      "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "why-regular-lipid-profiling-is-crucial",
    title: "Why Regular Lipid Profiling is Crucial",
    excerpt:
      "Cholesterol isn't just a buzzword. Discover why monitoring your HDL, LDL, and triglycerides can save your life.",
    category: "Cardiology",
    date: "Feb 10, 2026",
    author: "Medical Team",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=80",
  },
  {
    slug: "preparing-for-your-first-ecg",
    title: "Preparing for Your First ECG: What to Expect",
    excerpt:
      "Nervous about your upcoming electrocardiogram? We break down the simple, painless process step by step.",
    category: "Patient Guide",
    date: "Feb 05, 2026",
    author: "Sarah F.",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=80",
  },
];
