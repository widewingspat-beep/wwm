'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import './chat-widget.css';

/* ── Destinations ── */
const CALENDLY = 'https://calendly.com/wide-wings-media';
const CONTACT = '/contact';

/* ── Inline SVG icon set ── */
type IconName =
  | 'wave' | 'rocket' | 'bulb' | 'calendar' | 'mail' | 'sparkles' | 'arrow-down'
  | 'handshake' | 'building' | 'phone' | 'dollar' | 'chat' | 'arrow-left'
  | 'bar-chart' | 'target' | 'briefcase' | 'smile' | 'file' | 'inbox'
  | 'arrow-right' | 'chevron-right' | 'close' | 'chat-launcher' | 'person';

const Ico = ({ name, size = 16 }: { name: IconName; size?: number }) => {
  const p = {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: 'currentColor', strokeWidth: 2,
    strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const,
    className: 'cw-ico',
  };
  switch (name) {
    case 'wave':
      return (<svg {...p}><path d="M18 11V6a2 2 0 0 0-4 0v5"/><path d="M14 10V4a2 2 0 0 0-4 0v6"/><path d="M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>);
    case 'rocket':
      return (<svg {...p}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>);
    case 'bulb':
      return (<svg {...p}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>);
    case 'calendar':
      return (<svg {...p}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>);
    case 'mail':
      return (<svg {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>);
    case 'sparkles':
      return (<svg {...p}><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/></svg>);
    case 'arrow-down':
      return (<svg {...p}><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>);
    case 'handshake':
      return (<svg {...p}><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/><path d="m21 3 1 11h-2"/><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/></svg>);
    case 'building':
      return (<svg {...p}><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>);
    case 'phone':
      return (<svg {...p}><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>);
    case 'dollar':
      return (<svg {...p}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>);
    case 'chat':
      return (<svg {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/></svg>);
    case 'arrow-left':
      return (<svg {...p}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>);
    case 'bar-chart':
      return (<svg {...p}><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>);
    case 'target':
      return (<svg {...p}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>);
    case 'briefcase':
      return (<svg {...p}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>);
    case 'smile':
      return (<svg {...p}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>);
    case 'file':
      return (<svg {...p}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>);
    case 'inbox':
      return (<svg {...p}><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>);
    case 'arrow-right':
      return (<svg {...p}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>);
    case 'chevron-right':
      return (<svg {...p}><polyline points="9 18 15 12 9 6"/></svg>);
    case 'close':
      return (<svg {...p}><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>);
    case 'chat-launcher':
      return (<svg {...p}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/></svg>);
    case 'person':
      return (<svg {...p} fill="currentColor" stroke="none"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.6 0-8 1.8-8 4.4V20h16v-1.6c0-2.6-4.4-4.4-8-4.4Z"/></svg>);
    default: return null;
  }
};

/* ── In-bubble link ── */
const A = ({ href, children }: { href: string; children: ReactNode }) => {
  const internal = href.startsWith('/');
  return (
    <a className="cw-link" href={href} {...(internal ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
      {children}
    </a>
  );
};

const BookLink = () => (
  <A href={CALENDLY}>
    <span className="cw-link-text">Book a Meeting</span> <Ico name="calendar" />
  </A>
);

/* ── Message model ── */
type Opt = { label: ReactNode; echo: string; onClick: () => void };
type BotItem = { type: 'bubble'; node: ReactNode } | { type: 'options'; opts: Opt[] };
type LogItem =
  | { id: number; role: 'user'; text: string }
  | { id: number; role: 'bot'; item: BotItem };

const bookCta = (
  <>
    {"If you'd like to discuss your brand's needs, you can easily book a meeting with our team here "}
    <Ico name="arrow-down" />
    {'\n\n'}
    <BookLink />
  </>
);

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<LogItem[]>([]);
  const [typing, setTyping] = useState(false);
  const idRef = useRef(0);
  const timers = useRef<number[]>([]);
  const bodyRef = useRef<HTMLDivElement>(null);

  const nextId = () => ++idRef.current;
  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  useEffect(() => () => clearTimers(), []);

  const pushUser = (text: string) =>
    setMessages((m) => [...m, { id: nextId(), role: 'user', text }]);

  const botSequence = (items: BotItem[]) => {
    let acc = 0;
    items.forEach((item) => {
      const showTyping = window.setTimeout(() => setTyping(true), acc);
      timers.current.push(showTyping);
      acc += 900;
      const showBubble = window.setTimeout(() => {
        setTyping(false);
        setMessages((m) => [...m, { id: nextId(), role: 'bot', item }]);
      }, acc);
      timers.current.push(showBubble);
      acc += 280;
    });
  };

  const topicFollowOpts = (): Opt[] => [
    { label: <>Explore more questions <Ico name="chat" /></>, echo: 'Explore more questions', onClick: () => openFaq('Explore more questions') },
    { label: <>Main menu <Ico name="arrow-left" /></>, echo: 'Main menu', onClick: goMainMenu },
  ];

  const externalFollowOpts = (): Opt[] => [
    { label: <>See more questions <Ico name="chat" /></>, echo: 'See more questions', onClick: () => openFaq('See more questions') },
    { label: <>Main menu <Ico name="arrow-left" /></>, echo: 'Main menu', onClick: goMainMenu },
  ];

  const mainOpts = (): Opt[] => [
    { label: <>Learn about our services <Ico name="bulb" /></>, echo: 'Learn about our services', onClick: () => openFaq('Learn about our services') },
    { label: <>Book a meeting <Ico name="calendar" /></>, echo: 'Book a meeting', onClick: () => external('Book a meeting', CALENDLY) },
    { label: <>Contact our team <Ico name="mail" /></>, echo: 'Contact our team', onClick: () => external('Contact our team', CONTACT) },
  ];

  const topicOpts = (): Opt[] => [
    { label: <>Our Services <Ico name="bulb" /></>, echo: 'Our Services', onClick: () => topic('services') },
    { label: <>How to Start <Ico name="handshake" /></>, echo: 'How to Start', onClick: () => topic('start') },
    { label: <>Do you work with businesses of all sizes? <Ico name="building" /></>, echo: 'Do you work with businesses of all sizes?', onClick: () => topic('sizes') },
    { label: <>Social Media Management <Ico name="phone" /></>, echo: 'Social Media Management', onClick: () => topic('social') },
    { label: <>Pricing & Packages <Ico name="dollar" /></>, echo: 'Pricing & Packages', onClick: () => topic('pricing') },
    { label: <>Other Questions <Ico name="mail" /></>, echo: 'Other Questions', onClick: () => topic('other') },
  ];

  const welcomeBubble: ReactNode = (
    <>
      <Ico name="wave" />{' Hey there! Welcome to Wide Wings Media — your creative growth partner.'}{'\n'}
      {"I'm here to help you take your brand to the next level "}<Ico name="rocket" />{'\n'}
      What would you like to do today?
    </>
  );

  const goMainMenu = () => {
    pushUser('Main menu');
    botSequence([
      { type: 'bubble', node: welcomeBubble },
      { type: 'options', opts: mainOpts() },
    ]);
  };

  const openFaq = (echo: string) => {
    pushUser(echo);
    botSequence([
      { type: 'bubble', node: (<><Ico name="sparkles" />{' Great! Here are some of the most common questions we get.'}{'\n'}Choose a topic below to learn more <Ico name="arrow-down" /></>) },
      { type: 'options', opts: topicOpts() },
    ]);
  };

  const external = (echo: string, href: string) => {
    pushUser(echo);
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    window.open(href, '_blank', 'noopener,noreferrer');
    botSequence([
      { type: 'bubble', node: (<>Got another question in mind? <Ico name="bulb" /></>) },
      { type: 'bubble', node: (<>What would you like to do next? <Ico name="arrow-down" /></>) },
      { type: 'options', opts: externalFollowOpts() },
    ]);
  };

  const topic = (key: 'services' | 'start' | 'sizes' | 'social' | 'pricing' | 'other') => {
    const t = TOPICS[key];
    pushUser(t.echo);
    botSequence([
      ...t.bubbles.map((node): BotItem => ({ type: 'bubble', node })),
      { type: 'bubble', node: (<>What would you like to do next? <Ico name="arrow-down" /></>) },
      { type: 'options', opts: topicFollowOpts() },
    ]);
  };

  const TOPICS: Record<string, { echo: string; bubbles: ReactNode[] }> = {
    services: {
      echo: 'Our Services',
      bubbles: [
        (<>{'We are a full-service marketing agency.\nOur services include social media management, content creation, digital advertising, branding, web design & development, PR, and influencer marketing.\n\nWe tailor each solution to help your brand grow and stand out '}<Ico name="bulb" /></>),
        bookCta,
      ],
    },
    start: {
      echo: 'How to Start',
      bubbles: [
        "It's simple! Just share a few details about your brand and goals, and one of our account managers will reach out to create a personalized marketing plan for you.",
        (
          <>
            {'You can start by filling out our contact form here:\n\n'}
            <A href={CONTACT}><span className="cw-link-text">Contact Us</span> <Ico name="file" /></A>
            {"\n\nOr, if you'd like to speak with us directly, you can book a quick meeting here:\n\n"}
            <BookLink />
          </>
        ),
      ],
    },
    sizes: {
      echo: 'Do you work with businesses of all sizes?',
      bubbles: [
        (<>{'Absolutely! We work with startups, SMEs, and large enterprises.\nNo matter the size, we craft strategies that fit your budget, industry, and goals — ensuring measurable results '}<Ico name="bar-chart" /></>),
        bookCta,
      ],
    },
    social: {
      echo: 'Social Media Management',
      bubbles: [
        (<>{'Yes! '}<Ico name="target" />{' We offer end-to-end social media management, including:\n- Content creation\n- Scheduling\n- Community engagement\n- Performance reporting\n\nOur goal is to help your brand connect with your audience and grow online.'}</>),
        bookCta,
      ],
    },
    pricing: {
      echo: 'Pricing & Packages',
      bubbles: [
        (<>{'Our pricing depends on the services you need and the scale of your project '}<Ico name="briefcase" />{'\nWe create custom packages tailored to your goals, budget, and business size.'}</>),
        (
          <>
            {'Want to get a personalized quote?\n'}
            <Ico name="arrow-right" />{' '}
            <A href={CONTACT}><span className="cw-link-text">Get a Quote</span> <Ico name="file" /></A>
            {'\n\nOr schedule a quick call to discuss your needs:\n\n'}
            <BookLink />
          </>
        ),
      ],
    },
    other: {
      echo: 'Other Questions',
      bubbles: [
        (
          <>
            {'No problem! '}<Ico name="smile" />{'\nYou can share your question below, or reach out to us directly — we\'ll get back to you shortly.\n\n'}
            <A href={CONTACT}><span className="cw-link-text">Contact us</span> <Ico name="inbox" /></A>
            {'\n\n'}
            <BookLink />
          </>
        ),
      ],
    },
  };

  const startConversation = () => {
    idRef.current = 0;
    setTyping(false);
    setMessages([
      { id: nextId(), role: 'bot', item: { type: 'bubble', node: welcomeBubble } },
      { id: nextId(), role: 'bot', item: { type: 'options', opts: mainOpts() } },
    ]);
  };

  const handleOpen = () => {
    if (messages.length === 0) startConversation();
    setOpen(true);
  };
  const handleClose = () => {
    clearTimers();
    setTyping(false);
    setOpen(false);
    setTimeout(startConversation, 280);
  };

  return (
    <>
      {open && (
        <div className="cw-panel" role="dialog" aria-label="Wide Wings chat assistant">
          <div className="cw-header">
            <div className="cw-avatar"><div className="cw-avatar-ball" /></div>
            <div className="cw-head-text">
              <p className="cw-title">Wide Wings</p>
              <div className="cw-status"><span className="cw-status-dot" />Online Assistant</div>
            </div>
            <button className="cw-close" onClick={handleClose} aria-label="Close chat"><Ico name="close" size={22} /></button>
          </div>

          <div className="cw-body" ref={bodyRef}>
            {messages.map((msg) =>
              msg.role === 'user' ? (
                <div key={msg.id} className="cw-user-row">
                  <div className="cw-user-bubble">{msg.text}</div>
                  <div className="cw-user-avatar"><Ico name="person" size={18} /></div>
                </div>
              ) : (
                <div key={msg.id} className="cw-bot-turn">
                  <p className="cw-bot-label">Wide Wings Bot</p>
                  {msg.item.type === 'bubble' ? (
                    <div className="cw-row">
                      <div className="cw-mini-avatar"><span /></div>
                      <div className="cw-bubble">{msg.item.node}</div>
                    </div>
                  ) : (
                    <div className="cw-row cw-row-options">
                      <div className="cw-mini-avatar"><span /></div>
                      <div className="cw-options">
                        {msg.item.opts.map((opt, i) => (
                          <button key={i} className="cw-option" onClick={opt.onClick}>
                            <span className="cw-option-label">{opt.label}</span>
                            <span className="cw-option-chev"><Ico name="chevron-right" /></span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            )}

            {typing && (
              <div className="cw-bot-turn">
                <p className="cw-bot-label">Wide Wings Bot</p>
                <div className="cw-row">
                  <div className="cw-mini-avatar"><span /></div>
                  <div className="cw-typing"><span /><span /><span /></div>
                </div>
              </div>
            )}
          </div>

          <div className="cw-footer"><Ico name="sparkles" /> Powered by Wide Wings Media</div>
        </div>
      )}

      <button className="cw-launcher" onClick={() => (open ? handleClose() : handleOpen())} aria-label={open ? 'Close chat' : 'Open chat'}>
        {open ? <Ico name="close" size={26} /> : <Ico name="chat-launcher" size={26} />}
      </button>
    </>
  );
}
