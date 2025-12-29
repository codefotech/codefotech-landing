import axiosInstance from "@/config/axios.config";
import type {
  BlogListResponse,
  BlogDetailResponse,
  BlogQueryParams,
} from "@/types/blog.types";

const blogService = {
  /**
   * Get all published blogs with pagination
   */
  getPublishedBlogs: async (params: BlogQueryParams = {}): Promise<BlogListResponse> => {
    const { page = 1, limit = 10 } = params;
    const response = await axiosInstance.get<BlogListResponse>("/blogs", {
      params: { page, limit },
    });
    return response.data;
  },

  /**
   * Get a single blog by slug
   */
  getBlogBySlug: async (slug: string): Promise<BlogDetailResponse> => {
    const response = await axiosInstance.get<BlogDetailResponse>(`/blogs/${slug}`);
    return response.data;
  },

  /**
   * Get blogs by category with pagination
   */
  getBlogsByCategory: async (
    category: string,
    params: BlogQueryParams = {}
  ): Promise<BlogListResponse> => {
    const { page = 1, limit = 10 } = params;
    const response = await axiosInstance.get<BlogListResponse>(
      `/blogs/category/${encodeURIComponent(category)}`,
      { params: { page, limit } }
    );
    return response.data;
  },

  /**
   * Get blogs by tag with pagination
   */
  getBlogsByTag: async (
    tag: string,
    params: BlogQueryParams = {}
  ): Promise<BlogListResponse> => {
    const { page = 1, limit = 10 } = params;
    const response = await axiosInstance.get<BlogListResponse>(
      `/blogs/tag/${encodeURIComponent(tag)}`,
      { params: { page, limit } }
    );
    return response.data;
  },

  /**
   * Search blogs
   */
  searchBlogs: async (
    query: string,
    params: BlogQueryParams = {}
  ): Promise<BlogListResponse> => {
    const { page = 1, limit = 10 } = params;
    const response = await axiosInstance.get<BlogListResponse>("/blogs/search", {
      params: { q: query, page, limit },
    });
    return response.data;
  },
};

export default blogService;
