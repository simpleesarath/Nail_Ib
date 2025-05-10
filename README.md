This directory contains the Next.js 14 frontend application for the AstraLedger institutional-grade portfolio platform. 
It provides users with an investment-desk workspace to manage portfolios, view market data, execute trades, and monitor risk metrics.

## Technologies Used

* **Next.js 14:** Utilizing the App Router and React Server Components for a modern and performant user interface.
* **TypeScript:** Ensuring type safety and improved developer experience.
* **Tailwind CSS:** For rapid and utility-first styling.
* **shadcn/ui:** A collection of beautifully designed and accessible UI components built with Radix UI and Tailwind CSS.
* **@tanstack/react-virtual:** For efficiently rendering large datasets in tables and lists.
* **@tanstack/react-query:** For robust data fetching, caching, and state management. Data is hydrated on the server for improved initial load performance.
* **Recharts:** A composable charting library for creating interactive data visualizations.
* **GSAP (GreenSock Animation Platform):** For smooth and powerful animations throughout the user interface, including the landing page.
* **Yjs:** For enabling collaborative editing of trade tickets with Conflict-Free Replicated Data Types (CRDTs).
* **socket.io-client:** For real-time communication to facilitate collaborative editing and receive live updates.
* **workbox-window:** For implementing offline support and queueing mutations.

## Getting Started

1.  Ensure you have Node.js and npm (or yarn) installed.
2.  Navigate to the root directory of the AstraLedger project.
3.  Install dependencies:
   npm install
4. To run the application:
   npx run dev
5. click on that link appeared in the terminal or directly open http:localhost://3000
here is the folder structure 
├── app/
│   ├── (auth)/
│   │   └── auth/
│   │       ├── login/
│   │       │   └── page.tsx
│   │       └── register/
│   │           └── page.tsx
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── markets/
│   │   │   └── page.tsx
│   │   ├── portfolio/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── (landing)/
│   │   └── page.tsx
│   ├── demo/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── providers.tsx
├── components/
│   ├── layout/
│   │   ├── dashboard-header.tsx
│   │   └── navigation.tsx
│   └── ui/
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── theme-toggle.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       └── tooltip.tsx
├── hooks/
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── .eslintrc.json
├── .gitignore
├── components.json
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
