import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, Wrench, ArrowRight, Star } from "lucide-react";

interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  difficulty: number;
  time: string;
  videoUrl?: string;
  heroImages?: string[];
  featured: boolean;
}

const categories = ["All", "Performance", "Exterior", "Interior", "Suspension", "Maintenance"];
const DifficultyStars = ({ level }: { level: number }) => (<div className="flex gap-1">{[1, 2, 3, 4, 5].map((star) => (<Star key={star} className={`h-4 w-4 ${star <= level ? "fill-primary text-primary" : "text-border"}`} />))}</div>);

export default function HowToPage() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const loadGuides = async () => {
      const modules = import.meta.glob('/content/howto/*.json', { eager: true });
      const items: Guide[] = [];
      for (const [path, module] of Object.entries(modules)) {
        const slug = path.split('/').pop()?.replace('.json', '') || '';
        const data = module as any;
        items.push({
          slug,
          title: data.title || '',
          excerpt: data.excerpt || '',
          category: data.category || 'Maintenance',
          difficulty: parseInt(data.difficulty) || 1,
          time: data.time || '1 hour',
          videoUrl: data.videoUrl || '',
          heroImages: data.heroImages || ['/hero-previa.jpg'],
          featured: data.featured || false,
        });
      }
      setGuides(items);
    };
    loadGuides();
  }, []);

  const filteredGuides = activeCategory === "All" ? guides : guides.filter(guide => guide.category === activeCategory);
  const featuredGuides = filteredGuides.filter(g => g.featured);
  const allGuides = filteredGuides;

  return (
    <Layout>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="jdm-tag mb-6 inline-block">Build Guides</span>
          <h1 className="font-heading text-6xl md:text-8xl mb-6">How-To</h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">Step-by-step guides for modifications, maintenance, and JDM parts installation. Learn from our builds.</p>
        </div>
      </section>
      {featuredGuides.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-4xl mb-8">Featured Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredGuides.map((guide) => (
                <Link key={guide.slug} to={`/how-to/${guide.slug}`} className="group relative aspect-[4/5] rounded-egg-lg overflow-hidden">
                  <img src={guide.heroImages?.[0] || '/hero-previa.jpg'} alt={guide.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary font-bold text-xs uppercase tracking-widest">{guide.category}</span>
                    <h3 className="font-heading text-2xl text-background mt-2 mb-3">{guide.title}</h3>
                    <div className="flex items-center gap-4 text-background/70 text-sm">
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{guide.time}</span>
                      <DifficultyStars level={guide.difficulty} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="py-4 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">{categories.map((cat) => (<button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-3 rounded-egg font-body font-medium transition-all duration-300 ${activeCategory === cat ? "bg-foreground text-background" : "bg-secondary hover:bg-accent"}`}>{cat}</button>))}</div>
        </div>
      </section>
      {allGuides.length > 0 ? (
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-4xl mb-8">All Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allGuides.map((guide) => (
                <Link key={guide.slug} to={`/how-to/${guide.slug}`} className="group bg-card rounded-egg-lg overflow-hidden border border-border hover:border-foreground transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-video overflow-hidden">
                    <img src={guide.heroImages?.[0] || '/hero-previa.jpg'} alt={guide.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">{guide.category}</span>
                    <h3 className="font-heading text-xl mt-2 mb-3 group-hover:text-primary transition-colors">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-4">{guide.excerpt}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground"><Clock className="h-4 w-4" />{guide.time}</span>
                      <DifficultyStars level={guide.difficulty} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground font-body text-xl mb-6">No how-to guides yet. Add your first guide in the admin panel!</p>
            <Button variant="hero" size="lg" asChild><a href="/admin">Go to Admin Panel</a></Button>
          </div>
        </section>
      )}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <Wrench className="h-16 w-16 mx-auto mb-6 text-primary" />
          <h2 className="font-heading text-5xl mb-6">Need a Specific Guide?</h2>
          <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Working on something not covered here? Let us know and we might document the process for the community.</p>
          <Button variant="hero" size="lg" asChild><a href="mailto:guides@eggstyle.com">Request a Guide <ArrowRight className="ml-2 h-5 w-5" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
