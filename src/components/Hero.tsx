import { Sparkles } from "lucide-react";
import giftCardImage from "@/assets/amazon-gift-card.jpg";

const Hero = () => {
  return (
    <section className="text-center px-6 pt-12 pb-8 animate-fade-in">
      <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6 animate-pulse-glow">
        <Sparkles className="w-4 h-4 text-accent" />
        <span className="text-sm font-medium text-foreground">Limited Time Offer</span>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
        Earn Your{" "}
        <span className="text-primary">$750</span>{" "}
        Amazon Gift Card
      </h1>
      
      <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
        Complete recommended deals and maximize your reward.
      </p>
      
      <div className="relative max-w-sm mx-auto mb-8 animate-float">
        <img 
          src={giftCardImage} 
          alt="$750 Amazon Gift Card Reward" 
          className="w-full rounded-2xl shadow-glow"
        />
        <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          $750
        </div>
      </div>
    </section>
  );
};

export default Hero;
