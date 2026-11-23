import type React from "react";
import Link from "next/link";
import { BriefcaseBusiness, Check, Code2, SearchCheck, Users } from "lucide-react";
import { ButtonLink, Container, CTA, Eyebrow, SectionHeading } from "@/components/ui";

const services=[
  {Icon:SearchCheck,title:"Focused search",copy:"We find people who fit the role, the team and what you are building."},
  {Icon:Code2,title:"Clear screening",copy:"Every shortlist is shaped by relevance—not database volume."},
  {Icon:BriefcaseBusiness,title:"Hiring coordination",copy:"One partner keeps candidates, interviews and decisions moving."}
];

const steps=[
  ["01","Align","Tell us the role, the context and what success looks like."],
  ["02","Scout","We source, screen and present a focused shortlist."],
  ["03","Hire","We coordinate the process through offer and joining."]
];

export default function Home(){return <>
  <section className="home-hero"><Container><div className="home-hero-grid">
    <div>
      <div data-enter="support" style={{"--d":"0ms"} as React.CSSProperties}><Eyebrow>GLOBAL RECRUITMENT, FOUNDER-LED</Eyebrow></div>
      <h1 data-enter="lead" style={{"--d":"60ms"} as React.CSSProperties}>We scout the talent.<br/><span>You build what’s next.</span></h1>
      <p data-enter="support" style={{"--d":"180ms"} as React.CSSProperties}>Focused recruitment for technical and business-critical roles—without the noise, delays or endless searching.</p>
      <div className="button-row" data-enter="support" style={{"--d":"260ms"} as React.CSSProperties}><ButtonLink href="/contact">Book a Call</ButtonLink><ButtonLink href="/services" variant="secondary">View Services</ButtonLink></div>
    </div>
    <div className="talent-signal" role="img" aria-label="A focused path from talent search to successful hire" data-enter="fade" style={{"--d":"120ms"} as React.CSSProperties}>
      <div className="signal-ring signal-ring-one"/><div className="signal-ring signal-ring-two"/>
      <div className="signal-orbit" aria-hidden="true"><span className="signal-dot dot-one"/><span className="signal-dot dot-two"/><span className="signal-dot dot-three"/></div>
      <div className="signal-core"><Users/><strong>Right talent</strong><small>Clear vision</small></div>
    </div>
  </div><div className="trust-strip" data-enter="fade" style={{"--d":"320ms"} as React.CSSProperties}><span>FOCUSED SEARCH</span><span>GLOBAL REACH</span><span>FOUNDER-LED</span><span>END-TO-END SUPPORT</span></div></Container></section>

  <section className="section home-services"><Container><SectionHeading eyebrow="WHAT WE DO" title="A recruitment partner that does the work." intro="From the first brief to the accepted offer, Scouttal keeps hiring focused and moving."/><div className="simple-service-grid">{services.map(({Icon,title,copy},i)=><article key={title}><span>0{i+1}</span><Icon/><h3>{title}</h3><p>{copy}</p></article>)}</div><Link className="text-link" href="/services">Explore all recruitment services</Link></Container></section>

  <section className="section home-process"><Container><div className="process-intro"><SectionHeading eyebrow="HOW IT WORKS" title="Three steps. One accountable partner."/><p>Less administration for your team. More attention on the people worth meeting.</p></div><ol className="simple-steps">{steps.map(([number,title,copy])=><li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></Container></section>

  <section className="section home-focus"><Container className="focus-grid"><div className="focus-visual"><span>THE SCOUTTAL STANDARD</span><div><Check/><strong>Relevant before plentiful.</strong></div><div><Check/><strong>Context before keywords.</strong></div><div><Check/><strong>Trust before transactions.</strong></div></div><div><Eyebrow>WHY SCOUTTAL</Eyebrow><h2>Talent is everywhere.<br/>Vision finds the right one.</h2><p>Good hiring is not about seeing more profiles. It is about understanding where the company is going—and finding people who can help take it there.</p><ButtonLink href="/about" variant="secondary">Meet Scouttal</ButtonLink></div></Container></section>

  <section className="founder-note"><Container><blockquote>“Your team should build the product—not spend weeks searching for the people who will.”</blockquote><p>Rajveer Singh <span>Founder, Scouttal</span></p></Container></section>
  <CTA/>
</>}
