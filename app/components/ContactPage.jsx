import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { content, getLocalePath, socialLinks } from "../data";
import { Waveform } from "./MusicVisuals";
import SiteChrome, { emailHref, OutboundIcon, SocialIcon } from "./SiteChrome";

export default function ContactPage({ locale }) {
  const t = content[locale];
  const primaryHref = emailHref(
    t.contactPage.primaryEmail,
    t.contactPage.subject
  );
  const secondaryHref = emailHref(
    t.contactPage.secondaryEmail,
    t.contactPage.subject
  );

  return (
    <SiteChrome locale={locale} page="contact">
      <section className="page-hero page-hero--contact">
        <Image
          src="/ahmed-saif-hero.webp"
          alt=""
          fill
          priority
          className="page-hero-bg"
          sizes="100vw"
        />
        <div className="page-hero__copy">
          <p className="eyebrow">{t.contactPage.eyebrow}</p>
          <h1>{t.contactPage.title}</h1>
          <p>{t.contactPage.body}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={primaryHref}>
              <Send aria-hidden="true" size={18} />
              <span>{t.contactPage.primaryAction}</span>
            </a>
            <a className="button button-secondary" href={secondaryHref}>
              <Mail aria-hidden="true" size={18} />
              <span>{t.contactPage.secondaryAction}</span>
            </a>
          </div>
        </div>
        <div className="contact-frequency" aria-hidden="true">
          <Waveform dense />
          <strong>{t.contactPage.primaryEmail}</strong>
          <span>{t.contactPage.secondaryEmail}</span>
        </div>
      </section>

      <section className="section contact-types">
        {t.contactPage.cards.map((card) => (
          <article className="contact-type" key={card}>
            <span>{card}</span>
          </article>
        ))}
      </section>

      <section className="section contact-hub" aria-label={t.socialLabel}>
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

      <section className="section work-cta">
        <h2>{t.pageCards.items.find((item) => item.page === "works")?.body}</h2>
        <Link className="button button-secondary" href={getLocalePath(locale, "works")}>
          <span>{t.nav.find((item) => item.page === "works")?.label}</span>
          <ArrowUpRight aria-hidden="true" size={18} />
        </Link>
      </section>
    </SiteChrome>
  );
}
