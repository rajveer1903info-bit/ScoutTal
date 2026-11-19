export type Job = {
  slug: string; title: string; department: string; location: string; seniority: string;
  workArrangement: string; employmentType: string; compensation?: string; description: string;
  responsibilities: string[]; requiredSkills: string[]; preferredQualifications: string[];
  applicationInstructions: string; publicationDate: string; active: boolean;
};

// Add verified vacancies here. Inactive example-free data keeps the public site honest.
export const jobs: Job[] = [];
export const activeJobs = jobs.filter((job) => job.active);
