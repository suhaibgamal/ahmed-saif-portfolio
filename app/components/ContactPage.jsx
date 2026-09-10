'use client';

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
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
      <div className="py-12 md:py-20">
        <div className="stage-container max-w-5xl">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="stage-badge mb-3">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] stage-strobe" />
              <span>{isAr ? "إدارة الجولات والإنتاج المباشر" : "TOUR MANAGEMENT & DIRECT BOOKING"}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
              {isAr ? "تنسيق الحفلات والمهرجانات الحية" : "Book Concerts & Festivals"}
            </h1>
            <p className="text-base text-[#94a3b8]">
              {isAr
                ? "تواصل مباشرة مع إدارة أحمد سيف لتنسيق العروض الموسيقية، حفلات المهرجانات، والمشاريع الأوركسترالية الكبرى."
                : "Direct liaison for concert organizers, festival directors, and cultural event commissions."}
            </p>
          </div>

          {/* Booking Card */}
          <div className="relative rounded-3xl bg-gradient-to-b from-[#0e1628] to-[#070b14] border-2 border-[#38bdf8]/40 shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#05080f] border-b border-[#38bdf8]/20">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#00f0ff] stage-strobe" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                  STAGE PASS · OFFICIAL BOOKING LIAISON
                </span>
              </div>
              <div className="text-xs font-mono text-[#38bdf8]">TOUR REF: 2025/2026</div>
            </div>

            <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Quick Contacts */}
              <div className="md:col-span-5 space-y-6 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#00f0ff] uppercase">{isAr ? "المقر الرئيسي" : "Base Station"}</div>
                  <div className="text-sm font-bold text-white">{isAr ? "اليمن / القاهرة" : "Yemen / Cairo"}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#00f0ff] uppercase">{isAr ? "البريد الإلكتروني للإدارة" : "Official Management"}</div>
                  <a
                    href={emailHref("contact@a7mdsif.com", isAr ? "حجز حفل مباشر" : "Live Concert Booking")}
                    className="text-sm font-mono text-[#38bdf8] hover:text-white transition-colors block"
                  >
                    contact@a7mdsif.com
                  </a>
                </div>

                <div className="space-y-1">
                  <div className="text-xs font-mono text-[#00f0ff] uppercase">{isAr ? "قنوات التواصل" : "Official Channels"}</div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {socialLinks.slice(0, 5).map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-xl bg-[#080d17] border border-white/10 flex items-center justify-center text-[#94a3b8] hover:text-[#00f0ff] hover:border-[#00f0ff]/40 transition-all"
                        aria-label={s.label}
                      >
                        <SocialIcon name={s.icon} size={16} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="md:col-span-7">
                {submitted ? (
                  <div className="p-8 rounded-2xl bg-[#00f0ff]/10 border border-[#00f0ff]/40 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#00f0ff]/20 text-[#00f0ff] flex items-center justify-center mx-auto text-xl font-bold">
                      ✓
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {isAr ? "تم استلام طلب الحجز بنجاح" : "Stage Request Received"}
                    </h3>
                    <p className="text-xs text-[#94a3b8]">
                      {isAr
                        ? "ستقوم إدارة الجولات بمراجعة الرايدر والمواعيد والتواصل معكم خلال 24 ساعة."
                        : "Tour management will review dates and technical requirements and contact you within 24 hours."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[#94a3b8] mb-1">
                          {isAr ? "اسم الجهة المنظمة / المهرجان" : "Organizer / Festival Name"}
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 rounded-lg bg-[#070b14] border border-white/10 text-white text-xs focus:border-[#00f0ff] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-[#94a3b8] mb-1">
                          {isAr ? "البريد الإلكتروني" : "Contact Email"}
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-3 py-2 rounded-lg bg-[#070b14] border border-white/10 text-white text-xs focus:border-[#00f0ff] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-[#94a3b8] mb-1">
                          {isAr ? "تاريخ الحفل المقترح" : "Target Event Date"}
                        </label>
                        <input
                          type="date"
                          className="w-full px-3 py-2 rounded-lg bg-[#070b14] border border-white/10 text-white text-xs focus:border-[#00f0ff] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-[#94a3b8] mb-1">
                          {isAr ? "المدينة والمسرح" : "City & Venue"}
                        </label>
                        <input
                          type="text"
                          placeholder={isAr ? "مثال: مسرح دبي أوبرا" : "e.g. Dubai Opera"}
                          className="w-full px-3 py-2 rounded-lg bg-[#070b14] border border-white/10 text-white text-xs focus:border-[#00f0ff] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#94a3b8] mb-1">
                        {isAr ? "تفاصيل الطلب والرايدر" : "Event Scope & Requirements"}
                      </label>
                      <textarea
                        rows={4}
                        placeholder={isAr ? "اذكر نوع الحفل (أوركسترا كاملة، تخت شرقي، عزف منفرد)..." : "Specify ensemble size, set duration, etc."}
                        className="w-full px-3 py-2 rounded-lg bg-[#070b14] border border-white/10 text-white text-xs focus:border-[#00f0ff] outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#00f0ff] text-[#06080d] font-bold text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition-opacity"
                    >
                      {isAr ? "إرسال طلب الحجز المباشر" : "Submit Stage Request"}
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
