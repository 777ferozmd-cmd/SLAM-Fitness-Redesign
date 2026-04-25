export const CONTACT = {
  customerCare: "98400 12345",
  customerEmail: "customercare.ferous@gmail.com",
  corporateAddress: "#18/70, Halls Road, Kilpauk, Chennai – 600 010",
  corporatePhone: "+91 98400 67890",
  corporateEmail: "hello@ferousfitness.in",
  contactPerson: "Mr Arjun Mehta",
  whatsapp: "919840012345",
  instagram: "https://www.instagram.com/ferousfitness/",
  facebook: "https://www.facebook.com/ferousfitnessindia/",
  franchise: {
    phones: ["+91 91500 11111", "+91 98400 22222", "+91 99400 33333"],
    email: "ceo@ferousfitness.in",
  },
}

export const SERVICES = [
  {
    slug: "weight-loss-weight-gain",
    title: "Weight Loss & Weight Gain",
    tagline: "Two Goals, One Mission",
    description: "Personalised programs for fat loss and muscle gain, combining training and nutrition.",
    icon: "Scale",
  },
  {
    slug: "functional-training",
    title: "Functional Fitness",
    tagline: "Move Better. Perform Harder.",
    description: "Multi-muscle, performance-based training that improves real-world strength.",
    icon: "Zap",
  },
  {
    slug: "bootcamp",
    title: "Fitness Bootcamp",
    tagline: "The Bootcamp Experience",
    description: "High-energy group training sessions for lasting results and healthier habits.",
    icon: "Flame",
  },
  {
    slug: "body-transformation",
    title: "Body Transformation",
    tagline: "Your Best Body Starts Here",
    description: "Complete physique transformation through structured training and nutrition.",
    icon: "Trophy",
  },
]

export const STATS = [
  { value: 2000, suffix: "+", label: "Active Members" },
  { value: 10, suffix: "+", label: "Expert Coaches" },
  { value: 4, suffix: "", label: "Specialised Programs" },
  { value: 6, suffix: " Weeks", label: "To Visible Results", prefix: "4–" },
]

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Services", 
    href: "#",
    subLinks: [
      { label: "Weight Loss & Weight Gain", href: "/services/weight-loss-weight-gain" },
      { label: "Functional Training", href: "/services/functional-training" },
      { label: "Bootcamp", href: "/services/bootcamp" },
      { label: "Body Transformation", href: "/services/body-transformation" },
    ]
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Trainers", href: "/trainers" },
  { label: "Transformations", href: "/transformations" },
  { label: "Blog", href: "/blog" },
  { label: "Locations", href: "/locations" },
  { label: "Franchise", href: "/franchise" },
  { label: "Contact", href: "/contact" },
]
