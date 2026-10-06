import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link className="brand" href="/#hero">
            <span className="brand__logo-wrap">
              <Image
                className="brand__logo"
                src="/amos-logo-transparent.png"
                alt="Aamos Wedding Planners"
                fill
                sizes="180px"
              />
            </span>
          </Link>
          <p>
            Thoughtful planning, beautiful details and celebrations that feel
            completely your own.
          </p>
          <div className="site-footer__socials">
            <a
              className="social-link"
              href="https://www.instagram.com/aamos_weddingplanners?stkn=eDM4ZWM5cTM3ODZv"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Aamos Wedding Planners on Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4.25" />
                <circle cx="17.4" cy="6.7" r="1" className="social-link__dot" />
              </svg>
              <span>Instagram</span>
            </a>
          </div>
          <div className="site-footer__contact" aria-label="Aamos contact details">
            <a href="mailto:aamosweddingplanners@gmail.com">
              aamosweddingplanners@gmail.com
            </a>
            <a href="tel:+916235314140">+916235314140</a>
          </div>
        </div>

        <div className="site-footer__section">
          <h2>Explore</h2>
          <nav className="site-footer__links" aria-label="Footer navigation">
            <Link href="/#about">About Aamos</Link>
            <Link href="/#services">Our services</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>

        <div className="site-footer__section site-footer__note">
          <h2>Begin with a conversation</h2>
          <p>
            Share your date, your ideas and what matters most. We&apos;ll take it
            from there.
          </p>
          <Link className="footer-button" href="https://wa.me/916235314140">
            Contact Aamos
          </Link>
        </div>
      </div>
      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} Aamos Wedding Planners</p>
        <p>Elevating moments with grace</p>
      </div>
    </footer>
  );
}
