import Link from "next/link";
import { siteConfig, isConfiguredUrl } from "@/lib/config";

export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><Link href="/" className="wordmark wordmark-light">scouttal<span>.</span></Link><p>Your recruitment partner for talent that moves the business forward.</p></div>
    <div><h3>Explore</h3><Link href="/services">Services</Link><Link href="/industries">Industries</Link><Link href="/process">How We Work</Link><Link href="/about">About</Link></div>
    <div><h3>Resources</h3><Link href="/insights">Insights</Link><Link href="/faq">FAQ</Link><Link href="/jobs">Jobs</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></div>
    <div><h3>Connect</h3><span>{siteConfig.businessEmail}</span>{isConfiguredUrl(siteConfig.linkedInUrl) ? <a href={siteConfig.linkedInUrl}>LinkedIn</a> : <span>LinkedIn — {siteConfig.linkedInUrl}</span>}{isConfiguredUrl(siteConfig.calendlyUrl) ? <a href={siteConfig.calendlyUrl}>Book a call</a> : <span>Booking — {siteConfig.calendlyUrl}</span>}</div>
  </div><div className="container footer-bottom"><span>© 2026 Scouttal.</span><span>Global talent. International perspective.</span></div></footer>;
}
