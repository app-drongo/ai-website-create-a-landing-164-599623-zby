'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  Clock,
  CreditCard,
  BarChart3,
  Globe2,
  Smartphone,
  Shield,
  Zap,
  Users,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: FileText,
      title: 'Professional Templates',
      description:
        'Beautiful, customizable invoice templates that reflect your brand and impress clients.',
      badge: 'Design',
    },
    {
      icon: Clock,
      title: 'Instant Generation',
      description: 'Create and send invoices in under 30 seconds with our streamlined workflow.',
      badge: 'Speed',
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description:
        'Accept payments via Stripe, PayPal, and bank transfers directly through invoices.',
      badge: 'Payments',
    },
    {
      icon: BarChart3,
      title: 'Revenue Tracking',
      description:
        'Monitor cash flow, track outstanding payments, and analyze business performance.',
      badge: 'Analytics',
    },
    {
      icon: Globe2,
      title: 'Multi-Currency',
      description:
        'Bill international clients in their preferred currency with automatic conversion.',
      badge: 'Global',
    },
    {
      icon: Smartphone,
      title: 'Mobile Invoicing',
      description:
        'Create, send, and manage invoices on-the-go with our mobile-optimized platform.',
      badge: 'Mobile',
    },
    {
      icon: Shield,
      title: 'Tax Compliance',
      description: 'Automatic tax calculations and compliance features for multiple jurisdictions.',
      badge: 'Compliance',
    },
    {
      icon: Zap,
      title: 'Automated Reminders',
      description: 'Smart payment reminders that increase collection rates by 40% on average.',
      badge: 'Automation',
    },
    {
      icon: Users,
      title: 'Client Portal',
      description:
        'Dedicated client portals for easy invoice access, payment history, and communication.',
      badge: 'Experience',
    },
  ];

  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewPricing = () => {
    window.location.href = '/pricing';
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            Core Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Everything You Need for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Professional Invoicing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Streamline your billing process with powerful features designed specifically for
            freelancers and small businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg bg-card"
              >
                <CardHeader className="relative pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-muted">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative pt-0">
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Subtle hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-muted/30 border border-border/50">
          <h3 className="text-2xl font-semibold mb-3 text-foreground">
            Ready to Transform Your Invoicing?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of freelancers and small businesses who've streamlined their billing and
            improved cash flow with Invoice App.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm"
            >
              Start Free Trial
            </button>
            <button
              onClick={handleViewPricing}
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors text-foreground"
            >
              View Pricing Plans
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
