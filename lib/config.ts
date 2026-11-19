export const siteConfig = {
  name: "Scouttal",
  domain: "[DOMAIN]",
  businessEmail: "[EMAIL]",
  calendlyUrl: "[CALENDLY_LINK]",
  linkedInUrl: "[LINKEDIN_URL]",
  description: "Founder-led recruitment partner providing sourcing, screening, shortlisting and hiring coordination for technical and business talent in India.",
} as const;

export const isConfiguredUrl = (value: string) => !value.startsWith("[");
