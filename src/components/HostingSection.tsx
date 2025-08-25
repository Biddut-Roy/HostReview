import { HostingCard } from "./HostingCard";
import { hostingProviders } from "@/data/hostingProviders";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HostingSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Top Rated Web Hosting Providers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expert team has tested and reviewed the leading hosting providers to help you make 
            the right choice for your website's needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {hostingProviders.map((provider) => (
            <HostingCard key={provider.id} provider={provider} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Hosting Reviews
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}