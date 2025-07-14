import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CreditCard, Zap } from "lucide-react";

export function PricingNav() {
  return (
    <div className="flex gap-4 items-center">
      <Link href="/checkout">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <CreditCard className="h-4 w-4" />
          One-time Setup ($99)
        </Button>
      </Link>
      <Link href="/subscribe">
        <Button size="sm" className="flex items-center gap-2">
          <Zap className="h-4 w-4" />
          Pro Subscription ($49/mo)
        </Button>
      </Link>
    </div>
  );
}