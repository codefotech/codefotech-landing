const FeaturedBlogSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 p-6 rounded-xl border border-border bg-card">
      {/* Image skeleton */}
      <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden rounded-lg bg-muted animate-pulse" />
      
      <div className="flex flex-col justify-center">
        {/* Category badge skeleton */}
        <div className="mb-4">
          <div className="inline-block w-24 h-7 bg-muted rounded-md animate-pulse" />
        </div>
        
        {/* Title skeleton */}
        <div className="space-y-3 mb-4">
          <div className="h-8 bg-muted rounded animate-pulse w-full" />
          <div className="h-8 bg-muted rounded animate-pulse w-4/5" />
        </div>
        
        {/* Excerpt skeleton */}
        <div className="space-y-2 mb-6">
          <div className="h-5 bg-muted rounded animate-pulse w-full" />
          <div className="h-5 bg-muted rounded animate-pulse w-full" />
          <div className="h-5 bg-muted rounded animate-pulse w-3/4" />
        </div>
        
        {/* Meta info skeleton */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="h-4 bg-muted rounded animate-pulse w-28" />
          <div className="h-4 bg-muted rounded animate-pulse w-32" />
          <div className="h-4 bg-muted rounded animate-pulse w-20" />
        </div>
        
        {/* Read more skeleton */}
        <div className="h-5 bg-muted rounded animate-pulse w-32" />
      </div>
    </div>
  );
};

export default FeaturedBlogSkeleton;
