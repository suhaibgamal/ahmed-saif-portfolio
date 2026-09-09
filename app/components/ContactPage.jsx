"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Headphones,
  Mail,
  MessageSquare,
  Mic,
  Music2,
  Phone,
  Radio,
  Send,
  Sparkles
} from "lucide-react";
import { content, getLocalePath, socialLinks } from "../data";
import { Waveform } from "./MusicVisuals";
import SiteChrome, { emailHref, OutboundIcon, SocialIcon } from "./SiteChrome";
import { useActiveTheme } from "./useActiveTheme";

export default function ContactPage({ locale }) {
  const { archetype: activeArchetype } = useActiveTheme();
  const t = content[locale];
  const primaryHref = emailHref(
    t.contactPage.primaryEmail,
    t.contactPage.subject
  );
  const secondaryHref = emailHref(
    t.contactPage.secondaryEmail,
    t.contactPage.subject
  );

  const archetype = (activeArchetype === "classic" || !activeArchetype) ? "aureate" : activeArchetype;

  return (
    <SiteChrome locale={locale} page="contact">
      {/* ====================================================================
          1. AUREATE LYRICIST (Style 1: Royal Concierge Liaison)
          ==================================================================== */}
      {archetype === "aureate" && (
        <div className="aureate-wrapper">
          <div className="aureate-hero" style={{ marginBottom: "60px" }}>
            <div>
              <span className="aureate-crest">
                <Sparkles size={13} /> {locale === "ar" ? "حجوزات الأعمال والتواصل المباشر" : "Direct Concierge & Booking"}
              </span>
              <h1 style={{ fontSize: "clamp(34px, 5vw, 56px)", margin: "14px 0" }}>{t.contactPage.title}</h1>
              <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "32px" }}>
                {t.contactPage.body}
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a className="button button-primary" href={primaryHref}>
                  <Send size={16} />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <a className="button button-secondary" href={secondaryHref}>
                  <Mail size={16} />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "20px" }}>
              <div className="aureate-wax-seal">AS</div>
              <strong style={{ fontSize: "18px", color: "var(--accent)" }}>{t.contactPage.primaryEmail}</strong>
              <span style={{ fontSize: "14px", color: "var(--muted)" }}>A7MD Studio · Yemen / Global</span>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          2. NOCTURNAL RESONANCE (Style 2: Cyber Terminal HUD)
          ==================================================================== */}
      {archetype === "nocturne" && (
        <div className="nocturne-wrapper">
          <div className="nocturne-hero" style={{ marginBottom: "60px" }}>
            <div>
              <span className="nocturne-hologram-tag">TRANSMISSION LINK // ONLINE</span>
              <h1 style={{ fontSize: "clamp(34px, 5vw, 54px)", margin: "16px 0", color: "#f1f5f9" }}>{t.contactPage.title}</h1>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "28px" }}>
                {t.contactPage.body}
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a className="button button-primary" href={primaryHref}>
                  <Send size={16} />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <a className="button button-secondary" href={secondaryHref}>
                  <Mail size={16} />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
              </div>
            </div>
            <div className="nocturne-glass-card" style={{ textAlign: "center" }}>
              <span className="nocturne-hologram-tag" style={{ marginBottom: "14px" }}>BEACON FREQUENCY</span>
              <strong style={{ fontSize: "18px", display: "block", color: "#38bdf8", margin: "10px 0" }}>
                {t.contactPage.primaryEmail}
              </strong>
              <span style={{ fontSize: "13px", color: "var(--muted)" }}>Direct Producer Inquiries</span>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          3. ANALOG TAPE LOUNGE (Style 3: Vintage Telegram Booking)
          ==================================================================== */}
      {archetype === "tape" && (
        <div className="tape-wrapper">
          <div className="tape-hero" style={{ marginBottom: "60px" }}>
            <div>
              <span style={{ fontSize: "12px", fontFamily: "monospace", color: "#f59e0b", background: "rgba(245, 158, 11, 0.15)", padding: "4px 10px", borderRadius: "4px" }}>
                TELEGRAPH DISPATCH // BOOKING
              </span>
              <h1 style={{ fontSize: "clamp(30px, 4.5vw, 50px)", margin: "16px 0 12px" }}>{t.contactPage.title}</h1>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "24px" }}>
                {t.contactPage.body}
              </p>
              <div style={{ display: "flex", gap: "14px" }}>
                <a className="button button-primary" href={primaryHref}>
                  <Send size={16} />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <a className="button button-secondary" href={secondaryHref}>
                  <Mail size={16} />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
              </div>
            </div>
            <div className="tape-cassette-card" style={{ textAlign: "center" }}>
              <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#f59e0b" }}>OFFICIAL DISPATCH WIRE</span>
              <strong style={{ fontSize: "18px", color: "#f5ede3", margin: "12px 0 6px", display: "block" }}>
                {t.contactPage.primaryEmail}
              </strong>
              <span style={{ fontSize: "13px", color: "var(--muted)" }}>A7MD Studio Archive</span>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          4. ATELIER FOREST (Style 4: Architectural Dispatch Box)
          ==================================================================== */}
      {archetype === "atelier" && (
        <div className="atelier-wrapper">
          <div className="atelier-grid-hero" style={{ marginBottom: "60px" }}>
            <div className="atelier-hero-text">
              <div>
                <span className="atelier-mono-tag">DISPATCH TERMINAL // A7MD STUDIO</span>
                <h1 style={{ fontSize: "clamp(34px, 5vw, 56px)", margin: "14px 0" }}>{t.contactPage.title}</h1>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "24px" }}>
                  {t.contactPage.body}
                </p>
              </div>
              <div style={{ display: "flex", gap: "14px" }}>
                <a className="button button-primary" href={primaryHref}>
                  <Send size={16} />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <a className="button button-secondary" href={secondaryHref}>
                  <Mail size={16} />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
              </div>
            </div>
            <div style={{ padding: "48px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#0a140e" }}>
              <span className="atelier-mono-tag">COMMUNICATION VECTOR</span>
              <strong style={{ fontSize: "20px", color: "#52b788", margin: "8px 0" }}>{t.contactPage.primaryEmail}</strong>
              <span style={{ fontFamily: "Space Mono, monospace", fontSize: "13px", color: "var(--muted)" }}>
                RESPONSIVENESS: 24-48 HOURS
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          5. MONOCHROME GALLERY (Style 5: Brutalist Acquisition Desk)
          ==================================================================== */}
      {archetype === "gallery" && (
        <div className="gallery-wrapper">
          <div className="gallery-split-hero" style={{ marginBottom: "60px" }}>
            <div>
              <span style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#a1a1aa", fontWeight: 800 }}>
                ACQUISITION & INQUIRIES
              </span>
              <h1 className="gallery-giant-title" style={{ margin: "14px 0" }}>{t.contactPage.title}</h1>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#a1a1aa", marginBottom: "30px" }}>
                {t.contactPage.body}
              </p>
              <div style={{ display: "flex", gap: "14px" }}>
                <a className="button button-primary" href={primaryHref}>
                  <Send size={16} />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <a className="button button-secondary" href={secondaryHref}>
                  <Mail size={16} />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
              </div>
            </div>
            <div className="gallery-exhibition-card" style={{ textAlign: "center", padding: "50px 30px" }}>
              <span style={{ fontSize: "11px", letterSpacing: "2px", color: "#71717a" }}>CURATORIAL DESK</span>
              <strong style={{ fontSize: "22px", color: "#ffffff", display: "block", margin: "16px 0 8px" }}>
                {t.contactPage.primaryEmail}
              </strong>
              <span style={{ fontSize: "13px", color: "#a1a1aa" }}>Direct Artist Representation</span>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          6. NEO-BENTO SHOWCASE (Style 6: Modular Booking Widget)
          ==================================================================== */}
      {archetype === "bento" && (
        <div className="bento-wrapper">
          <div className="bento-grid" style={{ marginBottom: "50px" }}>
            <div className="bento-card bento-card--hero-copy">
              <span className="bento-tag"><Sparkles size={13} /> {locale === "ar" ? "تواصل مباشر" : "Direct Liaison"}</span>
              <h1 className="hero-v2__title" style={{ fontSize: "clamp(28px, 4vw, 46px)", margin: "14px 0" }}>{t.contactPage.title}</h1>
              <p className="hero-v2__lead" style={{ fontSize: "16px", margin: "0 0 24px" }}>{t.contactPage.body}</p>
              <div className="hero-v2__actions">
                <a className="button button-primary" href={primaryHref}>
                  <Send size={16} />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <a className="button button-secondary" href={secondaryHref}>
                  <Mail size={16} />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
              </div>
            </div>
            <div className="bento-card bento-card--player" style={{ textAlign: "center" }}>
              <span className="bento-tag"><Mail size={13} /> Studio Email</span>
              <strong style={{ fontSize: "18px", margin: "16px 0 8px", display: "block" }}>{t.contactPage.primaryEmail}</strong>
              <p style={{ fontSize: "13px", color: "var(--muted)" }}>A7MD Studio · Direct Inbox</p>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          7. EDITORIAL LOOKBOOK (Style 7: Luxury Magazine Colophon)
          ==================================================================== */}
      {archetype === "editorial" && (
        <div className="editorial-wrapper">
          <div className="editorial-hero" style={{ marginBottom: "60px" }}>
            <div className="editorial-hero-content" style={{ maxWidth: "700px" }}>
              <span style={{ fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700 }}>
                COLOPHON // REPRESENTATION & INQUIRIES
              </span>
              <h1 className="editorial-display-title" style={{ fontSize: "clamp(34px, 5.5vw, 58px)", margin: "14px 0" }}>{t.contactPage.title}</h1>
              <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--muted-strong)", marginBottom: "30px" }}>
                {t.contactPage.body}
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a className="button button-primary" href={primaryHref}>
                  <Send size={16} />
                  <span>{t.contactPage.primaryAction}</span>
                </a>
                <a className="button button-secondary" href={secondaryHref}>
                  <Mail size={16} />
                  <span>{t.contactPage.secondaryAction}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          8. ANALOG STUDIO CONSOLE (Style 8: Hardware Patchbay Connector)
          ==================================================================== */}
      {archetype === "studio" && (
        <div className="studio-wrapper">
          <div className="studio-console-deck" style={{ marginBottom: "50px" }}>
            <div className="studio-console-header">
              <span style={{ fontFamily: "monospace", fontSize: "12px", color: "var(--accent)", fontWeight: 700 }}>
                PATCHBAY ROUTING CHANNEL · A7MD STUDIO
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(30px, 4.5vw, 50px)", margin: "16px 0 10px" }}>{t.contactPage.title}</h1>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "var(--muted-strong)", marginBottom: "24px" }}>
              {t.contactPage.body}
            </p>
            <div style={{ display: "flex", gap: "14px" }}>
              <a className="button button-primary" href={primaryHref}>
                <Send size={16} />
                <span>{t.contactPage.primaryAction}</span>
              </a>
              <a className="button button-secondary" href={secondaryHref}>
                <Mail size={16} />
                <span>{t.contactPage.secondaryAction}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          9. LIVE STAGE HEADLINER (Style 9: Backstage Pass & Promoter Desk)
          ==================================================================== */}
      {archetype === "stage" && (
        <div className="stage-wrapper">
          <div className="stage-hero" style={{ marginBottom: "50px" }}>
            <span className="stage-live-pill">BACKSTAGE BOOKING & TOUR PROMOTER PORTAL</span>
            <h1 style={{ fontSize: "clamp(34px, 6vw, 60px)", margin: "14px 0" }}>{t.contactPage.title}</h1>
            <p style={{ fontSize: "17px", lineHeight: 1.8, color: "var(--muted-strong)", maxWidth: "620px", margin: "0 auto 28px" }}>
              {t.contactPage.body}
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "14px" }}>
              <a className="button button-primary" href={primaryHref}>
                <Send size={16} />
                <span>{t.contactPage.primaryAction}</span>
              </a>
              <a className="button button-secondary" href={secondaryHref}>
                <Mail size={16} />
                <span>{t.contactPage.secondaryAction}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ====================================================================
          10. MINIMAL AUDIO CANVAS (Style 10: Zen Contact Prompt)
          ==================================================================== */}
      {archetype === "canvas" && (
        <div className="canvas-wrapper">
          <header style={{ paddingBottom: "40px", borderBottom: "1px solid var(--line)", marginBottom: "50px" }}>
            <h1 className="canvas-hero-title">{t.contactPage.title}</h1>
            <p style={{ fontSize: "18px", lineHeight: 1.8, color: "var(--muted-strong)", maxWidth: "650px", margin: "0 0 28px" }}>
              {t.contactPage.body}
            </p>
            <div style={{ display: "flex", gap: "14px" }}>
              <a className="button button-primary" href={primaryHref}>
                <Send size={16} />
                <span>{t.contactPage.primaryAction}</span>
              </a>
              <a className="button button-secondary" href={secondaryHref}>
                <Mail size={16} />
                <span>{t.contactPage.secondaryAction}</span>
              </a>
            </div>
          </header>
        </div>
      )}

      {/* Social Links Hub */}
      <section className="section contact-hub" aria-label={t.socialLabel} style={{ marginTop: "60px" }}>
        <div className="section-heading compact">
          <p className="eyebrow">{t.brandName}</p>
          <h2>{t.strip.title}</h2>
        </div>
        <div className="social-grid social-grid--large">
          {socialLinks.map((link) => (
            <a
              className="social-link"
              href={link.href}
              key={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-link__icon" aria-hidden="true">
                <SocialIcon name={link.icon} size={18} />
              </span>
              <strong>{link.label}</strong>
              <OutboundIcon label={t.external} />
            </a>
          ))}
        </div>
      </section>
    </SiteChrome>
  );
}
