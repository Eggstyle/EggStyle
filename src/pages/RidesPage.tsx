import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Ride {
  year: string;
  model: string;
  market: string;
  engine: string;
  transmission: string;
  drivetrain: string;
  color: string;
  modifications: string;
  description: string;
  image: string;
  displayOrder: number;
}

export default function RidesPage() {
  const [rides, setRides] = useState<Ride[]>([]);

  useEffect(() => {
    const loadRides = async () => {
      const modules = import.meta.glob('/content/rides/*.json', { eager: true });
      const items: Ride[] = [];
      for (const module of Object.values(modules)) {
        const data = module as any;
        items.push({
          year: data.year || '',
          model: data.model || '',
          market: data.market || 'USDM',
          engine: data.engine || '',
          transmission: data.transmission || '',
          drivetrain: data.drivetrain || '',
          color: data.color || '',
          modifications: data.modifications || '',
          description: data.description || '',
          image: data.image || '/hero-previa.jpg',
          displayOrder: data.displayOrder || 99,
        });
      }
      items.sort((a, b) => a.displayOrder - b.displayOrder);
      setRides(items);
    };
    loadRides();
  }, []);

  return (
    <Layout>
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="jdm-tag mb-6 inline-block">The Fleet</span>
          <h1 className="font-heading text-6xl md:text-8xl mb-6">The Eggs</h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">Egg-shaped legends. Different markets, different specs, same obsession.</p>
        </div>
      </section>

      {rides.length > 0 ? (
        rides.map((ride, index) => (
          <div key={index}>
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={index % 2 === 1 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                    <span className="text-primary font-bold text-sm uppercase tracking-widest">{ride.market}</span>
                    <h2 className="font-heading text-5xl md:text-6xl mt-2 mb-6">{ride.year} {ride.model}</h2>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-secondary rounded-egg p-4">
                        <p className="text-sm text-muted-foreground">Engine</p>
                        <p className="font-heading text-lg">{ride.engine}</p>
                      </div>
                      <div className="bg-secondary rounded-egg p-4">
                        <p className="text-sm text-muted-foreground">Drivetrain</p>
                        <p className="font-heading text-lg">{ride.drivetrain}</p>
                      </div>
                      <div className="bg-secondary rounded-egg p-4">
                        <p className="text-sm text-muted-foreground">Transmission</p>
                        <p className="font-heading text-lg">{ride.transmission}</p>
                      </div>
                      <div className="bg-secondary rounded-egg p-4">
                        <p className="text-sm text-muted-foreground">Color</p>
                        <p className="font-heading text-lg">{ride.color}</p>
                      </div>
                    </div>
                    {ride.modifications && (
                      <div className="mb-8">
                        <h3 className="font-heading text-2xl mb-4">Modifications</h3>
                        <ul className="space-y-2">
                          {ride.modifications.split('\n').map((mod, idx) => (
                            <li key={idx} className="flex items-center gap-3 font-body">
                              <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                              {mod}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="font-body text-muted-foreground text-lg leading-relaxed">{ride.description}</p>
                  </div>
                  <div className={index % 2 === 1 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                    <div className="aspect-[4/3] rounded-egg-lg overflow-hidden shadow-lg">
                      <img src={ride.image} alt={`${ride.year} ${ride.model}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {index < rides.length - 1 && (
              <div className="container mx-auto px-4">
                <div className="border-t border-border" />
              </div>
            )}
          </div>
        ))
      ) : (
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground font-body text-xl mb-6">No rides added yet. Add your first vehicle in the admin panel!</p>
            <Button variant="hero" size="lg" asChild>
              <a href="/admin">Go to Admin Panel</a>
            </Button>
          </div>
        </section>
      )}

      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl mb-6">Need Parts for Your Egg?</h2>
          <p className="font-body text-xl text-background/70 mb-8 max-w-2xl mx-auto">We occasionally sell rare parts from our collection and imports. Check out the shop for current inventory.</p>
          <Button variant="yolk" size="lg" asChild>
            <Link to="/shop">Browse Parts Shop</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
