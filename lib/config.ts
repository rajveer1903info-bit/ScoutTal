export const siteConfig = {
  name: "Scouttal",
  domain: "[DOMAIN]",
  businessEmail: "[EMAIL]",
  calendlyUrl: "[CALENDLY_LINK]",
  linkedInUrl: "[LINKEDIN_URL]",
  description: "Founder-led recruitment partner helping startups, SMBs and established companies hire technical and business talent from India.",
} as const;

export const isConfiguredUrl = (value: string) => !value.startsWith("[");
