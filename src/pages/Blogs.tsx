import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import PageBanner from "@/components/shared/PageBanner";
import CTASection from "@/components/home/CTASection";
import { blogPosts } from "@/data/data";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";
import bannerServices from "@/assets/banner-services.png";
import { useState } from "react";

const categories = [
  "All",
  "Technology",
  "Development",
  "Design",
  "Management",
  "Security",
  "Education",
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Post (First Post) */}
            {filteredPosts.length > 0 && (
              <div className="mb-12">
                <Link
                  to={`/blogs/${filteredPosts[0].slug}`}
                  className="group block"
                >
                  <div className="grid lg:grid-cols-2 gap-8 p-6 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors">
                    <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden rounded-lg">
                      <img
                        src={filteredPosts[0].image}
                        alt={filteredPosts[0].title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md">
                          {filteredPosts[0].category}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {filteredPosts[0].title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {filteredPosts[0].excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{filteredPosts[0].author.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {formatDate(filteredPosts[0].publishedAt)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{filteredPosts[0].readTime}</span>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.slice(1).map((post) => (
                <Link
                  key={post.id}
                  to={`/blogs/${post.slug}`}
                  className="group"
                >
                  <article className="h-full p-6 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors">
                    <div className="aspect-video overflow-hidden rounded-lg mb-4">
                      <img
                        src={post.image}
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
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-medium">
                        {post.author.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {post.author.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {post.author.role}
                        </p>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12 px-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  No Posts Found
                </h3>
                <p className="text-muted-foreground mb-6">
                  There are no blog posts in this category yet. Check back soon!
                </p>
                <button
                  onClick={() => setActiveCategory("All")}
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm transition-colors hover:opacity-90"
                >
                  View All Posts
                </button>
              </div>
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
