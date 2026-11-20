import type { Metadata } from "next";
import { FAQ } from "@/components/faq";
import { Container, CTA, PageHero, SectionHeading } from "@/components/ui";

export const metadata: Metadata={title:"Frequently Asked Questions",description:"Clear answers about Scouttal's global recruitment services, process and engagement model.",alternates:{canonical:"/faq"}};

export default function FAQPage(){return <><PageHero eyebrow="FAQ" title="Clear answers before the search begins." description="The practical details about working with Scouttal, all in one place."/><section className="section faq-page-section"><Container><SectionHeading eyebrow="FREQUENTLY ASKED QUESTIONS" title="The practical details, answered." intro="Explore the questions clients most often ask before beginning a search."/><FAQ/></Container></section><CTA/></>}
