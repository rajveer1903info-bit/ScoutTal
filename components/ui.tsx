import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}</p>; }

export function SectionHeading({ eyebrow, title, intro, align = "left" }: { eyebrow?: string; title: string; intro?: string; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2>{intro && <p>{intro}</p>}
  </div>;
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "light" }) {
  return <Link href={href} className={`button button-${variant}`}>{children}</Link>;
}

export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return <section className="page-hero"><Container><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{description}</p>{children}</Container></section>;
}

export function CTA() {
  return <section className="cta"><Container className="cta-inner"><div><Eyebrow>START A CONVERSATION</Eyebrow><h2>Pass the search to us.</h2><p>Tell us who you need. We’ll bring focus, momentum and the right talent to the process.</p></div><div className="button-row"><ButtonLink href="/contact" variant="light">Book a Call</ButtonLink><ButtonLink href="/contact#email" variant="secondary">Email Us</ButtonLink></div></Container></section>;
}
