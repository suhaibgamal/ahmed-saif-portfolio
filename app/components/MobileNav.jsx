"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Languages, Menu, X } from "lucide-react";
import {
  content,
  getLocalePath,
  getSwitchPath,
  socialLinks
} from "../data";
import { SocialIcon } from "./SiteChrome";

export default function MobileNav({ locale, page }) {
  const t = content[locale];
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;

    function onKeyDown(event) {
      if (event.key === "Escape") {
        close();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    // Prevent body scroll while drawer is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  // Trap focus inside the drawer when open
  useEffect(() => {
    if (!open || !drawerRef.current) return;

    const focusable = drawerRef.current.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length > 0) {
      setTimeout(() => {
        focusable[0].focus();
      }, 300);
    }
  }, [open]);

  return (
    <>
      <button
        className="mobile-menu-toggle"
        type="button"
        onClick={() => setOpen(true)}
        aria-label={locale === "ar" ? "فتح القائمة" : "Open menu"}
        aria-expanded={open}
      >
        <Menu aria-hidden="true" size={20} />
      </button>

      {open && (
        <div className="mobile-backdrop" onClick={close} aria-hidden="true" />
      )}

      <nav
        className={`mobile-drawer ${open ? "mobile-drawer--open" : ""}`}
        ref={drawerRef}
        aria-label={t.navLabel}
        aria-hidden={!open}
      >
        <div className="mobile-drawer__header">
          <strong>{t.brandName}</strong>
          <button
            className="mobile-drawer__close"
            type="button"
            onClick={close}
            aria-label={locale === "ar" ? "إغلاق القائمة" : "Close menu"}
          >
            <X aria-hidden="true" size={18} />
          </button>
        </div>

        <div className="mobile-drawer__links">
          {t.nav.map((item) => (
            <Link
              aria-current={item.page === page ? "page" : undefined}
              className={`mobile-drawer__link ${item.page === page ? "is-active" : ""}`}
              href={getLocalePath(locale, item.page)}
              key={item.page}
              onClick={close}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          className="mobile-drawer__lang"
          href={getSwitchPath(locale, page)}
          onClick={close}
        >
          <Languages aria-hidden="true" size={17} strokeWidth={1.8} />
          <span>{t.switchLabel}</span>
        </Link>

        <div className="mobile-drawer__social">
          {socialLinks.slice(0, 5).map((link) => (
            <a
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${link.label} - ${t.external}`}
            >
              <SocialIcon name={link.icon} size={16} />
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
