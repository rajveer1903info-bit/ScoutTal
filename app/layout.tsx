import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { siteConfig } from "@/lib/config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://scouttal.example"),
  title: { default: "Scouttal | Focused Global Recruitment", template: "%s | Scouttal" },
  description: siteConfig.description,
  openGraph: { title: "Scouttal", description: siteConfig.description, type: "website", siteName: "Scouttal" },
  twitter: { card: "summary_large_image", title: "Scouttal", description: siteConfig.description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></body></html>;
}
