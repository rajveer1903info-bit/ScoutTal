const faqs = [
  ["Who does Scouttal work with?", "We are designed for international startups and product companies hiring talent in India, particularly teams in the US, UK, Europe, Canada and Australia."],
  ["Which technical roles do you recruit?", "Our focus includes full-stack, frontend, backend, software and DevOps engineering, plus other specialist engineering roles agreed for each search."],
  ["Can you support Web3 recruitment?", "Yes. We can source for relevant Solana, Rust, blockchain, smart-contract, Web3 full-stack and DeFi engineering assignments."],
  ["Which countries do you support?", "Our positioning is built for international clients, with a focus on the US, UK, Europe, Canada and Australia hiring in India."],
  ["Which seniority levels can you cover?", "Scope is agreed role by role. We can discuss individual contributor and leadership searches where the requirements fit our sourcing expertise."],
  ["How are fees structured?", "Scouttal uses role-specific placement fees. Pricing depends on role complexity, seniority and the agreed scope."],
  ["When is payment due?", "Our proposed model is payment after the placed candidate completes their first month, subject to the final agreed commercial terms."],
  ["Is replacement support included?", "First-month replacement support can be included subject to the written terms agreed for the assignment."],
  ["Who employs the candidate?", "The client manages contracts, payroll, statutory obligations, ongoing management and the final hiring decision. Scouttal is a recruitment consultancy, not the employer."],
  ["How do we start?", "Share the role, context and hiring priorities through the contact page. We will clarify the requirement, scope and commercial terms before sourcing begins."]
];

export function FAQ() { return <div className="faq-list">{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>; }
