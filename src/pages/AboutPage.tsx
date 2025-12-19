import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Music, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-previa.jpg";
import estimaImage from "@/assets/estima-showcase.jpg";
import carMeetImage from "@/assets/car-meet.jpg";

const interests = [
  { icon: "🚗", label: "Van Kulture" },
  { icon: "🥚", label: "Egg Van Life" },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="jdm-tag mb-6 inline-block">About Me</span>
              <h1 className="font-heading text-6xl md:text-7xl mb-6 animate-slide-up">
                The Story Behind EggStyle
              </h1>
              <p className="font-body text-xl text-muted-foreground mb-8 animate-slide-up stagger-1">
                Filipino-American car enthusiast based in California, obsessed with 90's Toyota vans and the community that keeps them alive.
              </p>
              <div className="flex flex-wrap gap-3 animate-slide-up stagger-2">
                {interests.map((interest) => (
                  <span 
                    key={interest.label}
                    className="px-4 py-2 bg-secondary rounded-full font-body text-sm flex items-center gap-2"
                  >
                    <span>{interest.icon}</span>
                    {interest.label}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-egg-lg overflow-hidden animate-scale-in">
                <img 
                  src={carMeetImage} 
                  alt="At a car meet" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary rounded-egg p-6 shadow-yolk animate-slide-up stagger-3">
                <p className="font-heading text-4xl text-primary-foreground">2 Eggs</p>
                <p className="text-primary-foreground/80 font-body">in the garage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-5xl mb-8">My Journey</h2>
            
            <div className="space-y-6 font-body text-lg text-muted-foreground">
              <p>
                It all started with a fascination for the distinctive egg-shaped silhouette of the Toyota Previa. 
                Growing up in a Filipino-American household, I was surrounded by a culture that valued both family 
                and practical vehicles – and nothing says "family adventure" quite like a mid-engine van from the 90s.
              </p>
              
              <p>
                The <strong className="text-foreground">1996 Previa</strong> was my first egg. Found it with a friend's help, 
                already knowing I wanted to breathe new life into this quirky piece of automotive history. The mid-engine 
                layout, the supercharger potential, the space-age styling – it was unlike anything else on the road.
              </p>
              
              <p>
                Then came the <strong className="text-foreground">1998 Estima</strong> – the true JDM version. Imported from Japan 
                with all the goodies: different suspension, unique interior trim, and that authentic right-hand-drive experience. 
                Sourcing parts for this one has become an obsession, connecting with sellers across Japan and fellow enthusiasts worldwide.
              </p>
              
              <p>
                EggStyle isn't just about the vans – it's about the culture. The intersection of JDM enthusiasm, 
                streetwear aesthetics, and the incredible community of people who appreciate these underrated classics. 
                Whether I'm documenting builds on my Meta glasses, hitting up car meets, or vibing to 88 Rising while 
                wrenching in the garage, it's all part of the EggStyle life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Vans Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl mb-12 text-center">The Fleet</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group">
              <div className="aspect-video rounded-egg-lg overflow-hidden mb-6">
                <img 
                  src={heroImage} 
                  alt="1996 Toyota Previa" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading text-3xl mb-2">1996 Toyota Previa</h3>
              <p className="text-muted-foreground font-body">
                USDM spec. Supercharged 2TZ-FE. The daily driver that turns heads everywhere it goes.
              </p>
            </div>
            
            <div className="group">
              <div className="aspect-video rounded-egg-lg overflow-hidden mb-6">
                <img 
                  src={estimaImage} 
                  alt="1998 Toyota Estima" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading text-3xl mb-2">1998 Toyota Estima</h3>
              <p className="text-muted-foreground font-body">
                JDM import. Right-hand drive. Full of rare parts that took years to source.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/rides">Explore Full Build Details</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl mb-6">Let's Connect</h2>
          <p className="font-body text-xl text-background/70 mb-8 max-w-2xl mx-auto">
            Follow along for build updates, car meet recaps, rare parts finds, and everything EggStyle.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://instagram.com/eggstyle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-background/10 rounded-egg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Instagram size={24} />
              <span className="font-body font-medium">@EggStyle</span>
            </a>
            
            <a 
              href="https://youtube.com/@eggstyle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-background/10 rounded-egg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Youtube size={24} />
              <span className="font-body font-medium">YouTube</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
