export const ADMIN_STATS = {
  totalUsers: 12450,
  activeProfessionals: 3280,
  projectsPosted: 8920,
  totalRevenue: "TZS 2.4B",
  userGrowth: "+12%",
  projectGrowth: "+18%",
  revenueGrowth: "+22%",
};

export const ADMIN_USERS = [
  { id: "u1", name: "Maria Joseph", email: "maria@email.com", role: "client" as const, status: "active" as const, joined: "2025-06-15", projects: 3 },
  { id: "u2", name: "John Mwanga", email: "john@email.com", role: "professional" as const, status: "active" as const, joined: "2024-12-01", projects: 87, verified: true },
  { id: "u3", name: "Grace Mollel", email: "grace@email.com", role: "professional" as const, status: "active" as const, joined: "2025-03-10", projects: 42, verified: true },
  { id: "u4", name: "Peter Kimaro", email: "peter@email.com", role: "professional" as const, status: "pending" as const, joined: "2026-03-01", projects: 0, verified: false },
  { id: "u5", name: "Fatma Said", email: "fatma@email.com", role: "client" as const, status: "suspended" as const, joined: "2025-09-20", projects: 1 },
  { id: "u6", name: "Abdul Hamid", email: "abdul@email.com", role: "client" as const, status: "active" as const, joined: "2025-11-05", projects: 5 },
];

export const ADMIN_REVIEWS_MODERATION = [
  { id: "rm1", reviewer: "Maria Joseph", professional: "John Mwanga", rating: 5, comment: "Excellent work! Highly professional.", status: "approved" as const, date: "2026-03-05" },
  { id: "rm2", reviewer: "Abdul Hamid", professional: "Grace Mollel", rating: 1, comment: "Terrible service, never showed up. Total scam!!!", status: "flagged" as const, date: "2026-03-04" },
  { id: "rm3", reviewer: "Sarah Kimaro", professional: "Peter Kimaro", rating: 4, comment: "Good quality work, slightly delayed.", status: "pending" as const, date: "2026-03-03" },
  { id: "rm4", reviewer: "Hassan Bakari", professional: "Amina Rashid", rating: 5, comment: "Amazing interior design. Transformed our office.", status: "approved" as const, date: "2026-03-02" },
];

export const ADMIN_MATERIAL_PRICES = [
  { id: "m1", name: "Cement (50kg bag)", prices: { "Dar es Salaam": 18500, "Dodoma": 19000, "Arusha": 19500, "Mwanza": 20000 }, unit: "bag" },
  { id: "m2", name: "Steel Rebar (12mm)", prices: { "Dar es Salaam": 22000, "Dodoma": 23000, "Arusha": 23500, "Mwanza": 24000 }, unit: "per meter" },
  { id: "m3", name: "Sand (cubic meter)", prices: { "Dar es Salaam": 45000, "Dodoma": 40000, "Arusha": 42000, "Mwanza": 43000 }, unit: "m³" },
  { id: "m4", name: "Gravel (cubic meter)", prices: { "Dar es Salaam": 55000, "Dodoma": 50000, "Arusha": 52000, "Mwanza": 53000 }, unit: "m³" },
  { id: "m5", name: "Roofing Sheets (IT4)", prices: { "Dar es Salaam": 32000, "Dodoma": 33000, "Arusha": 33500, "Mwanza": 34000 }, unit: "sheet" },
  { id: "m6", name: "Paint (20L bucket)", prices: { "Dar es Salaam": 85000, "Dodoma": 88000, "Arusha": 87000, "Mwanza": 90000 }, unit: "bucket" },
];

export const ADMIN_MONTHLY_ANALYTICS = [
  { month: "Oct", users: 980, projects: 420, revenue: 180000000 },
  { month: "Nov", users: 1100, projects: 480, revenue: 210000000 },
  { month: "Dec", users: 890, projects: 350, revenue: 165000000 },
  { month: "Jan", users: 1250, projects: 520, revenue: 240000000 },
  { month: "Feb", users: 1400, projects: 580, revenue: 275000000 },
  { month: "Mar", users: 1550, projects: 650, revenue: 310000000 },
];

export const ADMIN_DISPUTES = [
  { id: "d1", client: "Fatma Said", professional: "Peter Kimaro", project: "Kitchen Renovation", reason: "Work not completed as agreed", status: "open" as const, date: "2026-03-06" },
  { id: "d2", client: "Maria Joseph", professional: "Hassan Bakari", project: "Electrical Wiring", reason: "Payment dispute over extra work", status: "investigating" as const, date: "2026-03-03" },
  { id: "d3", client: "Abdul Hamid", professional: "Grace Mollel", project: "Interior Design", reason: "Quality of materials used", status: "resolved" as const, date: "2026-02-28" },
];
