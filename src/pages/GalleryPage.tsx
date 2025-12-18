import { useState } from "react";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-previa.jpg";
import estimaImage from "@/assets/estima-showcase.jpg";
import carMeetImage from "@/assets/car-meet.jpg";

const galleryImages = [
  { id: 1, src: heroImage, title: "Previa at Sunset", category: "builds" },
  { id: 2, src: estimaImage, title: "Estima Studio Shot", category: "builds" },
  { id: 3, src: carMeetImage, title: "SoCal Van Meet", category: "meets" },
  { id: 4, src: heroImage, title: "Golden Hour Cruise", category: "builds" },
  { id: 5, src: carMeetImage, title: "Community Gathering", category: "meets" },
  { id: 6, src: estimaImage, title: "JDM Details", category: "details" },
  { id: 7, src: heroImage, title: "Clean Lines", category: "details" },
  { id: 8, src: carMeetImage, title: "Parking Lot Vibes", category: "meets" },
  { id: 9, src: estimaImage, title: "Profile Shot", category: "builds" },
];

const categories = [
  { id: "all", label: "All Photos" },
  { id: "builds", label: "Builds" },
  { id: "meets", label: "Car Meets" },
  { id: "details", label: "Details" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="jdm-tag mb-6 inline-block">Visual Archive</span>
          <h1 className="font-heading text-6xl md:text-8xl mb-6">Gallery</h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Car meets, builds, details, and everything in between. A visual journey through the EggStyle life.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-egg font-body font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-foreground text-background"
                    : "bg-secondary hover:bg-accent"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className="group relative aspect-square overflow-hidden rounded-egg-lg cursor-pointer"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <img 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-heading text-2xl text-background">{image.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-background font-heading text-2xl hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            Close ×
          </button>
          <img 
            src={selectedImage.src} 
            alt={selectedImage.title} 
            className="max-w-full max-h-[80vh] object-contain rounded-egg"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-heading text-3xl text-background">
            {selectedImage.title}
          </p>
        </div>
      )}
    </Layout>
  );
}
