import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { HostingSection } from "@/components/HostingSection";
import { ComparisonTable } from "@/components/ComparisonTable";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Hero />
        
        <section id="reviews">
          <HostingSection />
        </section>
        
        <section id="comparison">
          <ComparisonTable />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
