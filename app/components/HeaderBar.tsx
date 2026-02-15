"use client";

import { useEffect, useState } from "react";

function getTimezoneAbbr(date: Date, tz: string) {
  try {
    const parts = date
      .toLocaleTimeString("en-us", { timeZone: tz, timeZoneName: "short" })
      .split(" ");
    return parts[parts.length - 1] ?? "CT";
  } catch {
    return "CT";
  }
}

export default function HeaderBar() {
  const [showLeft, setShowLeft] = useState(true);
  const [timezone, setTimezone] = useState("CT");

  useEffect(() => {
    const update = () => setShowLeft(window.innerWidth > 600);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    let abbr = "CT";
    if (window.Intl && Intl.DateTimeFormat) {
      try {
        const userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (userTz) {
          abbr = getTimezoneAbbr(new Date(), userTz);
        }
      } catch {}
    }
    setTimezone(abbr);
  }, []);

  return (
    <div className="header-bar">
      <div className="header-bar-inner">
        {showLeft && (
          <div className="header-bar-left">
            <span className="header-bar-item">
              <i className="fas fa-clock header-bar-icon" aria-hidden="true" />
              <span className="header-bar-label">Hours:</span>
              <span className="header-bar-text">8:00 AM – 5:00 PM</span>
              <span className="header-bar-text">({timezone})</span>
            </span>
            <span className="header-bar-item">
              <i
                className="fas fa-envelope header-bar-icon"
                aria-hidden="true"
              />
              <span className="header-bar-label">Email:</span>
              <a
                href="mailto:payroll@galactic-inc.com"
                className="header-bar-link"
              >
                payroll@galactic-inc.com
              </a>
            </span>
          </div>
        )}
        <div className="header-bar-right">
          <span className="header-bar-item">
            <i className="fas fa-phone header-bar-icon phone" aria-hidden="true" />
            <span className="header-bar-label">Phone:</span>
            <a href="tel:2053222220" className="header-bar-link bold">
              205.322.2220
            </a>
          </span>
          <a
            href="https://www.facebook.com/galacticinc1?mibextid=kFxxJD"
            className="header-social-icon"
            title="Facebook"
          >
            <i className="fab fa-facebook-f" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/company/galactic-inc./"
            className="header-social-icon"
            title="LinkedIn"
          >
            <i
              className="fab fa-linkedin-in"
              aria-hidden="true"
              style={{ position: "relative", top: 2 }}
            />
          </a>
          <a
            href="https://www.galacticpayroll.com"
            className="header-social-icon"
            title="Home"
          >
            <i className="fas fa-home" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
