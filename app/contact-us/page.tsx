"use client";

import Script from "next/script";
import { FormEvent, useEffect, useState } from "react";

declare global {
  interface Window {
    initMap?: () => void;
    google?: typeof google;
  }
}

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.initMap = () => {
      if (!window.google) return;
      const location = { lat: 33.418716580493566, lng: -86.79797299529069 };
      const gmapsAddressUrl =
        "https://www.google.com/maps?q=400+Vestavia+Parkway+Suite+402+Vestavia,+AL+35216";

      const map = new window.google.maps.Map(
        document.getElementById("gmap") as HTMLElement,
        {
          zoom: 19,
          minZoom: 16,
          maxZoom: 21,
          center: location,
          gestureHandling: "greedy",
          styles: [
            { featureType: "poi", stylers: [{ visibility: "off" }] },
            { featureType: "poi.business", stylers: [{ visibility: "off" }] },
          ],
        }
      );

      const markerIcon = {
        url: "https://ik.imagekit.io/k5xamaeoin/Untitled.svg?updatedAt=1752676463966",
        scaledSize: new window.google.maps.Size(192, 192),
        anchor: new window.google.maps.Point(96, 192),
      };

      const marker = new window.google.maps.Marker({
        position: location,
        map,
        icon: markerIcon,
        title: "Galactic",
      });

      const getPixelOffset = () =>
        window.innerWidth <= 600
          ? new window.google.maps.Size(0, 0)
          : new window.google.maps.Size(0, 35);

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="font-family: Poppins, sans-serif; font-size:14px; max-width:290px; line-height:1.6; word-wrap:break-word; margin: 0;">
            <strong>Galactic</strong><br/>
            400 Vestavia Parkway, Suite 402<br/>
            Vestavia, AL 35216<br/>
            <a href="${gmapsAddressUrl}" style="color:#005791; text-decoration:underline; font-weight:500;" target="_blank">View on Google Maps</a>
          </div>
        `,
        maxWidth: 320,
        pixelOffset: getPixelOffset(),
      });

      const openInfoWindowIfDesktop = () => {
        if (window.innerWidth > 600) {
          infoWindow.open(map, marker);
        } else {
          infoWindow.close();
        }
      };

      openInfoWindowIfDesktop();

      window.addEventListener("resize", () => {
        openInfoWindowIfDesktop();
        infoWindow.setOptions({ pixelOffset: getPixelOffset() });
        infoWindow.close();
        infoWindow.open(map, marker);
      });

      marker.addListener("click", () => {
        if (window.innerWidth > 600) {
          infoWindow.open(map, marker);
        } else {
          window.open(gmapsAddressUrl, "_blank");
        }
      });

      map.addListener("click", () => {
        window.open(gmapsAddressUrl, "_blank");
      });

      window.google.maps.event.addDomListener(window, "resize", () => {
        map.setCenter(location);
      });

      window.google.maps.event.addListener(infoWindow, "domready", () => {
        const iwOuter = document.querySelector(".gm-style-iw");
        const iwCloseBtn = document.querySelector(".gm-ui-hover-effect");
        if (iwCloseBtn && iwCloseBtn.parentNode) {
          iwCloseBtn.parentNode.removeChild(iwCloseBtn);
        }
        if (iwOuter && iwOuter.parentElement) {
          iwOuter.parentElement.style.padding = "0";
          iwOuter.style.maxHeight = "unset";
          iwOuter.style.overflow = "visible";
          iwOuter.style.paddingTop = "0";
          iwOuter.style.marginTop = "0";
        }
        const iwContent = document.querySelector(".gm-style-iw-d");
        if (iwContent) {
          (iwContent as HTMLElement).style.marginTop = "0";
          (iwContent as HTMLElement).style.paddingTop = "0";
        }
      });
    };
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("There was an error. Please try again.");
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="contact-info">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/6d9523b8-92e6-4325-8774-4ab60e02dc5e/GetinTouch.png?"
            alt="Get in Touch"
          />
          <p>
            Have a question? Check our{" "}
            <a
              href="https://galacticpayroll.com/faqs"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ
            </a>{" "}
            page for answers to our most commonly asked questions.
          </p>
          <div className="info-item">
            <div className="info-icon">
              <i className="fa-solid fa-location-dot" aria-hidden="true" />
            </div>
            <div className="info-details">
              400 Vestavia Pkwy Suite 402
              <br />
              Vestavia, AL 35216
            </div>
          </div>
          <div className="phone-row">
            <div className="info-icon">
              <i className="fa-solid fa-phone" aria-hidden="true" />
            </div>
            <a href="tel:205.322.2220" className="phone-link">
              205.322.2220
            </a>
          </div>
          <div className="info-item">
            <div className="info-icon">
              <i className="fa-solid fa-envelope" aria-hidden="true" />
            </div>
            <div className="info-details">
              <a href="mailto:payroll@galactic-inc.com">
                payroll@galactic-inc.com
              </a>
              <br />
              <a href="mailto:sales@galactic-inc.com">sales@galactic-inc.com</a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <div className="contact-form-heading-wrapper">
            <div className="contact-form-heading">Contact Us</div>
            <span className="contact-form-bar" />
          </div>
          <form
            action="https://formsubmit.co/payroll@galactic-inc.com"
            method="POST"
            onSubmit={onSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <div className="form-row">
              <input type="text" name="Name" placeholder="Name*" required />
              <input type="email" name="Email" placeholder="Email*" required />
            </div>
            <div className="form-row">
              <input type="text" name="Phone" placeholder="Phone" />
              <input type="text" name="Subject" placeholder="Subject*" required />
            </div>
            <div className="form-row">
              <textarea name="Message" placeholder="Your Message*" required />
            </div>
            <button type="submit">SEND MESSAGE</button>
            {submitted && (
              <div className="thank-you">
                Thank you for your message! We'll be in touch soon.
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="contact-map-social">
        <div className="map-container">
          <div id="gmap" />
        </div>
        <div className="social-container">
          <h3>FOLLOW US ON SOCIAL MEDIA</h3>
          <div className="social-buttons">
            <a
              href="https://www.facebook.com/galacticinc1?mibextid=kFxxJD"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/company/galactic-inc./"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUqZFNu4btZfMKckWyZjswqBNNqBdWa-U&callback=initMap"
        strategy="afterInteractive"
      />
    </>
  );
}
