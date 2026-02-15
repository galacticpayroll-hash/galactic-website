"use client";

const FEATURES = [
  {
    title: "Seamless Payroll Solutions",
    desc:
      "Run payroll efficiently and accurately for every pay period, with automated tax withholding, filings, and real-time reporting: Giving you more time to lead.",
    href: "/services?highlight=payroll",
  },
  {
    title: "Workers' Comp That Works For You",
    desc:
      "Simplify your cash flow and eliminate large upfront premiums with our popular pay-as-you-go workers’ compensation plan-trusted by businesses of all sizes.",
    href: "/services?highlight=workers",
  },
  {
    title: "Comprehensive Benefits",
    desc:
      "Unlock premium health, dental, vision, and retirement plans at competitive group rates to attract and retain top talent in a demanding market.",
    href: "/services?highlight=benefits",
  },
  {
    title: "Dedicated HR Expertise",
    desc:
      "Get actionable HR advice and solutions, from onboarding to employee relations, delivered by seasoned professionals invested in your success.",
    href: "/services?highlight=hr",
  },
];

const AWARDS = [
  "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/3882ad08-85cb-4ec6-a721-f426c318de90/hvr+chamber.png?",
  "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/96d9e7b7-0ab8-4f41-8798-6bc6d75f324e/BBJ+Award.png?",
  "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/26b5cf78-dfd1-4cb8-ab4e-2f1f0715d1ca/napeo.png?",
  "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/43ff231c-4eec-41fe-b834-59979d7ac696/hoover+award.png?",
  "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/2f74fee1-cb19-42d7-8ceb-7d1aca6f6bcb/shelby+county.png?",
  "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/51bb87a0-b23b-46c3-a3e3-3575e8a9a2d5/BBB.png?",
];

export default function Home() {
  const awardItems = [...AWARDS, ...AWARDS, ...AWARDS];

  return (
    <div className="home-page">
      <section className="home-hero" aria-label="Galactic nationwide coverage">
        <div className="home-hero-inner">
          <div className="home-hero-map">
            <img
              src="/GalacticMap.webp"
              alt="Galactic client coverage map"
            />
          </div>
          <div className="home-hero-copy">
            <p>
              From coast to coast, Galactic powers payroll and HR for businesses
              nationwide - trusted by clients in 44 states and growing.
            </p>
            <img
              src="/Logo Slammed.png"
              alt="Galactic"
              className="home-hero-logo"
            />
            <span className="home-hero-tagline">
              HR • Benefits • Payroll • Insurance
            </span>
            <img
              src="/Logo Services [UNCOMMON].png"
              alt="Galactic services"
              className="home-hero-services-logo"
            />
          </div>
        </div>
      </section>
      <div className="watermark-container" aria-hidden="true">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/495de413-b0e8-4cea-9ba7-def447587636/Watermark.png"
          alt=""
        />
      </div>

      <section className="why-section" aria-label="Why Go Galactic">
        <div className="why-inner">
          <img
            className="title-img"
            src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/263cc875-de90-499a-93fa-b0e28aa19b41/Why+Go+Galactic.png"
            alt="Why Go Galactic?"
          />
          <p className="lead">
            As a forward-thinking PEO, we empower your business to thrive with
            streamlined payroll, advanced benefits, workers' compensation innovation,
            and proven HR support-all tailored for modern employers and their teams.
          </p>
          <div className="feature-grid">
            {FEATURES.map((feature) => (
              <a key={feature.title} href={feature.href} className="feature-box">
                <div className="feature-title">{feature.title}</div>
                <div className="feature-desc">{feature.desc}</div>
              </a>
            ))}
          </div>
          <div className="cta-container">
            <a href="/contact-us" className="cta-button">
              Connect with Us
            </a>
          </div>
        </div>
      </section>

      <section className="peo-section" aria-label="What is a PEO">
        <div className="peo-inner">
          <h2>What is a PEO?</h2>
          <p>
            A Professional Employer Organization (PEO) partners with businesses to
            manage HR tasks like payroll, benefits, workers’ compensation, and
            compliance. This allows companies to focus on core operations with
            precise, expert support. The partnership ensures efficiency, employee
            satisfaction, and maintains strict confidentiality and trust.
          </p>
          <p className="peo-highlight">
            Galactic is a modern PEO built for businesses that want to grow without
            getting buried in HR headaches.
          </p>
          <p>
            We take on the heavy lifting of payroll, benefits, workers' comp,
            compliance, and HR admin so you can focus on what matters most: your
            people, your clients, your bottom line.
          </p>
          <p>
            With Galactic, you get the resources of a large employer, plus intuitive
            HR software that simplifies the day-to-day. It’s cost control, risk
            reduction, and real support all in one place.
          </p>
          <p className="peo-tagline">
            Your business. Your team. Less hassle. More momentum.
          </p>
        </div>
      </section>

      <section className="awards-wrapper" aria-label="Awards">
        <div className="title-bar">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/c2fba1db-e43f-4a6a-9c8f-7fd285a78343/Awards.png?format=750w"
            alt="Awards"
          />
        </div>
        <div className="carousel-bar">
          <div className="carousel-track" aria-label="Awards carousel">
            {awardItems.map((src, index) => (
              <img src={src} alt={`Award ${index + 1}`} key={`${src}-${index}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
