import { Star, Mail, Twitter, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  const footerSections = [
    {
      title: "Hosting Reviews",
      links: [
        "SiteGround Review",
        "Bluehost Review", 
        "HostGator Review",
        "A2 Hosting Review",
        "All Reviews"
      ]
    },
    {
      title: "Hosting Types",
      links: [
        "Shared Hosting",
        "VPS Hosting",
        "Dedicated Hosting",
        "WordPress Hosting",
        "Cloud Hosting"
      ]
    },
    {
      title: "Resources", 
      links: [
        "Hosting Guides",
        "Speed Tests",
        "Uptime Monitor",
        "Website Builder Reviews",
        "Domain Registration"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Contact",
        "Privacy Policy",
        "Terms of Service",
        "Affiliate Disclosure"
      ]
    }
  ];

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-2">Stay Updated with Hosting News</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest hosting reviews, deals, and web development tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address" 
              className="flex-1"
            />
            <Button>
              Subscribe
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-hero rounded-lg flex items-center justify-center">
              <Star className="h-5 w-5 text-white" />
            </div>
            <div className="font-bold text-xl text-primary">
              HostGuru
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center">
            © 2024 HostGuru. All rights reserved. We may earn commission from hosting providers.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}