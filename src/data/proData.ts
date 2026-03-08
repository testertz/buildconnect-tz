export const PRO_PROFILE = {
  name: "John Mwanga",
  profession: "Structural Engineer",
  bio: "Experienced structural engineer with 12+ years in residential and commercial construction across Tanzania.",
  experience: 12,
  location: "Dar es Salaam",
  email: "john.mwanga@email.com",
  phone: "+255 712 345 678",
  skills: ["Structural Design", "Foundation Engineering", "Steel Structures", "Concrete Works", "Project Management"],
  certifications: ["ERB Registered Engineer", "OSHA Safety Certified", "AutoCAD Professional"],
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  rating: 4.9,
  completedJobs: 87,
  verified: true,
};

export const PRO_PORTFOLIO = [
  {
    id: "pf1",
    title: "Modern Villa in Masaki",
    description: "4-bedroom luxury villa with swimming pool and landscaping.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    ],
    category: "Residential",
    completedDate: "2025-11",
    budget: "TZS 120,000,000",
  },
  {
    id: "pf2",
    title: "Commercial Office Block",
    description: "3-storey office building in CBD with modern amenities.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    ],
    category: "Commercial",
    completedDate: "2025-08",
    budget: "TZS 350,000,000",
  },
  {
    id: "pf3",
    title: "Residential Complex Renovation",
    description: "Complete renovation of a 10-unit apartment complex.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    ],
    category: "Renovation",
    completedDate: "2025-05",
    budget: "TZS 85,000,000",
  },
];

export const PRO_SERVICES = [
  { id: "s1", name: "Structural Design & Analysis", priceRange: "TZS 2,000,000 - 5,000,000", available: true },
  { id: "s2", name: "Foundation Engineering", priceRange: "TZS 3,000,000 - 8,000,000", available: true },
  { id: "s3", name: "Construction Supervision", priceRange: "TZS 500,000/month", available: true },
  { id: "s4", name: "Building Inspection", priceRange: "TZS 300,000 - 800,000", available: false },
];

export const PRO_QUOTE_REQUESTS = [
  {
    id: "qr1",
    clientName: "Maria Joseph",
    projectTitle: "2-Storey House Foundation",
    budget: "TZS 15,000,000 - 20,000,000",
    location: "Mbezi Beach, Dar es Salaam",
    timeline: "3 months",
    description: "Need a structural engineer for foundation design and supervision of a 2-storey residential house.",
    sentAt: "2026-03-06",
    status: "new" as const,
  },
  {
    id: "qr2",
    clientName: "Abdul Hamid",
    projectTitle: "Warehouse Construction",
    budget: "TZS 80,000,000 - 100,000,000",
    location: "Kigamboni, Dar es Salaam",
    timeline: "6 months",
    description: "Large warehouse 500sqm with loading bays. Need structural design and construction supervision.",
    sentAt: "2026-03-04",
    status: "responded" as const,
  },
  {
    id: "qr3",
    clientName: "Fatma Said",
    projectTitle: "School Building Expansion",
    budget: "TZS 45,000,000 - 60,000,000",
    location: "Dodoma",
    timeline: "4 months",
    description: "Adding 6 classrooms to existing school. Need structural assessment and new building design.",
    sentAt: "2026-03-01",
    status: "declined" as const,
  },
];

export const PRO_EARNINGS = {
  totalEarnings: "TZS 45,200,000",
  thisMonth: "TZS 4,800,000",
  pendingPayments: "TZS 7,500,000",
  completedJobs: 87,
  monthlyData: [
    { month: "Oct", earnings: 3200000 },
    { month: "Nov", earnings: 4100000 },
    { month: "Dec", earnings: 3800000 },
    { month: "Jan", earnings: 5200000 },
    { month: "Feb", earnings: 4600000 },
    { month: "Mar", earnings: 4800000 },
  ],
  recentPayments: [
    { id: "e1", project: "Modern Villa in Masaki", amount: "TZS 8,500,000", date: "2026-03-05", status: "completed" as const },
    { id: "e2", project: "Warehouse Construction", amount: "TZS 7,500,000", date: "2026-03-01", status: "pending" as const },
    { id: "e3", project: "Office Renovation", amount: "TZS 3,200,000", date: "2026-02-20", status: "completed" as const },
    { id: "e4", project: "School Building", amount: "TZS 5,000,000", date: "2026-02-10", status: "completed" as const },
  ],
};

export const PRO_REVIEWS = [
  {
    id: "r1",
    client: "Maria Joseph",
    rating: 5,
    comment: "Excellent structural engineer! Very professional and delivered on time. Highly recommend.",
    project: "2-Storey House Foundation",
    date: "2026-02-28",
  },
  {
    id: "r2",
    client: "Abdul Hamid",
    rating: 5,
    comment: "John's expertise in steel structures saved us a lot of money. Great communication throughout.",
    project: "Warehouse Construction",
    date: "2026-02-15",
  },
  {
    id: "r3",
    client: "Sarah Kimaro",
    rating: 4,
    comment: "Good work overall. Took a bit longer than expected but the quality was top-notch.",
    project: "Commercial Office Block",
    date: "2026-01-20",
  },
];
