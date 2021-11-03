import Footer from "../Footer";
import Navbar from "../Navbar";
import * as React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
