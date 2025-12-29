import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL||"http://localhost:5000";
const WORDS_PER_MINUTE = 200;
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop";

/**
 * Calculate read time based on content length
 * @param content - HTML or plain text content
 * @returns Formatted read time string (e.g., "5 min read")
 */
export function calculateReadTime(content: string): string {
  if (!content) return "1 min read";

  // Strip HTML tags to get plain text
  const plainText = content.replace(/<[^>]*>/g, "");
  
  // Count words (split by whitespace)
  const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;
  
  // Calculate minutes (minimum 1 minute)
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  
  return `${minutes} min read`;
}

/**
 * Transform relative image URL to full API URL
 * @param imageUrl - Relative or absolute image URL
 * @returns Full image URL
 */
export function getImageUrl(imageUrl: string | null | undefined): string {
  if (!imageUrl) return FALLBACK_IMAGE;

  // If already absolute URL, return as-is
  if (imageUrl.startsWith("http://") || imageUrl.startsWith("https://")) {
    return imageUrl;
  }

  // Prefix with API base URL for relative paths
  const cleanPath = imageUrl.startsWith("/") ? imageUrl : `/${imageUrl}`;
  return `${API_BASE_URL}${cleanPath}`;
}
