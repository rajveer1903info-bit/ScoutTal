export const siteConfig = {
  name: "Scouttal",
  domain: "[DOMAIN]",
  businessEmail: "[EMAIL]",
  calendlyUrl: "[CALENDLY_LINK]",
  linkedInUrl: "[LINKEDIN_URL]",
  description: "Global recruitment partner providing focused sourcing, screening, shortlisting and hiring coordination for technical and business-critical talent.",
} as const;

export const isConfiguredUrl = (value: string) => !value.startsWith("[");
