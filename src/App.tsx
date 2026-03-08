import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./components/layout/DashboardLayout";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const ExplorePage = lazy(() => import("./pages/ExplorePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const MaterialsPage = lazy(() => import("./pages/MaterialsPage"));
const CostCalculatorPage = lazy(() => import("./pages/CostCalculatorPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));

// Dashboard pages
const DashboardOverview = lazy(() => import("./pages/dashboard/DashboardOverview"));
const PostProjectPage = lazy(() => import("./pages/dashboard/PostProjectPage"));
const MyProjectsPage = lazy(() => import("./pages/dashboard/MyProjectsPage"));
const QuotesPage = lazy(() => import("./pages/dashboard/QuotesPage"));
const MessagesPage = lazy(() => import("./pages/dashboard/MessagesPage"));
const SavedProsPage = lazy(() => import("./pages/dashboard/SavedProsPage"));
const PaymentsPage = lazy(() => import("./pages/dashboard/PaymentsPage"));
const ReviewsPage = lazy(() => import("./pages/dashboard/ReviewsPage"));
const SettingsPage = lazy(() => import("./pages/dashboard/SettingsPage"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/materials" element={<MaterialsPage />} />
            <Route path="/calculator" element={<CostCalculatorPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />

            {/* Client Dashboard */}
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardOverview />} />
              <Route path="post-project" element={<PostProjectPage />} />
              <Route path="projects" element={<MyProjectsPage />} />
              <Route path="quotes" element={<QuotesPage />} />
              <Route path="messages" element={<MessagesPage />} />
              <Route path="saved" element={<SavedProsPage />} />
              <Route path="payments" element={<PaymentsPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
