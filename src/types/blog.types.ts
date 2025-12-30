// Blog types matching the server API response

export interface BlogImage {
  public_id: string;
  url: string;
}

export interface Blog {
  id: string;
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  image: BlogImage | null;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BlogListData {
  docs: Blog[];
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

export interface BlogListResponse {
  success: boolean;
  statusCode: number;
  data: BlogListData;
  message: string;
}

export interface BlogDetailResponse {
  success: boolean;
  statusCode: number;
  data: {
    blog: Blog;
  };
  message: string;
}

export interface BlogQueryParams {
  page?: number;
  limit?: number;
  q?: string;
  category?: string;
  isPublished: true;
}
