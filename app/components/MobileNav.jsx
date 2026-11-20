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
  const drawerRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event) {
      if (event.key === "Escape") {
        close();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  useEffect(() => {
    if (!open || !drawerRef.current) return;
    const firstFocusable = drawerRef.current.querySelector("button, a[href]");
    if (firstFocusable) {
      firstFocusable.focus();
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
        <Menu aria-hidden="true" size={20} strokeWidth={1.75} />
      </button>

      {mounted &&
        createPortal(
          <>
            {open && (
              <div
                className="mobile-backdrop"
                onClick={close}
                aria-hidden="true"
              />
            )}

            <nav
              className={`mobile-drawer ${open ? "mobile-drawer--open" : ""}`}
              ref={drawerRef}
              dir={locale === "ar" ? "rtl" : "ltr"}
              lang={locale}
              aria-label={navLabel}
              aria-hidden={!open}
            >
              <div className="mobile-drawer__header">
                <span className="mobile-drawer__brand">{brandName}</span>
                <div className="mobile-drawer__tools">
                  <ThemeToggle locale={locale} />
                  <button
                    className="mobile-drawer__close"
                    type="button"
                    onClick={close}
                    aria-label={closeLabel}
                  >
                    <X aria-hidden="true" size={18} strokeWidth={1.75} />
                  </button>
                </div>
              </div>

              <div className="mobile-drawer__links">
                {navLinks.map((item) => (
                  <Link
                    aria-current={item.page === page ? "page" : undefined}
                    className={`mobile-drawer__link ${
                      item.page === page ? "is-active" : ""
                    }`}
                    href={item.href}
                    key={item.page}
                    onClick={close}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mobile-drawer__footer">
                <Link
                  className="mobile-drawer__lang"
                  href={switchHref}
                  onClick={close}
                >
                  <Languages aria-hidden="true" size={16} strokeWidth={1.75} />
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
              </div>
            </nav>
          </>,
          document.body
        )}
    </>
  );
}
