export function GlobalVisual() {
  return <div className="global-visual" role="img" aria-label="Abstract network showing international startup hubs connected to talent in India">
    <svg viewBox="0 0 620 500" aria-hidden="true">
      <defs><pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="#98A2B3" opacity=".45" /></pattern></defs>
      <rect width="620" height="500" rx="24" fill="#F8FAFC"/><path d="M77 123c54-73 138-90 213-64 52 18 98 5 150 7 67 2 120 47 116 116-3 59-48 75-67 122-22 54-27 112-88 135-59 23-110-10-166-18-67-9-132 23-177-27-40-45-8-99 0-149 7-43-9-82 19-122Z" fill="url(#dots)"/>
      <g fill="none" stroke="#3867F6" strokeWidth="2"><path d="M106 167C248 192 326 286 409 331"/><path d="M191 109C272 186 334 258 409 331"/><path d="M445 126C429 214 420 268 409 331"/><path d="M514 226C476 272 449 302 409 331"/><path d="M173 374C263 367 333 347 409 331"/></g>
      {[[106,167],[191,109],[445,126],[514,226],[173,374]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="8" fill="#fff" stroke="#3867F6" strokeWidth="3"/><circle cx={x} cy={y} r="2" fill="#3867F6"/></g>)}
      <circle cx="409" cy="331" r="36" fill="#EAF1FF"/><circle cx="409" cy="331" r="17" fill="#3867F6"/><circle cx="409" cy="331" r="5" fill="#fff"/>
      <g className="map-labels"><text x="78" y="150">US</text><text x="170" y="91">CANADA</text><text x="422" y="108">UK / EUROPE</text><text x="494" y="208">AUSTRALIA</text><text x="385" y="387" className="india-label">INDIA</text></g>
    </svg><div className="visual-caption"><span>5 global markets</span><span className="pulse-dot" /> <strong>1 focused talent destination</strong></div>
  </div>;
}
