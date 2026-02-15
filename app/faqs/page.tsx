"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const FAQS = [
  {
    question: "How do I login to my employee portal?",
    answer: (
      <>
        Using this{" "}
        <a
          href="https://gal.prismhr.com/gal/auth/#/login?lang=en"
          className="faq-link"
        >
          link
        </a>
        , enter in your username and password to access your employee portal.
        Forgot your password? No problem, just hit “forgot password” at the bottom
        of the login screen to reset it.
      </>
    ),
  },
  {
    question: "How do I change my tax withholdings?",
    answer: (
      <>
        Login into your employee portal, and navigate to the “Taxes” section (left
        menu on desktop or drop-down on mobile), and select “Tax Withholding” to
        adjust your federal and state tax settings.
      </>
    ),
  },
  {
    question: "How do I update my banking information?",
    answer: (
      <>
        Login into your employee portal, go to the “Pay” section (left menu on
        desktop or drop-down on mobile), select “Direct Deposit,” and update your
        account and/or routing numbers.
      </>
    ),
  },
  {
    question: "I have a question about my paycheck, who should I speak with?",
    answer: (
      <>
        Always check with your supervisor first, but once they confirm a Galactic
        representative is needed, please contact the Galactic employee listed on
        the home page of your employee portal or call our office at 205.322.2220.
      </>
    ),
  },
  {
    question:
      "I'm a new hire, how do I get started on my onboarding with Galactic?",
    answer: (
      <>
        Using the link sent to your personal email, register an account with us,
        login, and begin your onboarding. Can’t find your link? Use the “Employee
        Portal” button to your right, then select “Register” at the bottom of your
        screen to get started. If you have questions, please call our office at
        205.322.2220.
      </>
    ),
  },
  {
    question: "Where can I find my W-2?",
    answer: (
      <>
        Login into your employee portal and navigate to the “Taxes” section (left
        menu on desktop or drop-down on mobile), and select “W-2” to retrieve a
        PDF of your W-2.
      </>
    ),
  },
  {
    question: "Where can I find my paystubs?",
    answer: (
      <>
        Login into your employee portal and navigate to the “Pay” section (left
        menu on desktop or drop-down on mobile), and select “Pay History.” Once
        there, find the appropriate pay date and select “View Paystub” to create
        a PDF of your desired paystub.
      </>
    ),
  },
  {
    question: "What benefits am I enrolled in?",
    answer: (
      <>
        To find out what benefits you’ve enrolled in, login to your employee
        portal and navigate to the “Benefits” section (left menu on desktop or
        drop-down on mobile). Once there, select “summary” for a comprehensive
        look at your benefits.
      </>
    ),
  },
  {
    question: "I need to cancel my benefits, what should I do?",
    answer: (
      <>
        If you need to cancel your benefits, please email
        {" "}
        <a href="mailto:benefits@galactic-inc.com" className="faq-link">
          benefits@galactic-inc.com
        </a>{" "}
        with the names of the benefits you’d like to cancel, as well as the date
        you’d like them cancelled.
      </>
    ),
  },
  {
    question: "I'm a former employee, do I still have access to my employee portal?",
    answer: (
      <>
        Of course! Even if it’s been a while since your last day, you’ll always
        have access to your employee portal.
      </>
    ),
  },
];

const FORM_ACTION =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLScoJFrF8QQqf4RuLQXeuUB91ygESrVU7uOt_IwSUskkYs62aQ/formResponse";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [thanksSet, setThanksSet] = useState(() => new Set<number>());
  const formRefs = useRef<Array<HTMLFormElement | null>>([]);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const hiddenIframeName = useMemo(() => "hidden_iframe", []);

  const submitFeedback = (index: number, value: "Yes" | "No") => {
    const form = formRefs.current[index];
    if (!form) return;
    const input = form.querySelector<HTMLInputElement>(
      'input[name="entry.1266049549"]'
    );
    if (input) input.value = value;
    form.submit();
    setThanksSet((prev) => new Set(prev).add(index));
  };

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const layout = layoutRef.current;
    const container = containerRef.current;
    if (!sidebar || !layout || !container) return;

    const stickyOffset = 65;
    const minWidth = 1024;
    const extraMargin = 60;

    const updateSidebarPosition = () => {
      if (window.innerWidth < minWidth) {
        sidebar.style.position = "";
        sidebar.style.top = "";
        sidebar.style.left = "";
        sidebar.style.height = "";
        sidebar.style.overflowY = "";
        return;
      }

      const sidebarHeight = sidebar.offsetHeight;
      const contHeight = container.offsetHeight;
      const scrollY = window.scrollY || window.pageYOffset;
      const layoutTop = layout.offsetTop;
      const minTop = container.offsetTop - layoutTop;
      const maxTop = minTop + contHeight - sidebarHeight;

      let newTop = scrollY - layoutTop + stickyOffset;
      if (newTop < minTop) newTop = minTop;
      if (newTop > maxTop) newTop = maxTop;

      sidebar.style.position = "absolute";
      sidebar.style.top = `${newTop}px`;
      const accordionRight = container.offsetLeft + container.offsetWidth;
      sidebar.style.left = `${accordionRight + extraMargin}px`;
      sidebar.style.height = "";
      sidebar.style.overflowY = "";
    };

    updateSidebarPosition();
    window.addEventListener("scroll", updateSidebarPosition);
    window.addEventListener("resize", updateSidebarPosition);
    return () => {
      window.removeEventListener("scroll", updateSidebarPosition);
      window.removeEventListener("resize", updateSidebarPosition);
    };
  }, []);

  return (
    <div className="faq-layout" id="layout" ref={layoutRef}>
      <div
        className="accordion-container"
        id="accordion-container"
        role="region"
        aria-label="FAQ Accordion"
        ref={containerRef}
      >
        <div className="accordion-title">Got Questions? We’ve Got Answers.</div>

        {FAQS.map((faq, index) => {
          const isActive = index === activeIndex;
          const thanked = thanksSet.has(index);

          return (
            <div
              key={faq.question}
              className={`accordion-item ${isActive ? "active" : ""}`}
            >
              <button
                className={`accordion-button ${isActive ? "active" : ""}`}
                aria-expanded={isActive}
                onClick={() => setActiveIndex(isActive ? -1 : index)}
              >
                {faq.question}
                <span className="accordion-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <polyline points="8 4 16 12 8 20" />
                  </svg>
                </span>
              </button>
              <div className="accordion-content">
                {faq.answer}
                <form
                  ref={(el) => {
                    formRefs.current[index] = el;
                  }}
                  action={FORM_ACTION}
                  method="POST"
                  target={hiddenIframeName}
                  className="helpful-form"
                  onSubmit={(event) => event.preventDefault()}
                >
                  <input
                    type="hidden"
                    name="entry.487170535"
                    value={faq.question}
                  />
                  <input type="hidden" name="entry.1266049549" value="" />
                  <label>Was this helpful?</label>
                  <button
                    type="button"
                    onClick={() => submitFeedback(index, "Yes")}
                    disabled={thanked}
                  >
                    Yes
                  </button>
                  <span className="helpful-separator">/</span>
                  <button
                    type="button"
                    onClick={() => submitFeedback(index, "No")}
                    disabled={thanked}
                  >
                    No
                  </button>
                  <span
                    className="thanks"
                    style={{ display: thanked ? "inline" : "none" }}
                  >
                    Thank you for your feedback!
                  </span>
                </form>
              </div>
            </div>
          );
        })}
        <iframe name={hiddenIframeName} style={{ display: "none" }} />
      </div>

      <div className="sidebar-outer" id="sidebar-outer" ref={sidebarRef}>
        <div className="sidebar-aligner">
          <div className="sidebar-container">
            <div className="sidebar-section">
              <div className="sidebar-blurb">
                Need to login into your employee portal? Click below.
              </div>
              <a
                className="sidebar-button"
                href="https://gal.prismhr.com/gal/auth/#/login?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                EMPLOYEE PORTAL
              </a>
            </div>
            <div className="sidebar-section">
              <div className="contact-blurb">
                Don't see your question? Check out our contact page to get connected with
                us.
              </div>
              <a
                className="sidebar-button contact-btn"
                href="https://www.galacticpayroll.com/contact-us"
                target="_blank"
                rel="noopener noreferrer"
              >
                CONTACT US
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
