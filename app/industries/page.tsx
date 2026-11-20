import type { Metadata } from "next";
import { Blocks, BriefcaseBusiness, Cpu, Landmark, PanelsTopLeft } from "lucide-react";
import { Container, CTA, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata={title:"Industries",description:"Specialist recruitment across technology, SaaS, fintech, Web3 and product-led businesses hiring talent globally.",alternates:{canonical:"/industries"}};

const industries=[
  {name:"Technology",Icon:Cpu},
  {name:"SaaS and Product",Icon:PanelsTopLeft},
  {name:"Fintech and Financial Services",Icon:Landmark},
  {name:"Web3 and Blockchain",Icon:Blocks},
  {name:"Business Services and Operations",Icon:BriefcaseBusiness}
];

export default function Industries(){return <><PageHero eyebrow="INDUSTRIES" title="Recruitment expertise across evolving industries." description="Scouttal supports specialist hiring across technology-led, financial and business-critical sectors."/><section className="section industries-showcase"><Container><SectionHeading eyebrow="INDUSTRIES WE SUPPORT" title="Focused sector coverage." intro="A concise view of the industries where we support recruitment assignments."/><div className="industry-collage">{industries.map(({name,Icon},i)=><article className="industry-tile" key={name}><div className="industry-art" aria-hidden="true"><span className="industry-orbit"/><span className="industry-grid-mark"/><Icon/></div><div className="industry-tile-copy"><span>{String(i+1).padStart(2,"0")}</span><h2>{name}</h2></div></article>)}</div></Container></section><CTA/></>}
