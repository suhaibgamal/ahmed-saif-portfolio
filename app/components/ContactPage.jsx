'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from "lucide-react";
import { content, socialLinks } from "../data";
import SiteChrome, { SocialIcon, emailHref } from "./SiteChrome";

export default function ContactPage({ locale = "ar" }) {
  const t = content[locale];
  const isAr = locale === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SiteChrome locale={locale} page="contact">
      <div className="py-14 md:py-24">
        <div className="zen-container max-w-3xl">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="zen-badge mb-3">
              <span>{isAr ? "التواصل المباشر" : "Direct Liaison"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-light text-white mb-4">
              {isAr ? "ابدأ حواراً فنياً" : "Initiate a Dialogue"}
            </h1>
            <p className="text-sm text-[#94a3b8] font-light max-w-md mx-auto">
              {isAr
                ? "للأعمال الدرامية، الحفلات الموسيقية، والمشاريع الفنية الخاصة."
                : "For television scoring, private acoustic concerts, and artistic commissions."}
            </p>
          </div>

          {/* Card */}
          <div className="zen-card p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Info */}
              <div className="md:col-span-5 space-y-6 border-b md:border-b-0 md:border-r border-white/[0.06] pb-6 md:pb-0 md:pr-6">
                <div>
                  <div className="text-[11px] font-mono text-[#64748b] uppercase mb-1">
                    {isAr ? "البريد الإلكتروني" : "Email"}
                  </div>
                  <a
                    href={emailHref("contact@a7mdsif.com", isAr ? "استفسار فني خاص" : "Artistic Commission")}
                    className="text-xs text-white hover:underline block"
                  >
                    contact@a7mdsif.com
                  </a>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-[#64748b] uppercase mb-1">
                    {isAr ? "الموقع" : "Location"}
                  </div>
                  <div className="text-xs text-[#94a3b8]">
                    {isAr ? "اليمن / القاهرة" : "Yemen / Cairo"}
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono text-[#64748b] uppercase mb-2">
                    {isAr ? "منصات الاستماع" : "Platforms"}
                  </div>
                  <div className="flex gap-2">
                    {socialLinks.slice(0, 5).map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-white transition-colors"
                        aria-label={s.label}
                      >
                        <SocialIcon name={s.icon} size={13} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-7">
                {submitted ? (
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 text-center space-y-2">
                    <div className="text-white font-medium text-sm">
                      {isAr ? "تم إرسال رسالتكم بنجاح" : "Message Sent Successfully"}
                    </div>
                    <p className="text-xs text-[#64748b]">
                      {isAr
                        ? "سأقوم بالاطلاع على التفاصيل والرد عليكم في أقرب فرصة."
                        : "I will review your inquiry and get back to you shortly."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-mono text-[#94a3b8] mb-1">
                        {isAr ? "الاسم" : "Your Name"}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 rounded-lg bg-[#070708] border border-white/10 text-white text-xs focus:border-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#94a3b8] mb-1">
                        {isAr ? "البريد الإلكتروني" : "Email Address"}
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 rounded-lg bg-[#070708] border border-white/10 text-white text-xs focus:border-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#94a3b8] mb-1">
                        {isAr ? "فكرة المشروع" : "Project Inquiry"}
                      </label>
                      <textarea
                        rows={3}
                        required
                        className="w-full px-3 py-2 rounded-lg bg-[#070708] border border-white/10 text-white text-xs focus:border-white outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-full bg-white text-[#070708] font-medium text-xs hover:bg-[#e2e8f0] transition-colors"
                    >
                      {isAr ? "إرسال الرسالة" : "Send Inquiry"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
