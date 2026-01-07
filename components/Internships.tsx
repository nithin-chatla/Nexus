
import React from 'react';
import { CheckCircle, Clock, Award, Briefcase, Users } from 'lucide-react';

const Internships: React.FC = () => {
  const programs = [
    {
      type: "Free Tier",
      title: "Skill Booster Internship",
      duration: "4 Weeks",
      features: ["Basic HTML/CSS/JS", "Real-world Tasks", "Participation Certificate", "Community Access"],
      cta: "Enroll Free",
      popular: false
    },
    {
      type: "Professional",
      title: "Industry Ready Program",
      duration: "3 Months",
      features: ["MERN Stack Mastery", "Project Management", "1-on-1 Mentorship", "Direct Hiring Opportunity", "Verified Experience Letter"],
      cta: "Apply Now",
      popular: true
    },
    {
      type: "Enterprise",
      title: "Advanced Specialization",
      duration: "6 Months",
      features: ["AI & Data Science", "Cloud Architecture", "Stipend Provided", "Team Lead Roles", "International Networking"],
      cta: "Get Started",
      popular: false
    }
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Career Path</h2>
        <h3 className="text-4xl font-bold text-slate-900 mb-4">Launch your tech career here.</h3>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Choose a path that fits your goals. From foundational basics to advanced professional training.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-stretch">
        {programs.map((p, i) => (
          <div 
            key={i} 
            className={`relative p-10 rounded-3xl transition-all duration-300 ${
              p.popular 
              ? 'bg-[#0f172a] text-white shadow-2xl scale-105 z-10' 
              : 'bg-white text-slate-900 border border-slate-200'
            }`}
          >
            {p.popular && (
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                Most Popular
              </span>
            )}
            
            <div className="mb-8">
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${p.popular ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-100 text-slate-600'}`}>
                {p.type}
              </span>
              <h4 className="text-2xl font-bold mt-4 mb-2">{p.title}</h4>
              <div className="flex items-center gap-2 opacity-70">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{p.duration}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3">
                  <CheckCircle className={`w-5 h-5 ${p.popular ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className="text-sm font-medium">{f}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-xl font-bold transition-all ${
              p.popular 
              ? 'bg-blue-600 text-white hover:bg-blue-700' 
              : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}>
              {p.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-8">
        <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl">
          <Award className="w-10 h-10 text-blue-600" />
          <div>
            <div className="font-bold text-slate-900">Certified Excellence</div>
            <div className="text-xs text-slate-500 uppercase font-bold tracking-tight">Globally Recognized</div>
          </div>
        </div>
        <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl">
          <Briefcase className="w-10 h-10 text-blue-600" />
          <div>
            <div className="font-bold text-slate-900">100% Internship Guarantee</div>
            <div className="text-xs text-slate-500 uppercase font-bold tracking-tight">For Pro Enrollees</div>
          </div>
        </div>
        <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl">
          {/* Fix: Users icon is now imported correctly */}
          <Users className="w-10 h-10 text-blue-600" />
          <div>
            <div className="font-bold text-slate-900">Direct Hiring</div>
            <div className="text-xs text-slate-500 uppercase font-bold tracking-tight">Top Talent Placement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
