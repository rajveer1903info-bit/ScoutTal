export function GlobalVisual() {
  return <div className="global-visual" role="img" aria-label="Abstract recruitment workflow connecting role requirements with screened talent and a focused shortlist">
    <svg viewBox="0 0 620 500" aria-hidden="true">
      <defs><pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#98A2B3" opacity=".32" /></pattern></defs>
      <rect width="620" height="500" rx="24" fill="#F8FAFC"/><rect x="28" y="28" width="564" height="444" rx="18" fill="url(#dots)"/>
      <rect x="62" y="76" width="170" height="310" rx="16" fill="#FFFFFF" stroke="#DDE5F2"/><text x="88" y="110" className="visual-kicker">ROLE SIGNALS</text>
      {[[88,145,112],[88,188,86],[88,231,126],[88,274,72]].map(([x,y,w],i)=><g key={i}><rect x={x} y={y} width={w} height="12" rx="6" fill={i===0?"#3867F6":"#DCE6FF"}/><rect x={x} y={y+19} width={Math.max(48,w-28)} height="7" rx="3.5" fill="#E4E7EC"/></g>)}
      <circle cx="310" cy="231" r="70" fill="#EAF1FF"/><circle cx="310" cy="231" r="42" fill="#3867F6"/><path d="m293 231 12 12 24-28" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/><text x="276" y="330" className="visual-kicker">SCREENED</text>
      <g fill="none" stroke="#98B4FF" strokeWidth="2"><path d="M232 154C270 167 281 186 292 195"/><path d="M232 252C266 248 279 242 287 238"/><path d="M380 206C412 190 430 172 449 154"/><path d="M380 250C416 264 432 286 449 308"/></g>
      <rect x="414" y="76" width="142" height="310" rx="16" fill="#101828"/><text x="438" y="110" className="visual-kicker visual-kicker-light">SHORTLIST</text>
      {[[438,143],[438,207],[438,271]].map(([x,y],i)=><g key={i}><circle cx={x+15} cy={y+15} r="15" fill={i===0?"#3867F6":"#344054"}/><rect x={x+40} y={y+3} width="62" height="8" rx="4" fill="#FFFFFF" opacity=".9"/><rect x={x+40} y={y+18} width="45" height="6" rx="3" fill="#98A2B3"/></g>)}
      <rect x="438" y="334" width="94" height="24" rx="12" fill="#3867F6"/><text x="455" y="350" className="visual-status">READY</text>
    </svg><div className="visual-caption"><span>Clear requirements</span><span className="pulse-dot"/><span>Relevant screening</span><span className="pulse-dot"/><strong>Confident shortlist</strong></div>
  </div>;
}
