"use client";
import { useState } from "react";

export function ContactForm() {
  const [notice, setNotice] = useState("");
  function review(e: React.MouseEvent<HTMLButtonElement>) { if (e.currentTarget.form?.reportValidity()) setNotice("This form is a frontend prototype and is not yet connected. Please use the configured email or booking link once available."); }
  return <form className="contact-form">
    <div className="form-grid"><label>Name<input name="name" required minLength={2} autoComplete="name" /></label><label>Business email<input name="email" required type="email" autoComplete="email" /></label></div>
    <label>Company<input name="company" required autoComplete="organization" /></label><label>Role to be filled<input name="role" required /></label><label>Hiring requirement details<textarea name="details" required minLength={20} rows={6} /></label>
    <button className="button button-primary" type="button" onClick={review}>Review enquiry options</button>{notice && <p className="form-notice" role="status">{notice}</p>}
    <p className="form-helper">Prototype notice: form submission still needs an email, CRM or server endpoint connection. No enquiry is sent from this form today.</p>
  </form>;
}
