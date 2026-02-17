import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, Filter, Mail } from "lucide-react";

interface Product {
  slug: string;
  name: string;
  price: number;
  condition: string;
  compatibility: string;
  category: string;
  description: string;
  images?: string[];
  rare: boolean;
}

const categories = ["All", "Exterior", "Interior", "Performance", "Suspension", "Maintenance"];
const conditions = ["All", "New", "Excellent", "Rebuilt", "Good", "Working"];
const compatibilities = ["All", "Previa", "Estima", "Both"];

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCondition, setSelectedCondition] = useState("All");
  const [selectedCompatibility, setSelectedCompatibility] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      const modules = import.meta.glob('/content/shop/*.json', { eager: true });
      const items: Product[] = [];
      for (const [path, module] of Object.entries(modules)) {
        const slug = path.split('/').pop()?.replace('.json', '') || '';
        const data = module as any;
        items.push({
          slug,
          name: data.name || '',
          price: data.price || 0,
          condition: data.condition || 'Good',
          compatibility: data.compatibility || 'Both',
          category: data.category || 'Exterior',
          description: data.description || '',
          images: data.images || (data.image ? [data.image] : ['/estima-showcase.jpg']),
          rare: data.rare || false,
        });
      }
      setProducts(items);
    };
    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
    if (selectedCondition !== "All" && product.condition !== selectedCondition) return false;
    if (selectedCompatibility !== "All" && product.compatibility !== selectedCompatibility && product.compatibility !== "Both") return false;
    return true;
  });

  return (
    <Layout>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="jdm-tag mb-6 inline-block">Parts Marketplace</span>
          <h1 className="font-heading text-6xl md:text-8xl mb-6">Shop</h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">Rare JDM parts, used OEM pieces, and occasional finds from our collection. Quality parts for fellow egg enthusiasts.</p>
        </div>
      </section>
      <section className="py-6 border-b border-border sticky top-20 bg-background z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <p className="font-body text-muted-foreground">{filteredProducts.length} items available</p>
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)} className="md:hidden"><Filter className="h-4 w-4 mr-2" />Filters</Button>
          </div>
          <div className={`${showFilters ? 'block' : 'hidden'} md:block mt-4`}>
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-sm font-medium mb-2">Category</p>
                <div className="flex flex-wrap gap-2">{categories.map((cat) => (<button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-egg text-sm font-body transition-all ${selectedCategory === cat ? "bg-foreground text-background" : "bg-secondary hover:bg-accent"}`}>{cat}</button>))}</div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Compatibility</p>
                <div className="flex flex-wrap gap-2">{compatibilities.map((comp) => (<button key={comp} onClick={() => setSelectedCompatibility(comp)} className={`px-4 py-2 rounded-egg text-sm font-body transition-all ${selectedCompatibility === comp ? "bg-foreground text-background" : "bg-secondary hover:bg-accent"}`}>{comp}</button>))}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {filteredProducts.length > 0 ? (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.slug} to={`/shop/${product.slug}`} className="group bg-card rounded-egg-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-yolk">
                  <div className="aspect-square bg-secondary relative overflow-hidden">
                    <img src={product.images?.[0] || '/estima-showcase.jpg'} alt={product.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center"><ShoppingBag className="h-16 w-16 text-muted-foreground" /></div>
                    {product.rare && (<span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Rare Find</span>)}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">{product.condition}</span>
                      <span className="text-xs text-muted-foreground">• {product.compatibility}</span>
                    </div>
                    <h3 className="font-heading text-xl mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <p className="font-heading text-2xl text-primary">${product.price}</p>
                      <span className="text-sm font-medium text-primary">View Details →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground font-body text-xl mb-6">No shop items yet. Add your first part in the admin panel!</p>
            <Button variant="hero" size="lg" asChild><a href="/admin">Go to Admin Panel</a></Button>
          </div>
        </section>
      )}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl mb-6">Looking for Something Specific?</h2>
          <p className="font-body text-xl text-background/70 mb-8 max-w-2xl mx-auto">Can't find what you need? Reach out – we have connections in Japan and might be able to source it for you.</p>
          <Button variant="yolk" size="lg" asChild><a href="mailto:parts@eggstyle.com"><Mail className="h-5 w-5 mr-2" />Contact for Custom Sourcing</a></Button>
        </div>
      </section>
    </Layout>
  );
}
