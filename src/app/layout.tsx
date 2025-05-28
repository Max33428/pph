import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/static/Header";
import Footer from "@/components/static/Footer";
import CookieBanner from "@/components/Popups/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jetzt bestellen bei Pizza Pasta House | Harsewinkel",
  description: "Leckere Pizza online bestellen",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{ children: React.ReactNode }>) {
  return (
      <html lang="de">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
      <Header />
      <div className="fixed top-1/2 right-0 z-[9999] transform -translate-y-1/2 group">
          <button
              className="relative bg-green-50 text-green-800 font-medium py-2 pl-2 pr-8 rounded-l-lg shadow-md group-hover:pr-20 transition-all duration-300 ease-in-out"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
              Feedback
              <span className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm whitespace-nowrap rotate-0">

              </span>
          </button>
      </div>
      <main className="flex-grow">{children}</main>
      <Footer />

      <CookieBanner/>
      </body>
      </html>
  );
}
