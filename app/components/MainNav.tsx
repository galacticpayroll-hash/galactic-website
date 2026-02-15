"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/faqs", label: "FAQs" },
  { href: "/blog", label: "Blog" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/login", label: "Login" },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="main-nav">
      <Link href="/" className="main-logo" aria-label="Galactic home">
        <Image src="/Logo Slammed.png" alt="Galactic" width={220} height={48} priority />
      </Link>
      <div className="main-nav-links">
        {LINKS.map((link) => {
          const isActive =
            pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={isActive ? "active" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
