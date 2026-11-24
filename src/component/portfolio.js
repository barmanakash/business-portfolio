import React, { useEffect, useRef, useState } from "react";
import "./portfolio.css";

// ─── DATA ────────────────────────────────────────────────────────────────────
const DATA = {
  name: "Akash Barman",
  initials: "AB",
  photo: "/projects/akash_photo1.jpeg", // image lives in /public/projects
  title: "Frontend Developer",
  email: "1998akashbarman@gmail.com",
  location: "Jabalpur",
  region: "Madhya Pradesh, India",
  about: {
    headline: "Full Stack Developer | MERN Stack | AI Integration | AI Voice Agents | WordPress",
    intro: [
      "Hi! I’m Akash Barman, a Full Stack Developer from India specializing in MERN Stack Development, AI Integration, AI Voice Agents, and WordPress Development.",
      "I help businesses, startups, and entrepreneurs turn their ideas into reliable, scalable, and user-friendly digital solutions.",
    ],
    servicesTitle: "My Services",
    services: [
      {
        title: "Full Stack Web Development (MERN Stack)",
        items: [
          "Custom web application development",
          "Frontend development using React.js, NextJs, JavaScript, HTML, CSS, and Material UI (MUI)",
          "Backend development using Python, Node.js and Express.js",
          "Database design and management using Mysql, PostGres, MongoDB",
          "Responsive and high-performance web applications",
          "Motion and animation for interactive web experiences",
          "Smooth UI animations and transitions",
        ],
      },
      {
        title: "AI Integration & Automation",
        items: [
          "AI-powered feature integration into web applications",
          "AI chatbots and intelligent assistants",
          "AI Voice Agents for automated conversations and customer support",
          "Voice-based AI assistants and conversational automation",
          "Workflow automation",
          "AI-powered tools and business solutions",
        ],
      },
      {
        title: "WordPress Development",
        items: [
          "Professional business websites",
          "Custom WordPress website development",
          "Responsive website design",
          "Website customization and maintenance",
        ],
      },
    ],
    whyTitle: "Why Work With Me?",
    why: [
      "Clean, maintainable, and scalable code",
      "Focus on performance and user experience",
      "Clear communication and a professional approach",
      "Commitment to delivering quality solutions",
      "Focus on understanding your business requirements",
    ],
    closing: [
      "Whether you need a complete web application, AI-powered functionality, an intelligent voice agent, professional WordPress website, I’m ready to help.",
      "Let’s discuss your project and turn your idea into reality!",
    ],
  },
  experience: [
    { role: "Frontend Developer", company: "SVAM International Inc.", period: "Aug 2024 – Mar 2025", place: "Noida" },
    { role: "Associate Professional Software Engineer", company: "DXC Technology", period: "Feb 2022 – May 2023", place: "Bengaluru" },
    { role: "Associate Trainee Engineer", company: "IGT Solutions", period: "Dec 2021 – Jan 2022", place: "Pune" },
  ],
  // Each project can optionally have these fields — the detail page only shows the ones you fill in:
  //   details: "short text for the hover box",
  //   overview: "longer description of the project",
  //   role: "Frontend Developer", year: "2024", status: "Live",
  //   stack: ["React.js", "TypeScript"], stackLabel: "Built with" (optional heading for the stack chips),
  //   features: ["Feature one", "Feature two"],
  //   liveUrl: "https://...", repoUrl: "https://github.com/...",
  //   images: [{ src: "/projects/zoom-1.png", alt: "...", caption: "What this screenshot shows" }]  (image files go in /public/projects)
  projects: [
    {
      name: "makeColors",
      desc: "Digital agency website for full-stack web apps with AI integration",
      details: "Landing page for a digital agency that builds full-stack web apps with AI agents, chatbots and RAG pipelines built in.",
      overview:
        "makeColors is the website for a digital agency based in Jabalpur, India that designs and builds full-stack web applications and wires AI agents, chatbots and RAG pipelines directly into the product. The landing page leads with one idea, software that converts along with its users, and backs it up visually: a layered hero with a product preview, an app.js code window, a colour palette card and an AI support-agent chat, followed by a scrolling strip of the services and technologies the team works with.",
      stackLabel: "Services & tech shown on the site",
      stack: ["AI Agents", "Chatbots", "RAG pipelines", "CI/CD", "REST APIs", "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
      features: [
        "Dark theme with a light/dark toggle in the navigation bar",
        "Floating navigation with Services, How it works, About and Contact, plus a Start a project button",
        "Hero headline with an italic gradient highlight and two clear calls to action",
        "Layered product mockups: browser preview, code window, palette card and AI support chat",
        "Proof-points row: 5+ years of experience, React to RAG, remote-first from Jabalpur",
        "Horizontal marquee of services and technologies below the hero",
      ],
      images: [
        {
          src: "/projects/makecolors-home.png",
          alt: "makeColors landing page hero in dark mode",
        },
      ],
      from: "#4f7cff",
      to: "#0f1a44",
    },
    {
      name: "FriendRide",
      desc: "Verified community platform for shared two-wheeler commutes",
      details: "Landing page for a verified-community platform that matches two-wheeler commuters travelling the same route, with safety built in.",
      overview:
        "The FriendRide landing page presents a verified-community platform for shared two-wheeler commuting. It is built around the line “Your Route. Your Ride. Shared Safely.” and explains the idea simply: connect with verified people travelling along the same route, with no detours and no surge pricing. The hero pairs the pitch with a dark route-map card showing an 88% route match, a pickup point and the number of active corridors, and three feature cards below cover verified members, route-based matching and safety.",
      features: [
        "Clean light interface with a green brand colour and rounded card layout",
        "Hero headline with a gradient highlight on “Your Ride.”, plus Get Started and How It Works buttons",
        "Dark route-map card with a floating Route Match badge, pickup point, active corridors count and a Verified Community badge",
        "Social proof row with member avatars and headline stats",
        "Verified Members card with Aadhaar, work email and selfie verification chips",
        "Route-Based Matching card with a small corridor-overlap graphic showing the overlap percentage",
        "Safety First card with a live-trip pulse line and a helmet check indicator",
      ],
      images: [
        {
          src: "/projects/FriendRide-home.png",
          alt: "FriendRide landing page with the route-map hero and three feature cards",
        },
      ],
      from: "#12b886",
      to: "#064e3b",
    },
    {
      name: "Khana",
      desc: "Restaurant website with a menu showcase and table booking",
      details: "Restaurant website with a categorised menu of dish cards, order buttons and a Book a table call to action.",
      overview:
        "Khana is a restaurant website with a fresh green look. The navigation bar links to Home, About, Menu, Event and Visit us, with a Book a table button always within reach. This screenshot shows the menu section, titled “Try Our Specialities”, where visitors browse by category and see each dish as a card with a round plate photo, its price, a favourite heart and an Order Now button, with a More Recipes link at the end of the grid.",
      features: [
        "Green navigation bar with Home, About, Menu, Event and Visit us links and a Book a table button",
        "Menu section with category tabs for starters, dishes, desserts and drinks, each with a line icon",
        "Dish cards with a round plate photo in a green ring, the dish name and a price tag",
        "Favourite heart on every dish card",
        "Order Now button on every dish",
        "More Recipes link with an arrow below the grid",
        "Soft light-blue background with a faint hand-drawn food pattern",
      ],
      images: [
        {
          src: "/projects/Khana-resto-middile.png",
          alt: "Khana restaurant website menu section with category tabs and dish cards",
        },
      ],
      from: "#7ac05a",
      to: "#2e6b1f",
    },
    {
      name: "Meeting Scheduler",
      desc: "Meeting management dashboard with reports and availability settings",
      details: "Dashboard for scheduling and tracking meetings, with attendance reports, Excel and PDF export, and working-hours settings.",
      overview:
        "Meeting Scheduler is a dashboard for scheduling and tracking meetings, shown here with a teacher account. A deep indigo sidebar links Dashboard, Meetings, Reports, Availability and Profile. The dashboard summarises total, upcoming, completed and cancelled meetings along with an overall attendance rate. The Meetings page lists every meeting as a card with search and status filters, Reports & Analytics adds date filters, charts and Excel or PDF export, and Availability Settings lets the user set working hours, working days, holidays and blocked time slots.",
      features: [
        "Deep indigo sidebar with Dashboard, Meetings, Reports, Availability and Profile, plus a user card with a role badge and Logout",
        "Dashboard stat cards for total, upcoming, completed and cancelled meetings, with an overall attendance rate bar",
        "Today’s Meetings and Upcoming Meetings panels with friendly empty states",
        "Meetings page with search and All, Scheduled, Completed, Cancelled and Rescheduled filters",
        "Meeting cards showing type, status, date and time, participants, and Join Meet and Cancel actions",
        "Reports & Analytics with a date range filter, summary stats, an attendance pie chart and a meetings-by-type bar chart",
        "Excel and PDF export buttons on the reports page",
        "Availability settings for working hours, working days, holidays and blocked time slots",
      ],
      images: [
        { src: "/projects/saas1.png", title: "Dashboard", alt: "Meeting Scheduler dashboard with meeting stats and attendance rate" },
        { src: "/projects/saas2.png", title: "Meetings", alt: "Meeting Scheduler meetings page with search, filters and meeting cards" },
        { src: "/projects/saas3.png", title: "Reports & Analytics", alt: "Meeting Scheduler reports page with attendance and meeting type charts" },
        { src: "/projects/saas4.png", title: "Availability Settings", alt: "Meeting Scheduler availability settings with working hours and days" },
      ],
      from: "#4f46e5",
      to: "#1e1b6e",
    },
  ],
  skillGroups: [
    { label: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3"] },
    { label: "Frontend", items: ["React.js", "Next.js", "Redux Toolkit", "Material UI", "Tailwind CSS", "Animations & motion"] },
    { label: "Backend & DB", items: ["Node.js", "Express.js", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase"] },
    { label: "AI & Automation", items: ["AI integration", "AI chatbots", "AI voice agents", "Workflow automation"] },
    { label: "WordPress", items: ["Custom websites", "Responsive design", "Customization & maintenance"] },
    { label: "Tools", items: ["Socket.io", "RESTful APIs", "Git / GitLab", "Webpack", "Vite"] },
  ],
  coverSkills: ["React.js", "TypeScript", "Next.js", "Redux"],
  education: {
    degree: "B.Tech — Information Technology",
    institution: "Shri Ram Institute of Technology (SRIT), Jabalpur",
    year: "2017 – 2021",
    note: "CGPA 7.13",
  },
  steps: [
    { title: "Discovery Call", text: "We start by talking through your goals, users and constraints, then agree on scope, timeline and the APIs the interface will need." },
    { title: "Design Review", text: "I go through the Figma files, flag edge cases and responsive states, and plan a reusable component structure." },
    { title: "Build", text: "I build pixel-perfect React and TypeScript components with clean state management and fewer unnecessary re-renders." },
    { title: "Integrate", text: "RESTful APIs and real-time features get connected to your backend, in close collaboration with your engineers." },
    { title: "Ship & Iterate", text: "Git workflow, code reviews and CI/CD take it to production, then we iterate on feedback and performance." },
  ],
};

// URL-friendly id for each project, used by the detail page link (#/project/<slug>)
DATA.projects.forEach((p) => {
  p.slug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
});

const NAV = [
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

// ─── SMALL PIECES ────────────────────────────────────────────────────────────
// ─── ROUTING (hash based, no extra dependency) ───────────────────────────────
function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const on = () => setHash(window.location.hash);
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return hash;
}

function Shot({ src, alt, caption }) {
  const [ok, setOk] = useState(true);
  if (!ok) {
    // live site: hide a missing image quietly; while developing: show where the file should go
    if (process.env.NODE_ENV === "production") return null;
    return (
      <figure className="pj-shot">
        <div className="pj-missing">
          <span>Screenshot not found.<br />Save the image as <code>public{src}</code> and refresh.</span>
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    );
  }
  return (
    <figure className="pj-shot">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => { console.warn(`Project image not found: ${src}`); setOk(false); }}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function SlideImg({ src, alt, eager }) {
  const [ok, setOk] = useState(true);
  if (!ok) {
    if (process.env.NODE_ENV === "production") return null;
    return (
      <div className="pj-missing">
        <span>Screenshot not found.<br />Save the image as <code>public{src}</code> and refresh.</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      draggable="false"
      loading={eager ? "eager" : "lazy"}
      onError={() => { console.warn(`Project image not found: ${src}`); setOk(false); }}
    />
  );
}

function Carousel({ images, name }) {
  const [i, setI] = useState(0);
  const startX = useRef(null);
  const n = images.length;
  const go = (d) => setI((c) => (c + d + n) % n);
  const cur = images[i];

  return (
    <div
      className="pj-car"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${name} screenshots`}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
    >
      <div
        className="pj-car-view"
        onPointerDown={(e) => { startX.current = e.clientX; }}
        onPointerUp={(e) => {
          if (startX.current === null) return;
          const dx = e.clientX - startX.current;
          startX.current = null;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); // swipe
        }}
        onPointerCancel={() => { startX.current = null; }}
      >
        <div className="pj-car-track" style={{ transform: `translateX(-${i * 100}%)` }}>
          {images.map((im, idx) => (
            <div className="pj-car-slide" key={im.src} aria-hidden={idx !== i}>
              <SlideImg src={im.src} alt={im.alt || `${name} screenshot ${idx + 1}`} eager={idx === 0} />
            </div>
          ))}
        </div>
        <button type="button" className="pj-car-btn prev" aria-label="Previous screenshot" onClick={() => go(-1)}>‹</button>
        <button type="button" className="pj-car-btn next" aria-label="Next screenshot" onClick={() => go(1)}>›</button>
      </div>

      <div className="pj-car-bar">
        <span className="pj-car-title">{cur.title || `Screenshot ${i + 1}`}</span>
        <div className="pj-car-dots">
          {images.map((im, idx) => (
            <button
              type="button"
              key={im.src}
              className={idx === i ? "on" : ""}
              aria-label={`Go to screenshot ${idx + 1}`}
              aria-current={idx === i}
              onClick={() => setI(idx)}
            />
          ))}
        </div>
        <span className="pj-car-count">{i + 1} / {n}</span>
      </div>
    </div>
  );
}

function ProjectPage({ project }) {
  const list = DATA.projects;
  const n = list.length;
  const i = list.findIndex((p) => p.slug === project.slug);
  const prev = list[(i - 1 + n) % n];
  const next = list[(i + 1) % n];
  const meta = [["Role", project.role], ["Year", project.year], ["Status", project.status]].filter(([, v]) => v);
  const stack = project.stack || [];
  const features = project.features || [];
  const images = (project.images || []).map((im) => (typeof im === "string" ? { src: im } : im));

  return (
    <div className="pf">
      <Header />

      <section className="pj-hero" style={{ background: `linear-gradient(145deg, ${project.from}, ${project.to})` }}>
        <small>0{i + 1} / 0{n}</small>
        <h1>{project.name}</h1>
        <p>{project.desc}</p>
        {(project.liveUrl || project.repoUrl) && (
          <div className="pj-links">
            {project.liveUrl && <a className="pj-btn" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
            {project.repoUrl && <a className="pj-btn ghost" href={project.repoUrl} target="_blank" rel="noopener noreferrer">Source code ↗</a>}
          </div>
        )}
      </section>

      {meta.length > 0 && (
        <div className="pj-meta">
          {meta.map(([k, v], idx) => (
            <div className="card" key={k} style={{ "--d": idx + 1 }}>
              <small>{k}</small>
              <b>{v}</b>
            </div>
          ))}
        </div>
      )}

      <div className="pj-body">
        {images.length > 0 && (
          <div className="card wide" style={{ "--d": 1 }}>
            <span className="tag">Screenshots</span>
            {images.length > 1 ? (
              <Carousel images={images} name={project.name} />
            ) : (
              <div className="pj-gallery">
                {images.map((im) => (
                  <Shot key={im.src} src={im.src} alt={im.alt || `${project.name} screenshot`} caption={im.caption} />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="card about wide" style={{ "--d": 2 }}>
          <span className="tag">Overview</span>
          <p>{project.overview || project.desc}</p>
        </div>

        {features.length > 0 && (
          <div className="card" style={{ "--d": 3 }}>
            <span className="tag">Key features</span>
            <ul className="pj-list">
              {features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        )}

        {stack.length > 0 && (
          <div className="card" style={{ "--d": 4 }}>
            <span className="tag">{project.stackLabel || "Built with"}</span>
            <div className="chips">
              {stack.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        )}
      </div>

      <div className="pj-navs">
        <a className="card pj-nav" href={`#/project/${prev.slug}`} style={{ "--d": 6 }}>
          <small>← Previous</small>
          <b>{prev.name}</b>
        </a>
        <a className="card pj-nav" href={`#/project/${next.slug}`} style={{ "--d": 7 }}>
          <small>Next →</small>
          <b>{next.name}</b>
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const hash = useHash();
  const match = hash.match(/^#\/project\/([\w-]+)/);
  const project = match ? DATA.projects.find((p) => p.slug === match[1]) : null;
  const slug = project ? project.slug : null;
  const prevSlug = useRef(null);

  useEffect(() => {
    if (slug) {
      window.scrollTo(0, 0); // opening a project page starts at the top
    } else if (prevSlug.current) {
      // coming back from a project page: jump to the section from the link (e.g. #projects)
      const id = window.location.hash.slice(1);
      const el = id && !id.startsWith("/") ? document.getElementById(id) : null;
      if (el) el.scrollIntoView();
      else window.scrollTo(0, 0);
    }
    prevSlug.current = slug;
  }, [slug]);

  return project ? <ProjectPage key={slug} project={project} /> : <Home />;
}

function Header() {
  return (
    <header className="pf-nav-wrap">
      <nav className="pf-nav" aria-label="Main">
        <a className="pf-nav-logo" href="#top" aria-label="Back to top">
          <img src="/projects/akash_photo1.jpeg" alt={DATA.name} />
        </a>
        <ul className="pf-nav-links">
          {NAV.map(([label, href]) => (
            <li key={label}><a href={href}>{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="pf-hero">
      <h1 className="pf-title">
        <span className="line">
          Hi, I’m{" "}
          <span className="pf-avatar">
            {DATA.photo ? <img src={DATA.photo} alt={DATA.name} /> : DATA.initials}
          </span>{" "}
          {DATA.name}!
        </span>
        <span className="line muted">
          I’m a <span style={{ color: "var(--ink)" }}>{DATA.title}</span> with
        </span>
        <span className="line accent">
          4+ years of React.
          <span className="pf-status"><i />Open to work</span>
        </span>
      </h1>
      <div className="pf-cta">
        <a className="pf-btn" href={`mailto:${DATA.email}`}>Get in touch</a>
        <p>Feel free to explore my portfolio and reach out — I’d love to connect!</p>
      </div>
    </section>
  );
}

function ProjectsCard() {
  const [active, setActive] = useState(0);
  const n = DATA.projects.length;
  const next = () => setActive((a) => (a + 1) % n);
  const cur = DATA.projects[active];
  return (
    <div className="card projects-card span-2" id="projects" style={{ "--d": 2 }}>
      <span className="tag">My Projects</span>
      <div className="projects-body">
      <div className="stack-wrap">
        {DATA.projects.map((p, i) => {
          const pos = (i - active + n) % n;
          const visible = pos < 3;
          const thumb = p.images && p.images[0] ? (p.images[0].src || p.images[0]) : null;
          return (
            <button
              key={p.name}
              className="stack-card"
              onClick={next}
              aria-label={`Show next project (current: ${cur.name})`}
              style={{
                backgroundImage: thumb
                  ? `linear-gradient(180deg, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.72)), url(${thumb}), linear-gradient(145deg, ${p.from}, ${p.to})`
                  : `linear-gradient(145deg, ${p.from}, ${p.to})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                zIndex: 10 - pos,
                opacity: visible ? 1 - pos * 0.18 : 0,
                pointerEvents: pos === 0 ? "auto" : "none",
                transform: `translateX(-50%) translateY(${pos * 10}px) scale(${1 - pos * 0.09})`,
              }}
            >
              <small>0{i + 1}</small>
              <strong>{p.name}</strong>
            </button>
          );
        })}
      </div>
      <div className="proj-detail">
        <small>0{active + 1} / 0{n}</small>
        <h3>{cur.name}</h3>
        <p className="proj-desc">{cur.desc}</p>
        <p className="proj-more">{cur.details}</p>
        <div className="proj-actions">
          <a className="pop-link" href={`#/project/${cur.slug}`}>View project details →</a>
          <span>Click the card to see the next project</span>
        </div>
        <div className="stack-dots">
          {DATA.projects.map((p, i) => <i key={p.name} className={i === active ? "on" : ""} />)}
        </div>
      </div>
      </div>
    </div>
  );
}

function SkillsCard() {
  return (
    <div className="card skills-card" style={{ "--d": 3 }}>
      <span className="tag">What I’m using</span>
      <div className="cover">
        <h3>Tech<br />Stack</h3>
        <div className="cover-chips">
          {DATA.coverSkills.map((s) => <span key={s}>{s}</span>)}
        </div>
      </div>
      <div className="skills-groups">
        <b>Also:</b> Node.js, MongoDB, Firebase, Supabase, Tailwind, MUI, Git
      </div>
    </div>
  );
}

function WorkCard() {
  const [step, setStep] = useState(0);
  const s = DATA.steps[step];
  return (
    <div className="card work span-3" style={{ "--d": 5 }}>
      <span className="tag">How I work</span>
      <h3>0{step + 1} {s.title}</h3>
      <p>{s.text}</p>
      <div className="steps" role="tablist">
        {DATA.steps.map((st, i) => (
          <button
            key={st.title}
            role="tab"
            aria-selected={i === step}
            className={i === step ? "on" : ""}
            onClick={() => setStep(i)}
          >
            Step 0{i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

function AboutCard() {
  const a = DATA.about;
  return (
    <div className="card about about-full span-3" id="about" style={{ "--d": 6 }}>
      <span className="tag">About me</span>
      <h3 className="about-headline">{a.headline}</h3>
      {a.intro.map((t) => <p key={t}>{t}</p>)}

      <h4 className="about-sub">{a.servicesTitle}</h4>
      <div className="about-services">
        {a.services.map((s, i) => (
          <div className="about-service" key={s.title}>
            <b><i>0{i + 1}</i>{s.title}</b>
            <ul className="pj-list">
              {s.items.map((it) => <li key={it}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h4 className="about-sub">{a.whyTitle}</h4>
      <div className="chips">
        {a.why.map((w) => <span key={w}>{w}</span>)}
      </div>

      <div className="about-closing">
        {a.closing.map((t, i) => (
          i === a.closing.length - 1 ? <strong key={t}>{t}</strong> : <p key={t}>{t}</p>
        ))}
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="card skills-full span-3" id="skills" style={{ "--d": 7 }}>
      <span className="tag">Skills</span>
      <div className="skills-cols">
        {DATA.skillGroups.map((g) => (
          <div className="skills-col" key={g.label}>
            <h4>{g.label}</h4>
            <div className="chips">
              {g.items.map((s) => <span key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="card contact span-3" id="contact" style={{ "--d": 8 }}>
      <div>
        <h2>Let’s build <em>something.</em></h2>
        <p>{DATA.email} · {DATA.location}, {DATA.region}</p>
      </div>
      <a className="pf-btn" href={`mailto:${DATA.email}`}>Book a call</a>
    </div>
  );
}

// ─── MAIN ────────────────────────────────────────────────────────────────────
function Home() {
  return (
    <div className="pf" id="top">
      <Header />
      <Hero />
      <main className="pf-grid">
        <ProjectsCard />
        <SkillsCard />
        <WorkCard />
        <SkillsSection />
        <AboutCard />
        <ContactCard />
      </main>
      <p className="pf-foot">Designed & built by {DATA.name} · {new Date().getFullYear()}</p>
    </div>
  );
}
