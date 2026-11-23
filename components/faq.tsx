const faqs = [
  ["Who does Scouttal work with?", "Scouttal works with organisations worldwide that need focused support sourcing and recruiting technical or business talent in India."],
  ["Which technical roles do you recruit?", "Our focus includes full-stack, frontend, backend, software and DevOps engineering, plus other specialist engineering roles agreed for each search."],
  ["Can you support Web3 recruitment?", "Yes. We can source for relevant Solana, Rust, blockchain, smart-contract, Web3 full-stack and DeFi engineering assignments."],
  ["Which countries do you support?", "Scouttal works with companies worldwide that are hiring talent from India. We can discuss time-zone, interview and coordination requirements during the initial role conversation."],
  ["Which seniority levels can you cover?", "Scope is agreed role by role. We can discuss individual contributor and leadership searches where the requirements fit our sourcing expertise."],
  ["How does an engagement begin?", "We begin with a focused conversation about the role, outcomes, team context and timing, then document the agreed scope and responsibilities in a contract."],
  ["Do you provide background verification?", "Yes. Background verification is available as a separate service for talent you are already considering; it is not included in the recruitment or RPO process."],
  ["Is replacement support included?", "First-month replacement support can be included subject to the written contract."],
  ["Who employs the candidate?", "The client manages contracts, payroll, statutory obligations, ongoing management and the final hiring decision. Scouttal is a recruitment consultancy, not the employer."],
  ["How do we start?", "Share the role, context and hiring priorities through the contact page. We will clarify the requirement, scope and commercial terms before sourcing begins."]
];

export function FAQ() { return <div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>; }
