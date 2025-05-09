'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ArrowRight, BarChart3, LineChart, Lock, RefreshCw, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function LandingPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(headerRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }
    );
    
    tl.fromTo(titleRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }, 
      "-=0.5"
    );
    
    tl.fromTo(subtitleRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }, 
      "-=0.7"
    );
    
    tl.fromTo(ctaRef.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1 }, 
      "-=0.7"
    );
    
    tl.fromTo(featuresRef.current?.querySelectorAll('.feature-card'), 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 }, 
      "-=0.5"
    );
    
    // Floating animation for cards
    gsap.to('.feature-card', {
      y: '-10px',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.1
    });
    
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header ref={headerRef} className="w-full px-6 py-4 flex justify-between items-center border-b border-border">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl text-foreground">AstraLedger</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <Link href="/auth/login">
            <Button>Login</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col">
        <section className="py-20 px-6 md:px-12 flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Institutional-Grade Portfolio Management
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl">
            Multi-tenant risk analysis, real-time market data, and collaborative trading tools for investment professionals.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link href="/auth/register">
              <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-6 text-lg">
                View Demo
              </Button>
            </Link>
          </div>
        </section>

        {/* Features */}
        <section ref={featuresRef} className="py-16 px-6 md:px-12 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Institutional Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature-card bg-card p-8 rounded-xl shadow-lg border border-border">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Real-Time Market Data</h3>
                <p className="text-muted-foreground">
                  Streaming quotes from Polygon.io and Coinbase WebSocket APIs for instant decision-making.
                </p>
              </div>
              
              <div className="feature-card bg-card p-8 rounded-xl shadow-lg border border-border">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multi-Tenant Security</h3>
                <p className="text-muted-foreground">
                  Complete isolation between trading desks with row-level security and advanced access controls.
                </p>
              </div>
              
              <div className="feature-card bg-card p-8 rounded-xl shadow-lg border border-border">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <RefreshCw className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Offline-First</h3>
                <p className="text-muted-foreground">
                  Continue working seamlessly during connectivity issues with intelligent transaction queuing.
                </p>
              </div>
              
              <div className="feature-card bg-card p-8 rounded-xl shadow-lg border border-border">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <LineChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Risk Metrics</h3>
                <p className="text-muted-foreground">
                  Real-time VaR calculations and risk exposure analysis with automated updates.
                </p>
              </div>
              
              <div className="feature-card bg-card p-8 rounded-xl shadow-lg border border-border">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Collaborative Trading</h3>
                <p className="text-muted-foreground">
                  Real-time collaborative trade ticket editing with conflict resolution and remote cursors.
                </p>
              </div>
              
              <div className="feature-card bg-card p-8 rounded-xl shadow-lg border border-border">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
                <p className="text-muted-foreground">
                  Automated SEC filing analysis and ECB announcement processing for regulatory awareness.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-10 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span className="font-bold">AstraLedger</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AstraLedger. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}