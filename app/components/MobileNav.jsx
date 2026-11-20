"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Languages, Menu, X } from "lucide-react";
import { SocialIcon } from "./SiteChrome";
import ThemeToggle from "./ThemeToggle";

const emptySubscribe = () => () => {};

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
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const sheetRef = useRef(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  useEffect(() => {
    if (!open || !sheetRef.current) return;
    const el = sheetRef.current.querySelector("button, a[href]");
    if (el) el.focus();
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="air-icon-btn air-menu-btn"
        onClick={() => setOpen(true)}
        aria-label={openLabel}
        aria-expanded={open}
      >
        <Menu aria-hidden="true" size={18} strokeWidth={1.8} />
      </button>

      {mounted &&
        createPortal(
          <>
            {open && (
              <div className="air-backdrop" onClick={close} aria-hidden="true" />
            )}
            <nav
              ref={sheetRef}
              className={`air-sheet ${open ? "is-open" : ""}`}
              dir={locale === "ar" ? "rtl" : "ltr"}
              lang={locale}
              aria-label={navLabel}
              aria-hidden={!open}
            >
              <div className="air-sheet__top">
                <strong>{brandName}</strong>
                <div className="air-sheet__tools">
                  <ThemeToggle locale={locale} />
                  <button
                    type="button"
                    className="air-icon-btn"
                    onClick={close}
                    aria-label={closeLabel}
                  >
                    <X aria-hidden="true" size={17} strokeWidth={1.8} />
                  </button>
                </div>
              </div>

              <div className="air-sheet__links">
                {navLinks.map((item) => (
                  <Link
                    key={item.page}
                    href={item.href}
                    aria-current={item.page === page ? "page" : undefined}
                    className={`air-sheet__link ${item.page === page ? "is-active" : ""}`}
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="air-sheet__foot">
                <Link className="air-btn air-btn--secondary" href={switchHref} onClick={close}>
                  <Languages size={15} aria-hidden="true" />
                  <span>{switchLabel}</span>
                </Link>
                <div className="air-sheet__socials">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} - ${externalLabel}`}
                    >
                      <SocialIcon name={link.icon} size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </>,
          document.body
        )}
    </>
  );
}
