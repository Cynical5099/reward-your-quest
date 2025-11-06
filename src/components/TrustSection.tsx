import { Lock, MailCheck, Award, TrendingUp } from "lucide-react";

const trustBadges = [
  { icon: Lock, label: "Secure" },
  { icon: MailCheck, label: "Verified" },
  { icon: Award, label: "Reward Guaranteed" }
];

const TrustSection = () => {
  return (
    <section className="px-4 py-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-foreground px-2">
          Secure. Transparent. Rewarding.
        </h2>
        
        <div className="flex justify-center gap-6 sm:gap-8 mb-6">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-success/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-success" />
                </div>
                <span className="text-xs font-medium text-foreground">{badge.label}</span>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-card rounded-xl p-3 sm:p-4 shadow-card border border-accent/20 mb-4">
          <div className="flex items-center justify-center gap-2 text-accent">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="font-semibold text-xs sm:text-sm text-center">Amazon rewards claimed by 12 users today</span>
          </div>
        </div>
        
        <p className="text-center text-xs sm:text-sm text-muted-foreground px-4">
          Your data is protected. Participation is voluntary.
        </p>
      </div>
    </section>
  );
};

export default TrustSection;
