import React, { memo, Suspense } from "react";
import dynamic from "next/dynamic";

// export const dynamic = "force-static";

const TopBar = dynamic(() =>
  import("./Topbar").then((m) => ({ default: m.TopBar }))
);

const Header = dynamic(() =>
  import("./Header").then((m) => ({ default: m.Header }))
);

const Navigation = dynamic(() =>
  import("./Navigation").then((m) => ({ default: m.Navigation }))
);

const Footer = dynamic(() =>
  import("./Footer").then((m) => ({ default: m.Footer }))
);

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = memo(({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Suspense fallback={<div className="h-10 animate-pulse bg-gray-100" />}>
        <TopBar />
      </Suspense>

      <Suspense fallback={<div className="h-16 animate-pulse bg-gray-100" />}>
        <Header />
      </Suspense>

      <Suspense fallback={<div className="h-12 animate-pulse bg-gray-100" />}>
        <Navigation />
      </Suspense>

      <main className="flex-grow">{children}</main>

      <Suspense fallback={<div className="h-40 animate-pulse bg-gray-100" />}>
        <Footer />
      </Suspense>
    </div>
  );
});

Layout.displayName = "Layout";