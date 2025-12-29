// Career types matching the server API response

export enum JobVacancyStatus {
  OPEN = "open",
  CLOSED = "closed",
}

export interface JobVacancy {
  _id: string;
  title: string;
  department: string;
  description: string;
  skills: string[];
  requirements: string[];
  keyResponsibilities: string[];
  whatWeOffer: string[];
  openPositions: number;
  status: JobVacancyStatus;
  salary: string;
  salaryCurrency: string;
  deadline: string;
  jobType: string;
  location?: string;
  locationType: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobVacancyListData {
  docs: JobVacancy[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface JobVacancyListResponse {
  success: boolean;
  statusCode: number;
  data: JobVacancyListData;
  message: string;
}

export interface JobVacancyDetailResponse {
  success: boolean;
  statusCode: number;
  data: JobVacancy;
  message: string;
}

export interface JobVacancyQueryParams {
  page?: number;
  limit?: number;
  department?: string;
  status?: JobVacancyStatus;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

// Job Application types
export interface JobApplicationData {
  name: string;
  email: string;
  phone: string;
  currentCompany?: string;
  currentJobRole?: string;
  social?: Record<string, string>;
  coverLetter?: string;
  vacancyId: string;
  resume: File;
}

export interface JobApplicationResponse {
  success: boolean;
  statusCode: number;
  data: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    vacancyId: string;
    createdAt: string;
  };
  message: string;
}
