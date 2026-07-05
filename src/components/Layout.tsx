import React, { memo } from "react";
import { TopBar } from "./Topbar";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
interface LayoutProps {
    children: React.ReactNode;
}
export const Layout = memo(({ children}: LayoutProps) => {
    return (
        <div className="min-h-screen  flex flex-col">
            <TopBar />
            <Header />
            <Navigation />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    )
})

Layout.displayName = 'Layout'

