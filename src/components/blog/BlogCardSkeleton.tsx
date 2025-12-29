const BlogCardSkeleton = () => {
  return (
    <article className="h-full p-6 rounded-xl border border-border bg-card">
      {/* Image skeleton */}
      <div className="aspect-video overflow-hidden rounded-lg mb-4 bg-muted animate-pulse" />
      
      {/* Category badge skeleton */}
      <div className="mb-3">
        <div className="inline-block w-20 h-6 bg-muted rounded-md animate-pulse" />
      </div>
      
      {/* Title skeleton */}
      <div className="space-y-2 mb-2">
        <div className="h-5 bg-muted rounded animate-pulse w-full" />
        <div className="h-5 bg-muted rounded animate-pulse w-3/4" />
      </div>
      
      {/* Excerpt skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-muted rounded animate-pulse w-full" />
        <div className="h-4 bg-muted rounded animate-pulse w-5/6" />
      </div>
      
      {/* Meta info skeleton */}
      <div className="flex items-center gap-4 mb-4">
        <div className="h-3 bg-muted rounded animate-pulse w-24" />
        <div className="h-3 bg-muted rounded animate-pulse w-16" />
      </div>
      
      {/* Author skeleton */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-muted animate-pulse" />
        <div className="space-y-1">
          <div className="h-4 bg-muted rounded animate-pulse w-24" />
          <div className="h-3 bg-muted rounded animate-pulse w-20" />
        </div>
      </div>
    </article>
  );
};

export default BlogCardSkeleton;
