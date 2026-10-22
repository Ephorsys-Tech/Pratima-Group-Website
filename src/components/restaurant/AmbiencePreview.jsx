import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function AmbiencePreview() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 bg-[#FFFDF5] border-t border-[#EFE8D6]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#EFE8D6] shadow-sm text-center">
          <span className="badge badge-launching mb-4">
            Exclusive Launch Updates
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] font-['Outfit'] mb-3">
            Be the First to Experience Our Grand Opening
          </h2>
          <p className="text-sm text-[#666666] mb-8 leading-relaxed">
            Register your email to receive an exclusive preview invitation, chef's tasting menu announcement, and launch date notifications for Pratima Fine Dining in Bhubaneswar.
          </p>

          {submitted ? (
            <div className="p-4 rounded-xl bg-[#E6F8EE] border border-[#128045]/30 text-[#128045] flex items-center justify-center gap-2">
              <CheckCircle2 size={18} />
              <span className="text-sm font-bold">
                Thank you! You're on our VIP launch guest list.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-[#EFE8D6] bg-[#FFFDF5] text-sm text-[#252525] focus:outline-none focus:border-[#F4B400] focus:ring-2 focus:ring-[#F4B400]/20"
              />
              <button type="submit" className="btn btn-primary">
                <span>Notify Me</span>
                <Send size={15} />
              </button>
            </form>
          )}

          <p className="text-[11px] text-[#888888] mt-4">
            We respect your privacy. No spam. You will only receive launch news.
          </p>
        </div>
      </div>
    </section>
  );
}
