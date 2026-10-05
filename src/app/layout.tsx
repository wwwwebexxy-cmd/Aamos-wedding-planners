import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aamos Wedding Planners",
    template: "%s | Aamos Wedding Planners",
  },
  description:
    "Aamos Wedding Planners creates thoughtful, elegant weddings and family celebrations shaped around you.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </body>
    </html>
  );
}
