"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmailButton({ email, locale }) {
  const [copied, setCopied] = useState(false);
  const isAr = locale === "ar";

  async function onCopy() {
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
      className="air-btn air-btn--secondary"
      onClick={onCopy}
      aria-live="polite"
    >
      {copied ? (
        <>
          <Check size={15} aria-hidden="true" />
          <span>{isAr ? "تم النسخ" : "Copied"}</span>
        </>
      ) : (
        <>
          <Copy size={15} aria-hidden="true" />
          <span>{isAr ? "نسخ العنوان" : "Copy address"}</span>
        </>
      )}
    </button>
  );
}
