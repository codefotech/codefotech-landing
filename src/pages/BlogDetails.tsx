import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Container from "@/components/shared/Container";
import BlogDetailSkeleton from "@/components/blog/BlogDetailSkeleton";
import BlogCardSkeleton from "@/components/blog/BlogCardSkeleton";
import blogService from "@/services/blog.service";
import type { Blog } from "@/types/blog.types";
import { calculateReadTime, getImageUrl } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingRelated, setIsLoadingRelated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) {
        navigate("/blogs", { replace: true });
        return;
      }

      setIsLoading(true);
      setError(null);
      
      try {
        const response = await blogService.getBlogBySlug(slug);
        setBlog(response.data.blog);
        
        // Fetch related blogs by category
        if (response.data.blog.category) {
          setIsLoadingRelated(true);
          try {
            const relatedResponse = await blogService.getBlogsByCategory(
              response.data.blog.category,
              { page: 1, limit: 4 }
            );
            // Filter out current blog and limit to 3
            const filtered = relatedResponse.data.docs
              .filter((b) => b.slug !== slug)
              .slice(0, 3);
            setRelatedBlogs(filtered);
          } catch {
            // Silently fail for related blogs
            setRelatedBlogs([]);
          } finally {
            setIsLoadingRelated(false);
          }
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Blog not found or failed to load.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [slug, navigate]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <BlogDetailSkeleton />
        </main>
        <Footer />
      </div>
    );
  }

  // Error state
  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="py-16 lg:py-24">
            <Container>
              <div className="text-center py-12 px-6 rounded-xl border border-border bg-card max-w-lg mx-auto">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Blog Not Found
                </h3>
                <p className="text-muted-foreground mb-6">
                  {error || "The blog post you're looking for doesn't exist."}
                </p>
                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm transition-colors hover:opacity-90"
                >
                  Back to Blogs
                </Link>
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-muted/30 border-b border-border">
          <Container>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/blogs"
                className="hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <span>/</span>
              <span className="text-foreground truncate max-w-[200px]">
                {blog.title}
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md">
                  {blog.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {blog.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {blog.excerpt}
              </p>

              {/* Author and Meta */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                    <img src="/logo-icon.svg" alt="CodeFoTech" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      CodeFoTech Team
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Tech Experts
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(blog.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{calculateReadTime(blog.content)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video overflow-hidden rounded-xl">
                <img
                  src={getImageUrl(blog.image?.url)}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Article Content */}
        <section className="py-8 lg:py-12">
          <Container>
            <div className="max-w-4xl mx-auto">
              <article
                className="prose prose-lg max-w-none 
                  prose-headings:text-foreground prose-headings:font-semibold
                  prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                  prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-foreground
                  prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                  prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Tag className="h-4 w-4" />
                      <span className="text-sm font-medium">Tags:</span>
                    </div>
                    {blog.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Back to Blogs */}
              <div className="mt-8 pt-8 border-t border-border">
                <Link
                  to="/blogs"
                  className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to All Articles
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Related Posts */}
        {(isLoadingRelated || relatedBlogs.length > 0) && (
          <section className="py-16 lg:py-24 bg-muted/40 border-y border-border">
            <Container>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Related Articles
                </h2>
                <p className="text-muted-foreground text-lg">
                  More from our {blog.category.toLowerCase()} collection
                </p>
              </div>

              {isLoadingRelated ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <BlogCardSkeleton key={i} />
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedBlogs.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blogs/${relatedPost.slug}`}
                      className="group"
                    >
                      <article className="h-full p-6 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors">
                        <div className="aspect-video overflow-hidden rounded-lg mb-4">
                          <img
                            src={getImageUrl(relatedPost.image?.url)}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">
                            {relatedPost.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </article>
                    </Link>
                  ))}
                </div>
              )}

              <div className="mt-12 text-center">
                <Link
                  to="/blogs"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  View All Articles <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Container>
          </section>
        )}

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetails;
