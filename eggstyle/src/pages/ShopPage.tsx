import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Filter, Mail } from "lucide-react";
import estimaImage from "@/assets/estima-showcase.jpg";

const products = [
  {
    id: 1,
    name: "JDM Estima Tail Lights (Pair)",
    price: 350,
    condition: "Excellent",
    compatibility: "Estima",
    category: "Exterior",
    description: "Genuine JDM tail lights from a 1992 Estima. Crystal clear lenses, no cracks or fading. Direct bolt-on for all first-gen Estima/Previa.",
    rare: true,
  },
  {
    id: 2,
    name: "Previa Front Grille OEM",
    price: 180,
    condition: "Good",
    compatibility: "Previa",
    category: "Exterior",
    description: "Original OEM front grille for 1991-1997 Toyota Previa. Minor scratches but overall solid condition.",
    rare: false,
  },
  {
    id: 3,
    name: "SC14 Supercharger Rebuild Kit",
    price: 450,
    condition: "New",
    compatibility: "Both",
    category: "Performance",
    description: "Complete rebuild kit for the Toyota SC14 supercharger. Includes bearings, seals, and hardware. Brand new from Japan.",
    rare: true,
  },
  {
    id: 4,
    name: "JDM Digital Climate Control",
    price: 275,
    condition: "Working",
    compatibility: "Estima",
    category: "Interior",
    description: "Japanese-market digital climate control unit. Fully tested and working. Includes wiring harness.",
    rare: true,
  },
  {
    id: 5,
    name: "Estima Side Skirts (JDM Aero)",
    price: 400,
    condition: "Good",
    compatibility: "Both",
    category: "Exterior",
    description: "Original JDM aero side skirts from an Estima Lucida G. Some repair needed but solid overall.",
    rare: true,
  },
  {
    id: 6,
    name: "Previa All-Trac Transfer Case",
    price: 800,
    condition: "Rebuilt",
    compatibility: "Previa",
    category: "Performance",
    description: "Fully rebuilt transfer case for All-Trac AWD Previas. Includes new bearings and seals. Ready to bolt in.",
    rare: false,
  },
  {
    id: 7,
    name: "JDM Steering Wheel (Leather)",
    price: 225,
    condition: "Good",
    compatibility: "Both",
    category: "Interior",
    description: "Original leather steering wheel from a high-spec Estima. Minor wear but still presents well.",
    rare: false,
  },
  {
    id: 8,
    name: "Crystal Headlights (Aftermarket)",
    price: 320,
    condition: "New",
    compatibility: "Both",
    category: "Exterior",
    description: "Brand new aftermarket crystal headlights. Clear lenses with chrome housings. Plug and play installation.",
    rare: false,
  },
];

const categories = ["All", "Exterior", "Interior", "Performance"];
const conditions = ["All", "New", "Excellent", "Rebuilt", "Good", "Working"];
const compatibilities = ["All", "Previa", "Estima", "Both"];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCondition, setSelectedCondition] = useState("All");
  const [selectedCompatibility, setSelectedCompatibility] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) return false;
    if (selectedCondition !== "All" && product.condition !== selectedCondition) return false;
    if (selectedCompatibility !== "All" && product.compatibility !== selectedCompatibility && product.compatibility !== "Both") return false;
    return true;
  });

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="jdm-tag mb-6 inline-block">Parts Marketplace</span>
          <h1 className="font-heading text-6xl md:text-8xl mb-6">Shop</h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Rare JDM parts, used OEM pieces, and occasional finds from our collection. Quality parts for fellow egg enthusiasts.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border sticky top-20 bg-background z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <p className="font-body text-muted-foreground">
              {filteredProducts.length} items available
            </p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className={`${showFilters ? 'block' : 'hidden'} md:block mt-4`}>
            <div className="flex flex-wrap gap-6">
              <div>
                <p className="text-sm font-medium mb-2">Category</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-egg text-sm font-body transition-all ${
                        selectedCategory === cat
                          ? "bg-foreground text-background"
                          : "bg-secondary hover:bg-accent"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Compatibility</p>
                <div className="flex flex-wrap gap-2">
                  {compatibilities.map((comp) => (
                    <button
                      key={comp}
                      onClick={() => setSelectedCompatibility(comp)}
                      className={`px-4 py-2 rounded-egg text-sm font-body transition-all ${
                        selectedCompatibility === comp
                          ? "bg-foreground text-background"
                          : "bg-secondary hover:bg-accent"
                      }`}
                    >
                      {comp}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group bg-card rounded-egg-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-yolk"
              >
                <div className="aspect-square bg-secondary relative overflow-hidden">
                  <img 
                    src={estimaImage} 
                    alt={product.name} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingBag className="h-16 w-16 text-muted-foreground" />
                  </div>
                  {product.rare && (
                    <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      Rare Find
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">{product.condition}</span>
                    <span className="text-xs text-muted-foreground">• {product.compatibility}</span>
                  </div>
                  
                  <h3 className="font-heading text-xl mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <p className="font-heading text-2xl text-primary">${product.price}</p>
                    <Button variant="pill" size="sm" asChild>
                      <a href={`mailto:shop@eggstyle.com?subject=Inquiry: ${product.name}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Inquire
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl mb-6">Looking for Something Specific?</h2>
          <p className="font-body text-xl text-background/70 mb-8 max-w-2xl mx-auto">
            Can't find what you need? Reach out – we have connections in Japan and might be able to source it for you.
          </p>
          <Button variant="yolk" size="lg" asChild>
            <a href="mailto:parts@eggstyle.com">
              <Mail className="h-5 w-5 mr-2" />
              Contact for Custom Sourcing
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
