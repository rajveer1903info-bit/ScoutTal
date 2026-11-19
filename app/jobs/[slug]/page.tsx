import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { jobs } from "@/lib/jobs";
export function generateStaticParams(){return jobs.length?jobs.map(j=>({slug:j.slug})):[{slug:"no-active-vacancy"}]}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const job=jobs.find(j=>j.slug===slug&&j.active);return job?{title:job.title,description:job.description}:{} }
export default async function JobDetail({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const job=jobs.find(j=>j.slug===slug&&j.active);if(!job)notFound();return <article className="section"><div className="container prose"><p className="eyebrow">{job.department}</p><h1>{job.title}</h1><p>{job.description}</p><h2>Responsibilities</h2><ul>{job.responsibilities.map(x=><li key={x}>{x}</li>)}</ul><h2>Required skills</h2><ul>{job.requiredSkills.map(x=><li key={x}>{x}</li>)}</ul><h2>Application</h2><p>{job.applicationInstructions}</p></div></article>}
