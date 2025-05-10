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
<hr>
here is the folder structure <br/>
<div>
   ├── app/ <br/>
│   ├── (auth)/ <br/>
│   │   └── auth/ <br/>
│   │       ├── login/ <br/>
│   │       │   └── page.tsx <br/>
│   │       └── register/ <br/>
│   │           └── page.tsx <br/>
│   ├── (dashboard)/ <br/>
│   │   ├── dashboard/ <br/>
│   │   │   └── page.tsx  <br/>
│   │   ├── markets/  <br/> 
│   │   │   └── page.tsx  <br/>
│   │   ├── portfolio/  <br/>
│   │   │   └── page.tsx  <br/>
│   │   └── layout.tsx  <br/>
│   ├── (landing)/ <br/>
│   │   └── page.tsx <br/>
│   ├── demo/ <br/>
│   │   └── page.tsx  <br/>
│   ├── globals.css  <br/>
│   ├── layout.tsx  <br/>
│   └── providers.tsx  <br/>
├── components/  <br/>
│   ├── layout/  <br/>
│   │   ├── dashboard-header.tsx <br/>
│   │   └── navigation.tsx <br/>
│   └── ui/ <br/>
│       ├── accordion.tsx <br/>
│       ├── alert-dialog.tsx <br/> 
│       ├── alert.tsx <br/>
│       ├── aspect-ratio.tsx <br/>
│       ├── avatar.tsx <br/>
│       ├── badge.tsx <br/>
│       ├── breadcrumb.tsx <br/>
│       ├── button.tsx <br/>
│       ├── calendar.tsx <br/>
│       ├── card.tsx <br/>
│       ├── carousel.tsx <br/>
│       ├── chart.tsx <br/>
│       ├── checkbox.tsx <br/>
│       ├── collapsible.tsx <br/>
│       ├── command.tsx <br/>
│       ├── context-menu.tsx <br/>
│       ├── dialog.tsx <br/>
│       ├── drawer.tsx <br/>
│       ├── dropdown-menu.tsx <br/>
│       ├── form.tsx <br/>
│       ├── hover-card.tsx <br/>
│       ├── input-otp.tsx <br/>
│       ├── input.tsx <br/>
│       ├── label.tsx <br/>
│       ├── menubar.tsx <br/>
│       ├── navigation-menu.tsx <br/>
│       ├── pagination.tsx <br/>
│       ├── popover.tsx <br/>
│       ├── progress.tsx <br/>
│       ├── radio-group.tsx <br/>
│       ├── resizable.tsx <br/>
│       ├── scroll-area.tsx <br/>
│       ├── separator.tsx <br/>
│       ├── sheet.tsx <br/>
│       ├── skeleton.tsx <br/>
│       ├── slider.tsx <br/>
│       ├── sonner.tsx <br/>
│       ├── switch.tsx <br/>
│       ├── table.tsx <br/>
│       ├── tabs.tsx <br/>
│       ├── textarea.tsx <br/>
│       ├── theme-toggle.tsx <br/>
│       ├── toast.tsx <br/>
│       ├── toaster.tsx <br/>
│       ├── toggle-group.tsx <br/>
│       ├── toggle.tsx <br/>
│       └── tooltip.tsx <br/>
├── hooks/ <br/>
│   └── use-toast.ts <br/>
├── lib/ <br/>
│   └── utils.ts <br/>
├── .eslintrc.json <br/>
├── .gitignore <br/>
├── components.json <br/>
├── next.config.js <br/>
├── package.json <br/>
├── postcss.config.js <br/>
├── tailwind.config.ts <br/>
└── tsconfig.json <br/>

</div>
