"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

export default function CopyEmailCard({
  label,
  email,
  description,
  mailtoHref,
  actionLabel,
  locale
}) {
  const [copied, setCopied] = useState(false);
  const isAr = locale === "ar";

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Clipboard API unavailable in restricted context.
    }
  }

  return (
    <div className="sov-contact-card">
      <p className="sov-contact-card__label">{label}</p>
      <p className="sov-contact-card__email" dir="ltr">
        {email}
      </p>
      <p className="sov-contact-card__desc">{description}</p>
      <div className="sov-contact-card__actions">
        <a className="btn btn-primary" href={mailtoHref}>
          <Mail aria-hidden="true" size={15} />
          <span>{actionLabel}</span>
        </a>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={handleCopy}
          aria-live="polite"
        >
          {copied ? (
            <>
              <Check aria-hidden="true" size={15} />
              <span>{isAr ? "تم النسخ" : "Copied"}</span>
            </>
          ) : (
            <>
              <Copy aria-hidden="true" size={15} />
              <span>{isAr ? "نسخ البريد" : "Copy email"}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
