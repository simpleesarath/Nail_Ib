'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function DemoPage() {
  useEffect(() => {
    // Demo account credentials could be pre-filled here
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="w-full px-6 py-4 flex justify-between items-center border-b border-border">
        <Link href="/" className="flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">AstraLedger</span>
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold mb-6">Try AstraLedger Demo</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the full power of AstraLedger with our interactive demo. Use the credentials below to access all features.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Demo Credentials</h2>
            <div className="space-y-2">
              <p className="font-mono">Email: demo@astroledger.com</p>
              <p className="font-mono">Password: password123</p>
            </div>
          </div>

          <div className="space-y-4">
            <Link href="/auth/login">
              <Button size="lg" className="w-full">
                Start Demo
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground text-center">
              Want to use AstraLedger in production?{' '}
              <Link href="/auth/register" className="text-primary hover:underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-auto py-6 border-t border-border">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AstraLedger. All rights reserved.
        </div>
      </footer>
    </div>
  );
}