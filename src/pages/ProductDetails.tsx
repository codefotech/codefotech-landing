import { useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import CTASection from "@/components/home/CTASection";
import {
  getProductById,
  getRelatedProducts,
  type SoftwareProduct,
} from "@/data/products.data";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  Tag,
  Layers,
  Folder,
} from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Get product data
  const productData = useMemo(() => {
    if (!id) return null;
    return getProductById(id);
  }, [id]);

  // Get related products
  const relatedProducts = useMemo(() => {
    if (!id) return [];
    return getRelatedProducts(id, 3);
  }, [id]);

  // Not found state
  if (!productData) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="py-16 lg:py-24">
            <Container>
              <div className="text-center py-12 px-6 rounded-xl border border-border bg-card max-w-lg mx-auto">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Product Not Found
                </h3>
                <p className="text-muted-foreground mb-6">
                  The product you're looking for doesn't exist or has been
                  removed.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm transition-colors hover:opacity-90"
                >
                  Back to Products
                </Link>
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const { product, category, subcategory } = productData;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-muted/30 border-b border-border">
          <Container>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link
                to="/products"
                className="hover:text-foreground transition-colors"
              >
                Products
              </Link>
              <span>/</span>
              <Link
                to={`/products?category=${category.id}`}
                className="hover:text-foreground transition-colors"
              >
                {category.name}
              </Link>
              <span>/</span>
              <Link
                to={`/products?category=${category.id}&subcategory=${subcategory.id}`}
                className="hover:text-foreground transition-colors"
              >
                {subcategory.name}
              </Link>
              <span>/</span>
              <span className="text-foreground truncate max-w-[200px]">
                {product.name}
              </span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left: Product Image */}
              <div className="relative">
                <div className="aspect-[16/10] overflow-hidden rounded-xl border border-border">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Featured Badge */}
                  {product.highlighted && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-sm font-medium rounded-lg shadow-lg">
                        <Sparkles className="h-4 w-4" />
                        Featured Product
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right: Product Info */}
              <div>
                {/* Category & Subcategory Tags */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Link
                    to={`/products?category=${category.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md hover:bg-primary/20 transition-colors"
                  >
                    <Folder className="h-3.5 w-3.5" />
                    {category.name}
                  </Link>
                  <Link
                    to={`/products?category=${category.id}&subcategory=${subcategory.id}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-md hover:bg-muted/80 transition-colors"
                  >
                    <Layers className="h-3.5 w-3.5" />
                    {subcategory.name}
                  </Link>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 leading-tight">
                  {product.name}
                </h1>
                <p className="text-lg md:text-xl text-primary font-medium mb-6">
                  {product.tagline}
                </p>
                <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    state={{ subject: `Inquiry about ${product.name}` }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-colors"
                  >
                    Request a Demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    state={{ subject: `Pricing inquiry for ${product.name}` }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-card text-foreground font-medium hover:bg-muted transition-colors"
                  >
                    Get Pricing
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Key Features
                </h2>
                <p className="text-muted-foreground text-lg">
                  Everything you need to power your business with {product.name}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Product Info Cards */}
        <section className="py-16 lg:py-20 bg-muted/30 border-y border-border">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Category Info */}
                <div className="p-6 rounded-xl border border-border bg-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Folder className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Category
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.name}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {category.description}
                  </p>
                </div>

                {/* Subcategory Info */}
                <div className="p-6 rounded-xl border border-border bg-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Subcategory
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {subcategory.name}
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    {subcategory.description}
                  </p>
                </div>

                {/* Features Count */}
                <div className="p-6 rounded-xl border border-border bg-card">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Tag className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Features
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {product.features.length} Key Features
                  </p>
                  <p className="text-muted-foreground text-xs mt-1">
                    Enterprise-ready solution
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Choose This Product */}
        <section className="py-16 lg:py-20">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Why Choose {product.name}?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Built with modern technology and designed for scale
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Scalable Architecture
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Built to grow with your business, from startup to
                    enterprise-level operations without compromising
                    performance.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Modern Technology Stack
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Leveraging cutting-edge technologies to ensure reliability,
                    security, and maintainability.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Dedicated Support
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our team of experts provides ongoing support, training, and
                    maintenance to ensure your success.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    Customizable Solution
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Tailored to fit your unique business requirements with
                    flexible customization options.
                  </p>
                </div>
              </div>

              {/* Back to Products */}
              <div className="mt-10 pt-8 border-t border-border">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to All Products
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 lg:py-24 bg-muted/40 border-y border-border">
            <Container>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Related Products
                </h2>
                <p className="text-muted-foreground text-lg">
                  More from our {subcategory.name.toLowerCase()} collection
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <RelatedProductCard
                    key={relatedProduct.id}
                    product={relatedProduct}
                  />
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  to={`/products?category=${category.id}&subcategory=${subcategory.id}`}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  View All {subcategory.name} Products{" "}
                  <ArrowRight className="h-4 w-4" />
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

// Related Product Card Component
interface RelatedProductCardProps {
  product: SoftwareProduct;
}

const RelatedProductCard = ({ product }: RelatedProductCardProps) => {
  return (
    <Link to={`/products/${product.id}`} className="group">
      <article className="h-full rounded-xl border border-border bg-card hover:border-primary/20 transition-colors overflow-hidden">
        <div className="aspect-video overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-5">
          {product.highlighted && (
            <div className="mb-3">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium rounded">
                <Sparkles className="h-3 w-3" />
                Featured
              </span>
            </div>
          )}
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
            {product.tagline}
          </p>
          <div className="flex items-center gap-1 text-sm text-primary font-medium">
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductDetails;
