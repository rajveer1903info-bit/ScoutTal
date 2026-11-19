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
  return <section className="cta"><Container className="cta-inner"><div><Eyebrow>START A CONVERSATION</Eyebrow><h2>Have a role you need to fill?</h2><p>Let’s discuss your hiring requirements and explore how Scouttal can help you build your team in India.</p></div><div className="button-row"><ButtonLink href="/contact" variant="light">Book a Discovery Call</ButtonLink><ButtonLink href="/contact#email" variant="secondary">Email Us</ButtonLink></div></Container></section>;
}
