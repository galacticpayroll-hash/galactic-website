"use client";

export default function Page() {
  return (
    <div className="login-page">
      <section className="login-hero">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/b7792bb2-658d-46f2-b8e8-d224252e599e/Asset+3.png?"
          alt="Access Your Portal"
          className="login-hero-image desktop-only"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/aa2e3466-6fcc-47c5-a481-df211af79fb9/access+your+portal.png?format=750w"
          alt="Access Your Portal"
          className="login-hero-image mobile-only"
        />
        <p className="login-hero-copy">
          Select the appropriate portal below to log in and manage your business,
          employee, or payroll information with ease.
        </p>
      </section>

      <main className="login-cards">
        <article className="portal-card">
          <div className="portal-icon">
            <i className="fa-solid fa-building-user" aria-hidden="true" />
          </div>
          <div className="portal-content">
            <h2>PrismHR Client Portal</h2>
            <p>
              Manage your team’s onboarding, payroll, documents, and compliance.
              Built for business owners and admins.
            </p>
          </div>
          <a
            href="https://gal.prismhr.com/gal/?"
            className="portal-button"
            target="_blank"
            rel="noreferrer"
          >
            Client Portal
          </a>
        </article>

        <article className="portal-card">
          <div className="portal-icon">
            <i className="fa-solid fa-user" aria-hidden="true" />
          </div>
          <div className="portal-content">
            <h2>PrismHR Employee Portal</h2>
            <p>View paystubs, update info, and access benefits as an employee.</p>
          </div>
          <a
            href="https://gal.prismhr.com/gal/auth/#/login?lang=en"
            className="portal-button"
            target="_blank"
            rel="noreferrer"
          >
            Employee Portal
          </a>
        </article>

        <article className="portal-card hide-maid2pay" aria-hidden="true">
          <div className="portal-icon">
            <i className="fa-solid fa-file-invoice" aria-hidden="true" />
          </div>
          <div className="portal-content">
            <h2>maid2pay</h2>
            <p>Exclusive to Two Maids franchisees. View, generate and edit payrolls.</p>
          </div>
          <a
            href="https://maid2pay.com/login?redirect=%2F"
            className="portal-button portal-logo-button"
            target="_blank"
            rel="noreferrer"
          >
            <span className="img-hover-wrap">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/8977dc12-57f3-4f59-857f-344a4cfa36c3/m2p+small.png?"
                alt="maid2pay logo"
              />
              <img
                src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/beac61cf-068e-4933-a1db-a91cc7d2eb9e/m2p+small+yellow.png?"
                alt=""
                className="hover-img"
                aria-hidden="true"
              />
            </span>
          </a>
        </article>
      </main>
    </div>
  );
}
