import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-previa.jpg";
import estimaImage from "@/assets/estima-showcase.jpg";

const previaSpecs = {
  year: "1991",
  model: "Toyota Previa LE",
  market: "USDM",
  engine: "2TZ-FE 2.4L Supercharged",
  transmission: "4-Speed Automatic",
  drivetrain: "All-Trac AWD",
  color: "Super White II",
  modifications: [
    "SC14 Supercharger (factory option)",
    "Lowered suspension",
    "15\" Enkei RPF1 wheels",
    "Custom exhaust",
    "JDM headlights conversion",
    "Period-correct interior refresh",
  ],
};

const estimaSpecs = {
  year: "1992",
  model: "Toyota Estima Lucida",
  market: "JDM Import",
  engine: "3C-T 2.2L Turbo Diesel",
  transmission: "4-Speed Automatic",
  drivetrain: "FWD",
  color: "Super White",
  modifications: [
    "Full JDM aero kit",
    "Twin moonroof",
    "Japanese navigation system",
    "Custom leather interior",
    "Lowered on coilovers",
    "Work Emotion wheels",
    "Full sound deadening",
  ],
};

export default function RidesPage() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="jdm-tag mb-6 inline-block">The Fleet</span>
          <h1 className="font-heading text-6xl md:text-8xl mb-6">Our Rides</h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Two egg-shaped legends. Different markets, different specs, same obsession.
          </p>
        </div>
      </section>

      {/* 1991 Previa */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-primary font-bold text-sm uppercase tracking-widest">USDM</span>
              <h2 className="font-heading text-5xl md:text-6xl mt-2 mb-6">1991 Toyota Previa</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary rounded-egg p-4">
                  <p className="text-sm text-muted-foreground">Engine</p>
                  <p className="font-heading text-lg">{previaSpecs.engine}</p>
                </div>
                <div className="bg-secondary rounded-egg p-4">
                  <p className="text-sm text-muted-foreground">Drivetrain</p>
                  <p className="font-heading text-lg">{previaSpecs.drivetrain}</p>
                </div>
                <div className="bg-secondary rounded-egg p-4">
                  <p className="text-sm text-muted-foreground">Transmission</p>
                  <p className="font-heading text-lg">{previaSpecs.transmission}</p>
                </div>
                <div className="bg-secondary rounded-egg p-4">
                  <p className="text-sm text-muted-foreground">Color</p>
                  <p className="font-heading text-lg">{previaSpecs.color}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-heading text-2xl mb-4">Modifications</h3>
                <ul className="space-y-2">
                  {previaSpecs.modifications.map((mod, index) => (
                    <li key={index} className="flex items-center gap-3 font-body">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="font-body text-muted-foreground mb-6">
                The American egg. Found locally with the rare factory supercharger option. 
                This one's the daily driver – reliable, surprisingly quick, and always gets 
                questions at gas stations. The mid-engine layout gives it go-kart handling 
                that catches everyone off guard.
              </p>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-egg-lg overflow-hidden shadow-lg">
                <img 
                  src={heroImage} 
                  alt="1991 Toyota Previa" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="border-t border-border" />
      </div>

      {/* 1992 Estima */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-[4/3] rounded-egg-lg overflow-hidden shadow-lg">
                <img 
                  src={estimaImage} 
                  alt="1992 Toyota Estima" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div>
              <span className="text-primary font-bold text-sm uppercase tracking-widest">JDM Import</span>
              <h2 className="font-heading text-5xl md:text-6xl mt-2 mb-6">1992 Toyota Estima</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-secondary rounded-egg p-4">
                  <p className="text-sm text-muted-foreground">Engine</p>
                  <p className="font-heading text-lg">{estimaSpecs.engine}</p>
                </div>
                <div className="bg-secondary rounded-egg p-4">
                  <p className="text-sm text-muted-foreground">Drivetrain</p>
                  <p className="font-heading text-lg">{estimaSpecs.drivetrain}</p>
                </div>
                <div className="bg-secondary rounded-egg p-4">
                  <p className="text-sm text-muted-foreground">Transmission</p>
                  <p className="font-heading text-lg">{estimaSpecs.transmission}</p>
                </div>
                <div className="bg-secondary rounded-egg p-4">
                  <p className="text-sm text-muted-foreground">Color</p>
                  <p className="font-heading text-lg">{estimaSpecs.color}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-heading text-2xl mb-4">Modifications</h3>
                <ul className="space-y-2">
                  {estimaSpecs.modifications.map((mod, index) => (
                    <li key={index} className="flex items-center gap-3 font-body">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="font-body text-muted-foreground mb-6">
                The true JDM spec. Imported from Japan with all the factory options we never got 
                in the States. The turbodiesel is torquey and efficient, perfect for cruising. 
                Finding parts has been an adventure – Japanese auctions, enthusiast forums, 
                and connections made along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl mb-6">Need Parts for Your Egg?</h2>
          <p className="font-body text-xl text-background/70 mb-8 max-w-2xl mx-auto">
            We occasionally sell rare parts from our collection and imports. Check out the shop for current inventory.
          </p>
          <Button variant="yolk" size="lg" asChild>
            <Link to="/shop">Browse Parts Shop</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
