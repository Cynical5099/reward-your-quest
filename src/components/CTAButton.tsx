import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const REWARD_LINK = "https://uplevelrewarded.com/aff_c?offer_id=144&aff_id=21664";

const CTAButton = () => {
  const handleClick = () => {
    window.location.href = REWARD_LINK;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background to-transparent z-50">
      <div className="max-w-md mx-auto">
        <Button
          onClick={handleClick}
          className="w-full h-14 text-lg font-bold bg-gradient-hero hover:opacity-90 shadow-cta transition-all duration-300 hover:scale-105 animate-pulse-glow"
          size="lg"
        >
          Start Earning
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CTAButton;
