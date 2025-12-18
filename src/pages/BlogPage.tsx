import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-previa.jpg";
import estimaImage from "@/assets/estima-showcase.jpg";
import carMeetImage from "@/assets/car-meet.jpg";

const blogPosts = [
  {
    id: 1,
    slug: "japan-import-haul",
    title: "Japan Import Haul: Rare Estima Parts Finally Arrived",
    excerpt: "After months of waiting and multiple shipping delays, the treasure trove of JDM parts finally landed. Here's what we scored from the auctions and what's going on the Estima first.",
    date: "December 15, 2024",
    category: "Parts",
    image: estimaImage,
    readTime: "5 min read",
  },
  {
    id: 2,
    slug: "socal-van-meet-december",
    title: "SoCal Van Meet Recap: December Edition",
    excerpt: "Incredible turnout at the last meet of 2024. The 90s van community showed up strong with Previas, Estimas, Delvans, and everything in between.",
    date: "December 10, 2024",
    category: "Car Meets",
    image: carMeetImage,
    readTime: "8 min read",
  },
  {
    id: 3,
    slug: "supercharger-rebuild",
    title: "SC14 Supercharger Rebuild: Complete Guide",
    excerpt: "The factory supercharger on my Previa needed some love after 200k miles. Here's the full teardown and rebuild process with tips for anyone tackling this job.",
    date: "December 5, 2024",
    category: "How-To",
    image: heroImage,
    readTime: "12 min read",
  },
  {
    id: 4,
    slug: "finding-the-estima",
    title: "How I Found My JDM Estima",
    excerpt: "The story of how a late-night auction bid led to importing my dream van from Japan. Lessons learned and tips for anyone looking to go the import route.",
    date: "November 28, 2024",
    category: "Story",
    image: estimaImage,
    readTime: "10 min read",
  },
  {
    id: 5,
    slug: "88-rising-festival",
    title: "88 Rising Festival: When Car Culture Meets Music",
    excerpt: "Bringing the Previa to Head in the Clouds festival. The intersection of Asian-American culture, music, and automotive passion all in one weekend.",
    date: "November 20, 2024",
    category: "Events",
    image: carMeetImage,
    readTime: "6 min read",
  },
  {
    id: 6,
    slug: "winter-maintenance-tips",
    title: "Winter Prep for Your Egg Van",
    excerpt: "Essential maintenance tips to keep your Previa or Estima running smooth through the colder months. From coolant checks to tire care.",
    date: "November 15, 2024",
    category: "How-To",
    image: heroImage,
    readTime: "7 min read",
  },
];

const categories = ["All", "Parts", "Car Meets", "How-To", "Story", "Events"];

export default function BlogPage() {
  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="jdm-tag mb-6 inline-block">Stories & Updates</span>
          <h1 className="font-heading text-6xl md:text-8xl mb-6">Blog</h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Build updates, car meet recaps, rare finds, and thoughts on JDM culture.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-3 rounded-egg font-body font-medium transition-all duration-300 ${
                  cat === "All"
                    ? "bg-foreground text-background"
                    : "bg-secondary hover:bg-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <article className="group">
            <Link to={`/blog/${blogPosts[0].slug}`} className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="aspect-video lg:aspect-[4/3] rounded-egg-lg overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="jdm-tag">{blogPosts[0].category}</span>
                  <span className="text-muted-foreground font-body text-sm flex items-center gap-2">
                    <Calendar size={14} />
                    {blogPosts[0].date}
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl mb-4 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="font-body text-lg text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          </article>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="group">
                <Link to={`/blog/${post.slug}`} className="block bg-card rounded-egg-lg overflow-hidden border border-border hover:border-foreground transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">{post.category}</span>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <h3 className="font-heading text-2xl mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    <p className="text-sm text-muted-foreground mt-4 font-body">{post.date}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-4xl mb-4">Never Miss an Update</h2>
            <p className="font-body text-muted-foreground mb-8">
              Get notified about new blog posts, rare parts drops, and upcoming car meets.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 rounded-egg border-2 border-border focus:border-primary outline-none font-body transition-colors"
              />
              <Button variant="hero" type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
