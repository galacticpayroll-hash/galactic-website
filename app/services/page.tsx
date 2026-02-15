"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const TABS = [
  { id: "payroll", label: "Payroll" },
  { id: "workers", label: "Workers’ Comp" },
  { id: "benefits", label: "Benefits" },
  { id: "hr", label: "HR" },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState("payroll");
  const [userHasClicked, setUserHasClicked] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const highlightTab = useMemo(() => {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    return params.get("highlight");
  }, []);

  useEffect(() => {
    if (highlightTab && !userHasClicked) {
      const exists = TABS.some((t) => t.id === highlightTab);
      if (exists) {
        setActiveTab(highlightTab);
      }
    }
  }, [highlightTab, userHasClicked]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const active = section.querySelector<HTMLElement>(".tab-content.active");
    if (!active) return;
    const newHeight = active.scrollHeight + 60;
    const currentHeight = section.getBoundingClientRect().height;
    if (currentHeight === newHeight) return;
    section.style.height = `${currentHeight}px`;
    void section.offsetHeight;
    section.style.transition = "height 0.4s ease";
    section.style.height = `${newHeight}px`;
    const onEnd = () => {
      section.style.height = "auto";
      section.style.transition = "";
    };
    section.addEventListener("transitionend", onEnd, { once: true });
  }, [activeTab]);

  return (
    <section
      id="services-offered"
      aria-label="Galactic Services offered"
      ref={sectionRef}
    >
      <div className="tab-list" role="tablist" aria-label="Galactic service categories">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={tab.id}
            id={`tab-${tab.id}`}
            className={activeTab === tab.id ? "active" : undefined}
            data-tab={tab.id}
            tabIndex={activeTab === tab.id ? 0 : -1}
            onClick={() => {
              setUserHasClicked(true);
              setActiveTab(tab.id);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id="payroll"
        className={`tab-content ${activeTab === "payroll" ? "active" : ""}`}
        role="tabpanel"
        aria-labelledby="tab-payroll"
        tabIndex={0}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/f95a9859-4870-43d8-9381-27104c6858c0/payrollServices.png?"
          alt="Business Owners satisfied by their new payroll solution from Galactic"
        />
        <h2>Pay your people like a pro!</h2>
        <p>
          Stop worrying about wage and hour laws, payroll tax penalties, overwhelming
          paperwork and countless other tasks associated with operating a business.
          Outsource your headaches to us and acquire the peace of mind that comes
          with having Galactic on your team!
        </p>
        <p>
          Streamline your operations knowing that you have one source to help you
          with all of your human resource and payroll issues, no matter how big or
          small they may seem.
        </p>
        <p>
          No matter the size of your business, it is all big business to the owner and
          no two businesses are the same. We know this and work hard to tailor a schedule
          and system that works for you and your business!
        </p>
        <p className="tab-strong">Some services offered:</p>
        <ul>
          <li>Payroll Check Prep and Delivery – Shipped Nationwide</li>
          <li>Direct Deposit</li>
          <li>Electronic Onboarding of New Employees</li>
          <li>Online Portal for Employees and Employers</li>
          <li>IRS & Dept of Labor Audits</li>
          <li>Time & Attendance Systems</li>
          <li>Timesheet Reporting Customized – Labor Allocation Reports</li>
          <li>Pay Card Option Available</li>
          <li>Custom Client & Employee Reporting and Data Files</li>
          <li>Tax Deposits and Reporting – FICA, FUTA, SUTA Fed & State Withholding</li>
          <li>Tax Reporting for all Federal, State, and Local Requirements</li>
          <li>W-2’s</li>
          <li>Unemployment Claims Management</li>
          <li>E-Verify</li>
          <li>I-9 Compliance</li>
          <li>Fed, State, and Local Compliance – Min Wage and other local laws</li>
          <li>Complex & Certified Payrolls</li>
          <li>Paperless Options</li>
          <li>Wage and Hour Compliance and consulting</li>
        </ul>
      </div>

      <div
        id="workers"
        className={`tab-content ${activeTab === "workers" ? "active" : ""}`}
        role="tabpanel"
        aria-labelledby="tab-workers"
        tabIndex={0}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/6e84e4c1-b433-4e01-a0e1-c78686c98c5b/workCompServices.png?"
          alt="Filling out paperwork"
        />
        <h2>Protect your employees. Safeguard your business.</h2>
        <p>
          Having the right Workers’ Compensation plan for your operation is a
          critical factor for minimizing risk...
        </p>
        <p className="tab-strong">Some services offered:</p>
        <ul>
          <li>
            Workers’ Compensation Full Coverage at reduced rates, deductible programs
            available
          </li>
          <li>First Report of Injury</li>
          <li>Claims Administration</li>
          <li>Pay-as-you-go plan with No Year-End Audits</li>
          <li>Background Checks</li>
          <li>Drug Testing Program</li>
          <li>OSHA</li>
        </ul>
      </div>

      <div
        id="benefits"
        className={`tab-content ${activeTab === "benefits" ? "active" : ""}`}
        role="tabpanel"
        aria-labelledby="tab-benefits"
        tabIndex={0}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/93d2ca92-9501-4f4e-9126-6dc9306ab4cd/benefitsServices.png?"
          alt="Team of employees"
        />
        <h2>Better benefits = A better workforce</h2>
        <p>
          To attract and retain the best employees, you will want to offer the best
          benefits available.
        </p>
        <p className="tab-strong">Some services offered:</p>
        <ul>
          <li>PTO, Vacation, Sick Time Tracking – accrual and other methods</li>
          <li>Health Insurance Plans</li>
          <li>Health Savings Account program</li>
          <li>401k Retirement Plans and 5500 Testing</li>
          <li>IRA Retirement Plans</li>
          <li>Pre-Tax Section 125 Cafeteria Plan</li>
          <li>FSA – Flexible Spending Accounts – Medical and Childcare</li>
          <li>Supplemental Voluntary Benefits packages offered</li>
          <li>
            Benefits Reconciliation & Administration – ER Contributions and EE Deductions
          </li>
        </ul>
      </div>

      <div
        id="hr"
        className={`tab-content ${activeTab === "hr" ? "active" : ""}`}
        role="tabpanel"
        aria-labelledby="tab-hr"
        tabIndex={0}
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/22994345-ae0d-4263-affc-e28cf4edb2ff/hrServices.png?"
          alt="Woman getting hired"
        />
        <h2>Outsourcing HR is the future of your business.</h2>
        <p>Human Resources is an essential part of any successful business operation...</p>
        <p className="tab-strong">Some services offered:</p>
        <ul>
          <li>Electronic Onboarding of New Employees</li>
          <li>Child Support, Garnishment, & IRS Levy Deductions and Disbursements</li>
          <li>Unemployment Claims Response and Administration</li>
          <li>Background Checks</li>
          <li>Drug Testing Program</li>
          <li>COBRA Administration</li>
          <li>Employee Documents Retention</li>
          <li>Vacation, PTO, Sick Time tracking</li>
          <li>OSHA, HIPAA, FLSA, ADA, FMLA adherence and guidance</li>
          <li>E-Verify & I-9 Compliance</li>
          <li>Compliance with Local, State and Federal Agencies</li>
          <li>Disciplinary & Termination procedures</li>
          <li>Employee Handbooks</li>
        </ul>
      </div>
    </section>
  );
}
