import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import PageBanner from "@/components/shared/PageBanner";
import CTASection from "@/components/home/CTASection";
import BlogCardSkeleton from "@/components/blog/BlogCardSkeleton";
import FeaturedBlogSkeleton from "@/components/blog/FeaturedBlogSkeleton";
import blogService from "@/services/blog.service";
import type { Blog, BlogListData } from "@/types/blog.types";
import { calculateReadTime, getImageUrl } from "@/lib/utils";
import { ArrowRight, Calendar, Clock, User, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import bannerServices from "@/assets/banner-services.png";
import { useState, useEffect, useCallback } from "react";

const ITEMS_PER_PAGE = 10;

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [paginationData, setPaginationData] = useState<BlogListData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchBlogs = useCallback(async (page: number) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await blogService.getPublishedBlogs({
        page,
        limit: ITEMS_PER_PAGE,
      });
      setBlogs(response.data.docs);
      setPaginationData(response.data);
    } catch (err) {
      setError("Failed to load blogs. Please try again later.");
      console.error("Error fetching blogs:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage, fetchBlogs]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const renderPagination = () => {
    if (!paginationData || paginationData.totalPages <= 1) return null;

    const pages: (number | string)[] = [];
    const { page, totalPages, hasPrevPage, hasNextPage } = paginationData;

    // Build page numbers array with ellipsis
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (page >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }

    return (
      <div className="flex items-center justify-center gap-2 mt-12">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={!hasPrevPage}
          className="p-2 rounded-lg border border-border bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Previous page"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {pages.map((p, idx) =>
          typeof p === "number" ? (
            <button
              key={idx}
              onClick={() => handlePageChange(p)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                p === page
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card hover:bg-muted"
              }`}
            >
              {p}
            </button>
          ) : (
            <span key={idx} className="px-2 text-muted-foreground">
              {p}
            </span>
          )
        )}

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={!hasNextPage}
          className="p-2 rounded-lg border border-border bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Next page"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageBanner
          title="Insights & Resources"
          subtitle="Stay updated with the latest trends, best practices, and insights from our team of experts in software development and technology."
          image={bannerServices}
          imageAlt="Blog and articles illustration"
        />

        {/* Blog Listing */}
        <section className="py-16 lg:py-24">
          <Container>
            {/* Error State */}
            {error && (
              <div className="text-center py-12 px-6 rounded-xl border border-destructive/20 bg-destructive/5 mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Something went wrong
                </h3>
                <p className="text-muted-foreground mb-6">{error}</p>
                <button
                  onClick={() => fetchBlogs(currentPage)}
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm transition-colors hover:opacity-90"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Loading State */}
            {isLoading && (
              <>
                <div className="mb-12">
                  <FeaturedBlogSkeleton />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <BlogCardSkeleton key={i} />
                  ))}
                </div>
              </>
            )}

            {/* Content */}
            {!isLoading && !error && (
              <>
                {/* Featured Post (First Post) */}
                {blogs.length > 0 && (
                  <div className="mb-12">
                    <Link
                      to={`/blogs/${blogs[0].slug}`}
                      className="group block"
                    >
                      <div className="grid lg:grid-cols-2 gap-8 p-6 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors">
                        <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden rounded-lg">
                          <img
                            src={getImageUrl(blogs[0].image?.url)}
                            alt={blogs[0].title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <div className="mb-4">
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">
                              {blogs[0].category}
                            </span>
                          </div>
                          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                            {blogs[0].title}
                          </h2>
                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {blogs[0].excerpt}
                          </p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              <span>CodeFoTech Team</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(blogs[0].publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              <span>{calculateReadTime(blogs[0].content)}</span>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                            Read Article <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}

                {/* Blog Grid */}
                {blogs.length > 1 && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.slice(1).map((post) => (
                      <Link
                        key={post.id}
                        to={`/blogs/${post.slug}`}
                        className="group"
                      >
                        <article className="h-full p-6 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors">
                          <div className="aspect-video overflow-hidden rounded-lg mb-4">
                            <img
                              src={getImageUrl(post.image?.url)}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" />
                              <span>{calculateReadTime(post.content)}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-medium">
                              CF
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">
                                CodeFoTech Team
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Tech Experts
                              </p>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {renderPagination()}

                {/* Empty State */}
                {blogs.length === 0 && (
                  <div className="text-center py-12 px-6 rounded-xl border border-border bg-card">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      No Posts Found
                    </h3>
                    <p className="text-muted-foreground">
                      There are no blog posts available yet. Check back soon!
                    </p>
                  </div>
                )}
              </>
            )}
          </Container>
        </section>

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
