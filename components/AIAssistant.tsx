
import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    { role: 'assistant', text: "Hello! I'm NexusAI. Are you a student looking for an internship or a startup looking for tech solutions? I can help guide you!" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return;
    
    const userText = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setIsTyping(true);

    try {
      // Fix: Always use named parameter and direct process.env.API_KEY for initialization.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Fix: Use simplified generateContent structure and move personality instructions to systemInstruction.
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: "You are NexusAI, a professional assistant for NexusTech. Be professional, startup-oriented, and helpful. Focus on recommending our Free or Paid internships for students and our software development services for founders. Keep responses concise (under 3 sentences). Direct users to the contact form or internship sections on the page.",
          temperature: 0.7,
        }
      });

      // Fix: Access .text property directly (not a method).
      const aiText = response.text || "I'm sorry, I'm having trouble connecting. Feel free to use our contact form!";
      setMessages(prev => [...prev, { role: 'assistant', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "I'm currently busy assisting other users. Please try again or contact our human team!" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
          <div className="bg-blue-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold">NexusAI</div>
                <div className="text-[10px] uppercase tracking-widest opacity-70">Expert Advisor</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-lg transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-none animate-pulse flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything..." 
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:border-blue-500 transition-all"
            />
            <button 
              onClick={sendMessage}
              disabled={isTyping}
              className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group relative"
        >
          <Sparkles className="absolute -top-1 -left-1 w-6 h-6 text-blue-400 group-hover:rotate-12 transition-transform" />
          <MessageSquare className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
