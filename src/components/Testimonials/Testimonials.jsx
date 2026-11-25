import { testimonials } from '../../data/portfolioData';

// Renders nothing until real testimonials are added to portfolioData.js.
export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="section-shell scroll-mt-24 relative bg-[#0B0F14]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-8">
        <div className="max-w-2xl">
          <span className="section-tag">Testimonials</span>
          <h2 className="heading-section text-white mb-2">
            What people <span className="gradient-text">say</span>
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <li key={`${t.name}-${t.company}`} className="surface-card p-5 rounded-2xl">
              <figure className="flex flex-col gap-4 h-full">
                <blockquote className="text-sm text-slate-300 leading-relaxed flex-1">“{t.quote}”</blockquote>
                <figcaption className="text-xs">
                  <span className="block font-semibold text-white">
                    {t.link ? (
                      <a href={t.link} target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6]">
                        {t.name}
                      </a>
                    ) : (
                      t.name
                    )}
                  </span>
                  <span className="text-slate-400">
                    {[t.role, t.company].filter(Boolean).join(', ')}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
