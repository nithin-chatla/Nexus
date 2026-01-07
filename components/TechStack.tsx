
import React from 'react';

const TechStack: React.FC = () => {
  const techs = [
    { name: "Web Development", icons: ["React", "Node.js", "Next.js", "Tailwind"], desc: "Full-stack modern architecture." },
    { name: "AI & ML", icons: ["Python", "TensorFlow", "PyTorch", "Gemini"], desc: "Intelligence for the modern age." },
    { name: "Cloud & DevOps", icons: ["AWS", "Docker", "Kubernetes", "CI/CD"], desc: "Scalable global infrastructure." },
    { name: "Mobile Apps", icons: ["Flutter", "React Native", "Swift", "Kotlin"], desc: "Native performance, everywhere." },
    { name: "UI/UX Design", icons: ["Figma", "Adobe XD", "Prototyping"], desc: "Human-centric digital experiences." },
    { name: "Cybersecurity", icons: ["Ethical Hacking", "Security Audits"], desc: "Protecting digital assets." }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Our Stack</h2>
        <h3 className="text-4xl font-bold text-slate-900 mb-4">Technologies We Teach & Use</h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {techs.map((t, i) => (
          <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white transition-all group">
            <h4 className="text-xl font-bold text-slate-900 mb-2">{t.name}</h4>
            <p className="text-slate-600 text-sm mb-6">{t.desc}</p>
            <div className="flex flex-wrap gap-2">
              {t.icons.map((icon, j) => (
                <span key={j} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:text-blue-600 transition-colors">
                  {icon}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
