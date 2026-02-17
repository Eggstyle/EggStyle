import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Star, Video, Wrench } from "lucide-react";

const DifficultyStars = ({ level }: { level: number }) => (<div className="flex gap-1">{[1, 2, 3, 4, 5].map((star) => (<Star key={star} className={`h-4 w-4 ${star <= level ? "fill-primary text-primary" : "text-border"}`} />))}</div>);

export default function HowToDetailPage() {
  const { slug } = useParams();
  const [guide, setGuide] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [currentStepImages, setCurrentStepImages] = useState<{[key: number]: number}>({});

  useEffect(() => {
    const loadGuide = async () => {
      try {
        const modules = import.meta.glob('/content/howto/*.json', { eager: true });
        for (const [path, module] of Object.entries(modules)) {
          const fileSlug = path.split('/').pop()?.replace('.json', '');
          if (fileSlug === slug) {
            const data = module as any;
            setGuide(data);
            break;
          }
        }
      } catch (error) {
        console.error("Error loading guide:", error);
      } finally {
        setLoading(false);
      }
    };
    loadGuide();
  }, [slug]);

  if (loading) {
    return (<Layout><div className="container mx-auto px-4 py-20 text-center"><p className="text-xl">Loading...</p></div></Layout>);
  }

  if (!guide) {
    return (<Layout><div className="container mx-auto px-4 py-20 text-center"><h1 className="font-heading text-4xl mb-4">Guide Not Found</h1><Button variant="hero" asChild><Link to="/how-to">Back to Guides</Link></Button></div></Layout>);
  }

  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return '';
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
  };

  const embedUrl = getYouTubeEmbedUrl(guide.videoUrl);
  const heroImages = guide.heroImages || [];

  return (
    <Layout>
      <article>
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <Button variant="ghost" asChild className="mb-6"><Link to="/how-to"><ArrowLeft className="h-4 w-4 mr-2" />Back to Guides</Link></Button>
            <div className="max-w-4xl mx-auto">
              <span className="jdm-tag mb-4 inline-block">{guide.category}</span>
              <h1 className="font-heading text-5xl md:text-7xl mb-6">{guide.title}</h1>
              <p className="font-body text-xl text-muted-foreground mb-6">{guide.excerpt}</p>
              <div className="flex items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2"><Clock className="h-5 w-5" />{guide.time}</span>
                <div className="flex items-center gap-2"><span>Difficulty:</span><DifficultyStars level={guide.difficulty} /></div>
              </div>
            </div>
          </div>
        </section>
        {heroImages.length > 0 && (
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="aspect-video rounded-egg-lg overflow-hidden mb-4"><img src={heroImages[currentHeroIndex]} alt={guide.title} className="w-full h-full object-cover" /></div>
                {heroImages.length > 1 && (<div className="grid grid-cols-4 gap-2">{heroImages.map((img: string, idx: number) => (<button key={idx} onClick={() => setCurrentHeroIndex(idx)} className={`aspect-video rounded-egg overflow-hidden border-2 transition-all ${currentHeroIndex === idx ? 'border-primary' : 'border-border hover:border-foreground'}`}><img src={img} alt={`Hero ${idx + 1}`} className="w-full h-full object-cover" /></button>))}</div>)}
              </div>
            </div>
          </section>
        )}
        {embedUrl && (
          <section className="py-8 bg-foreground">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-4 text-background"><Video className="h-5 w-5" /><span className="font-heading text-xl">Video Tutorial</span></div>
                <div className="aspect-video rounded-egg-lg overflow-hidden"><iframe src={embedUrl} className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
              </div>
            </div>
          </section>
        )}
        {guide.tools && (
          <section className="py-12 bg-secondary">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6"><Wrench className="h-6 w-6 text-primary" /><h2 className="font-heading text-3xl">Tools & Materials</h2></div>
                <p className="font-body text-muted-foreground text-lg mb-6">{guide.tools.description}</p>
                {guide.tools.images && guide.tools.images.length > 0 && (<div className="grid grid-cols-2 md:grid-cols-3 gap-4">{guide.tools.images.map((img: string, idx: number) => (<div key={idx} className="aspect-square rounded-egg overflow-hidden"><img src={img} alt={`Tool ${idx + 1}`} className="w-full h-full object-cover" /></div>))}</div>)}
              </div>
            </div>
          </section>
        )}
        {guide.steps && guide.steps.length > 0 && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-heading text-4xl mb-12">Step-by-Step Instructions</h2>
                <div className="space-y-16">
                  {guide.steps.map((step: any, stepIdx: number) => {
                    const stepImages = step.images || [];
                    const currentImageIndex = currentStepImages[stepIdx] || 0;
                    return (
                      <div key={stepIdx} className="relative">
                        <div className="absolute -left-4 top-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl">{stepIdx + 1}</div>
                        <div className="ml-12">
                          <h3 className="font-heading text-3xl mb-4">{step.title}</h3>
                          <div className="font-body text-muted-foreground text-lg mb-6">{step.content}</div>
                          {stepImages.length > 0 && (
                            <div>
                              <div className="aspect-video rounded-egg-lg overflow-hidden mb-4"><img src={stepImages[currentImageIndex]} alt={`${step.title} - Image ${currentImageIndex + 1}`} className="w-full h-full object-cover" /></div>
                              {stepImages.length > 1 && (<div className="grid grid-cols-4 gap-2">{stepImages.map((img: string, imgIdx: number) => (<button key={imgIdx} onClick={() => setCurrentStepImages(prev => ({...prev, [stepIdx]: imgIdx}))} className={`aspect-video rounded-egg overflow-hidden border-2 transition-all ${currentImageIndex === imgIdx ? 'border-primary' : 'border-border hover:border-foreground'}`}><img src={img} alt={`Step ${stepIdx + 1} - Image ${imgIdx + 1}`} className="w-full h-full object-cover" /></button>))}</div>)}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl mb-6">Was this guide helpful?</h2>
            <Button variant="hero" size="lg" asChild><Link to="/how-to">View All Guides</Link></Button>
          </div>
        </section>
      </article>
    </Layout>
  );
}
