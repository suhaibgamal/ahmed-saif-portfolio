"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Languages, Menu, X } from "lucide-react";
import { SocialIcon } from "./SiteChrome";

export default function MobileNav({
  locale,
  page,
  brandName,
  navLabel,
  switchLabel,
  externalLabel,
  closeLabel,
  openLabel,
  switchHref,
  navLinks,
  socialLinks
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

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
        aria-label={openLabel}
        aria-expanded={open}
      >
        <Menu aria-hidden="true" size={20} />
      </button>

      {mounted &&
        createPortal(
          <>
            {open && (
              <div className="mobile-backdrop" onClick={close} aria-hidden="true" />
            )}

            <nav
              className={`mobile-drawer ${open ? "mobile-drawer--open" : ""}`}
              ref={drawerRef}
              aria-label={navLabel}
              aria-hidden={!open}
            >
              <div className="mobile-drawer__header">
                <strong>{brandName}</strong>
                <button
                  className="mobile-drawer__close"
                  type="button"
                  onClick={close}
                  aria-label={closeLabel}
                >
                  <X aria-hidden="true" size={18} />
                </button>
              </div>

              <div className="mobile-drawer__links">
                {navLinks.map((item) => (
                  <Link
                    aria-current={item.page === page ? "page" : undefined}
                    className={`mobile-drawer__link ${item.page === page ? "is-active" : ""}`}
                    href={item.href}
                    key={item.page}
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <Link
                className="mobile-drawer__lang"
                href={switchHref}
                onClick={close}
              >
                <Languages aria-hidden="true" size={17} strokeWidth={1.8} />
                <span>{switchLabel}</span>
              </Link>

              <div className="mobile-drawer__social">
                {socialLinks.map((link) => (
                  <a
                    href={link.href}
                    key={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} - ${externalLabel}`}
                  >
                    <SocialIcon name={link.icon} size={16} />
                  </a>
                ))}
              </div>
            </nav>
          </>,
          document.body
        )}
    </>
  );
}
