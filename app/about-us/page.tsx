"use client";

type TeamMember = {
  name: string;
  title: string;
  phone: string;
  image: string;
  alt: string;
  photoClass?: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Charles Allison",
    title: "Sales",
    phone: "(205) 941-7083",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/5f49d406-0c25-4ef1-bf20-901bd4d7a002/Headshot-Charles.png?format=750w",
    alt: "Charles Allison",
  },
  {
    name: "Niyah Davis",
    title: "Payroll Account Manager",
    phone: "(659) 499-2913",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/c095d8b6-d173-40ae-bd84-14068677a18e/Headshot-Niyah-min.png?format=750w",
    alt: "Niyah Davis",
  },
  {
    name: "Jenny Dunaway",
    title: "Senior Payroll account manager",
    phone: "(205) 941-7086",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/5becbde7-5e58-4870-afa8-fdc95fead337/Headshot-Jenny-min.png?format=750w",
    alt: "Jenny Dunaway",
  },
  {
    name: "Jennifer Gilbert",
    title: "Sales Coordinator",
    phone: "(205) 941-7091",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/51f40469-347e-4ab4-9547-150d5cdaac74/Headshot-Jennifer-min.png?format=750w",
    alt: "Jennifer Gilbert",
  },
  {
    name: "Garrett Helmers",
    title: "Operations Project Specialist",
    phone: "(205) 961-2424",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/4a1cbad1-52fd-4dd9-9520-172648578e0c/Headshot-Garrett.png?format=750w",
    alt: "Garrett Helmers",
  },
  {
    name: "Matthew Hopkins",
    title: "operations Manager",
    phone: "(205) 941-7088",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/1fb3570a-a92e-42c9-afce-2cf02016b5a4/Headshot-Matt.png?format=750w",
    alt: "Matthew Hopkins",
  },
  {
    name: "David Jones",
    title: "Accounting Specialist",
    phone: "(205) 961-2412",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/229744e1-5f67-4e9d-ba90-983177897a7c/Headshot-David-min.png?format=750w",
    alt: "David Jones",
  },
  {
    name: "Kat Kitchen",
    title: "Operations Coordinator",
    phone: "(205) 969-7229",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/e0d09cf4-78eb-4c90-a7ae-aeb064afa677/Headshot-Kat-min.png?format=750w",
    alt: "Kat Kitchen",
  },
  {
    name: "Blan Marriott",
    title: "President/Founder",
    phone: "(205) 941-7081",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/4c93e4a3-730a-4ca3-81aa-b14a95a25987/Headshot-Blan.png?format=750w",
    alt: "Blan Marriott",
  },
  {
    name: "Vanessa McGraw",
    title: "HR/Operations Director",
    phone: "(205) 941-7085",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/a8ae2eae-1eef-4a64-9e11-ee8a8f92a68a/Headshot-Vanessa-min.png?format=750w",
    alt: "Vanessa McGraw",
    photoClass: "vanessa",
  },
  {
    name: "Morgan Minor",
    title: "Benefits Specialist",
    phone: "(205) 941-7087",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/3f34adcc-6b56-4f69-b8f2-811ea6ea341a/Headshot-Morgan-min.png?format=750w",
    alt: "Morgan Minor",
  },
  {
    name: "Apryl Parker",
    title: "Compliance Coordinator",
    phone: "(205) 941-7084",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/f4dc69b7-2b87-464a-8ee8-a5689beede51/Headshot-Apryl-min.png?format=750w",
    alt: "Apryl Parker",
  },
  {
    name: "Rick Smith",
    title: "Sales",
    phone: "(205) 941-7082",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/65e600ef-b24d-4770-912f-04e13795f04b/Headshot-Rick-min.png?format=750w",
    alt: "Rick Smith",
    photoClass: "rick",
  },

  {
    name: "Jack Veitch",
    title: "Sales Assistant",
    phone: "(205) 322-2220",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/17dbda7b-b2df-4e62-82b9-e7226b6fef6d/Headshot-Jack.png?format=750w",
    alt: "Jack Veitch",
    photoClass: "jack",
  },
  {
    name: "Amelia Wittig",
    title: "Implementation Specialist",
    phone: "(205) 941-7093",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/18140fd6-d128-4d57-ade7-888be607df3f/Headshot-Amelia-min.png?format=750w",
    alt: "Amelia Wittig",
  },
  {
    name: "John Wittig",
    title: "Operations Project Manager",
    phone: "(205) 941-7089",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/c9b9f412-0f98-4539-a7af-799224fbc696/Headshot-John2-min.png?format=750w",
    alt: "John Wittig",
  },
  {
    name: "James Wright",
    title: "Payroll Specialist",
    phone: "(205) 941-7092",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/0fb3bb04-35cf-4a05-a702-d06bf656c98d/Headshot-Jim-min.png?format=750w",
    alt: "James Wright",
  },
];

export default function Page() {
  return (
    <div className="about-page">
      <section className="about-galactic-section">
        <div className="about-galactic-inner">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/ddacb2af-f8e5-4022-8fd7-5ac92047c9d4/AboutGalactic.png?"
            alt="About Galactic"
            className="about-galactic-image"
          />

          <h2>We take care of the admin so you can focus on what matters most.</h2>
          <p>
            Galactic is a PEO (Professional Employer Organization) that has been
            helping small to medium-sized businesses prosper for almost 3 decades.
            We take on the administrative burdens so you can spend your time where
            it matters most - growing your business and supporting your people.
          </p>

          <div className="about-feature">
            <h4>
              <i className="fa-solid fa-briefcase" aria-hidden="true" /> Comprehensive
              HR Admin
            </h4>
            <p>Payroll, compliance, benefits and more handled efficiently.</p>
          </div>

          <div className="about-feature">
            <h4>
              <i className="fa-solid fa-cloud" aria-hidden="true" /> Intuitive Web
              Platform
            </h4>
            <p>A user-friendly interface that streamlines HR tasks seamlessly.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="team-container">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/108c49f7-5946-4539-96b0-a996625dcc2d/Meet+the+team.png?format=750w"
            alt="Meet the Team"
            className="title-img"
            loading="lazy"
          />
          {TEAM.map((member) => (
            <div className="team-card" key={member.name}>
              <img
                className={`team-photo${member.photoClass ? ` ${member.photoClass}` : ""}`}
                alt={member.alt}
                src={member.image}
                loading="lazy"
              />
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-title">{member.title}</p>
              <p className="team-member-phone">{member.phone}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="holiday-closures-section">
        <div className="holiday-closures-inner">
          <h2>Holiday Closures 2025</h2>
          <p>Here's when our office will be closed so you can plan accordingly.</p>
          <ul className="holiday-closures-list">
            <li>
              <i className="fas fa-calendar-alt" aria-hidden="true" />
              New Year's Day - January 1
            </li>
            <li>
              <i className="fas fa-flag-usa" aria-hidden="true" />
              Memorial Day - May 26
            </li>
            <li>
              <i className="fas fa-star" aria-hidden="true" />
              Independence Day - July 4
            </li>
            <li>
              <i className="fas fa-briefcase" aria-hidden="true" />
              Labor Day - September 1
            </li>
            <li>
              <i className="fas fa-drumstick-bite" aria-hidden="true" />
              Thanksgiving - November 27 & 28
            </li>
            <li>
              <i className="fas fa-gift" aria-hidden="true" />
              Christmas - December 25
            </li>
          </ul>
          <p className="footer-note">
            Our office will resume normal operations on the next business day following
            each holiday.
          </p>
        </div>
      </section>
    </div>
  );
}

