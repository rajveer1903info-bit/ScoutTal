import type { Metadata } from "next";
import { InsightsFilter } from "@/components/insights-filter";
import { Container, PageHero } from "@/components/ui";
import { articles } from "@/lib/articles";
export const metadata:Metadata={title:"Talent Intelligence",description:"Practical guides for international startups hiring developers and specialist talent in India.",alternates:{canonical:"/insights"}};
export default function Insights(){return <><PageHero eyebrow="TALENT INTELLIGENCE" title="Useful context for your next hiring decision." description="Editorial guides on India hiring, engineering teams and specialist talent—written without invented market statistics or unsupported claims."/><section className="section"><Container><InsightsFilter articles={articles}/></Container></section></>}
