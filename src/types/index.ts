export type AMCCompany = {
  id: string;
  name: string;
  phone: string;
  email: string;
  state: string; // e.g., 'CA'
  website: string;
  signupUrl: string;
};

export type RegistrationData = {
  selectedCompanyIds: string[];
  step: number;
  // Step 1
  firstName?: string;
  lastName?: string;
  regEmail?: string;
  regPhone?: string;
  yearsExperience?: string;
  // Step 2
  companyName?: string;
  licenseNumber?: string;
  licenseState?: string;
  designations?: string[];
  specialties?: string[];
  fhaRoster?: string;
  vaPanel?: string;
  // Step 3
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  serviceRadius?: string;
  travelWillingness?: string;
  coverageArea?: string;
  // Step 4
  businessType?: string;
  languages?: string[];
  geographicCoverage?: string[];
  taxId?: string;
  formationDate?: string;
  currentAmcRelationships?: string;
  references?: Array<{
    name: string;
    company: string;
    email: string;
    phone: string;
    relationship: string;
  }>;
  // Step 5: we will just store file names/URLs later
  documents?: Record<string, string | File | null>;
  // Step 6
  termsAccepted?: boolean;
  privacyAccepted?: boolean;
};