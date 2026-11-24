import React, { useEffect, useRef, useState } from "react";
import "./portfolio.css";

// ─── DATA ────────────────────────────────────────────────────────────────────
const DATA = {
  name: "Akash Barman",
  initials: "AB",
  photo: "", // optional: put an image in /public and set e.g. "/akash.jpg"
  title: "Frontend Developer",
  email: "1998akashbarman@gmail.com",
  location: "Jabalpur",
  region: "Madhya Pradesh, India",
  about:
    "Frontend Developer with 2+ years of experience specializing in React.js, JavaScript, and TypeScript. Expert in translating Figma designs into scalable, pixel-perfect e-commerce interfaces while actively expanding into backend development to deliver full-stack solutions. Proven track record of optimizing web performance and collaborating with cross-functional teams.",
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
    { name: "Zoom Notary", desc: "Remote online notarization platform", from: "#ff8a3d", to: "#e2510a" },
    { name: "Funds Man", desc: "Investment & funds management dashboard", from: "#3d5afe", to: "#1a237e" },
    { name: "Etho Suit", desc: "Enterprise business suite application", from: "#26c6a2", to: "#00695c" },
    { name: "Tour Guide", desc: "Interactive travel guidance platform", from: "#ab47bc", to: "#4a148c" },
    { name: "Service Internal", desc: "Internal service management tool", from: "#455a64", to: "#111c22" },
  ],
  skillGroups: [
    { label: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"] },
    { label: "Frontend", items: ["React.js", "Next.js", "Redux Toolkit", "Material UI", "Tailwind CSS"] },
    { label: "Backend & DB", items: ["Node.js", "Express.js", "MongoDB", "Firebase", "Supabase"] },
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
  ["Experience", "#experience"],
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
      <header className="pf-header">
        <a className="pj-back" href="#projects">← Back to portfolio</a>
        <div className="pf-brand"><Logo /></div>
      </header>

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
            <div className="pj-gallery">
              {images.map((im) => (
                <Shot key={im.src} src={im.src} alt={im.alt || `${project.name} screenshot`} caption={im.caption} />
              ))}
            </div>
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

function Logo() {
  return (
    <span className="pf-logo">
      <svg viewBox="0 0 34 34" fill="none" stroke="#0b0b0b" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round">
        <path d="M17 6c1.2 0 2.2.6 2.8 1.6l9 15.2c1.2 2-.2 4.5-2.6 4.5H7.8c-2.4 0-3.8-2.5-2.6-4.5l9-15.2C14.8 6.6 15.8 6 17 6z" />
      </svg>
      <i />
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="pf-header">
      <div className="pf-brand">
        <Logo />
        <a className="pf-mail" href={`mailto:${DATA.email}`}>{DATA.email}</a>
      </div>
      <button className="pf-menu-btn" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <svg viewBox="0 0 16 16" fill="none" stroke="#0b0b0b" strokeWidth="1.6" strokeLinecap="round">
          <path d="M2 4h12M4 8h8M6 12h4" />
        </svg>
      </button>
      {open && (
        <nav className="pf-menu">
          {NAV.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
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
          2+ years of React.
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

function ExperienceCard() {
  // newest first in data; show oldest → newest so the faded top item is the oldest
  const items = [...DATA.experience].reverse();
  return (
    <div className="card" id="experience" style={{ "--d": 1 }}>
      <span className="tag">My Experience</span>
      <div className="tl">
        {items.map((e) => (
          <div className="tl-item" key={e.company}>
            <b>{e.role} at {e.company.split(" ")[0]}</b>
            <span>{e.period} · {e.place}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsCard() {
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const timer = useRef(null);
  const show = () => { clearTimeout(timer.current); setHover(true); };
  const hide = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setHover(false), 150); };
  useEffect(() => () => clearTimeout(timer.current), []);
  const n = DATA.projects.length;
  const next = () => setActive((a) => (a + 1) % n);
  const cur = DATA.projects[active];
  return (
    <div className="card projects-card" id="projects" style={{ "--d": 2 }}>
      <span className="tag">My Projects</span>
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
              onMouseEnter={show}
              onMouseLeave={hide}
              onFocus={show}
              onBlur={hide}
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
        <div className={`project-pop ${hover ? "show" : ""}`} role="tooltip" aria-hidden={!hover} onMouseEnter={show} onMouseLeave={hide}>
          <small>0{active + 1} / 0{n}</small>
          <b>{cur.name}</b>
          <p>{cur.details || cur.desc}</p>
          <a className="pop-link" href={`#/project/${cur.slug}`}>View project details →</a>
          <span>Click the card to see the next project</span>
        </div>
      </div>
      <div className="stack-info">
        <b>{cur.name}</b>
        <span>{cur.desc}</span>
      </div>
      <div className="stack-dots">
        {DATA.projects.map((p, i) => <i key={p.name} className={i === active ? "on" : ""} />)}
      </div>
    </div>
  );
}

function SkillsCard() {
  return (
    <div className="card skills-card" id="skills" style={{ "--d": 3 }}>
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

function MapCard() {
  return (
    <div className="card map-card" style={{ "--d": 4 }}>
      <span className="tag">Map</span>
      <svg viewBox="0 0 300 270" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#d6d6d6" strokeWidth="1">
        <path d="M-10 60 C60 40 120 90 200 70 S300 40 320 60" />
        <path d="M-10 110 C50 100 110 150 190 130 S290 110 320 130" />
        <path d="M-10 170 C70 150 130 200 210 185 S290 160 320 175" />
        <path d="M40 -10 C60 60 30 120 60 190 S50 260 70 290" />
        <path d="M110 -10 C130 50 100 110 130 180 S120 250 140 290" />
        <path d="M185 -10 C200 60 170 120 200 180 S195 250 215 290" />
        <path d="M250 -10 C265 50 240 120 265 190 S255 250 275 290" />
        <path d="M-10 220 L320 200" />
        <path d="M-10 30 L320 20" />
        <path d="M20 90 L280 150" />
        <path d="M30 150 L250 60" />
        <circle cx="156" cy="112" r="46" stroke="#e4e4e4" />
        <circle cx="156" cy="112" r="86" stroke="#eeeeee" />
      </svg>
      <div className="pin" />
      <div className="map-label">
        <b>{DATA.location.toUpperCase()}</b>
        <span>{DATA.region.toUpperCase()}</span>
      </div>
    </div>
  );
}

function WorkCard() {
  const [step, setStep] = useState(0);
  const s = DATA.steps[step];
  return (
    <div className="card work span-2" style={{ "--d": 5 }}>
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
  return (
    <div className="card about span-2" id="about" style={{ "--d": 6 }}>
      <span className="tag">About me</span>
      <p>{DATA.about}</p>
      <div className="chips">
        {DATA.skillGroups.flatMap((g) => g.items).slice(0, 12).map((s) => <span key={s}>{s}</span>)}
      </div>
    </div>
  );
}

function EducationCard() {
  const e = DATA.education;
  return (
    <div className="card edu" style={{ "--d": 7 }}>
      <span className="tag">Education</span>
      <h4>{e.degree}</h4>
      <p>{e.institution}</p>
      <p>{e.year}</p>
      <em>{e.note}</em>
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
    <div className="pf">
      <Header />
      <Hero />
      <main className="pf-grid">
        <ExperienceCard />
        <ProjectsCard />
        <SkillsCard />
        <MapCard />
        <WorkCard />
        <AboutCard />
        <EducationCard />
        <ContactCard />
      </main>
      <p className="pf-foot">Designed & built by {DATA.name} · {new Date().getFullYear()}</p>
    </div>
  );
}
