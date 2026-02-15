"use client";

import { FormEvent, useState } from "react";

export default function Footer() {
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("Thank you for subscribing!");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      form.reset();
      if (!response.ok) {
        setMessage("Oops! Something went wrong.");
      }
    } catch {
      setMessage("There was a problem. Please try again.");
    }
  };

  return (
    <>
      <a
        href="https://www.galacticpayroll.com/faqs"
        id="faq-fab"
        target="_blank"
        rel="noreferrer"
        aria-label="Go to FAQs"
      >
        <span>?</span>
      </a>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img
              src="https://static1.squarespace.com/static/5cd9752df8135a1b11827874/t/68487c8d4db1d0024567ff41/1749580941267/Logo.png"
              alt="Company Logo"
            />
          </div>

          <form
            id="footer-subscribe-form"
            className="footer-subscribe"
            action="https://formsubmit.co/d5d963cc38b3332f594cefabd3fb1cb4"
            method="POST"
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Subscriber via Footer" />

            <label
              htmlFor="footer-name"
              className="footer-subscribe-label"
            >
              Subscribe:
            </label>

            <div className="input-wrapper unified">
              <input
                id="footer-name"
                type="text"
                name="name"
                placeholder="Full Name"
                required
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                autoComplete="off"
              />
              <button type="submit" aria-label="Subscribe">
                <i className="fas fa-paper-plane" aria-hidden="true" />
              </button>
            </div>

            <div
              id="footer-form-response"
              className="footer-form-response"
              aria-live="polite"
            >
              {message}
            </div>
          </form>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/company/galactic-inc./"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </a>
            <a
              href="https://www.facebook.com/galacticinc1?mibextid=kFxxJD"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-col">
            <h3>ABOUT US</h3>
            <p>
              Since 1999, Galactic has provided trusted PEO services to small and
              medium-sized businesses across the country. With over two decades of
              experience, we’re committed to simplifying operations, ensuring
              compliance, and delivering responsive, personalized support every
              step of the way.
            </p>
          </div>

          <div className="footer-col">
            <h3>RECENT POSTS</h3>
            <a
              className="post"
              href="https://newsletter.homeactions.net/landing_page/20651/222193"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://77fe644c572ff1ba8a08-aa3fcb8dba820dc6b4fabb3e45b3ad4d.ssl.cf1.rackcdn.com/images/media/1262/summary_160/hand_signing_check.jpg?1452367484"
                alt="Should You Offer Employees a Payroll Card?"
              />
              <span>Should You Offer Employees a Payroll Card?</span>
            </a>
            <a
              className="post"
              href="https://newsletter.homeactions.net/landing_page/20651/222606"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://77fe644c572ff1ba8a08-aa3fcb8dba820dc6b4fabb3e45b3ad4d.ssl.cf1.rackcdn.com/images/media/256505/summary_160/Working%20in%20US.jpg?1746191319"
                alt="Hiring Rules for US Employers"
              />
              <span>Hiring Rules for US Employers</span>
            </a>
          </div>

          <div className="footer-col">
            <h3>CONTACT US</h3>
            <div className="contact-row">
              <i className="fas fa-map-marker-alt" aria-hidden="true" />
              <a
                href="https://www.google.com/maps?q=400+Vestavia+Parkway+Suite+402+Vestavia,+AL+35216"
                target="_blank"
                rel="noreferrer"
              >
                Vestavia, AL
              </a>
            </div>
            <div className="contact-row">
              <i className="fas fa-envelope" aria-hidden="true" />
              <a href="mailto:payroll@galactic-inc.com">
                payroll@galactic-inc.com
              </a>
            </div>
            <div className="contact-row">
              <i className="fas fa-phone-alt phone-flip" aria-hidden="true" />
              <a href="tel:+12053222220">+1 (205) 322-2220</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
