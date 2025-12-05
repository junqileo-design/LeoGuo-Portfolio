export function About() {
  const services = [
    {
      title: 'Brand Identity',
      description: 'Creating cohesive visual systems that communicate your brand values and connect with your audience.',
    },
    {
      title: 'UI/UX Design',
      description: 'Designing intuitive digital experiences that prioritize user needs and business goals.',
    },
    {
      title: 'Creative Direction',
      description: 'Leading creative vision from concept to execution across multiple touchpoints and mediums.',
    },
    {
      title: 'Art Direction',
      description: 'Crafting compelling visual narratives through photography, illustration, and graphic design.',
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div>
            <h2 className="text-black text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight">
              About
            </h2>
            <div className="space-y-6 text-black/70 text-lg">
              <p>
                I'm Leo Guo, a designer based in Singapore with a passion for creating meaningful digital experiences. With over 5 years in the industry, I've worked with brands of all sizes to bring their visions to life.
              </p>
              <p>
                My approach combines strategic thinking with aesthetic sensibility, ensuring that every project not only looks great but also achieves its intended purpose.
              </p>
              <p>
                When I'm not designing, you can find me exploring Singapore's vibrant creative scene, experimenting with photography, or staying up to date with the latest design trends.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-black text-2xl md:text-3xl mb-8 tracking-tight">
              What I Do
            </h3>
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="border-b border-black/10 pb-8 last:border-0">
                  <h4 className="text-black text-xl mb-3 tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-black/60">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats or Credentials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-black/10">
          <div>
            <div className="text-black text-4xl md:text-5xl mb-2">50+</div>
            <div className="text-black/60">Projects Completed</div>
          </div>
          <div>
            <div className="text-black text-4xl md:text-5xl mb-2">30+</div>
            <div className="text-black/60">Happy Clients</div>
          </div>
          <div>
            <div className="text-black text-4xl md:text-5xl mb-2">5+</div>
            <div className="text-black/60">Years Experience</div>
          </div>
          <div>
            <div className="text-black text-4xl md:text-5xl mb-2">10+</div>
            <div className="text-black/60">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
}
