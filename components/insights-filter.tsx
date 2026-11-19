"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles";

export function InsightsFilter({ articles }: { articles: Article[] }) {
  const [query,setQuery]=useState(""); const [category,setCategory]=useState("All");
  const categories=["All",...new Set(articles.map(a=>a.category))];
  const shown=useMemo(()=>articles.filter(a=>(category==="All"||a.category===category)&&`${a.title} ${a.excerpt}`.toLowerCase().includes(query.toLowerCase())),[articles,query,category]);
  return <><div className="filter-bar"><label className="search-label">Search insights<input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by topic" /></label><div className="chips" aria-label="Filter by category">{categories.map(c=><button aria-pressed={category===c} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div></div><div className="article-grid">{shown.map(a=><article className="article-card" key={a.slug}><span>{a.category}</span><h2><Link href={`/insights/${a.slug}`}>{a.title}</Link></h2><p>{a.excerpt}</p><div><time dateTime={a.publicationDate}>{new Date(a.publicationDate).toLocaleDateString("en",{day:"numeric",month:"short",year:"numeric"})}</time><span>{a.readingTime}</span></div></article>)}</div></>;
}
