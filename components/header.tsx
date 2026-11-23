"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Home", "/"], ["Services", "/services"], ["Industries", "/industries"],
  ["How We Work", "/process"], ["About", "/about"], ["FAQ", "/faq"], ["Jobs", "/jobs"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  return <header className="site-header"><div className="top-callout"><div className="container top-callout-inner"><p>Your team should build the product—not spend weeks searching for the people who will.</p><Link href="/contact" className="top-callout-link">Book a Call</Link></div></div><div className="container nav-wrap">
    <Link href="/" className="wordmark" aria-label="Scouttal home">scouttal<span>.</span></Link>
    <nav className="desktop-nav" aria-label="Primary navigation"><ul>{links.map(([label, href]) => <li key={href}><Link href={href} className={isActive(href) ? "is-active" : undefined} aria-current={isActive(href) ? "page" : undefined}>{label}</Link></li>)}</ul></nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation"><ul>{links.map(([label, href]) => <li key={href}><Link onClick={() => setOpen(false)} href={href} className={isActive(href) ? "is-active" : undefined} aria-current={isActive(href) ? "page" : undefined}>{label}</Link></li>)}</ul></nav>}
  </div></header>;
}
