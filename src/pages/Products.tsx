import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/shared/Container";
import PageBanner from "@/components/shared/PageBanner";
import CTASection from "@/components/home/CTASection";
import { products } from "@/data/data";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import bannerProducts from "@/assets/banner-products.png";

const Products = () => {
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

        {/* Products Grid */}
        <section className="py-16 lg:py-24">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="group p-6 rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-md">
                      {product.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">{product.tagline}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
