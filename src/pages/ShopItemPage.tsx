import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail } from "lucide-react";

export default function ShopItemPage() {
  const { slug } = useParams();
  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const loadItem = async () => {
      try {
        const modules = import.meta.glob('/content/shop/*.json', { eager: true });
        for (const [path, module] of Object.entries(modules)) {
          const fileSlug = path.split('/').pop()?.replace('.json', '');
          if (fileSlug === slug) {
            const data = module as any;
            setItem({
              name: data.name || '',
              price: data.price || 0,
              condition: data.condition || 'Good',
              compatibility: data.compatibility || 'Both',
              category: data.category || 'Exterior',
              description: data.description || '',
              images: data.images || (data.image ? [data.image] : ['/estima-showcase.jpg']),
              rare: data.rare || false,
            });
            break;
          }
        }
      } catch (error) {
        console.error("Error loading shop item:", error);
      } finally {
        setLoading(false);
      }
    };
    loadItem();
  }, [slug]);

  if (loading) {
    return (<Layout><div className="container mx-auto px-4 py-20 text-center"><p className="text-xl">Loading...</p></div></Layout>);
  }

  if (!item) {
    return (<Layout><div className="container mx-auto px-4 py-20 text-center"><h1 className="font-heading text-4xl mb-4">Item Not Found</h1><Button variant="hero" asChild><Link to="/shop">Back to Shop</Link></Button></div></Layout>);
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6"><Link to="/shop"><ArrowLeft className="h-4 w-4 mr-2" />Back to Shop</Link></Button>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="aspect-square rounded-egg-lg overflow-hidden mb-4 bg-secondary"><img src={item.images[currentImageIndex]} alt={item.name} className="w-full h-full object-cover" /></div>
              {item.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">{item.images.map((img: string, idx: number) => (<button key={idx} onClick={() => setCurrentImageIndex(idx)} className={`aspect-square rounded-egg overflow-hidden border-2 transition-all ${currentImageIndex === idx ? 'border-primary' : 'border-border hover:border-foreground'}`}><img src={img} alt={`${item.name} ${idx + 1}`} className="w-full h-full object-cover" /></button>))}</div>
              )}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                {item.rare && (<span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">Rare Find</span>)}
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{item.condition}</span>
                <span className="text-xs text-muted-foreground">• {item.compatibility}</span>
              </div>
              <h1 className="font-heading text-5xl md:text-6xl mb-4">{item.name}</h1>
              <p className="font-heading text-4xl text-primary mb-6">${item.price}</p>
              <div className="bg-secondary rounded-egg p-4 mb-6"><p className="text-sm text-muted-foreground mb-1">Category</p><p className="font-body text-lg">{item.category}</p></div>
              <div className="mb-8"><h2 className="font-heading text-2xl mb-4">Description</h2><p className="font-body text-muted-foreground leading-relaxed">{item.description}</p></div>
              <Button variant="hero" size="lg" className="w-full" asChild><a href={`mailto:shop@eggstyle.com?subject=Inquiry: ${item.name}`}><Mail className="h-5 w-5 mr-2" />Contact About This Part</a></Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center"><h2 className="font-heading text-3xl mb-6">More Parts Available</h2><Button variant="hero" size="lg" asChild><Link to="/shop">Browse All Parts</Link></Button></div>
      </section>
    </Layout>
  );
}
