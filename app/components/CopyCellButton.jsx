"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyCellButton({ email, locale }) {
  const [copied, setCopied] = useState(false);
  const isAr = locale === "ar";

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore restricted clipboard.
    }
  }

  return (
    <button
      type="button"
      className="sw-btn sw-btn--outline"
      onClick={onCopy}
      aria-live="polite"
    >
      {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
      <span>{copied ? (isAr ? "تم النسخ" : "Copied") : isAr ? "نسخ البريد" : "Copy"}</span>
    </button>
  );
}
