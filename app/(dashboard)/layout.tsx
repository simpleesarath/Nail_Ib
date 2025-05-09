import { ReactNode } from 'react';
import { Navigation } from '@/components/layout/navigation';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div className="hidden lg:block">
        <Navigation />
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}