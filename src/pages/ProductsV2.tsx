import { useState, useMemo, useCallback } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import PageBanner from "@/components/shared/PageBanner";
import CTASection from "@/components/home/CTASection";
import {
  productCategories,
  getHighlightedProducts,
  type SoftwareProduct,
  type ProductCategory,
} from "@/data/products.data";
import { Check, ArrowRight, Search, Sparkles } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import bannerProducts from "@/assets/banner-products.png";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Get filter values from URL query params
  const selectedCategory = searchParams.get("category") || "all";
  const selectedSubcategory = searchParams.get("subcategory") || "all";

  // Get current category object
  const currentCategory = useMemo(() => {
    return productCategories.find((cat) => cat.id === selectedCategory);
  }, [selectedCategory]);

  // Get subcategories for current category
  const currentSubcategories = useMemo(() => {
    return currentCategory?.subcategories || [];
  }, [currentCategory]);

  // Get current subcategory object
  const currentSubcategory = useMemo(() => {
    return currentSubcategories.find((sub) => sub.id === selectedSubcategory);
  }, [currentSubcategories, selectedSubcategory]);

  // Filter products based on selection
  const filteredProducts = useMemo(() => {
    let products: SoftwareProduct[] = [];

    if (selectedCategory === "all") {
      // Show highlighted products from all categories
      products = getHighlightedProducts();
    } else if (selectedSubcategory === "all") {
      // Show all products from selected category
      currentSubcategories.forEach((sub) => {
        products.push(...sub.products);
      });
    } else {
      // Show products from selected subcategory
      products = currentSubcategory?.products || [];
    }

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      products = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.tagline.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    return products;
  }, [
    selectedCategory,
    selectedSubcategory,
    currentSubcategories,
    currentSubcategory,
    searchQuery,
  ]);

  // Handle category change - update URL query params
  const handleCategoryChange = useCallback(
    (categoryId: string) => {
      if (categoryId === "all") {
        // Remove both params when selecting "all"
        setSearchParams({});
      } else {
        // Set category, remove subcategory
        setSearchParams({ category: categoryId });
      }
    },
    [setSearchParams]
  );

  // Handle subcategory change - update URL query params
  const handleSubcategoryChange = useCallback(
    (subcategoryId: string) => {
      if (subcategoryId === "all") {
        // Keep only category param
        setSearchParams({ category: selectedCategory });
      } else {
        // Set both category and subcategory
        setSearchParams({
          category: selectedCategory,
          subcategory: subcategoryId,
        });
      }
    },
    [setSearchParams, selectedCategory]
  );

  // Get section title based on selection
  const getSectionTitle = () => {
    if (selectedCategory === "all") {
      return "Featured Products";
    }
    if (selectedSubcategory === "all") {
      return currentCategory?.name || "Products";
    }
    return currentSubcategory?.name || "Products";
  };

  // Get section description based on selection
  const getSectionDescription = () => {
    if (selectedCategory === "all") {
      return "Explore our top-rated software solutions across all categories";
    }
    if (selectedSubcategory === "all") {
      return currentCategory?.description || "";
    }
    return currentSubcategory?.description || "";
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageBanner
          title="Enterprise-Ready Software Products"
          subtitle="Ready-to-deploy solutions designed for reliability, performance, and measurable business value."
          image={bannerProducts}
          imageAlt="SaaS dashboard and product architecture illustration"
        />

        {/* Products Section */}
        <section className="py-10">
          <Container>
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>
            </div>

            {/* Category Tabs */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleCategoryChange("all")}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === "all"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "border border-border bg-card hover:bg-muted text-foreground"
                  }`}
                >
                  <Sparkles className="h-4 w-4" />
                  Featured
                </button>
                {productCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category.id
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "border border-border bg-card hover:bg-muted text-foreground"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Subcategory Pills (shown when a category is selected) */}
            {selectedCategory !== "all" && currentSubcategories.length > 0 && (
              <div className="mb-8 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  Filter by subcategory:
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleSubcategoryChange("all")}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                      selectedSubcategory === "all"
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    All {currentCategory?.name}
                  </button>
                  {currentSubcategories.map((subcategory) => (
                    <button
                      key={subcategory.id}
                      onClick={() => handleSubcategoryChange(subcategory.id)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        selectedSubcategory === subcategory.id
                          ? "bg-primary/10 text-primary border border-primary/30"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {subcategory.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Section Header */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {getSectionTitle()}
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                {getSectionDescription()}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Showing {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-6 rounded-xl border border-border bg-card">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  No Products Found
                </h3>
                <p className="text-muted-foreground mb-6">
                  {searchQuery
                    ? "Try adjusting your search query or filters."
                    : "No products available in this category."}
                </p>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm transition-colors hover:opacity-90"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            )}

            {/* Category Overview (shown when viewing all/featured) */}
            {selectedCategory === "all" && (
              <div className="mt-16">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Browse by Category
                  </h2>
                  <p className="text-muted-foreground">
                    Explore our complete product catalog organized by industry
                    and use case
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {productCategories.map((category) => (
                    <CategoryCard
                      key={category.id}
                      category={category}
                      onClick={() => handleCategoryChange(category.id)}
                    />
                  ))}
                </div>
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

// Product Card Component
interface ProductCardProps {
  product: SoftwareProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Featured Badge */}
        {product.highlighted && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-md shadow-lg">
              <Sparkles className="h-3 w-3" />
              Featured
            </span>
          </div>
        )}

        {/* Product Name Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
            {product.name}
          </h3>
          <p className="text-white/90 text-sm font-medium drop-shadow-md">
            {product.tagline}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col">
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 mb-5 flex-1">
          {product.features.slice(0, 4).map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <Link
          to="/contact"
          state={{ subject: `Inquiry about ${product.name}` }}
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn"
        >
          Request Demo
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

// Category Card Component
interface CategoryCardProps {
  category: ProductCategory;
  onClick: () => void;
}

const CategoryCard = ({ category, onClick }: CategoryCardProps) => {
  const IconComponent = category.icon;
  const totalProducts = category.subcategories.reduce(
    (acc, sub) => acc + sub.products.length,
    0
  );

  return (
    <button
      onClick={onClick}
      className="group text-left p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <IconComponent className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            {category.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {category.subcategories.slice(0, 3).map((sub) => (
              <span
                key={sub.id}
                className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-md"
              >
                {sub.name}
              </span>
            ))}
            {category.subcategories.length > 3 && (
              <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-md">
                +{category.subcategories.length - 3} more
              </span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {totalProducts} products • {category.subcategories.length}{" "}
              subcategories
            </span>
            <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default Products;
