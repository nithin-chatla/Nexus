
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-6 text-center py-20">
        <div className="max-w-md mx-auto bg-white p-12 rounded-3xl shadow-2xl border border-green-100">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Sent!</h3>
          <p className="text-slate-600 mb-8">Thank you for reaching out. Our team will review your details and get back to you within 24-48 hours.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-blue-600 font-bold"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-slate-100">
        <div className="md:w-2/5 bg-blue-600 p-12 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-bold mb-6">Ready to start?</h3>
            <p className="text-blue-100 leading-relaxed mb-8">
              Whether you're a student looking to learn or a founder looking to build, we're here to help you scale.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider opacity-60">Email Us</div>
                  <div className="font-semibold">hello@nexustech.io</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-blue-500/30">
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-60">Follow Our Journey</div>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map((s) => (
                <a key={s} href="#" className="text-sm hover:text-blue-200 transition-colors">{s}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="md:w-3/5 p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input required type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">I am a...</label>
              <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none bg-white">
                <option>College Student</option>
                <option>Startup Founder</option>
                <option>Tech Enthusiast</option>
                <option>Others</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message / Application Details</label>
              <textarea required rows={4} placeholder="Tell us about your project or internship interests..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
