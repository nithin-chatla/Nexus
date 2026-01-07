
import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://picsum.photos/seed/tech/800/600" 
            alt="Team working" 
            className="rounded-3xl shadow-2xl"
          />
          <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl hidden md:block max-w-[200px] shadow-xl">
            <span className="block text-4xl font-bold mb-1">5+</span>
            <span className="text-sm font-medium opacity-90">Years of excellence in technical training.</span>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">About NexusTech</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">More than just a software house.</h3>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We are an ecosystem where education meets industry. NexusTech was founded on the principle that students need real-world exposure while startups need high-quality, cost-effective engineering.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Our Mission</h4>
                <p className="text-slate-600">To create a talent pipeline that transforms eager students into world-class software engineers.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Rapid Delivery</h4>
                <p className="text-slate-600">Helping startups launch MVPs in weeks, not months, using modern cloud-native architectures.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Community First</h4>
                <p className="text-slate-600">Building a vibrant network of developers, mentors, and visionary entrepreneurs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
