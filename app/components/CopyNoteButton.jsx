"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyNoteButton({ email, locale }) {
  const [copied, setCopied] = useState(false);
  const isAr = locale === "ar";

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore restricted clipboard environments.
    }
  }

  return (
    <button
      type="button"
      className="kin-btn kin-btn--outline"
      onClick={copy}
      aria-live="polite"
    >
      {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
      <span>{copied ? (isAr ? "تم النسخ" : "Copied") : isAr ? "نسخ البريد" : "Copy email"}</span>
    </button>
  );
}
