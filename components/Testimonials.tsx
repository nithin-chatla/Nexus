
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "Founder, GreenFlow",
      text: "NexusTech built our MVP in record time. The quality was better than agencies charging five times more.",
      avatar: "https://picsum.photos/seed/alex/100/100"
    },
    {
      name: "Sarah Chen",
      role: "Intern @ Google",
      text: "The mentorship I received here was instrumental. I went from basics to landing a top internship in 6 months.",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      name: "Jordan Smith",
      role: "Lead Dev, NexaCorp",
      text: "Their workshops are pure gold. No fluff, just hard technical skills that actually matter in the industry.",
      avatar: "https://picsum.photos/seed/jordan/100/100"
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-3">Community Love</h2>
        <h3 className="text-4xl font-bold text-white mb-4">Trusted by builders and learners.</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <div key={i} className="bg-slate-800/50 backdrop-blur p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800 transition-all group">
            <Quote className="w-10 h-10 text-blue-500/20 mb-6 group-hover:text-blue-500/40 transition-colors" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-slate-300 leading-relaxed mb-8 italic">"{r.text}"</p>
            <div className="flex items-center gap-4">
              <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full border-2 border-slate-700" />
              <div>
                <div className="font-bold text-white">{r.name}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
