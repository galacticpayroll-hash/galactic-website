"use client";

import { useMemo, useState } from "react";

type Post = {
  title: string;
  date: string;
  summary: string;
  href: string;
  image: string;
  topics: string[];
};

const TOPICS = [
  { id: "all", label: "All" },
  { id: "human-resources", label: "Human Resources" },
  { id: "employee-spotlight", label: "Employee Spotlight" },
  { id: "benefits", label: "Benefits" },
  { id: "payroll", label: "Payroll" },
  { id: "employment-law", label: "Employment Law" },
];

const POSTS: Post[] = [
  {
    title: "Employee Spotlight: Rick Smith",
    date: "September 12, 2024",
    summary:
      "Meet Rick Smith, one of Galactic's longest-tenured salesman. In this edition of Galactic's Employee Spotlight, he reflects on the evolving sales landscape, the significance of customer service, and his steadfast commitment to our mission.",
    href:
      "https://www.linkedin.com/pulse/we-cant-go-back-its-same-motivation-pushing-us-forward-dm6je/?trackingId=wWUbNywCD8j0H%2Fe1uJaz7A%3D%3D",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/51db69ec-fa8b-4569-957f-9af50615fcb6/employee+spotlight.png?format=750w",
    topics: ["employee-spotlight"],
  },
  {
    title: "Employee Spotlight: Charles Allison",
    date: "November 27, 2024",
    summary:
      "Meet Charles Allison, a trusted veteran on our sales team. In this ediiton of Galactic's Employee Spotlight, he shares why supporting local businesses matters, how perseverance guides his work, and why stepping outside comfort zones leads to growth.",
    href:
      "https://www.linkedin.com/pulse/small-business-big-opportunities-building-stronger-community-j5pge/?trackingId=iqpgeKO4gVt1tU3niyeobQ%3D%3D",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/51db69ec-fa8b-4569-957f-9af50615fcb6/employee+spotlight.png?format=750w",
    topics: ["employee-spotlight"],
  },
  {
    title: "Employee Spotlight: John Wittig",
    date: "October 11, 2024",
    summary:
      "Meet John Wittig, our dedicated Operations Project Manager and the backbone of seamless day-to-day execution. In this edition of Galactic's Employee Spotlight, he shares how his honesty-first approach builds trust, keeps projects on track, and ensures every client knows they're taken care of.",
    href:
      "https://www.linkedin.com/pulse/proactive-honesty-taking-pride-efficiency-matters-galactic-inc--nb2he/?trackingId=4QLvuMNQNyuPa4Hj5dd%2F2Q%3D%3D",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/51db69ec-fa8b-4569-957f-9af50615fcb6/employee+spotlight.png?format=750w",
    topics: ["employee-spotlight"],
  },
  {
    title: "De Minimis Benefits: IRS Rules and Compliance",
    date: "February 2, 2025",
    summary:
      "Stay on top of the latest HR regulations with our comprehensive checklist. Avoid costly mistakes and keep your business compliant.",
    href: "https://newsletter.homeactions.net/landing_page/20651/225518",
    image:
      "https://images.squarespace-cdn.com/content/v1/5cd9752df8135a1b11827874/ce809bad-fead-4862-a1bc-1cd261f9f115/computer-keyboard-with-a-compliance-button-concep-2025-03-11-18-21-14-utc.jpg?format=750w",
    topics: ["human-resources"],
  },
  {
    title: "Should You Offer Employees a Payroll Card?",
    date: "April 1, 2025",
    summary:
      "This quick read breaks down the pros and cons of offering payroll cards as a payment option—what they are, how they work, and whether they could benefit both your business and your employees.",
    href: "https://newsletter.homeactions.net/landing_page/20651/222193",
    image:
      "https://77fe644c572ff1ba8a08-aa3fcb8dba820dc6b4fabb3e45b3ad4d.ssl.cf1.rackcdn.com/images/media/253505/summary_380/Layoffs.jpg?1742910855",
    topics: ["payroll"],
  },
  {
    title: "Who Can Work in the US?",
    date: "May 7, 2025",
    summary:
      "Learn the latest requirements and rules for employment eligibility in the United States. Understand Form I-9 updates, acceptable documents for verification, and important employer responsibilities to stay compliant in 2025.",
    href:
      "http://email.mail.homemail-two.com/c/eJxEjz1v4zAMhn-NtAQxKOrD9qDhEJzXu-3GQJKZWDhZLmQ2Qf994aBFN_LFQ_B5U8lU-Zpnj-CskrM3ipTVkrzqrTODRmXl4l0fo45aYdI3MDCbfjaIRo_OGafmILNHQAsDjsoBwNCZfrQhgr0NA4UQURhYQy7dsq10DGd-bl3aVln8wvy2C_1L4CRwqvTcCzFTe7Ehcd7q3lVigVNoackPEjjd3ku5hsY5lWN96QuclFM42qEXOFndo3NHiIjaGLnSGqkdZb8p-fPsiL8uZPP30BoxCwP3UA6FdM41vXx3qjO1_VrDSv4fxTXsTE2y__v7j8BLzOcn0f_yIfACJ95OFkA-PH4GAAD__-w2bcg",
    image:
      "https://77fe644c572ff1ba8a08-aa3fcb8dba820dc6b4fabb3e45b3ad4d.ssl.cf1.rackcdn.com/images/media/256161/article_380/GettyImages-1193899223.jpg?1745877362",
    topics: ["payroll"],
  },
  {
    title: "Stepping Away: The Value of Offering Employee Sabbaticals",
    date: "June 13, 2025",
    summary:
      "Discover how sabbatical leave can benefit both employees and employers by promoting well-being, reducing burnout, and boosting long-term productivity. Learn why offering sabbaticals is a valuable investment in your team’s success.",
    href:
      "http://email.mail.homemail-two.com/c/eJxEj8GO4yAMhp8GLlUj40BCDhxW1ea6e9tjRcBt0AIZEU-reftRqhnNzf71Wf7-kBNVvqboEAajZHRakTK9JKdGM2jbozJydT3EoCxNkzWINHm96GgDTdEAhVvsZXIIaMDipAYAsJ0eJ-MXMDdryfsFhYbiU-7WrdAxnPm5dWErMruV-W0X_S-Bs8C50nPPxEztxfrAaat7V4kFzr6FNT1I4Hx7z_nqG6eQj_WlL3BWg8LJ2FHgbPoRh-EIEVFbkIXKQu0o-03Jn2dH_HUhm7v71ohZaLj7fCiEc6rh5btTjdT2a_WF3D9ait-ZmmT39_cfgZclnZ9E__OHwAuceDsZAPlw-BkAAP__I9Nu1Q",
    image:
      "https://77fe644c572ff1ba8a08-aa3fcb8dba820dc6b4fabb3e45b3ad4d.ssl.cf1.rackcdn.com/images/media/256504/summary_260/Retail%20payroll.jpg?1746190805",
    topics: ["human-resources"],
  },
  {
    title: "The Key to Managing Remote Employees",
    date: "June 15, 2025",
    summary:
      "As remote work becomes the norm, managers are shifting from control to connection. This article explores how “micro-understanding”—a leadership style built on trust, empathy, and clear communication—is helping teams thrive across time zones. Learn the best practices for leading with impact in a hybrid world.",
    href:
      "http://email.mail.homemail-two.com/c/eJxEj81u6yAQRp8GNlEsGDzYXrC4iq637a7LCJtxjAq4wtNEffvKUavu5ueM5nxzilT4GoMDZVHL4FpNGo0kpztE6Iy1g1zdEqwPUxe8HbwdiKwBPfiAShvEYVhkdKAAVa9RW6UMNrhgD20bdNf2U4tWtCr7mJp1y3QUZ35szbxlmdzK_LEL80_AKGAs9NgTMVN9sn7muJW9KcQCRl_nNd5JwLh8pnT1leOcjvapL2DUVsOAfSdgRNOBtepY6q43SmbKE9Uj7C8l_54d458LWd3N10rMolU3nw6F-RzL_PTdqQSq-7X4TO6Npux3pirZvf5_EXCZ4vlB9J6-BFzUibcTKiXvDr4DAAD__0tqbfU]",
    image:
      "https://77fe644c572ff1ba8a08-aa3fcb8dba820dc6b4fabb3e45b3ad4d.ssl.cf1.rackcdn.com/images/media/257439/summary_260/4%20-%20management%20-%20GettyImages-905715546.jpg?1747273615",
    topics: ["human-resources", "employment-law"],
  },
  {
    title: "Silver Workers: No Substitute for Experience",
    date: "July 9, 2025",
    summary:
      "Explore the unique value that experienced, senior workers bring to the workforce. Learn why age and wisdom matter in today’s business environment and how silver workers contribute unmatched skills and reliability to an everchanging workplace.",
    href:
      "http://email.mail.homemail-two.com/c/eJxEj7Fu6zAMRb9GWoIYFC3J0qDhIXhe261jIMt0LFS2C5lN0L8vHLToRl4cguemkmnlax4DgjVKjkErUqaVFFRnrHYtKiPnMHXaO-utmfxI3iawLZJuO--cHxwMMgcENODQKwsArtGdN3EAMzlHMQ4oNCwxl2beFjqGMz-2Jm2LLGFm_thF-09gL7Bf6bEXYqb6ZGPivK17sxIL7GNNc76TwH76LOUaK-dUjvWpL7BXVqE3rhPYm7ZDa48QEXWn5ELLQPUo-0vJv2dH_HMha7jFWolZaLjFciikc17T03endaS6X9e4UHijYYk7U5UcXv-_CLwM-fwgei9fAi9w4u1kAOQ94HcAAAD___yDbdg",
    image:
      "https://77fe644c572ff1ba8a08-aa3fcb8dba820dc6b4fabb3e45b3ad4d.ssl.cf1.rackcdn.com/images/media/256334/article_380/GettyImages-2193895602.jpg?1746039014",
    topics: ["human-resources"],
  },
  {
    title: "Calculating Overtime With Bonuses",
    date: "July 15, 2025",
    summary:
      "Overtime isn’t always just time-and-a-half. If you earn regular bonuses for performance or attendance, those could increase your base pay—and your overtime rate. But not all bonuses count. Want to know which ones do? Read more to find out.",
    href:
      "http://email.mail.homemail-two.com/c/eJxEjz2P4yAQhn8NNFEsGPPlguIUndu77soI8CRGB3iFZxPtv1852tV28_GM5nlTydjomhcPwmjJF68kSj1y9NJqDXY0ZuKrjyYBSjUlG1NUzqgJMMmbHIMKYrTAswcBWjippRFi1IO-aQdKLdIqF5U2TIkachnWreJRnOm5DWmrvPiV6G1n4y8GM4O54XMvSIT9xYZEeWv70JAYzKGnNT-QwXx7L-UaOuVUjvalz2CWRsKknWUw69GCMeJYSusc8Io1Yj_CflP859kx_rrg3d9D70jElLiHciikc27p5btjW7Dv1xYq-n8Ya9gJOyf_9_cfBpeYz0_E_-WDwUWcaDtpIfjDw2cAAAD___C3bbI",
    image:
      "https://77fe644c572ff1ba8a08-aa3fcb8dba820dc6b4fabb3e45b3ad4d.ssl.cf1.rackcdn.com/images/media/250479/article_380/bonuses.jpg?1739475525",
    topics: ["payroll"],
  },
  {
    title: "White Collar? Blue Collar? New Collar!",
    date: "July 18, 2025",
    summary:
      "As college enrollment declines and tech evolves rapidly, a new category of skilled professionals is reshaping the workforce. “New-collar” workers—trained through bootcamps, apprenticeships, and self-study—are proving that degrees aren’t the only path to success. Is your company ready to hire for skills over credentials?",
    href:
      "http://email.mail.homemail-two.com/c/eJxEj09vszAMhz9NcqmKHIMTOOTwqnq5brcdqxBMiRZgCl6rffuJatNu_vNYfn4xJ17lmkaPYMno0TeGDdWavXFE6GprOz17Z6OdoI5uarswTNYFIDd1w0BkJ0Knk0dAgtaQsQA1VTRRi00zGte0Q0NWNbCElKt5W_gozvLYqrgtOvtZ5GNX9T-FvcJ-5ceeWYTLkw1R0rbu1cqisA8lzunOCvvpM-drKJJiPtqnvsLeWIMdtU5hT7VDa-FYoqkB9MLLwOUI-0vpv2fH-OdCF38LpbCIauAW8qEQz2mNT9-d15HLfl3Dwv6NhyXswkWLf_3_ovAypPOD-T1_KbzASbYTAei7x-8AAAD__w2IbcE",
    image:
      "https://77fe644c572ff1ba8a08-aa3fcb8dba820dc6b4fabb3e45b3ad4d.ssl.cf1.rackcdn.com/images/media/8553/summary_380/HR--general--2.jpg?1452405875",
    topics: ["human-resources"],
  },
  {
    title: "Running a Lean Machine in Your Workplace",
    date: "August 21, 2025",
    summary:
      "Lean principles have come a long way since Toyota’s early innovations. Today, they’re helping teams cut waste, boost productivity, and stay focused on customer value. From Kaizen culture to agile workflows, this article explores how modern businesses can streamline operations and empower employees—without sacrificing quality.",
    href:
      "http://email.mail.homemail-two.com/c/eJxEj81u6yAQRp8GNlGsYWCwvWBxFV1v212XEcbjGBXjCtNEffvKUavu5ueM5nwhRc71GieHYEnJyRnFirRkp1oibLW1vVzc3M9hQq-9Agq-A5rCPLe91mA7Y6dORoeABJ0iZQE0NTRTh8ZMqjXdaMgKA6uPqVm2lY_iXB9bE7ZVJrfU-rEL_U_gIHDI_NgT18rlyfpQ45b3JnMVOPgSlnhngcP8mdLVlxpDOtqnvsBBWYU9da3AgXSL1sKxRAAwcuV15HKE_aXk37Nj_HMhi7v5UrhWYeDm06EQzjGHp-_OeeKyX7Nf2b3xuPq9cpHVvf5_EXgZ4_nB_J6-BF7gVLcTAci7w-8AAAD__zaQbd4",
    image:
      "https://77fe644c572ff1ba8a08-aa3fcb8dba820dc6b4fabb3e45b3ad4d.ssl.cf1.rackcdn.com/images/media/253198/article_380/GettyImages-1551218815.jpg?1742494449",
    topics: ["human-resources"],
  },
];

export default function Page() {
  const [activeTopic, setActiveTopic] = useState("all");
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((post) => {
      const topicMatch =
        activeTopic === "all" || post.topics.includes(activeTopic);
      const textMatch =
        q.length === 0 ||
        `${post.title} ${post.summary} ${post.date}`.toLowerCase().includes(q);
      return topicMatch && textMatch;
    });
  }, [activeTopic, query]);

  return (
    <div className="blog-page">
      <nav className="topic-bar" aria-label="Blog topics">
        {TOPICS.map((topic) => (
          <button
            key={topic.id}
            className={`topic-btn ${activeTopic === topic.id ? "active" : ""}`}
            type="button"
            onClick={() => {
              setActiveTopic(topic.id);
              setQuery("");
            }}
          >
            {topic.label}
          </button>
        ))}
      </nav>

      <main className="blog-container">
        <div className="blog-search-filter">
          <form
            className="blog-search-bar"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search blog..."
              aria-label="Search blog"
            />
            <button type="submit" aria-label="Search">
              <i className="fas fa-magnifying-glass" aria-hidden="true" />
            </button>
          </form>
        </div>

        <div className="blog-posts">
          {filteredPosts.map((post) => (
            <article className="blog-post" key={post.title}>
              <img
                className="blog-post-image"
                src={post.image}
                alt={post.title}
              />
              <div className="blog-post-content">
                <h2>{post.title}</h2>
                <div className="meta">{post.date}</div>
                <p>{post.summary}</p>
                <a className="read-more-btn" href={post.href}>
                  Read More <i className="fas fa-arrow-right" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
