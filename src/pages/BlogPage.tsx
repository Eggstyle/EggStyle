import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime?: string;
}

const categories = ["All", "Parts", "Car Meets", "How-To", "Story", 
"Events"];

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Load blog posts from content files
    const loadPosts = async () => {
      const modules = import.meta.glob('/content/blog/*.md', { eager: 
true, as: 'raw' });
      const posts: BlogPost[] = [];

      for (const [path, content] of Object.entries(modules)) {
        const slug = path.split('/').pop()?.replace('.md', '') || '';
        
        // Parse frontmatter
        const matches = (content as 
string).match(/^---\n([\s\S]*?)\n---/);
        if (matches) {
          const frontmatter = matches[1];
          const lines = frontmatter.split('\n');
          const data: any = {};
          
          lines.forEach(line => {
            const [key, ...valueParts] = line.split(':');
            if (key && valueParts.length) {
              const value = 
valueParts.join(':').trim().replace(/^["']|["']$/g, '');
              data[key.trim()] = value;
            }
          });

          posts.push({
            slug,
            title: data.title || '',
            excerpt: data.excerpt || '',
            date: new Date(data.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }),
            category: data.category || 'Story',
            image: data.image || '/car-meet.jpg',
            readTime: '5 min read',
          });
        }
      }

      // Sort by date, newest first
      posts.sort((a, b) => new Date(b.date).getTime() - new 
Date(a.date).getTime());
      setBlogPosts(posts);
    };

    loadPosts();
  }, []);

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <span className="jdm-tag mb-6 inline-block">Stories & 
Updates</span>
          <h1 className="font-heading text-6xl md:text-8xl mb-6">Blog</h1>
          <p className="font-body text-xl text-muted-foreground max-w-2xl 
mx-auto">
            Build updates, car meet recaps, rare finds, and thoughts on 
JDM culture.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border sticky top-20 
bg-background z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-egg font-body font-medium 
transition-all duration-300 ${
                  activeCategory === cat
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
      {featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <article className="group">
              <Link to={`/blog/${featuredPost.slug}`} className="grid 
lg:grid-cols-2 gap-8 items-center">
                <div className="aspect-video lg:aspect-[4/3] 
rounded-egg-lg overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover 
transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span 
className="jdm-tag">{featuredPost.category}</span>
                    <span className="text-muted-foreground font-body 
text-sm flex items-center gap-2">
                      <Calendar size={14} />
                      {featuredPost.date}
                    </span>
                  </div>
                  <h2 className="font-heading text-4xl md:text-5xl mb-4 
group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="font-body text-lg text-muted-foreground 
mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary 
font-medium">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 
group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      {otherPosts.length > 0 && (
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post) => (
                <article key={post.slug} className="group">
                  <Link to={`/blog/${post.slug}`} className="block bg-card 
rounded-egg-lg overflow-hidden border border-border 
hover:border-foreground transition-all duration-300 hover:-translate-y-2">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover 
transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs font-bold uppercase 
tracking-widest text-primary">{post.category}</span>
                        <span className="text-xs 
text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="font-heading text-2xl mb-3 
group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground font-body 
text-sm line-clamp-2">
                        {post.excerpt}
                      </p>
                      <p className="text-sm text-muted-foreground mt-4 
font-body">{post.date}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {blogPosts.length === 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground font-body text-xl">
              No blog posts yet. Add your first post in the admin panel!
            </p>
            <Button variant="hero" size="lg" className="mt-6" asChild>
              <a href="/admin">Go to Admin Panel</a>
            </Button>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-4xl mb-4">Never Miss an 
Update</h2>
            <p className="font-body text-muted-foreground mb-8">
              Get notified about new blog posts, rare parts drops, and 
upcoming car meets.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md 
mx-auto">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="flex-1 px-6 py-3 rounded-egg border-2 
border-border focus:border-primary outline-none font-body 
transition-colors"
              />
              <Button variant="hero" type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
