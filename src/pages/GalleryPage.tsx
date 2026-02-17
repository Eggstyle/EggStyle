import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

interface GalleryItem {
  title: string;
  caption: string;
  category: string;
  images: string[];
  displayOrder: number;
}

const categories = [
  { id: "all", label: "All Photos" },
  { id: "Car Meets", label: "Car Meets" },
  { id: "Mods & Builds", label: "Builds" },
  { id: "Daily Life", label: "Daily Life" },
  { id: "Events", label: "Events" },
  { id: "Road Trips", label: "Road Trips" },
];

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; caption: string } | null>(null);

  useEffect(() => {
    const loadGallery = async () => {
      const modules = import.meta.glob('/content/gallery/*.json', { eager: true });
      const items: GalleryItem[] = [];
      for (const module of Object.values(modules)) {
        const data = module as any;
        items.push({
          title: data.title || '',
          caption: data.caption || '',
          category: data.category || 'Other',
          images: data.images || [],
          displayOrder: data.displayOrder || 99,
        });
      }
      items.sort((a, b) => a.displayOrder - b.displayOrder);
      setGallery(items);
    };
    loadGallery();
  }, []);

  const allImages = gallery
    .filter(item => activeCategory === "all" || item.category === activeCategory)
    .flatMap(item => item.images.map(src => ({ src, title: item.title, caption: item.caption })));

  return (
    <Layout>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="jdm-tag mb-6 inline-block">Visual Archive</span>
          <h1 className="font-heading text-6xl md:text-8xl mb-6">Gallery</h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">Car meets, builds, details, and everything in between. A visual journey through the EggStyle life.</p>
        </div>
      </section>
      <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`px-6 py-3 rounded-egg font-body font-medium transition-all duration-300 ${activeCategory === cat.id ? "bg-foreground text-background" : "bg-secondary hover:bg-accent"}`}>{cat.label}</button>
            ))}
          </div>
        </div>
      </section>
      {allImages.length > 0 ? (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allImages.map((image, index) => (
                <button key={index} onClick={() => setSelectedImage(image)} className="group relative aspect-square overflow-hidden rounded-egg-lg cursor-pointer" style={{ animationDelay: `${index * 0.05}s` }}>
                  <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-heading text-2xl text-background px-4 text-center">{image.title}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground font-body text-xl mb-6">No photos yet. Add your first gallery item in the admin panel!</p>
            <Button variant="hero" size="lg" asChild><a href="/admin">Go to Admin Panel</a></Button>
          </div>
        </section>
      )}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button className="absolute top-6 right-6 text-background font-heading text-2xl hover:text-primary transition-colors" onClick={() => setSelectedImage(null)}>Close ×</button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} className="max-w-full max-h-[80vh] object-contain rounded-egg mx-auto" />
            <div className="text-center mt-6">
              <p className="font-heading text-3xl text-background mb-2">{selectedImage.title}</p>
              {selectedImage.caption && <p className="font-body text-background/70">{selectedImage.caption}</p>}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
