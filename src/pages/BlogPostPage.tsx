import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft } from "lucide-react";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const modules = import.meta.glob('/content/blog/*.md', { eager: true, as: 'raw' });
        for (const [path, content] of Object.entries(modules)) {
          const fileSlug = path.split('/').pop()?.replace('.md', '');
          if (fileSlug === slug) {
            const contentStr = content as string;
            const matches = contentStr.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/);
            if (matches) {
              const frontmatter = matches[1];
              const body = matches[2];
              const lines = frontmatter.split('\n');
              const data: any = {};
              lines.forEach(line => {
                const [key, ...valueParts] = line.split(':');
                if (key && valueParts.length) {
                  const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
                  data[key.trim()] = value;
                }
              });
              setPost({
                title: data.title || '',
                excerpt: data.excerpt || '',
                date: new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                category: data.category || 'Story',
                image: data.image || '/car-meet.jpg',
                body: body,
              });
            }
            break;
          }
        }
      } catch (error) {
        console.error("Error loading post:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPost();
  }, [slug]);

  if (loading) {
    return (<Layout><div className="container mx-auto px-4 py-20 text-center"><p className="text-xl">Loading...</p></div></Layout>);
  }

  if (!post) {
    return (<Layout><div className="container mx-auto px-4 py-20 text-center"><h1 className="font-heading text-4xl mb-4">Post Not Found</h1><Button variant="hero" asChild><Link to="/blog">Back to Blog</Link></Button></div></Layout>);
  }

  const renderContent = (text: string) => {
    return text.split('\n\n').map((paragraph, idx) => (<p key={idx} className="mb-6">{paragraph}</p>));
  };

  return (
    <Layout>
      <article>
        <section className="relative py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6"><Link to="/blog"><ArrowLeft className="h-4 w-4 mr-2" />Back to Blog</Link></Button>
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6"><span className="jdm-tag">{post.category}</span><span className="text-muted-foreground font-body text-sm flex items-center gap-2"><Calendar size={14} />{post.date}</span></div>
              <h1 className="font-heading text-5xl md:text-7xl mb-6">{post.title}</h1>
              <p className="font-body text-xl text-muted-foreground">{post.excerpt}</p>
            </div>
          </div>
        </section>
        {post.image && (
          <section className="py-0">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video rounded-egg-lg overflow-hidden"><img src={post.image} alt={post.title} className="w-full h-full object-cover" /></div>
              </div>
            </div>
          </section>
        )}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg font-body text-muted-foreground">{renderContent(post.body)}</div>
          </div>
        </section>
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <Button variant="hero" size="lg" asChild><Link to="/blog">View All Posts</Link></Button>
          </div>
        </section>
      </article>
    </Layout>
  );
}
