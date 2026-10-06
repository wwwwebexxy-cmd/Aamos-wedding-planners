import Image from "next/image";
import { services } from "@/data/services";
import styles from "./home.module.css";

const reasons = [
  {
    title: "Personalized Planning",
    text: "Every celebration is different. We tailor our services to your preferences, traditions, and budget.",
  },
  {
    title: "Elegant Décor & Design",
    text: "From stunning wedding stages to complete venue décor, we bring every detail together beautifully.",
  },
  {
    title: "Professional & Reliable Team",
    text: "Our experienced team coordinates every aspect of your event so you can enjoy your special moments stress-free.",
  },
  {
    title: "Packages for Every Budget",
    text: "We offer flexible solutions designed to deliver a beautiful celebration while respecting your budget.",
  },
  {
    title: "Your Vision, Our Responsibility",
    text: "From the first idea to the final moment, we work closely with you to turn your dream celebration into reality.",
  },
];

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className={styles.serviceLink} href={href}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <section id="hero" className={styles.hero}>
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Aamos Wedding Planners</span>
            <h1 className={`${styles.display} ${styles.heroTitle}`}>
              Elevating moments with grace.
            </h1>
            <p className={styles.heroText}>
              We create warm, elegant celebrations shaped around your story —
              from the first idea to the final, unforgettable moment.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.button} href="#contact">
                Plan Your Celebration
              </a>
              <a className={styles.buttonGhost} href="#services">
                Explore Our Services
              </a>
            </div>
            <p className={styles.heroNote}>
              <span>✦</span>
              Weddings and meaningful family celebrations
            </p>
          </div>

          <div className={styles.heroVisual} aria-label="Aamos celebration photography">
            <div className={styles.heroImage}>
              <Image
                src="/wedding-two.jpeg"
                alt="A couple sharing a moment on a floral wedding stage"
                fill
                priority
                sizes="(max-width: 900px) 83vw, 540px"
              />
            </div>
            <div className={styles.heroStamp} aria-hidden="true">
              Celebrations
              <br />
              with grace
            </div>
            <div className={styles.heroLogo} aria-hidden="true">
              <span className={styles.heroLogoMark}>A</span>
              <span>Aamos / since your first idea</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.intro}>
        <div className={`${styles.container} ${styles.introGrid}`}>
          <div className={styles.imageFrame}>
            <Image
              src="/wedding.jpeg"
              alt="Newly married couple standing beneath a floral arch"
              fill
              sizes="(max-width: 900px) 100vw, 540px"
            />
          </div>
          <div className={styles.introCopy}>
            <span className={styles.eyebrow}>The Aamos approach</span>
            <h2 className={styles.sectionTitle}>
              Your day should feel effortless, personal and full of heart.
            </h2>
            <p className={styles.sectionText}>
              Planning a celebration is a deeply personal experience. We take
              care of the moving pieces, listen closely to what matters to you
              and shape each detail into a celebration that feels truly yours.
            </p>
            <p className={styles.signature}>Thoughtfully planned, beautifully remembered.</p>
          </div>
        </div>
      </section>

      <section id="services" className={styles.services}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.eyebrow}>Our services</span>
              <h2 className={styles.sectionTitle}>Everything in place for your best moments.</h2>
            </div>
            <p className={styles.sectionHeaderCopy}>
              From full-service planning to the final styling detail, our work
              is designed to make your celebration feel seamless.
            </p>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article className={styles.serviceCard} key={service.title}>
                <div className={styles.serviceImage}>
                  <Image src={service.image} alt={service.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 900px) 50vw, 33vw" />
                </div>
                <div className={styles.serviceBody}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ArrowLink href="#contact">Start a conversation</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className={styles.why}>
        <div className={styles.container}>
          <div className={styles.whyIntro}>
            <div>
              <span className={styles.eyebrow}>Why choose Aamos?</span>
              <h2 className={styles.sectionTitle}>The details matter. So do you.</h2>
            </div>
            <p>
              Thoughtful planning, beautiful details and a celebration designed
              around you. That is the Aamos promise behind every gathering we
              help bring to life.
            </p>
          </div>

          <div className={styles.whyLayout}>
            <article className={styles.featureCard}>
              <div className={styles.featureImage}>
                <Image
                  src="/feature-creative-concepts-v2.png"
                  alt="Hand-tied wedding bouquet with soft floral details"
                  fill
                  sizes="(max-width: 900px) 100vw, 480px"
                />
              </div>
              <div className={styles.featureBody}>
                <span className={styles.featureLabel}>THE STARTING POINT</span>
                <h3>Creative &amp; Unique Concepts</h3>
                <p>
                  We create beautiful, memorable event concepts that reflect
                  your style and vision.
                </p>
              </div>
            </article>

            <div className={styles.reasonList}>
              {reasons.map((reason) => (
                <article className={styles.reason} key={reason.title}>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contact}>
        <div className={`${styles.container} ${styles.contactLeadGrid}`}>
          <div className={styles.contactIntro}>
            <span className={styles.eyebrow}>Contact Aamos</span>
            <h2 className={styles.contactTitle}>Let&apos;s plan something beautiful.</h2>
            <p className={styles.contactLead}>
              Find us in ERUMELI, Kerala, or open the map below to plan your visit.
            </p>
          </div>

          <aside className={styles.contactTeam}>
            <p className={styles.eyebrow}>The Aamos team</p>
            <h3>Thoughtful hands behind every detail.</h3>
            <p>
              We bring calm coordination, creative direction and a warm, personal approach to every celebration we help shape.
            </p>
            <div className={styles.contactTeamList}>
              <span>Weddings &amp; destination celebrations</span>
              <span>Styling, guest care &amp; photography support</span>
            </div>
          </aside>
        </div>

        <div className={`${styles.container} ${styles.contactMapOnly}`}>
          <div className={styles.contactMapSection}>
            <div className={styles.contactMapIntro}>
              <p className={styles.eyebrow}>Find us</p>
              <h3 className={styles.contactMapTitle}>ERUMELI</h3>
              <p className={styles.contactMapCopy}>
                Visit us in ERUMELI, Kerala, and let&apos;s begin planning your celebration together.
              </p>
              <a
                className={styles.contactMapLink}
                href="https://maps.app.goo.gl/UBkZ5Eic6BT5xGGu5"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </a>
            </div>

            <div className={styles.contactMapFrame}>
              <iframe
                title="ERUMELI on Google Maps"
                src="https://www.google.com/maps?q=ERUMELI%2C%20Kerala%2C%20India&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <p className={`${styles.container} ${styles.finePrint}`}>
          Aamos Wedding Planners · Elevating moments with grace
        </p>
      </section>
    </div>
  );
}
