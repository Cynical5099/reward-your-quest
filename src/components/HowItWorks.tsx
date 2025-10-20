import { Mail, CheckCircle, Gift } from "lucide-react";

const steps = [
  {
    icon: Mail,
    number: "1",
    title: "Enter Your Email",
    description: "We'll email you to start earning your reward."
  },
  {
    icon: CheckCircle,
    number: "2",
    title: "Complete Recommended Deals",
    description: "The more deals you complete, the higher your Amazon reward."
  },
  {
    icon: Gift,
    number: "3",
    title: "Enjoy Your Reward",
    description: "Receive your $750 Amazon gift card once your deals are complete."
  }
];

const HowItWorks = () => {
  return (
    <section className="px-4 py-8 bg-gradient-subtle">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground px-2">
        How It Works
      </h2>
      
      <div className="max-w-md mx-auto space-y-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div 
              key={step.number}
              className="bg-card rounded-xl p-4 sm:p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center shadow-cta">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold text-primary">Step {step.number}</span>
                    <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <p className="text-center text-xs sm:text-sm text-muted-foreground mt-6 px-4">
        All communication is secure. Your progress is tracked via email.
      </p>
    </section>
  );
};

export default HowItWorks;
