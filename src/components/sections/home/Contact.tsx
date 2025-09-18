'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  Send,
  Headphones,
  CheckCircle,
  Users,
  Zap,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    // Could redirect to success page or show confirmation
    router.push('/');
  };

  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePrimaryAction();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help with your invoices',
      contact: 'support@invoiceapp.com',
      action: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with billing experts',
      contact: '+1 (555) 234-5678',
      action: 'Call Now',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Instant help for urgent issues',
      contact: 'Available during business hours',
      action: 'Start Chat',
    },
  ];

  const supportFeatures = [
    'Free migration from other platforms',
    'Dedicated onboarding specialist',
    'Custom invoice template setup',
    'Payment gateway integration help',
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary text-primary">
            <Headphones className="size-3 mr-2" />
            Support
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Need Help with Your
            <span className="block text-primary">Invoicing?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our billing experts are here to help you streamline your invoicing process. Get
            personalized support for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2 text-foreground">
                <Send className="size-6 text-primary" />
                Get Personalized Help
              </CardTitle>
              <CardDescription>
                Tell us about your invoicing challenges and we'll provide tailored solutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Business Owner Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                      placeholder="Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-foreground"
                    >
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                      placeholder="sarah@designstudio.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors text-foreground"
                    placeholder="Creative Design Studio"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    How can we help with your invoicing? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none text-foreground"
                    placeholder="I need help setting up recurring invoices for my monthly clients and integrating with Stripe payments..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-base py-6 group bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get Expert Help
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                <Zap className="size-5 text-primary" />
                Quick Support Options
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border hover:border-primary/30 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1 text-foreground">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Support Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                <Users className="size-5 text-primary" />
                What's Included
              </h3>
              <div className="space-y-3">
                {supportFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 border border-border/50 rounded-lg bg-card"
                  >
                    <CheckCircle className="size-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4 text-foreground">
                  <Clock className="size-5 text-primary" />
                  Support Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">8:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-muted-foreground">Email support only</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Zap className="size-4" />
                    Average response time: Under 2 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-foreground">Ready to Start Invoicing?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Join thousands of freelancers and small businesses already using Invoice App
                </p>
                <Button
                  onClick={handleSecondaryAction}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Try Invoice App Free
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
