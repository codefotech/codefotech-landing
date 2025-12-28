import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Container from "@/components/shared/Container";
import { blogPosts } from "@/data/data";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Get previous and next posts for navigation
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

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
                {post.title}
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Author and Meta */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                    {post.author.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {post.author.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {post.author.role}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
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
                  src={post.image}
                  alt={post.title}
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
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Tag className="h-4 w-4" />
                    <span className="text-sm font-medium">Tags:</span>
                  </div>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Post Navigation */}
              <div className="mt-8 pt-8 border-t border-border">
                <div className="grid md:grid-cols-2 gap-4">
                  {prevPost ? (
                    <Link
                      to={`/blogs/${prevPost.slug}`}
                      className="group p-4 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
                    >
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <ArrowLeft className="h-4 w-4" />
                        <span>Previous Article</span>
                      </div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {prevPost.title}
                      </p>
                    </Link>
                  ) : (
                    <div />
                  )}
                  {nextPost && (
                    <Link
                      to={`/blogs/${nextPost.slug}`}
                      className="group p-4 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors text-right"
                    >
                      <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground mb-2">
                        <span>Next Article</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {nextPost.title}
                      </p>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 lg:py-24 bg-muted/40 border-y border-border">
            <Container>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Related Articles
                </h2>
                <p className="text-muted-foreground text-lg">
                  More from our {post.category.toLowerCase()} collection
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blogs/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="h-full p-6 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors">
                      <div className="aspect-video overflow-hidden rounded-lg mb-4">
                        <img
                          src={relatedPost.image}
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
