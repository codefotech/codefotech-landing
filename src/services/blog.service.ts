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
  getPublishedBlogs: async (
    params: BlogQueryParams = {
      isPublished: true,
    }
  ): Promise<BlogListResponse> => {
    const response = await axiosInstance.get<BlogListResponse>("/blogs", {
      params: {
        ...params,
        isPublished: true,
      },
    });
    return response.data;
  },

  /**
   * Get a single blog by slug
   */
  getBlogBySlug: async (slug: string): Promise<BlogDetailResponse> => {
    const response = await axiosInstance.get<BlogDetailResponse>(
      `/blogs/${slug}`
    );
    return response.data;
  },

  // Get categories
  getAllCategories: async (): Promise<{
    success: boolean;
    data: { categories: string[] };
    message: string;
  }> => {
    const response = await axiosInstance.get(`/blogs/categories`);
    return response.data;
  },

  // Get categories with blogs
  getBlogsByCategory: async (
    category: string,
    params: BlogQueryParams
  ): Promise<BlogListResponse> => {
    const response = await axiosInstance.get(`/blogs/category/${category}`, {
      params,
    });
    return response.data;
  },

  /**
   * Get blogs by tag with pagination
   */
  getBlogsByTag: async (
    tag: string,
    params: BlogQueryParams = {
      isPublished: true,
    }
  ): Promise<BlogListResponse> => {
    const response = await axiosInstance.get<BlogListResponse>(
      `/blogs/tag/${encodeURIComponent(tag)}`,
      {
        params: {
          ...params,
          isPublished: true,
        },
      }
    );
    return response.data;
  },
};

export default blogService;
