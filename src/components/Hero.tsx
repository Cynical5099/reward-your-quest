import giftCardImage from "@/assets/amazon-gift-card.jpg";

const Hero = () => {
  return (
    <section className="text-center px-4 pt-8 pb-6 animate-fade-in">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground leading-tight px-2">
        Earn Your{" "}
        <span className="text-primary">$750</span>{" "}
        Amazon Gift Card
      </h1>
      
      <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-md mx-auto px-2">
        Complete recommended deals and maximize your reward.
      </p>
      
      <div className="relative max-w-[280px] sm:max-w-sm mx-auto mb-6 animate-float">
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
