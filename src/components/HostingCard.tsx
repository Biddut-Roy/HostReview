import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "./StarRating";
import { Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface HostingProvider {
  id: string;
  name: string;
  logo: string;
  rating: number;
  reviewCount: number;
  startingPrice: string;
  features: string[];
  pros: string[];
  isRecommended?: boolean;
  affiliate?: string;
}

interface HostingCardProps {
  provider: HostingProvider;
  className?: string;
}

export function HostingCard({ provider, className }: HostingCardProps) {
  return (
    <Card className={cn(
      "relative transition-all duration-300 hover:shadow-lg hover:bg-card-hover group",
      provider.isRecommended && "ring-2 ring-primary shadow-primary",
      className
    )}>
      {provider.isRecommended && (
        <Badge 
          variant="default" 
          className="absolute -top-3 left-4 bg-primary text-primary-foreground shadow-md z-10"
        >
          Recommended
        </Badge>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-primary">
                {provider.name.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">{provider.name}</h3>
              <div className="flex items-center gap-2">
                <StarRating rating={provider.rating} size="sm" />
                <span className="text-sm text-muted-foreground">
                  ({provider.reviewCount} reviews)
                </span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">
              {provider.startingPrice}
            </div>
            <div className="text-sm text-muted-foreground">per month</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Key Features</h4>
          <div className="flex flex-wrap gap-1">
            {provider.features.map((feature) => (
              <Badge key={feature} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-2">Why Choose {provider.name}</h4>
          <ul className="space-y-1">
            {provider.pros.slice(0, 3).map((pro) => (
              <li key={pro} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2 pt-2">
          <Button className="flex-1" variant={provider.isRecommended ? "default" : "outline"}>
            Get Started
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            Full Review
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}