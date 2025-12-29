import Container from "@/components/shared/Container";

const BlogDetailSkeleton = () => {
  return (
    <>
      {/* Hero Section Skeleton */}
      <section className="py-12 lg:py-16 bg-muted/30 border-b border-border">
        <Container>
          {/* Breadcrumb skeleton */}
          <div className="flex items-center gap-2 mb-8">
            <div className="h-4 bg-muted rounded animate-pulse w-12" />
            <span className="text-muted-foreground">/</span>
            <div className="h-4 bg-muted rounded animate-pulse w-10" />
            <span className="text-muted-foreground">/</span>
            <div className="h-4 bg-muted rounded animate-pulse w-40" />
          </div>

          <div className="max-w-4xl">
            {/* Category badge skeleton */}
            <div className="mb-4">
              <div className="inline-block w-24 h-7 bg-muted rounded-md animate-pulse" />
            </div>
            
            {/* Title skeleton */}
            <div className="space-y-4 mb-6">
              <div className="h-10 bg-muted rounded animate-pulse w-full" />
              <div className="h-10 bg-muted rounded animate-pulse w-4/5" />
            </div>
            
            {/* Excerpt skeleton */}
            <div className="space-y-3 mb-8">
              <div className="h-6 bg-muted rounded animate-pulse w-full" />
              <div className="h-6 bg-muted rounded animate-pulse w-3/4" />
            </div>

            {/* Author and Meta skeleton */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-muted animate-pulse" />
                <div className="space-y-2">
                  <div className="h-5 bg-muted rounded animate-pulse w-32" />
                  <div className="h-4 bg-muted rounded animate-pulse w-24" />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="h-4 bg-muted rounded animate-pulse w-28" />
                <div className="h-4 bg-muted rounded animate-pulse w-20" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Image Skeleton */}
      <section className="py-8">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video overflow-hidden rounded-xl bg-muted animate-pulse" />
          </div>
        </Container>
      </section>

      {/* Article Content Skeleton */}
      <section className="py-8 lg:py-12">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Paragraph skeletons */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-5 bg-muted rounded animate-pulse w-full" />
                <div className="h-5 bg-muted rounded animate-pulse w-full" />
                <div className="h-5 bg-muted rounded animate-pulse w-11/12" />
                <div className="h-5 bg-muted rounded animate-pulse w-4/5" />
              </div>
            ))}

            {/* Heading skeleton */}
            <div className="h-8 bg-muted rounded animate-pulse w-2/3 mt-8" />

            {/* More paragraph skeletons */}
            {[...Array(2)].map((_, i) => (
              <div key={`p2-${i}`} className="space-y-3">
                <div className="h-5 bg-muted rounded animate-pulse w-full" />
                <div className="h-5 bg-muted rounded animate-pulse w-full" />
                <div className="h-5 bg-muted rounded animate-pulse w-3/4" />
              </div>
            ))}

            {/* Tags skeleton */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="h-5 bg-muted rounded animate-pulse w-16" />
                {[...Array(4)].map((_, i) => (
                  <div key={`tag-${i}`} className="h-7 bg-muted rounded-md animate-pulse w-20" />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogDetailSkeleton;
