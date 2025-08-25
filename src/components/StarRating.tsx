import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showNumber?: boolean;
  className?: string;
}

export function StarRating({ 
  rating, 
  maxRating = 5, 
  size = "md", 
  showNumber = true,
  className 
}: StarRatingProps) {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4", 
    lg: "h-5 w-5"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex">
        {[...Array(maxRating)].map((_, i) => {
          const isFilled = i < Math.floor(rating);
          const isHalfFilled = i < rating && i >= Math.floor(rating);
          
          return (
            <div key={i} className="relative">
              <Star 
                className={cn(
                  sizeClasses[size],
                  "text-muted-foreground"
                )}
              />
              {(isFilled || isHalfFilled) && (
                <Star 
                  className={cn(
                    sizeClasses[size],
                    "absolute top-0 left-0 text-warning fill-warning",
                    isHalfFilled && "w-1/2 overflow-hidden"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
      {showNumber && (
        <span className={cn(
          "font-medium text-foreground ml-1",
          textSizeClasses[size]
        )}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}