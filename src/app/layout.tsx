import "bootstrap-icons/font/bootstrap-icons.css";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionRefsProvider } from "@/contexts/SectionRefsContext";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Improves font rendering behavior
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased p-5`}>
        <SectionRefsProvider>
          <Navbar />
          {children}
          <Footer />
        </SectionRefsProvider>
      </body>
    </html>
  );
}
