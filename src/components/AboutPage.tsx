import { AnimatedBackground } from "./AnimatedBackground";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import svgPaths from "../imports/svg-pt3b7ew3y1";
import profileImage from "figma:asset/86bcc3742f58368cef6d03ac595653463bd74a40.png";

interface WorkExperience {
  period: string;
  company: string;
  role: string;
}

const workExperience: WorkExperience[] = [
  {
    period: "Jul 2024 - Oct 2024",
    company: "WISHULADA",
    role: "Designer",
  },
  {
    period: "Apr 2024 - June 2024",
    company: "Surbana Jurong",
    role: "Experience Designer",
  },
  {
    period: "Oct 2023 - Apr 2024",
    company: "Chopvalue",
    role: "Industrial Designer",
  },
];

interface AboutPageProps {
  onNavigate: (page: 'home' | 'about' | 'works') => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="relative w-full min-h-screen bg-black">
      {/* Animated Background - Removed for pure black background */}

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navigation onNavigate={onNavigate} currentPage="about" />

        {/* About Content */}
        <div className="pt-32 pb-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Top Section - Profile */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 pb-16 border-b border-white/20">
              {/* Left - Name, Description and Buttons */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-white text-5xl md:text-6xl mb-4">
                    Leo Guo
                  </h1>
                  <div className="space-y-2">
                    <p className="text-white/50">Experience Designer</p>
                    <p className="text-white/50">Industrial Designer</p>
                  </div>
                </div>

                <p className="text-white/80 text-lg leading-relaxed">
                  Hi, My name is Leo. I'm on a mission to design purposeful experiences that solve real human challenges and inspire people to see creativity in the ordinary.
                  <br /><br />
                  When there are opportunities, I tend to learn new skills that will aid my design skills so I can bring a more seamless experience. I am always doing side quests that aid my knowledge and design skills.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <span>Linkedin</span>
                    <div className="rotate-[-45deg]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 18 18">
                        <path
                          clipRule="evenodd"
                          d={svgPaths.p35e5ce00}
                          fill="currentColor"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <span>Download Resume</span>
                    <div className="rotate-[-45deg]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 18 18">
                        <path
                          clipRule="evenodd"
                          d={svgPaths.p35e5ce00}
                          fill="currentColor"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right - Photo */}
              <div className="space-y-8">
                <div className="aspect-[3/4] bg-white/5 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={profileImage}
                    alt="Leo Guo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Interests Section */}
            <div className="mb-24 pb-16 border-b border-white/20">
              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl text-center mb-8 leading-relaxed">
                Singapore - Motorsport - Adventurous - Photographer - Coffee enthusiast - Music Explorer - Dreamer
              </h2>
            </div>

            {/* Work Experience Section */}
            <div>
              <h2 className="text-white text-4xl md:text-5xl mb-16">
                Work Experience
              </h2>
              
              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 py-8 border-b border-white/10 last:border-0"
                  >
                    <div className="text-white/60 text-lg md:text-2xl">
                      {job.period}
                    </div>
                    <div className="text-white text-xl md:text-3xl">
                      {job.company}
                    </div>
                    <div className="text-white/80 text-lg md:text-2xl">
                      {job.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}