import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ArrowRight, Wrench, ShoppingBag, Camera, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-previa.jpg";
import estimaImage from "@/assets/estima-showcase.jpg";
import carMeetImage from "@/assets/car-meet.jpg";
import eggLogo from "@/assets/egg-logo.png";

const featuredPosts = [
  {
    id: 1,
    title: "Japan Import Haul: Rare Estima Parts Finally Arrived",
    excerpt: "After months of waiting, the JDM treasure trove is here. Check out what we scored...",
    date: "Dec 15, 2024",
    image: carMeetImage,
  },
  {
    id: 2,
    title: "SoCal Van Meet Recap: Community Never Looked Better",
    excerpt: "Amazing turnout at last weekend's meet. The 90s van community is thriving...",
    date: "Dec 10, 2024",
    image: heroImage,
  },
];

const featuredProducts = [
  { id: 1, name: "JDM Estima Tail Lights", price: 350, condition: "Excellent" },
  { id: 2, name: "Previa Front Grille OEM", price: 180, condition: "Good" },
  { id: 3, name: "SC Supercharger Kit", price: 1200, condition: "Rebuilt" },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Toyota Previa at car meet" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6 animate-fade-in">
              <img src={eggLogo} alt="EggStyle" className="h-20 w-20 object-contain animate-float" />
              <span className="jdm-tag">JDM Culture</span>
            </div>
            
            <h1 className="font-heading text-6xl md:text-8xl leading-none mb-6 animate-slide-up">
              EggStyle
            </h1>
            
            <p className="font-body text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-up stagger-1">
              Celebrating 90's Toyota van culture. <br />
              <span className="text-primary font-semibold">1991 Previa × 1992 Estima</span>
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up stagger-2">
              <Button variant="hero" size="lg" asChild>
                <Link to="/rides">
                  View The Builds <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/shop">
                  Shop JDM Parts
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-8 right-8 hidden lg:block animate-slide-up stagger-3">
          <div className="bg-card/90 backdrop-blur-sm rounded-egg-lg p-6 shadow-lg border border-border">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="font-heading text-4xl text-primary">2</p>
                <p className="text-sm text-muted-foreground">Egg Vans</p>
              </div>
              <div>
                <p className="font-heading text-4xl text-primary">90s</p>
                <p className="text-sm text-muted-foreground">JDM Era</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Camera, title: "Gallery", desc: "Car meets & build photos", link: "/gallery" },
              { icon: Wrench, title: "How-To Guides", desc: "Installation tutorials", link: "/how-to" },
              { icon: ShoppingBag, title: "Shop Parts", desc: "Rare JDM finds", link: "/shop" },
            ].map((item, index) => (
              <Link
                key={item.title}
                to={item.link}
                className="group bg-card rounded-egg-lg p-8 border-2 border-transparent hover:border-foreground transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-md"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-2xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body">{item.desc}</p>
                <div className="flex items-center gap-2 mt-4 text-primary font-medium">
                  <span>Explore</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rides Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="jdm-tag mb-4 inline-block">The Fleet</span>
              <h2 className="font-heading text-5xl md:text-6xl">Meet The Eggs</h2>
            </div>
            <Button variant="pill" asChild className="hidden md:flex">
              <Link to="/rides">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Previa Card */}
            <Link to="/rides" className="group relative overflow-hidden rounded-egg-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="1991 Toyota Previa" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">USDM</p>
                <h3 className="font-heading text-4xl text-background mb-2">1991 Previa</h3>
                <p className="text-background/70 font-body">The American egg. Clean, classic, supercharged.</p>
              </div>
            </Link>

            {/* Estima Card */}
            <Link to="/rides" className="group relative overflow-hidden rounded-egg-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={estimaImage} 
                  alt="1992 Toyota Estima" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">JDM</p>
                <h3 className="font-heading text-4xl text-background mb-2">1992 Estima</h3>
                <p className="text-background/70 font-body">True JDM spec. Imported. Rare parts galore.</p>
              </div>
            </Link>
          </div>

          <div className="mt-8 md:hidden">
            <Button variant="pill" asChild className="w-full">
              <Link to="/rides">View All Rides <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="jdm-tag mb-4 inline-block">From The Blog</span>
              <h2 className="font-heading text-5xl md:text-6xl">Latest Stories</h2>
            </div>
            <Button variant="pill" asChild className="hidden md:flex">
              <Link to="/blog">All Posts <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="group bg-card rounded-egg-lg overflow-hidden border border-border hover:border-foreground transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2 font-body">{post.date}</p>
                  <h3 className="font-heading text-2xl mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground font-body line-clamp-2">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Button variant="pill" asChild className="w-full">
              <Link to="/blog">All Blog Posts <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Shop Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="jdm-tag mb-4 inline-block">Rare Finds</span>
              <h2 className="font-heading text-5xl md:text-6xl">Shop JDM Parts</h2>
            </div>
            <Button variant="pill" asChild className="hidden md:flex">
              <Link to="/shop">View Shop <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group bg-card rounded-egg-lg p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-yolk">
                <div className="aspect-square bg-secondary rounded-egg mb-4 flex items-center justify-center">
                  <ShoppingBag className="h-16 w-16 text-muted-foreground" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{product.condition}</span>
                <h3 className="font-heading text-xl mt-2">{product.name}</h3>
                <p className="font-heading text-2xl text-primary mt-2">${product.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Button variant="pill" asChild className="w-full">
              <Link to="/shop">Browse All Parts <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <img src={eggLogo} alt="EggStyle" className="h-24 w-24 object-contain mx-auto mb-6 invert animate-float" />
          <h2 className="font-heading text-5xl md:text-7xl mb-6">Follow The Journey</h2>
          <p className="font-body text-xl text-background/70 mb-8 max-w-2xl mx-auto">
            Join the community. Get updates on new builds, rare parts drops, and car meet announcements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="yolk" size="lg" asChild>
              <a href="https://instagram.com/eggstyle" target="_blank" rel="noopener noreferrer">
                @EggStyle on Instagram
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-background/30 text-background hover:bg-background hover:text-foreground" asChild>
              <Link to="/about">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
