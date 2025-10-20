import { Lock, MailCheck, Award, TrendingUp } from "lucide-react";

const trustBadges = [
  { icon: Lock, label: "Secure" },
  { icon: MailCheck, label: "Verified" },
  { icon: Award, label: "Reward Guaranteed" }
];

const TrustSection = () => {
  return (
    <section className="px-6 py-12">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Secure. Transparent. Rewarding.
        </h2>
        
        <div className="flex justify-center gap-8 mb-8">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-success" />
                </div>
                <span className="text-xs font-medium text-foreground">{badge.label}</span>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-card rounded-xl p-4 shadow-card border border-accent/20 mb-6">
          <div className="flex items-center justify-center gap-2 text-accent">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">$750 reward claimed by 12 users today</span>
          </div>
        </div>
        
        <p className="text-center text-sm text-muted-foreground">
          Your data is protected. Participation is voluntary.
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
