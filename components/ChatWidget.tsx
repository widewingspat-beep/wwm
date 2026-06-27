'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import './chat-widget.css';

/* ── External destinations ── */
const CALENDLY = 'https://calendly.com/wide-wings-media';
const CONTACT = 'https://wide-wings.ae/contact-us/';

/* ── Icons ── */
const Chevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);
const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);
const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-3.6 0-8 1.8-8 4.4V20h16v-1.6c0-2.6-4.4-4.4-8-4.4Z" />
  </svg>
);

/* ── In-bubble link ── */
const Link = ({ href, children }: { href: string; children: ReactNode }) => (
  <a className="cw-link" href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

const BookLink = () => <Link href={CALENDLY}>Book a Meeting 📅</Link>;

/* ── Message model ── */
type Opt = { label: string; onClick: () => void };
type BotItem = { type: 'bubble'; node: ReactNode } | { type: 'options'; opts: Opt[] };
type LogItem =
  | { id: number; role: 'user'; text: string }
  | { id: number; role: 'bot'; item: BotItem };

/* ── Reusable bot bubbles ── */
const bookCta = (
  <>
    {`If you'd like to discuss your brand's needs, you can easily book a meeting with our team here 👇\n\n`}
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

  /* Auto-scroll to newest message (instant — smooth is unreliable across browsers) */
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  useEffect(() => () => clearTimers(), []);

  const pushUser = (text: string) =>
    setMessages((m) => [...m, { id: nextId(), role: 'user', text }]);

  /* Reveal a sequence of bot items with a typing pause between each */
  const botSequence = (items: BotItem[]) => {
    setTyping(true);
    let delay = 480;
    items.forEach((item, i) => {
      const last = i === items.length - 1;
      const t = window.setTimeout(() => {
        setMessages((m) => [...m, { id: nextId(), role: 'bot', item }]);
        setTyping(!last);
      }, delay);
      timers.current.push(t);
      delay += 640;
    });
  };

  /* ── Option lists (declared before actions that reference them) ── */
  const followOpts = (): Opt[] => [
    { label: 'See more questions 💬', onClick: () => openFaq('See more questions 💬') },
    { label: 'Main menu ⬅️', onClick: goMainMenu },
  ];

  const mainOpts = (): Opt[] => [
    { label: 'Learn about our services 💡', onClick: () => openFaq('Learn about our services 💡') },
    { label: 'Book a meeting 📅', onClick: () => external('Book a meeting 📅', CALENDLY) },
    { label: 'Contact our team ✉️', onClick: () => external('Contact our team ✉️', CONTACT) },
  ];

  const topicOpts = (): Opt[] => [
    { label: 'Our Services 💡', onClick: () => topic('services') },
    { label: 'How to Start 🤝', onClick: () => topic('start') },
    { label: 'Do you work with businesses of all sizes? 🏢', onClick: () => topic('sizes') },
    { label: 'Social Media Management 📱', onClick: () => topic('social') },
    { label: 'Pricing & Packages 💰', onClick: () => topic('pricing') },
    { label: 'Other Questions ✉️', onClick: () => topic('other') },
  ];

  /* ── Conversation actions ── */
  const welcomeBubble: ReactNode = (
    `👋 Hey there! Welcome to Wide Wings Media — your creative growth partner.\nI'm here to help you take your brand to the next level 🚀\nWhat would you like to do today?`
  );

  const goMainMenu = () => {
    pushUser('Main menu ⬅️');
    botSequence([
      { type: 'bubble', node: welcomeBubble },
      { type: 'options', opts: mainOpts() },
    ]);
  };

  const openFaq = (label: string) => {
    pushUser(label);
    botSequence([
      { type: 'bubble', node: '🙌 Great! Here are some of the most common questions we get.\nChoose a topic below to learn more 👇' },
      { type: 'options', opts: topicOpts() },
    ]);
  };

  const external = (label: string, href: string) => {
    pushUser(label);
    window.open(href, '_blank', 'noopener,noreferrer');
    botSequence([
      { type: 'bubble', node: 'Got another question in mind? 💡' },
      { type: 'bubble', node: 'What would you like to do next? 👇' },
      { type: 'options', opts: followOpts() },
    ]);
  };

  const topic = (key: 'services' | 'start' | 'sizes' | 'social' | 'pricing' | 'other') => {
    const t = TOPICS[key];
    pushUser(t.label);
    botSequence([
      ...t.bubbles.map((node): BotItem => ({ type: 'bubble', node })),
      { type: 'bubble', node: 'What would you like to do next? 👇' },
      { type: 'options', opts: followOpts() },
    ]);
  };

  /* ── Topic answers ── */
  const TOPICS: Record<string, { label: string; bubbles: ReactNode[] }> = {
    services: {
      label: 'Our Services 💡',
      bubbles: [
        'We are a full-service marketing agency.\nOur services include social media management, content creation, digital advertising, branding, web design & development, PR, and influencer marketing.\n\nWe tailor each solution to help your brand grow and stand out 💡',
        bookCta,
      ],
    },
    start: {
      label: 'How to Start 🤝',
      bubbles: [
        "It's simple! Just share a few details about your brand and goals, and one of our account managers will reach out to create a personalized marketing plan for you.",
        (
          <>
            {'You can start by filling out our contact form here:\n\n'}
            <Link href={CONTACT}>Contact Us 📝</Link>
            {"\n\nOr, if you'd like to speak with us directly, you can book a quick meeting here:\n\n"}
            <BookLink />
          </>
        ),
      ],
    },
    sizes: {
      label: 'Do you work with businesses of all sizes? 🏢',
      bubbles: [
        'Absolutely! We work with startups, SMEs, and large enterprises.\nNo matter the size, we craft strategies that fit your budget, industry, and goals — ensuring measurable results 📊',
        bookCta,
      ],
    },
    social: {
      label: 'Social Media Management 📱',
      bubbles: [
        'Yes! 🎯 We offer end-to-end social media management, including:\n- Content creation\n- Scheduling\n- Community engagement\n- Performance reporting\n\nOur goal is to help your brand connect with your audience and grow online.',
        bookCta,
      ],
    },
    pricing: {
      label: 'Pricing & Packages 💰',
      bubbles: [
        'Our pricing depends on the services you need and the scale of your project 💼\nWe create custom packages tailored to your goals, budget, and business size.',
        (
          <>
            {'Want to get a personalized quote?\n👉 '}
            <Link href={CONTACT}>Get a Quote 📝</Link>
            {'\n\nOr schedule a quick call to discuss your needs:\n\n'}
            <BookLink />
          </>
        ),
      ],
    },
    other: {
      label: 'Other Questions ✉️',
      bubbles: [
        (
          <>
            {"No problem! 😊\nYou can share your question below, or reach out to us directly — we'll get back to you shortly.\n\n"}
            <Link href={CONTACT}>Contact us 📩</Link>
            {'\n\n'}
            <BookLink />
          </>
        ),
      ],
    },
  };

  /* ── Open / close ── */
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
          {/* Header */}
          <div className="cw-header">
            <div className="cw-avatar"><div className="cw-avatar-ball" /></div>
            <div className="cw-head-text">
              <p className="cw-title">Wide Wings</p>
              <div className="cw-status"><span className="cw-status-dot" />Online Assistant</div>
            </div>
            <button className="cw-close" onClick={handleClose} aria-label="Close chat"><CloseIcon /></button>
          </div>

          {/* Body */}
          <div className="cw-body" ref={bodyRef}>
            {messages.map((msg) =>
              msg.role === 'user' ? (
                <div key={msg.id} className="cw-user-row">
                  <div className="cw-user-bubble">{msg.text}</div>
                  <div className="cw-user-avatar"><PersonIcon /></div>
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
                            <span>{opt.label}</span>
                            <span className="cw-option-chev"><Chevron /></span>
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

          {/* Footer */}
          <div className="cw-footer">✨ Powered by Wide Wings Media</div>
        </div>
      )}

      <button className="cw-launcher" onClick={() => (open ? handleClose() : handleOpen())} aria-label={open ? 'Close chat' : 'Open chat'}>
        {open ? <CloseIcon /> : <ChatIcon />}
      </button>
    </>
  );
}
