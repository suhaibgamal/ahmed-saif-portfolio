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
  const ref = useRef(null);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function onKey(e) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  useEffect(() => {
    if (!open || !ref.current) return;
    const el = ref.current.querySelector("button, a[href]");
    if (el) el.focus();
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="ed-menu-btn"
        onClick={() => setOpen(true)}
        aria-label={openLabel}
        aria-expanded={open}
      >
        <Menu size={18} aria-hidden="true" />
      </button>

      {mounted &&
        createPortal(
          <>
            {open && <div className="ed-backdrop" onClick={close} aria-hidden="true" />}
            <nav
              ref={ref}
              className={`ed-drawer ${open ? "is-open" : ""}`}
              dir={locale === "ar" ? "rtl" : "ltr"}
              lang={locale}
              aria-label={navLabel}
              aria-hidden={!open}
            >
              <div className="ed-drawer__top">
                <strong>{brandName}</strong>
                <button
                  type="button"
                  className="ed-menu-btn"
                  onClick={close}
                  aria-label={closeLabel}
                >
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
              <div className="ed-drawer__links">
                {navLinks.map((item) => (
                  <Link
                    key={item.page}
                    href={item.href}
                    aria-current={item.page === page ? "page" : undefined}
                    className={item.page === page ? "is-active" : undefined}
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="ed-drawer__foot">
                <ThemeToggle locale={locale} />
                <Link className="ed-util-btn" href={switchHref} onClick={close}>
                  <Languages size={14} aria-hidden="true" />
                  <span>{switchLabel}</span>
                </Link>
                <div className="ed-drawer__socials">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} - ${externalLabel}`}
                    >
                      <SocialIcon name={link.icon} size={15} />
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
