import { Footer } from './Footer';
import type { CaseStudyData } from '../data/caseStudies';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AspectRatio } from './ui/aspect-ratio';

interface CaseStudyPageProps {
  onNavigate: (page: 'home' | 'about' | 'works') => void;
  caseStudyData: CaseStudyData;
}

export function CaseStudyPage({ onNavigate, caseStudyData }: CaseStudyPageProps) {
  const slices = [
    {
      title: 'Context',
      paragraphs: caseStudyData.context || [],
      image: caseStudyData.galleryImages?.[0]
    },
    {
      title: 'Concept',
      paragraphs: caseStudyData.concept || [],
      image: caseStudyData.galleryImages?.[1]
    },
    {
      title: 'Solution',
      paragraphs: caseStudyData.solution || [],
      image: caseStudyData.galleryImages?.[2]
    }
  ];
  const isYouTube = (url: string | undefined) =>
    !!url && /(youtube\.com|youtu\.be)/i.test(url);
  const toYouTubeEmbed = (url: string) => {
    try {
      const u = new URL(url);
      const id = u.hostname.includes('youtu.be')
        ? u.pathname.replace('/', '')
        : u.searchParams.get('v') || '';
      const params = new URLSearchParams({
        rel: '0',
        modestbranding: '1',
        playsinline: '1',
        autoplay: '1',
        mute: '1',
        controls: '0',
        iv_load_policy: '3',
        enablejsapi: '0',
        start: '0'
      });
      return `https://www.youtube.com/embed/${id}?${params.toString()}`;
    } catch {
      return url;
    }
  };
  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.9) 0%, rgba(139, 0, 0, 0.9) 50%, rgba(0, 100, 0, 0.6) 100%)',
          }}
        />
        
        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 lg:px-12">
          <div className="flex items-center justify-between py-9">
            <button 
              onClick={() => onNavigate('home')}
              className="text-white hover:opacity-70 transition-opacity"
            >
              <span className="font-bold">Leo Guo</span>
              <span className="text-white/50"> | Designer</span>
            </button>
            <button 
              onClick={() => onNavigate('works')}
              className="text-white hover:opacity-70 transition-opacity"
            >
              ← Back to Works
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-12 pt-32 pb-16">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Project Info */}
            <div className="flex flex-col gap-8">
              <h1 className="text-white text-4xl lg:text-5xl">
                {caseStudyData.title}
              </h1>
              
              <div className="flex flex-col gap-6">
                {/* Collaborator & Deliverables */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <p className="text-white">Case Study</p>
                    <p className="text-white/60">
                      {caseStudyData.collaborator}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-white">Deliverables</p>
                    <div className="text-white/60">
                      {caseStudyData.deliverables.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Role & Date */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <p className="text-white">Role</p>
                    <div className="text-white/60">
                      {caseStudyData.role.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-white">Date</p>
                    <p className="text-white/60">
                      {caseStudyData.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full aspect-[4/3] rounded-lg shadow-2xl border border-white/30 bg-white/10 overflow-hidden">
              <ImageWithFallback
                src={caseStudyData.heroImage}
                alt={`${caseStudyData.title} thumbnail`}
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
  </div>

      {caseStudyData.videoUrl && (
        <section className="py-16 px-6 lg:px-12 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="rounded-lg overflow-hidden border border-black/10">
              <AspectRatio ratio={caseStudyData.videoAspect ?? 16/9} className="bg-black/5">
                {isYouTube(caseStudyData.videoUrl) ? (
                  <iframe
                    src={toYouTubeEmbed(caseStudyData.videoUrl)}
                    className="w-full h-full"
                    title={caseStudyData.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={caseStudyData.videoUrl}
                    className="w-full h-full object-cover"
                    playsInline
                    muted
                    loop
                    autoPlay
                    preload="metadata"
                    controls
                  />
                )}
              </AspectRatio>
            </div>
          </div>
        </section>
      )}

      {/* Editorial Layout: blended text and supporting images */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6 lg:pr-8">
              <h2 className="text-black text-3xl lg:text-4xl">{caseStudyData.title}</h2>
              <p className="text-black/70 text-lg leading-relaxed">{caseStudyData.hookQuestion}</p>
              {caseStudyData.context?.[0] && (
                <p className="text-black/70 leading-relaxed">{caseStudyData.context[0]}</p>
              )}
            </div>
            {slices[0].image && (
              <div className="lg:col-span-5 lg:pl-8">
                <div className="rounded-lg overflow-hidden bg-black/5">
                  <div className="aspect-[4/3]">
                    <ImageWithFallback
                      src={slices[0].image!}
                      alt={`${caseStudyData.title} overview image`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {slices.map((slice, idx) => (
            <div key={`slice-${idx}`} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className={`${idx % 2 === 0 ? 'lg:col-span-7 order-1 lg:pr-8' : 'lg:col-span-7 lg:order-2 lg:pl-8'} space-y-4`}>
                <h3 className="text-black text-2xl lg:text-3xl">{slice.title}</h3>
                <div className="w-20 h-1 bg-black/15"></div>
                <div className="text-black/70 leading-relaxed space-y-5">
                  {slice.paragraphs.slice(0, 3).map((p, i) => (
                    <p key={`slice-${idx}-p-${i}`}>{p}</p>
                  ))}
                </div>
              </div>
              {slice.image && (
                <div className={`${idx % 2 === 0 ? 'lg:col-span-5 order-2 lg:pl-8' : 'lg:col-span-5 lg:order-1 lg:pr-8'}`}>
                  <div className="rounded-lg overflow-hidden bg-black/5">
                    <div className="aspect-[4/3]">
                      <ImageWithFallback
                        src={slice.image}
                        alt={`${caseStudyData.title} ${slice.title.toLowerCase()} image`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
