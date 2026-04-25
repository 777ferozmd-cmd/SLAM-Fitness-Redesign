export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "Nutrition" | "Workouts" | "Lifestyle" | "Transformation";
  author: string;
  date: string;
  readTime: string;
  thumbnail: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "mastering-macros-for-fat-loss",
    title: "Mastering Macros for Fat Loss: A Complete Guide",
    excerpt: "Understanding how to balance your proteins, carbs, and fats is the key to sustainable fat loss without sacrificing energy.",
    category: "Nutrition",
    author: "Arjun Mehta",
    date: "April 15, 2026",
    readTime: "5 min read",
    thumbnail: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop",
    content: [
      "When it comes to fat loss, the conversation almost always starts with calories. While being in a calorie deficit is essential, the composition of those calories—your macronutrients—dictates the quality of your weight loss.",
      "Protein is the cornerstone of any fat loss diet. Not only does it help preserve lean muscle mass while you lose fat, but it also has the highest thermic effect of food (TEF). This means your body burns more calories simply digesting protein compared to carbs or fats.",
      "Don't fear carbohydrates. They are your body's preferred energy source, especially for high-intensity workouts. The key is timing and type. Focus on complex carbohydrates like sweet potatoes, oats, and brown rice, and consume them around your training window for maximum benefit.",
      "Fats are crucial for hormone regulation and joint health. While they are calorie-dense, incorporating healthy fats from avocados, nuts, and olive oil keeps you satiated and supports overall health during a deficit."
    ]
  },
  {
    slug: "5-functional-movements-you-should-be-doing",
    title: "5 Functional Movements You Should Be Doing Every Week",
    excerpt: "Build real-world strength and improve your performance with these five essential functional exercises.",
    category: "Workouts",
    author: "Coach Rahul",
    date: "April 10, 2026",
    readTime: "4 min read",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    content: [
      "Functional training is all about preparing your body for the demands of daily life and real-world activities. Unlike isolation exercises, functional movements recruit multiple muscle groups and joints simultaneously.",
      "1. The Goblet Squat. This movement pattern is fundamental. It not only builds lower body strength but also reinforces core stability and upright posture. Holding the weight in front forces your core to engage dynamically.",
      "2. The Farmer's Carry. Often overlooked, loaded carries are the ultimate test of full-body tension and grip strength. They build a resilient core and improve cardiovascular conditioning when done for distance.",
      "3. The Kettlebell Swing. A powerhouse for developing posterior chain explosiveness. It trains your hips to generate force while teaching your core and lats to brace and stabilize the spine.",
      "Integrate these movements into your weekly routine, focusing on form and intent, rather than just moving weight from point A to point B."
    ]
  },
  {
    slug: "building-habits-that-actually-stick",
    title: "Building Fitness Habits That Actually Stick",
    excerpt: "Motivation gets you started, but habits keep you going. Learn how to build a routine that survives the tough days.",
    category: "Lifestyle",
    author: "Anita Sharma",
    date: "April 5, 2026",
    readTime: "6 min read",
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    content: [
      "We've all been there: starting a new fitness program with blazing enthusiasm, only to hit a wall by week three. The problem isn't a lack of willpower; it's a lack of systematic habit building.",
      "Start ridiculously small. Instead of committing to working out for an hour five days a week, commit to showing up at the gym for 15 minutes. The goal in the beginning isn't intensity; it's consistency. You need to establish the identity of someone who doesn't miss workouts.",
      "Use habit stacking. Tie your new fitness habit to an existing one. For example, 'After I drink my morning coffee, I will put on my workout shoes.' This creates a powerful environmental trigger that requires less cognitive effort than relying on sheer motivation.",
      "Finally, celebrate the small wins. Dopamine is the chemical of habit formation. Acknowledge your consistency, track your workouts, and focus on how you feel rather than just the number on the scale."
    ]
  },
  {
    slug: "from-sedentary-to-strong-a-transformation-story",
    title: "From Sedentary to Strong: An Inspiring Transformation",
    excerpt: "How consistent training and a complete lifestyle overhaul transformed a desk-bound professional into an athlete.",
    category: "Transformation",
    author: "Ferous Editorial",
    date: "March 28, 2026",
    readTime: "7 min read",
    thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    content: [
      "When Vikram first walked into Ferous Fitness, he hadn't worked out in over a decade. Working 60-hour weeks at a desk had taken its toll on his posture, his energy levels, and his health.",
      "The first few weeks were about unwiring years of inactivity. Our coaches focused on mobility, core stability, and basic movement patterns. The goal wasn't to destroy him with intense workouts, but to build a foundation that could support future strength.",
      "By month three, the changes were dramatic. Not just physically, but mentally. Vikram was lifting weights he never thought possible and had completely overhauled his relationship with food, viewing it as fuel rather than a coping mechanism.",
      "Today, Vikram is 20kg lighter, significantly stronger, and a regular at our 6 AM Bootcamp sessions. His journey proves that it's never too late to take control of your health and rewrite your story."
    ]
  },
  {
    slug: "the-truth-about-pre-workout-supplements",
    title: "The Truth About Pre-Workout Supplements",
    excerpt: "Do you really need that scoop of powder before hitting the gym? We break down the science of pre-workout nutrition.",
    category: "Nutrition",
    author: "Coach Rahul",
    date: "March 22, 2026",
    readTime: "4 min read",
    thumbnail: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=2070&auto=format&fit=crop",
    content: [
      "Walk into any gym, and you'll see shaker bottles filled with brightly colored liquids. Pre-workout supplements are more popular than ever, promising explosive energy and skin-tearing pumps. But are they necessary?",
      "The primary active ingredient in almost all effective pre-workouts is caffeine. It's a proven performance enhancer that delays fatigue and improves focus. However, you can get the exact same benefit from a strong cup of black coffee at a fraction of the cost.",
      "Other ingredients like Citrulline Malate and Beta-Alanine do have scientific backing for improving blood flow and muscular endurance, respectively. However, many commercial products under-dose these ingredients, giving you the 'tingles' without the performance benefits.",
      "Before reaching for a supplement, ensure your foundation is solid. Are you hydrated? Did you get enough sleep? Have you eaten a balanced meal containing carbohydrates 1-2 hours before training? If these aren't dialed in, a powder won't save your workout."
    ]
  },
  {
    slug: "recovery-the-missing-link-in-your-program",
    title: "Recovery: The Missing Link in Your Training Program",
    excerpt: "You don't grow in the gym; you grow when you recover. Here's how to optimize your rest for better results.",
    category: "Lifestyle",
    author: "Arjun Mehta",
    date: "March 15, 2026",
    readTime: "5 min read",
    thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop",
    content: [
      "There is a pervasive myth in the fitness industry that more is always better. More days in the gym, more sets, more intensity. But the reality is that training is a stimulus that breaks the body down. Recovery is when the adaptation and growth actually happen.",
      "Sleep is the ultimate performance enhancer. During deep sleep, your body releases human growth hormone (HGH) and repairs damaged muscle tissue. Aiming for 7-9 hours of quality sleep will do more for your progress than any supplement.",
      "Active recovery is another crucial component. This doesn't mean doing a light workout; it means engaging in low-intensity movement that promotes blood flow without adding systemic stress. Think walking, light cycling, or mobility work.",
      "Finally, manage your stress. Chronic stress elevates cortisol levels, which can break down muscle tissue and encourage fat storage. Incorporating breathwork, meditation, or simply taking time to unplug can profoundly impact your physical recovery and mental resilience."
    ]
  }
];

export const CATEGORIES = ["All", "Nutrition", "Workouts", "Lifestyle", "Transformation"];
