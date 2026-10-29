import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import CostEstimator from "@/components/CostEstimator";
import Workflow from "@/components/Workflow";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactLocation from "@/components/ContactLocation";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070b14] text-slate-900 dark:text-slate-100 selection:bg-cyan-500 selection:text-white transition-colors duration-300">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section with Interactive Visual Showcase */}
        <Hero />

        {/* 2. Key Metrics & Supported Brands Bar */}
        <StatsBar />

        {/* 3. Comprehensive Services Catalog with Category Filters */}
        <Services />

        {/* 4. Interactive Cost Estimator & Live Consultation Calculator */}
        <CostEstimator />

        {/* 5. 4-Step Transparent Diagnostic & Repair Workflow */}
        <Workflow />

        {/* 6. Why Choose Us (Tech Advantages & Facilities) */}
        <WhyChooseUs />

        {/* 7. Verified Customer Reviews & Testimonials */}
        <Testimonials />

        {/* 8. Interactive FAQ Accordion */}
        <FAQ />

        {/* 9. Contact, Workshop Hours & Direct Consultation Form */}
        <ContactLocation />
      </main>

      {/* Modern High-Tech Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWA />
    </div>
  );
}
