'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStarterPlan = () => {
    router.push('/');
  };
  const handleProfessionalPlan = () => {
    router.push('/');
  };
  const handleEnterprisePlan = () => {
    router.push('/');
  };
  const handleScheduleDemo = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Solo Freelancer',
      description: 'Perfect for individual freelancers just starting out',
      price: 'Free',
      period: '',
      badge: null,
      features: [
        'Up to 5 invoices per month',
        'Basic invoice templates',
        'Payment tracking',
        'Client management',
        'Email support',
      ],
      cta: 'Start Invoicing Free',
      popular: false,
      handler: handleStarterPlan,
    },
    {
      name: 'Growing Business',
      description: 'Ideal for small businesses scaling their operations',
      price: '$19',
      period: '/month',
      badge: 'Most Popular',
      features: [
        'Unlimited invoices',
        'Custom branding & templates',
        'Automated payment reminders',
        'Expense tracking',
        'Tax calculation',
        'Multi-currency support',
        'Priority support',
        'Payment gateway integration',
      ],
      cta: 'Start 14-Day Free Trial',
      popular: true,
      handler: handleProfessionalPlan,
    },
    {
      name: 'Enterprise',
      description: 'For established businesses with complex invoicing needs',
      price: 'Custom',
      period: '',
      badge: 'White Glove Setup',
      features: [
        'Everything in Growing Business',
        'Advanced reporting & analytics',
        'Team collaboration tools',
        'API access & integrations',
        'Custom workflow automation',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom training sessions',
      ],
      cta: 'Schedule Consultation',
      popular: false,
      handler: handleEnterprisePlan,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            Transparent Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Invoice Smarter,
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Pay Less
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the plan that fits your business size. Get paid faster with professional
            invoices, automated reminders, and seamless payment processing.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly Billing
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual Billing
              <Badge variant="secondary" className="ml-2 text-xs bg-primary/10 text-primary">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge
                    variant="outline"
                    className="mb-4 mx-auto w-fit border-primary/30 text-primary"
                  >
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.handler}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Growing Business' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Questions about pricing?</h3>
          <p className="text-muted-foreground mb-6">
            Our invoicing experts are here to help you choose the right plan for your business. Get
            personalized recommendations and see how much time you can save.
          </p>
          <Button
            onClick={handleScheduleDemo}
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/5"
          >
            Book a Demo Call
          </Button>
        </div>
      </div>
    </section>
  );
}
