import type { Metadata } from "next";
import { SearchCheck } from "lucide-react";
import { Container, ButtonLink, PageHero } from "@/components/ui";
import { activeJobs } from "@/lib/jobs";
export const metadata:Metadata={title:"Jobs",description:"View verified active roles recruited through Scouttal.",alternates:{canonical:"/jobs"}};
export default function Jobs(){return <><PageHero eyebrow="JOBS" title="Specialist opportunities, published only when verified." description="Every listing on this board represents an active recruitment assignment. We do not publish illustrative or fake vacancies."/><section className="section"><Container>{activeJobs.length===0?<div className="jobs-empty"><SearchCheck/><Eyeless/><h2>No active vacancies right now.</h2><p>There are currently no verified opportunities to display. When a live assignment is available, you will be able to search and filter it here by function, location, seniority and work arrangement.</p><ButtonLink href="/insights" variant="secondary">Explore talent insights</ButtonLink></div>:null}</Container></section></>}
function Eyeless(){return <span className="eyebrow">CURRENT STATUS</span>}
