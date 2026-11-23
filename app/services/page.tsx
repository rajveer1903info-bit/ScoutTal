import type { Metadata } from "next";
import { Handshake, SearchCheck, ShieldCheck, Waypoints } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ButtonLink, Container, CTA, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata = { title: "Recruitment Services", description: "Focused global sourcing, screening, shortlisting and hiring coordination for technical and business-critical talent.", alternates: { canonical: "/services" } };
const services: Array<[LucideIcon, string, string, string]> = [
  [SearchCheck,"Search & Sourcing","We map the market, reach the right people and keep every search anchored to the brief.","A focused pipeline instead of profile volume."],
  [ShieldCheck,"Screening & Shortlisting","We qualify experience, motivation and practical fit before a candidate reaches your team.","Clearer interviews and stronger decisions."],
  [Waypoints,"Interview Coordination","We keep schedules, feedback and candidate communication moving across teams and time zones.","Momentum without the administrative drag."],
  [Handshake,"Offer to Joining","We stay close through offer, notice period and joining so the final stretch feels as considered as the search.","A confident close and a better candidate experience."]
];
export default function Services(){return <><PageHero eyebrow="RECRUITMENT SERVICES" title="A focused recruitment partner you can trust." description="One accountable partner for the work between a clear brief and a confident hire."/><section className="section service-overview"><Container><SectionHeading eyebrow="WHAT WE HANDLE" title="The recruitment work, handled." intro="Four connected services. One focused search from first conversation to joining."/><div className="service-capability-grid">{services.map(([Icon,title,desc,value])=><article key={title}><div className="service-capability-icon"><Icon/></div><h2>{title}</h2><p>{desc}</p><strong>{value}</strong></article>)}</div><div className="service-partner-band"><div><span>BUILT AROUND THE BRIEF</span><h2>Technical or business-critical. Emerging sector or established market.</h2></div><div><p>We adapt the search to the role, company stage and hiring context—without turning the process into a generic playbook.</p><ButtonLink href="/contact">Discuss Your Search</ButtonLink></div></div></Container></section><CTA/></>}
