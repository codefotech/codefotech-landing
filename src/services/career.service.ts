import axiosInstance from "@/config/axios.config";
import type {
  JobVacancyListResponse,
  JobVacancyDetailResponse,
  JobVacancyQueryParams,
  JobApplicationData,
  JobApplicationResponse,
} from "@/types/career.types";

const careerService = {
  /**
   * Get all open job vacancies with pagination
   */
  getJobVacancies: async (
    params: JobVacancyQueryParams = {}
  ): Promise<JobVacancyListResponse> => {
    const { page = 1, limit = 20, department, status, sortBy, sortOrder } = params;
    const response = await axiosInstance.get<JobVacancyListResponse>(
      "/careers/vacancies",
      {
        params: { page, limit, department, status, sortBy, sortOrder },
      }
    );
    return response.data;
  },

  /**
   * Get a single job vacancy by ID
   */
  getJobVacancyById: async (vacancyId: string): Promise<JobVacancyDetailResponse> => {
    const response = await axiosInstance.get<JobVacancyDetailResponse>(
      `/careers/vacancies/${vacancyId}`
    );
    return response.data;
  },

  /**
   * Apply to a job vacancy
   */
  applyToJob: async (data: JobApplicationData): Promise<JobApplicationResponse> => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("vacancyId", data.vacancyId);
    formData.append("resume", data.resume);

    if (data.currentCompany) {
      formData.append("currentCompany", data.currentCompany);
    }
    if (data.currentJobRole) {
      formData.append("currentJobRole", data.currentJobRole);
    }
    if (data.coverLetter) {
      formData.append("coverLetter", data.coverLetter);
    }
    if (data.social && Object.keys(data.social).length > 0) {
      formData.append("social", JSON.stringify(data.social));
    }

    const response = await axiosInstance.post<JobApplicationResponse>(
      "/careers/applications",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },
};

export default careerService;
