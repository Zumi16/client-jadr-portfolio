import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import CircleIcon from "@mui/icons-material/Circle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import OpenInFullRoundedIcon from "@mui/icons-material/OpenInFullRounded";
import HeadphonesRoundedIcon from "@mui/icons-material/HeadphonesRounded";

const navItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Experience", "experience"],
  ["Work", "work"],
  ["Audio", "audio-mixing"],
  ["Process", "process"],
];

const services = [
  {
    title: "Administrative Support",
    description: "Keep the business organized behind the scenes.",
    items: ["Data entry", "Documentation", "Information organization", "Record maintenance", "General virtual assistance"],
  },
  {
    title: "Customer Support",
    description: "Give your customers professional and responsive assistance.",
    items: ["Customer inquiries", "Email support", "Issue resolution", "Follow-ups", "Account assistance"],
  },
  {
    title: "CRM & Data Management",
    description: "Keep information accurate, organized, and accessible.",
    items: ["CRM updates", "Customer records", "Case documentation", "Information verification", "Account updates"],
  },
  {
    title: "Email Management",
    description: "Keep your inbox organized and communication moving.",
    items: ["Inbox organization", "Email categorization", "Routine responses", "Follow-ups", "Message prioritization"],
  },
  {
    title: "Social Media & Canva",
    description: "Support your online presence with social media management, marketing, and graphic design.",
    items: ["Social media management", "Social media marketing", "Canva graphics", "Graphic design", "Content creation"],
  },
  {
    title: "Reels & Video Content",
    description: "Bring your content to life with short-form reels and videos.",
    items: ["Business reels", "Instagram reels", "Daily vlog content", "Quote videos"],
  },
  {
    title: "Audio & Sound Mixing",
    description: "Audio and sound mixing support for artists and their music.",
    items: ["Audio mixing", "Sound mixing", "Audio editing", "FL Studio"],
  },
];

const strengths = [
  ["Real customer experience", "Direct experience helping customers in fast-paced professional environments."],
  ["Detail-oriented", "Careful documentation, information verification, and accurate record handling."],
  ["Adaptable", "Experience across different industries, systems, processes, and customer needs."],
  ["Privacy-conscious", "Trusted with sensitive financial and customer information under security procedures."],
];

const processSteps = [
  ["Discover", "Understand your business and the task."],
  ["Organize", "Prioritize information and requirements."],
  ["Execute", "Complete the task accurately and efficiently."],
  ["Review", "Check the work carefully before delivery."],
  ["Communicate", "Keep you informed and clarify what is needed."],
  ["Deliver", "Provide organized, completed work."],
];

const tools = [
  ["Administrative", "Data Entry", "Documentation", "Email Management", "Administrative Support"],
  ["Customer Support", "Customer Service", "Issue Resolution", "Account Support", "Communication"],
  ["Digital", "Canva & Graphic Design", "Social Media Management", "Social Media Marketing", "Content Creation", "CRM"],
  ["Creative", "FL Studio", "Audio Editing", "Audio & Sound Mixing", "Music Production", "Reels & Video Content"],
];

const faqItems = [
  ["What services do you offer?", "Administrative support, customer support, CRM and data entry, email management, social media management and marketing, graphic design, reels and video content, and audio and sound mixing."],
  ["Are you available for remote work?", "Yes. I am based in the Philippines and available for remote opportunities."],
  ["Can you work with recurring tasks?", "Yes. Recurring administrative, customer-support, data, and digital tasks can be organized into a consistent workflow."],
  ["Do you handle sensitive information?", "My background includes working with sensitive customer and financial information while following privacy and security procedures."],
  ["How can I contact you?", "Email jadrpanes17@gmail.com or call +63 945 274 9552."],
];

const projectTabs = [
  ["support", "Customer support"],
  ["crm", "CRM & data"],
  ["email", "Email management"],
  ["social", "Social & Canva"],
];

const videoSamples = [
  { file: "Business Reel.mp4", title: "Business Reel", type: "Business content" },
  { file: "Instagram Reel - Daily Vlog.mp4", title: "Instagram Reel — Daily Vlog", type: "Lifestyle content" },
  { file: "Quotes 1.mp4", title: "Quotes 01", type: "Quote video" },
  { file: "Quotes 2.mp4", title: "Quotes 02", type: "Quote video" },
];

const audioArtists = [
  { name: "JDRX", image: 4, spotifyId: "53WGKDzoDHR36FwHBXKcp9" },
  { name: "GSPL", image: 1, spotifyId: "1dkBhGpPP0CiUtjLxd1RVP" },
  { name: "Biscotti", image: 2, spotifyId: "5WGRlSlKOppOwUFPkaoVZe" },
  { name: "Jepp", image: 3, spotifyId: "2qkKewUA3Of7UyVatTEpIB" },
  { name: "IVAN", image: 5, spotifyId: "72oAXiBu0XL7WbyugTEv8P" },
].map((artist) => ({
  ...artist,
  src: `/audio-mixing-images/audio-mixing%20(${artist.image}).jpg`,
  alt: `${artist.name} Spotify artist profile`,
  label: `${artist.name} artist profile`,
}));

function useRevealAnimations() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? " brand-footer" : ""}`} href="#home" aria-label="Jadr Panes, home">
      <span className="brand-mark">JP</span>
      <span className="brand-copy">
        <strong>Jadr Panes</strong>
        <small>Virtual Assistant</small>
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <Brand />
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((value) => !value)}>
        <span className="sr-only">Toggle navigation</span>
        {menuOpen ? <CloseIcon className="ui-icon" /> : <MenuIcon className="ui-icon" />}
      </button>
      <nav className={`site-nav${menuOpen ? " is-open" : ""}`} id="site-nav" aria-label="Primary navigation">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let’s work together <span aria-hidden="true"><NorthEastIcon className="ui-icon" /></span></a>
      </nav>
    </header>
  );
}

function SectionHeading({ number, title, emphasis, text, className = "", headingId }) {
  return (
    <div className={`section-heading reveal ${className}`}>
      <p className="section-number">{number}</p>
      <h2 id={headingId}>{title}{emphasis && <> <em>{emphasis}</em></>}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Services() {
  return (
    <section className="services section-cream" id="services" aria-labelledby="services-title">
      <div className="page-shell">
        <div className="section-heading reveal">
          <p className="section-number">04 / Services</p>
          <h2 id="services-title">How I can support <em>your business</em></h2>
          <p>Choose focused help for one workflow or combine services into consistent day-to-day support.</p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-card reveal" key={service.title}>
              <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{service.title}</h3><p>{service.description}</p></div>
              <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience section-dark" id="experience" aria-labelledby="experience-title">
      <div className="page-shell experience-grid">
        <div className="experience-heading reveal">
          <p className="section-number">06 / Experience</p>
          <h2 id="experience-title">My Professional <em>Journey</em></h2>
          <p>Customer-focused roles where good communication and accurate documentation matter every day.</p>
        </div>
        <div className="timeline">
          <article className="timeline-item reveal">
            <div className="timeline-meta"><time>2026 — Present</time><span>Automotive Case Management</span></div>
            <div>
              <h3>Case Manager</h3>
              <p className="company">Teleperformance · Stellantis FCA</p>
              <p>I manage customer cases involving vehicle recalls, service concerns, complaints, and requests—coordinating with internal departments so each case can be reviewed, progressed, and resolved.</p>
              <ul><li><NorthEastIcon className="ui-icon" />Case intake and documentation</li><li><NorthEastIcon className="ui-icon" />Information gathering and review</li><li><NorthEastIcon className="ui-icon" />Department escalation</li><li><NorthEastIcon className="ui-icon" />Customer updates and next steps</li></ul>
            </div>
          </article>
          <article className="timeline-item reveal">
            <div className="timeline-meta"><time>2024 — 2026</time><span>Financial Account Support</span></div>
            <div>
              <h3>Customer Expert</h3>
              <p className="company">Coforge BPS · Fifth Third Bank</p>
              <p>Provided phone-based support for everyday banking needs, account services, transactions, card requests, disputes, and online banking concerns while following security procedures.</p>
              <ul><li><NorthEastIcon className="ui-icon" />Account inquiries and updates</li><li><NorthEastIcon className="ui-icon" />Card and funds requests</li><li><NorthEastIcon className="ui-icon" />Dispute documentation</li><li><NorthEastIcon className="ui-icon" />Online banking support</li></ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ProjectSupport() {
  return (
    <>
      <div className="project-copy">
        <p className="project-label">Automotive Service & Recall Case</p>
        <h3>Customer Support Workflow</h3>
        <p>A sample case showing a customer concern moving from inquiry and research through documentation, follow-up, and resolution.</p>
        <ol className="workflow-list"><li>Inquiry</li><li>Research</li><li>Response</li><li>Document</li><li>Follow-up</li><li>Resolve</li></ol>
        <p className="project-note">Personal demonstration project. All customer information is fictional.</p>
      </div>
      <div className="ticket-mockup" aria-label="Sample customer service ticket">
        <div className="mockup-top"><span>Case / AUTO-2026-0148</span><span className="pill pill-orange">Escalated</span></div>
        <div className="ticket-body"><span className="ticket-icon" aria-hidden="true"><ErrorOutlineIcon className="ui-icon" /></span><div><small>Customer Concern</small><h4>Vehicle Recall</h4><p>Customer has been unable to arrange the required repair and is requesting support.</p></div></div>
        <div className="ticket-fields"><p><small>Priority</small>Standard</p><p><small>Status</small>For review</p><p><small>Next step</small>Department update</p></div>
        <div className="ticket-progress" aria-hidden="true"><span /><span /><span /><span className="muted" /></div>
      </div>
    </>
  );
}

function ProjectCrm() {
  return (
    <>
      <div className="project-copy">
        <p className="project-label">Customer Case Tracking Dashboard</p>
        <h3>CRM & Data Organization</h3>
        <p>A clear way for a service business to record inquiries, categorize requests, document actions, track follow-ups, and keep customer records current.</p>
        <ul className="skill-tags"><li>CRM</li><li>Data entry</li><li>Documentation</li><li>Follow-up tracking</li></ul>
        <p className="project-note">Sample data for demonstration purposes only.</p>
      </div>
      <div className="dashboard-mockup" aria-label="Sample CRM dashboard">
        <div className="dashboard-stats"><p><strong>12</strong><small>Total records</small></p><p><strong>4</strong><small>Pending</small></p><p><strong>5</strong><small>Completed</small></p><p><strong>3</strong><small>Follow-ups</small></p></div>
        <div className="data-table" role="table" aria-label="Sample customer records">
          <div className="data-row data-head" role="row"><span>Customer</span><span>Request</span><span>Status</span></div>
          <div className="data-row" role="row"><span>Maria Santos</span><span>Service inquiry</span><span className="pill pill-orange">Pending</span></div>
          <div className="data-row" role="row"><span>James Miller</span><span>Account request</span><span className="pill pill-blue">Follow-up</span></div>
          <div className="data-row" role="row"><span>Anna Cruz</span><span>General inquiry</span><span className="pill pill-green">Complete</span></div>
          <div className="data-row" role="row"><span>Daniel Reed</span><span>Complaint</span><span className="pill pill-orange">Pending</span></div>
        </div>
      </div>
    </>
  );
}

function ProjectEmail() {
  return (
    <>
      <div className="project-copy">
        <p className="project-label">Inbox Organization & Prioritization</p>
        <h3>Email Management</h3>
        <p>A repeatable inbox system that identifies urgency, groups conversations by next action, and keeps important customer requests from being overlooked.</p>
        <ol className="workflow-list"><li>Review</li><li>Prioritize</li><li>Categorize</li><li>Respond</li><li>Follow up</li><li>Organize</li></ol>
        <p className="project-note">Sample emails for demonstration purposes only.</p>
      </div>
      <div className="inbox-mockup" aria-label="Sample organized inbox">
        <div className="inbox-sidebar"><strong>Inbox</strong><span>Urgent <b>2</b></span><span>Follow-up <b>5</b></span><span>General <b>8</b></span><span>Completed</span></div>
        <div className="email-list">
          <div className="email-item"><span className="priority red" aria-hidden="true"><CircleIcon className="ui-icon" /></span><p><strong>Service issue requires immediate assistance</strong><small>Review and respond immediately</small></p><time>9:16</time></div>
          <div className="email-item"><span className="priority orange" aria-hidden="true"><CircleIcon className="ui-icon" /></span><p><strong>Following up on my previous request</strong><small>Review conversation and update</small></p><time>8:42</time></div>
          <div className="email-item"><span className="priority blue" aria-hidden="true"><CircleIcon className="ui-icon" /></span><p><strong>Question about your services</strong><small>General inquiry</small></p><time>Mon</time></div>
          <div className="email-item"><span className="priority green" aria-hidden="true"><CircleIcon className="ui-icon" /></span><p><strong>Thank you for resolving my concern</strong><small>Ready to archive</small></p><time>Fri</time></div>
        </div>
      </div>
    </>
  );
}

function ImageLightbox({ image, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousFocus = document.activeElement;
    document.body.classList.add("lightbox-open");
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("lightbox-open");
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${image.label} enlarged`} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <button ref={closeButtonRef} className="lightbox-close" type="button" onClick={onClose} aria-label="Close enlarged image"><CloseIcon className="ui-icon" /></button>
      <img className="lightbox-image" src={image.src} alt={image.alt} />
    </div>,
    document.body,
  );
}

function ProjectSocial() {
  const [sampleType, setSampleType] = useState("canva");
  const [activeImage, setActiveImage] = useState(null);
  const isCanva = sampleType === "canva";
  const samples = [1, 2, 3, 4].map((number) => ({
    src: isCanva ? `/${number}.png` : `/social-media-sample/${number}.png`,
    alt: isCanva
      ? `Canva promotional graphic design sample ${number}`
      : `Social media content design sample ${number}`,
    label: `${isCanva ? "Canva design" : "Social media sample"} ${String(number).padStart(2, "0")}`,
  }));

  function changeSampleType(type) {
    setActiveImage(null);
    setSampleType(type);
  }

  return (
    <>
      <div className="project-copy">
        <p className="project-label">Social Media Content & Promotional Design</p>
        <h3>Social Media & Canva</h3>
        <p>Sample promotional graphics and social layouts demonstrating hierarchy, typography, product presentation, visual consistency, and content organization.</p>
        <ul className="skill-tags"><li>Canva</li><li>Graphic design</li><li>Content planning</li><li>Visual communication</li></ul>
        <p className="project-note">Personal demonstration work. Featured brands and offers are fictional.</p>
      </div>
      <div className="sample-gallery">
        <div className="gallery-switch" aria-label="Choose a sample gallery">
          <button type="button" className={isCanva ? "is-active" : ""} aria-pressed={isCanva} onClick={() => changeSampleType("canva")}>
            Canva designs <span>04</span>
          </button>
          <button type="button" className={!isCanva ? "is-active" : ""} aria-pressed={!isCanva} onClick={() => changeSampleType("social")}>
            Social media samples <span>04</span>
          </button>
        </div>
        <div className={`gallery-grid${isCanva ? "" : " gallery-grid-social"}`} key={sampleType}>
          {samples.map((sample) => (
            <figure key={sample.src}>
              <button className="gallery-image-button" type="button" onClick={() => setActiveImage(samples.indexOf(sample))} aria-label={`Enlarge ${sample.label}`}>
                <img src={sample.src} alt={sample.alt} loading="lazy" />
                <span className="zoom-hint" aria-hidden="true">View <NorthEastIcon className="ui-icon" /></span>
              </button>
              <figcaption>{sample.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      {activeImage !== null && <ImageLightbox image={samples[activeImage]} onClose={() => setActiveImage(null)} />}
    </>
  );
}

const projectContent = { support: ProjectSupport, crm: ProjectCrm, email: ProjectEmail, social: ProjectSocial };

function Portfolio() {
  const [activeProject, setActiveProject] = useState("support");
  const tabRefs = useRef([]);
  const ActiveProject = projectContent[activeProject];

  function handleTabKeyDown(event, index) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % projectTabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + projectTabs.length) % projectTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = projectTabs.length - 1;
    setActiveProject(projectTabs[nextIndex][0]);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section className="work section-light" id="work" aria-labelledby="work-title">
      <div className="page-shell">
        <div className="section-heading work-heading reveal">
          <p className="section-number">07 / Portfolio</p>
          <h2 id="work-title">A look at <em>what I can do</em></h2>
          <div className="work-intro"><p>Demonstration projects that show how I think, organize information, and support day-to-day business needs.</p><div className="work-shortcuts"><a href="#reels">Reels & videos <SouthEastIcon className="ui-icon" /></a><a href="#audio-mixing">Audio mixing <SouthEastIcon className="ui-icon" /></a></div></div>
        </div>
        <div className="project-tabs reveal">
          <div className="tab-list" role="tablist" aria-label="Portfolio projects">
            {projectTabs.map(([id, label], index) => (
              <button
                key={id}
                ref={(node) => { tabRefs.current[index] = node; }}
                role="tab"
                aria-selected={activeProject === id}
                aria-controls={`project-${id}`}
                id={`tab-${id}`}
                tabIndex={activeProject === id ? 0 : -1}
                onClick={() => setActiveProject(id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              ><span>{String(index + 1).padStart(2, "0")}</span> {label}</button>
            ))}
          </div>
          <article className={`project-panel${activeProject === "social" ? " project-panel-gallery" : ""}`} id={`project-${activeProject}`} role="tabpanel" aria-labelledby={`tab-${activeProject}`}>
            <ActiveProject />
          </article>
        </div>
      </div>
    </section>
  );
}

function ReelsPortfolio() {
  const videoRefs = useRef([]);

  function handlePlay(activeVideo) {
    videoRefs.current.forEach((video) => {
      if (video && video !== activeVideo) video.pause();
    });
  }

  return (
    <section className="reels section-light" id="reels" aria-labelledby="reels-title">
      <div className="page-shell">
        <SectionHeading number="07A / Video Portfolio" title="Sample Reels &" emphasis="Videos" text="A selection of business, daily vlog, and quote videos. Press play to watch each sample here." headingId="reels-title" />
        <div className="reel-grid">
          {videoSamples.map((sample, index) => {
            const src = `/sample-reels-videos/${encodeURIComponent(sample.file)}`;
            return (
              <figure className="reel-card reveal" key={sample.file}>
                <video ref={(video) => { videoRefs.current[index] = video; }} controls playsInline preload="metadata" aria-label={sample.title} onPlay={(event) => handlePlay(event.currentTarget)}>
                  <source src={src} type="video/mp4" />
                  Your browser does not support this video. <a href={src}>Open {sample.title}</a>.
                </video>
                <figcaption><span className="reel-type">{sample.type}</span><h3>{sample.title}</h3><a href={src} target="_blank" rel="noopener noreferrer">Open video <NorthEastIcon className="ui-icon" /></a></figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SpotifyPlayerDialog({ artist, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    dialog.showModal();
    document.body.classList.add("lightbox-open");
    return () => {
      dialog.close();
      document.body.classList.remove("lightbox-open");
      previousFocus?.focus();
    };
  }, []);

  function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
  }

  return createPortal(
    <dialog ref={dialogRef} className="music-player-dialog" aria-labelledby="music-player-title" onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={handleBackdropClick}>
      <button type="button" className="music-player-close" onClick={onClose} aria-label="Close music player" autoFocus><CloseIcon className="ui-icon" /></button>
      <p className="music-player-label"><HeadphonesRoundedIcon className="ui-icon" /> Artist spotlight</p>
      <h3 id="music-player-title">Listen to {artist.name}</h3>
      <iframe src={`https://open.spotify.com/embed/artist/${artist.spotifyId}`} title={`${artist.name} Spotify music player`} width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" allowFullScreen />
      <p className="music-player-note">Playback is provided by Spotify. <a href={`https://open.spotify.com/artist/${artist.spotifyId}`} target="_blank" rel="noopener noreferrer">Open in Spotify <NorthEastIcon className="ui-icon" /></a></p>
    </dialog>,
    document.body,
  );
}

function AudioPortfolio() {
  const [activeArtist, setActiveArtist] = useState(null);
  const [playingArtist, setPlayingArtist] = useState(null);

  return (
    <section className="audio-mixing section-cream" id="audio-mixing" aria-labelledby="audio-title">
      <div className="page-shell">
        <SectionHeading number="07B / Audio Portfolio" title="Audio Mixing" emphasis="Portfolio" text="As an Audio & Sound Mixing Engineer, these are the artists I’ve worked with in the past. Explore their music on Spotify." headingId="audio-title" className="audio-intro-heading" />
        <div className="audio-credits reveal"><span className="credits-icon" aria-hidden="true"><CheckIcon className="ui-icon" /></span><div><h3>Find my name in the song credits.</h3><p>Look for <strong>Jadr Panes</strong> in the credits of releases I’ve worked on. Open an artist’s Spotify profile below, choose a song, and check its credits.</p></div></div>
        <div className="artist-grid">
          {audioArtists.map((artist, index) => (
            <article className="artist-card reveal" key={artist.name}>
              <div className="artist-player-label"><span><HeadphonesRoundedIcon className="ui-icon" /> Artist collaboration</span><span>{String(index + 1).padStart(2, "0")} / 05</span></div>
              <button type="button" className="artist-image-button" onClick={() => setActiveArtist(artist)} aria-label={`Enlarge ${artist.name} artist image`}>
                <img src={artist.src} alt={artist.alt} loading="lazy" />
                <span className="zoom-hint" aria-hidden="true">View <NorthEastIcon className="ui-icon" /></span>
              </button>
              <div className="artist-copy"><h3>{artist.name}</h3><p>Audio & Sound Mixing</p></div>
              <div className="artist-player-controls">
                <button type="button" className="artist-secondary-control" onClick={() => setActiveArtist(artist)} aria-label={`View ${artist.name} artwork`} title="View artwork"><OpenInFullRoundedIcon className="ui-icon" /></button>
                <button type="button" className="artist-play-control" onClick={() => setPlayingArtist(artist)} aria-label={`Open ${artist.name} Spotify player`} title={`Listen to ${artist.name}`}><PlayArrowRoundedIcon className="ui-icon" /></button>
                <a className="artist-secondary-control" href={`https://open.spotify.com/artist/${artist.spotifyId}`} target="_blank" rel="noopener noreferrer" aria-label={`Open ${artist.name} on Spotify (opens in a new tab)`} title="Open in Spotify"><NorthEastIcon className="ui-icon" /></a>
              </div>
              <button type="button" className="artist-listen-label" onClick={() => setPlayingArtist(artist)}>Listen on Spotify</button>
              <p className="artist-mixing-credit">Jadr Panes <span aria-hidden="true">·</span> Audio & Sound Mixing</p>
            </article>
          ))}
        </div>
      </div>
      {activeArtist && <ImageLightbox image={activeArtist} onClose={() => setActiveArtist(null)} />}
      {playingArtist && <SpotifyPlayerDialog artist={playingArtist} onClose={() => setPlayingArtist(null)} />}
    </section>
  );
}

function FAQ() {
  const [openItem, setOpenItem] = useState(0);
  return (
    <section className="faq section-light" id="faq" aria-labelledby="faq-title">
      <div className="page-shell faq-grid">
        <div className="faq-heading reveal">
          <p className="section-number">12 / FAQ</p>
          <h2 id="faq-title">Frequently Asked <em>Questions</em></h2>
          <p>Something else in mind? Send me an email and tell me what support would make your week easier.</p>
          <a className="text-link" href="mailto:jadrpanes17@gmail.com">Email Jadr <span aria-hidden="true"><NorthEastIcon className="ui-icon" /></span></a>
        </div>
        <div className="faq-list reveal">
          {faqItems.map(([question, answer], index) => {
            const isOpen = openItem === index;
            return (
              <article className={`faq-item${isOpen ? " is-open" : ""}`} key={question}>
                <h3><button type="button" aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} onClick={() => setOpenItem(isOpen ? -1 : index)}>{question}<span aria-hidden="true"><AddIcon className="ui-icon" /></span></button></h3>
                <div className="faq-answer" id={`faq-panel-${index}`} hidden={!isOpen}><p>{answer}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta section-accent" aria-labelledby="final-cta-title">
      <div className="page-shell">
        <p className="section-number">13 / Final CTA</p>
        <h2 id="final-cta-title">Have tasks that are taking too much <em>of your time?</em></h2>
        <p className="final-cta-lede">Let me help you get them done.</p>
        <p>Whether you need help with:</p>
        <ul className="skill-tags"><li>Customer Support</li><li>Administrative Tasks</li><li>CRM & Data</li><li>Email Management</li><li>Canva & Social Media</li><li>Reels & Videos</li><li>Audio & Sound Mixing</li></ul>
        <p>Let’s talk.</p>
        <a className="button button-dark" href="#contact">Let’s work together <span aria-hidden="true"><NorthEastIcon className="ui-icon" /></span></a>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("Please complete the required fields.");
      return;
    }
    const data = new FormData(form);
    const subject = `Portfolio inquiry from ${data.get("name")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Company: ${data.get("company") || "Not provided"}`,
      `Support needed: ${data.get("service")}`,
      "",
      data.get("message"),
    ].join("\n");
    setStatus("Opening your email app with the message ready to send.");
    window.location.href = `mailto:jadrpanes17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="contact section-accent" id="contact" aria-labelledby="contact-title">
      <div className="page-shell contact-grid">
        <div className="contact-copy reveal">
          <p className="section-number">14 / Contact</p>
          <h2 id="contact-title">Let’s work <em>together.</em></h2>
          <div className="direct-contact">
            <a href="mailto:jadrpanes17@gmail.com"><small>Email</small><span>jadrpanes17@gmail.com</span></a>
            <a href="tel:+639452749552"><small>Call</small><span>+63 945 274 9552</span></a>
            <p><small>Location</small><span>Las Piñas City, Philippines</span></p>
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label>Name<input type="text" name="name" autoComplete="name" required /></label>
            <label>Email<input type="email" name="email" autoComplete="email" required /></label>
          </div>
          <label>Company / Business<input type="text" name="company" autoComplete="organization" /></label>
          <label>What can I help you with?
            <div className="select-field"><select name="service" defaultValue="Administrative Support">
              {services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
              <option value="Other Support">Other Support</option>
            </select><ExpandMoreIcon className="ui-icon" /></div>
          </label>
          <label>Message<textarea name="message" rows="4" required /></label>
          <button className="button button-dark form-submit" type="submit">Send message <span aria-hidden="true"><NorthEastIcon className="ui-icon" /></span></button>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer section-dark">
      <div className="page-shell footer-grid">
        <div><Brand footer /><p>Reliable support for organized, responsive, and efficient businesses.</p></div>
        <nav aria-label="Footer navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}<a href="#contact">Contact</a></nav>
        <div className="footer-contact"><a href="mailto:jadrpanes17@gmail.com">jadrpanes17@gmail.com</a><a href="tel:+639452749552">+63 945 274 9552</a><span>Las Piñas City, Philippines</span></div>
      </div>
      <div className="footer-bottom page-shell"><span>© {new Date().getFullYear()} Jadr Panes. All rights reserved.</span><a href="#home">Back to top <ArrowUpwardIcon className="ui-icon" /></a></div>
    </footer>
  );
}

export default function App() {
  useRevealAnimations();

  useEffect(() => {
    if (!window.location.hash) return;
    const timer = window.setTimeout(() => {
      document.querySelector(window.location.hash)?.scrollIntoView();
    }, 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main">
        <section className="hero section-dark" id="home" aria-labelledby="hero-title">
          <div className="hero-grid page-shell">
            <div className="hero-copy reveal">
              <p className="eyebrow hero-eyebrow">{["Virtual assistant", "Customer support", "Social Media Manager", "Audio & Sound Mixing Engineer"].map((role, index) => <span className="hero-role" key={role}>{role}{index < 3 && <span className="role-separator" aria-hidden="true"><CircleIcon className="ui-icon" /></span>}</span>)}</p>
              <h1 id="hero-title">The reliable support <em>behind your business.</em></h1>
              <p className="hero-intro">Hi, I’m Jadr Panes, a Virtual Assistant with professional experience in customer service, account support, administrative assistance, CRM management, data entry, email management, social media marketing, Graphic designing, and Audio and Sound Mixing Engineer</p>
              <div className="hero-actions"><a className="button button-accent" href="#services">View my services <span aria-hidden="true"><ArrowDownwardIcon className="ui-icon" /></span></a><a className="button button-ghost" href="#contact">Let’s work together <span aria-hidden="true"><NorthEastIcon className="ui-icon" /></span></a></div>
              <ul className="hero-notes" aria-label="Quick details"><li><CheckIcon className="ui-icon" />Philippines-based</li><li><CheckIcon className="ui-icon" />Available remotely</li><li><CheckIcon className="ui-icon" />Privacy-conscious</li></ul>
            </div>
            <div className="hero-visual reveal">
              <div className="hero-image-frame"><img src="/jadr-photos/jadr-formal/formal%20(1).png" alt="Formal portrait of Jadr Panes in a white shirt and black tie" fetchPriority="high" /></div>
              <div className="hero-stamp" aria-hidden="true"><span>Organized</span><strong>Ready</strong><span>Responsive</span></div>
              <div className="availability-card"><span className="status-dot" aria-hidden="true"><CircleIcon className="ui-icon" /></span><p><small>Current status</small><strong>Open to remote opportunities</strong></p></div>
            </div>
          </div>
          <a className="scroll-cue" href="#credentials">Scroll to explore <span aria-hidden="true"><ArrowDownwardIcon className="ui-icon" /></span></a>
        </section>

        <section className="credentials" id="credentials" aria-label="Quick credentials">
          <div className="credential-track">
            <div><span>01</span><strong>Customer support</strong><small>Automotive + Financial Accounts</small></div>
            <div><span>02</span><strong>Administrative</strong><small>CRM + Data + Documentation</small></div>
            <div><span>03</span><strong>Digital</strong><small>Canva + Social Media + Content</small></div>
            <div><span>04</span><strong>Audio & Sound Mixing</strong><small>Artist Collaborations + FL Studio</small></div>
          </div>
        </section>

        <section className="about section-light" id="about" aria-labelledby="about-title">
          <div className="page-shell about-grid">
            <div className="section-intro reveal"><p className="section-number">03 / About Me</p><h2 id="about-title">A little <em>about me</em></h2></div>
            <div className="about-copy reveal"><p className="lede">Professional experience. Practical support. A client-first mindset.</p><p>I’m Jadr Panes, a Virtual Assistant with a professional background in customer service and account support. I’ve supported automotive and financial accounts where accuracy, communication, documentation, privacy, and problem-solving are essential.</p><p>I now bring those skills into virtual assistance—helping businesses manage everyday tasks, customer communication, information, and digital support with care.</p><p>I also work as a Social Media Manager and Audio & Sound Mixing Engineer, bringing social media marketing, graphic design, and audio mixing into my creative services.</p><a className="text-link" href="#experience">See my professional journey <span aria-hidden="true"><SouthEastIcon className="ui-icon" /></span></a></div>
            <figure className="about-photo reveal"><img src="/jadr-photos/jadr-formal/formal%20(6).png" alt="Jadr Panes seated in formal attire against a charcoal studio background" loading="lazy" /><figcaption>Based in Las Piñas City<br />Working remotely worldwide</figcaption></figure>
          </div>
        </section>

        <Services />

        <section className="why section-accent" aria-labelledby="why-title">
          <div className="page-shell">
            <div className="section-heading reveal"><p className="section-number">05 / Why Jadr?</p><h2 id="why-title">More than task support. <em>A reliable partner.</em></h2></div>
            <div className="why-grid">{strengths.map(([title, text], index) => <article className="reveal" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <Experience />
        <Portfolio />
        <ReelsPortfolio />
        <AudioPortfolio />

        <section className="process section-cream" id="process" aria-labelledby="process-title">
          <div className="page-shell process-grid">
            <div className="process-heading reveal"><p className="section-number">08 / My Work Process</p><h2 id="process-title">Simple process. <em>Reliable execution.</em></h2><p>Clear steps keep the work organized and make collaboration easy from the first conversation to final delivery.</p><a className="button button-dark" href="#contact">Start a conversation <span aria-hidden="true"><NorthEastIcon className="ui-icon" /></span></a></div>
            <ol className="process-list">{processSteps.map(([title, text], index) => <li className="reveal" key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
          </div>
        </section>

        <section className="toolkit section-light" aria-labelledby="tools-title">
          <div className="page-shell">
            <SectionHeading number="09 / Tools & Skills" title="Tools &" emphasis="Skills" headingId="tools-title" />
            <div className="tool-groups">{tools.map(([group, ...items]) => <article className="reveal" key={group}><span>{group}</span>{items.map((item) => <p key={item}>{item}</p>)}</article>)}</div>
            <section className="audience-strip reveal" aria-labelledby="audience-title"><div><p className="section-number">10 / Who I Can Help</p><h2 id="audience-title">Who can I help?</h2></div><div><span>Small Business Owners</span><span>Online Businesses/Influencers</span><span>Service-Based Businesses</span><span>Entrepreneurs</span></div></section>
          </div>
        </section>

        <section className="testimonials section-dark" aria-labelledby="testimonials-title">
          <div className="page-shell">
            <SectionHeading number="11 / Testimonials" title="What People" emphasis="Say" headingId="testimonials-title" />
            <div className="quote-grid">
              <figure className="reveal"><blockquote>“Jadr is easy to work with and takes his responsibilities seriously. He stays patient when handling customer concerns, pays attention to details, and makes sure cases are properly documented and handled.”</blockquote><figcaption><strong>John Paul Vito</strong><span>Supervisor · Teleperformance — Stellantis FCA</span></figcaption></figure>
              <figure className="reveal"><blockquote>“Jadr is patient and professional when assisting customers with banking concerns. He communicates well, understands what customers need, and pays attention to accuracy.”</blockquote><figcaption><strong>Katherine Gamboa</strong><span>Fifth Third Bank Account Supervisor · Coforge BPS</span></figcaption></figure>
            </div>
          </div>
        </section>

        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
