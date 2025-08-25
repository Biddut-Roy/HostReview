import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarRating } from "./StarRating";
import { hostingProviders } from "@/data/hostingProviders";
import { Check, X } from "lucide-react";

const comparisonFeatures = [
  { name: "Free SSL Certificate", key: "ssl" },
  { name: "Free Domain", key: "domain" },
  { name: "WordPress Optimized", key: "wordpress" },
  { name: "24/7 Support", key: "support" },
  { name: "Money Back Guarantee", key: "guarantee" },
  { name: "Free Website Migration", key: "migration" },
];

const getFeatureStatus = (provider: any, featureKey: string) => {
  const featureMap = {
    ssl: provider.features.includes("Free SSL"),
    domain: provider.features.includes("Free Domain") || provider.name === "Bluehost",
    wordpress: provider.features.includes("WordPress Optimized") || provider.features.includes("1-Click WordPress"),
    support: provider.features.includes("24/7 Support"),
    guarantee: true, // All providers have money-back guarantee
    migration: provider.features.includes("Free Site Migration") || provider.pros.some((pro: string) => pro.includes("migration")),
  };
  return featureMap[featureKey as keyof typeof featureMap] || false;
};

export function ComparisonTable() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Side-by-Side Hosting Comparison
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare the key features and benefits of our top-rated hosting providers 
            to find the perfect match for your website's requirements.
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle className="text-center">Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px] sticky left-0 bg-background z-10">
                      Provider
                    </TableHead>
                    <TableHead className="text-center">Rating</TableHead>
                    <TableHead className="text-center">Starting Price</TableHead>
                    {comparisonFeatures.map((feature) => (
                      <TableHead key={feature.key} className="text-center min-w-[120px]">
                        {feature.name}
                      </TableHead>
                    ))}
                    <TableHead className="text-center">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hostingProviders.map((provider) => (
                    <TableRow key={provider.id} className="hover:bg-muted/50">
                      <TableCell className="sticky left-0 bg-background z-10">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                            <span className="text-sm font-bold text-primary">
                              {provider.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium">{provider.name}</div>
                            {provider.isRecommended && (
                              <Badge variant="default" className="text-xs mt-1">
                                Recommended
                              </Badge>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <StarRating 
                          rating={provider.rating} 
                          size="sm" 
                          showNumber={false}
                          className="justify-center"
                        />
                        <div className="text-sm font-medium mt-1">
                          {provider.rating}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="font-bold text-primary">
                          {provider.startingPrice}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          per month
                        </div>
                      </TableCell>
                      {comparisonFeatures.map((feature) => (
                        <TableCell key={feature.key} className="text-center">
                          {getFeatureStatus(provider, feature.key) ? (
                            <Check className="h-5 w-5 text-success mx-auto" />
                          ) : (
                            <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
                          )}
                        </TableCell>
                      ))}
                      <TableCell className="text-center">
                        <Button 
                          size="sm" 
                          variant={provider.isRecommended ? "default" : "outline"}
                        >
                          Get Started
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}