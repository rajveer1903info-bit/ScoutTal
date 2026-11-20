import type { Metadata } from "next";
import { Container, CTA, PageHero, SectionHeading } from "@/components/ui";
import { FAQ } from "@/components/faq";
export const metadata: Metadata={title:"Industries",description:"Specialist recruitment across technology, SaaS, fintech, Web3 and product-led businesses hiring talent from India.",alternates:{canonical:"/industries"}};
const industries=[
  "Technology",
  "SaaS and Product",
  "Fintech and Financial Services",
  "Web3 and Blockchain",
  "Business Services and Operations"
];
export default function Industries(){return <><PageHero eyebrow="INDUSTRIES" title="Recruitment expertise across evolving industries." description="Scouttal supports specialist hiring across technology-led, financial and business-critical sectors."/><section className="section"><Container><SectionHeading eyebrow="INDUSTRIES WE SUPPORT" title="Focused sector coverage." intro="A concise view of the industries where we support recruitment assignments."/><div className="industry-list industry-list-compact">{industries.map((name,i)=><article key={name}><span>{String(i+1).padStart(2,"0")}</span><h2>{name}</h2></article>)}</div></Container></section><section className="section scope-section"><Container><SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" title="The practical details, answered."/><FAQ/></Container></section><CTA/></>}
