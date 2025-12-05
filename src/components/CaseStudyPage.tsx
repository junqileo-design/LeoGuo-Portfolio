import { Footer } from './Footer';
import type { CaseStudyData } from '../data/caseStudies';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AspectRatio } from './ui/aspect-ratio';

interface CaseStudyPageProps {
  onNavigate: (page: 'home' | 'about' | 'works') => void;
  caseStudyData: CaseStudyData;
}

export function CaseStudyPage({ onNavigate, caseStudyData }: CaseStudyPageProps) {
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

      {/* Process Section - 3 Cards Layout */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-black text-3xl lg:text-4xl mb-12 tracking-tight">Process Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem Card */}
            <div className="group flex flex-col gap-6">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                {caseStudyData.galleryImages?.[0] && (
                  <ImageWithFallback
                    src={caseStudyData.galleryImages[0]}
                    alt="Problem Statement"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-black">The Problem</h3>
                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[-45deg]">
                      <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-black/60 leading-relaxed">
                  {caseStudyData.problem?.map((p, i) => (
                    <p key={i} className="mb-2">{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Concept Card */}
            <div className="group flex flex-col gap-6">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                {caseStudyData.galleryImages?.[1] && (
                  <ImageWithFallback
                    src={caseStudyData.galleryImages[1]}
                    alt="Design Concept"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-black">The Concept</h3>
                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[-45deg]">
                      <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-black/60 leading-relaxed">
                  {caseStudyData.concept?.map((p, i) => (
                    <p key={i} className="mb-2">{p}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Solution Card */}
            <div className="group flex flex-col gap-6">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100">
                {caseStudyData.galleryImages?.[2] && (
                  <ImageWithFallback
                    src={caseStudyData.galleryImages[2]}
                    alt="Final Solution"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-black">The Solution</h3>
                  <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[-45deg]">
                      <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="text-black/60 leading-relaxed">
                  {caseStudyData.solution?.map((p, i) => (
                    <p key={i} className="mb-2">{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section (Dark) - Context & Impact */}
      <section className="py-24 px-6 lg:px-12 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl tracking-tight">Context & Impact</h2>
              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p className="text-xl text-white font-medium">{caseStudyData.hookQuestion}</p>
                {caseStudyData.context?.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              
              {/* Stats or Key Points if available */}
              <div className="pt-8 border-t border-white/20">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-white/50 uppercase tracking-wider">Deliverables</span>
                  <span className="text-xl">{caseStudyData.deliverables.join(", ")}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/10 border border-white/20">
                {caseStudyData.galleryImages?.[3] && (
                  <ImageWithFallback
                    src={caseStudyData.galleryImages[3]}
                    alt="Context Visual"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full z-10"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-white/20 rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Remaining Images */}
      {caseStudyData.galleryImages && caseStudyData.galleryImages.length > 4 && (
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-black text-3xl lg:text-4xl tracking-tight">Project Gallery</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudyData.galleryImages.slice(4).map((img, idx) => (
                <div key={idx} className={`rounded-2xl overflow-hidden bg-gray-100 ${idx % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'}`}>
                  <ImageWithFallback
                    src={img}
                    alt={`Gallery image ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
}
