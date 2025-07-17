import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '3 forms',
        '100 submissions/month',
        'Basic templates',
        'Email notifications',
        'Community support',
      ],
      popular: false,
      cta: 'Get Started',
      variant: 'outline' as const,
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      description: 'Best for growing businesses',
      features: [
        'Unlimited forms',
        '10,000 submissions/month',
        'All templates',
        'Custom branding',
        'Webhook integrations',
        'Analytics dashboard',
        'Priority support',
      ],
      popular: true,
      cta: 'Start Free Trial',
      variant: 'default' as const,
    },
    {
      name: 'Agency',
      price: '$59',
      period: 'per month',
      description: 'For teams and agencies',
      features: [
        'Everything in Pro',
        '50,000 submissions/month',
        'White-label solution',
        'Team collaboration',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated support',
      ],
      popular: false,
      cta: 'Contact Sales',
      variant: 'outline' as const,
    },
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Simple, transparent{' '}
            <span className="logo-gradient">pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that scales with your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`hover-lift relative transition-all duration-300 ${
                plan.popular
                  ? 'border-primary shadow-glow scale-105 md:scale-110'
                  : 'border-border hover:border-primary/20'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center space-y-4 pb-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? 'btn-gradient hover-glow' : ''}`}
                  variant={plan.variant}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            All plans include SSL security, spam protection, and 99.9% uptime guarantee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;