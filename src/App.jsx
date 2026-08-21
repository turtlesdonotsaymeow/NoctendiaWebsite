import React, { useState } from "react";
import { Menu, X, Mail, ExternalLink } from "lucide-react";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap');`;

const COLORS = {
  void: "#0a0a0c",
  panel: "#131015",
  panelLight: "#1a1620",
  parchment: "#e7e0d2",
  parchmentDim: "#9c9488",
  wine: "#5c1a24",
  wineLight: "#7a2331",
  brass: "#a8874f",
  hairline: "#2e2a30",
};

function Divider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden="true">
      <span style={{ width: 60, height: 1, background: COLORS.hairline }} />
      <span
        style={{
          width: 6,
          height: 6,
          transform: "rotate(45deg)",
          background: COLORS.brass,
        }}
      />
      <span style={{ width: 60, height: 1, background: COLORS.hairline }} />
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <div
      style={{
        fontFamily: "Cinzel, serif",
        letterSpacing: "0.25em",
        color: COLORS.brass,
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {children}
    </div>
  );
}

export default function NoctendiaSite() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { label: "The Series", href: "#series" },
    { label: "Company 12", href: "#company-12" },
    { label: "The Studio", href: "#studio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div
      style={{
        background: COLORS.void,
        color: COLORS.parchment,
        minHeight: "100vh",
        fontFamily: "Lora, serif",
      }}
    >
      <style>{FONT_IMPORT}</style>

      {/* NAV */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(10,10,12,0.9)",
          backdropFilter: "blur(6px)",
          borderBottom: `1px solid ${COLORS.hairline}`,
        }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <span
            style={{
              fontFamily: "Cinzel, serif",
              fontWeight: 600,
              letterSpacing: "0.15em",
              fontSize: 18,
            }}
          >
            NOCTENDIA
          </span>

          <nav className="hidden md:flex gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  color: COLORS.parchmentDim,
                }}
                className="hover:text-white transition-colors"
              >
                {l.label.toUpperCase()}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle menu"
            style={{ color: COLORS.parchment }}
          >
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {navOpen && (
          <div
            className="md:hidden flex flex-col gap-4 px-6 pb-5"
            style={{ borderTop: `1px solid ${COLORS.hairline}` }}
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setNavOpen(false)}
                style={{
                  fontFamily: "Cinzel, serif",
                  fontSize: 13,
                  letterSpacing: "0.15em",
                  color: COLORS.parchmentDim,
                  paddingTop: 8,
                }}
              >
                {l.label.toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        <Eyebrow>NOCTENDIA INTERACTIVE PRESENTS</Eyebrow>
        <h1
          style={{
            fontFamily: "Cinzel, serif",
            fontWeight: 600,
            letterSpacing: "0.08em",
            fontSize: "clamp(48px, 9vw, 96px)",
            lineHeight: 1.05,
            marginTop: 18,
            marginBottom: 18,
          }}
        >
          NOCTENDIA
        </h1>
        <p
          style={{
            fontFamily: "Lora, serif",
            fontStyle: "italic",
            color: COLORS.parchmentDim,
            fontSize: 18,
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          Worlds worth mourning, and the stories that survive them.
        </p>

        <Divider />

        <div className="mt-6 inline-flex flex-col items-center gap-3">
          <span
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 11,
              letterSpacing: "0.2em",
              color: COLORS.brass,
              border: `1px solid ${COLORS.brass}`,
              padding: "6px 14px",
            }}
          >
            IN DEVELOPMENT
          </span>
          <a
            href="#company-12"
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 14,
              letterSpacing: "0.1em",
              color: COLORS.parchment,
            }}
            className="hover:text-brass transition-colors underline underline-offset-8"
          >
            See the first game: Company 12
          </a>
        </div>
      </section>

      {/* THE SERIES */}
      <section id="series" className="max-w-3xl mx-auto px-6 py-16">
        <Eyebrow>THE SERIES</Eyebrow>
        <h2
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 30,
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          Under the same night
        </h2>
        <p
          style={{
            color: COLORS.parchmentDim,
            fontSize: 17,
            lineHeight: 1.8,
          }}
        >
          Every Noctendia game is a world of its own: a new cast, a new
          story, a new way to play. Some unfold as grid-based tactics,
          others as classic turn-based journeys. What binds them is
          something quieter: the feeling of standing somewhere beautiful
          just as the light begins to leave.
        </p>
      </section>

      {/* COMPANY 12 */}
      <section
        id="company-12"
        style={{ background: COLORS.panel, borderTop: `1px solid ${COLORS.hairline}`, borderBottom: `1px solid ${COLORS.hairline}` }}
      >
        <div className="max-w-3xl mx-auto px-6 py-16">
          <Eyebrow>CURRENT PROJECT</Eyebrow>
          <h2
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 34,
              marginTop: 10,
              marginBottom: 8,
            }}
          >
            Noctendia: Company 12
          </h2>
          <p
            style={{
              fontFamily: "Lora, serif",
              fontStyle: "italic",
              color: COLORS.brass,
              fontSize: 15,
              marginBottom: 20,
            }}
          >
            A story-driven turn-based RPG
          </p>
          <p
            style={{
              color: COLORS.parchmentDim,
              fontSize: 17,
              lineHeight: 1.8,
            }}
          >
            The city was the jewel of its age, and it is dying beautifully.
            Aerin wakes in its ruins: a Doll, an automaton out of a
            civilization the world remembers only as myth. Around him
            gather the survivors of the Collegium, the great institution
            that once ordered the city's life: its trade, its learning,
            its arts, and its Hunts, which kept the nightmares beyond the
            walls. Its Hunters served in companies. This is the story of
            Company 12.
          </p>
          <div
            className="mt-8 inline-block"
            style={{
              fontFamily: "Cinzel, serif",
              fontSize: 11,
              letterSpacing: "0.2em",
              color: COLORS.parchmentDim,
              border: `1px solid ${COLORS.hairline}`,
              padding: "8px 16px",
            }}
          >
            WISHLIST COMING SOON
          </div>
        </div>
      </section>

      {/* STUDIO */}
      <section id="studio" className="max-w-3xl mx-auto px-6 py-16">
        <Eyebrow>THE STUDIO</Eyebrow>
        <h2
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 30,
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          Noctendia Interactive
        </h2>
        <p
          style={{
            color: COLORS.parchmentDim,
            fontSize: 17,
            lineHeight: 1.8,
          }}
        >
          Noctendia Interactive is an independent studio founded in 2026,
          built on a simple conviction: a world can be dark and still be
          beautiful. Its first game, Noctendia: Company 12, is now in
          development.
        </p>
      </section>

      {/* CONTACT / FOOTER */}
      <footer
        id="contact"
        style={{ borderTop: `1px solid ${COLORS.hairline}` }}
        className="px-6 py-14 text-center"
      >
        <Eyebrow>FOLLOW ALONG</Eyebrow>
        <p style={{ color: COLORS.parchmentDim, marginTop: 14, marginBottom: 22 }}>
          Updates on Noctendia: Company 12 will be posted here as they're
          ready.
        </p>
        <a
          href="mailto:contact@noctendia.com"
          className="inline-flex items-center gap-2 hover:text-brass transition-colors"
          style={{
            fontFamily: "Cinzel, serif",
            fontSize: 13,
            letterSpacing: "0.1em",
            color: COLORS.parchment,
          }}
        >
          <Mail size={16} />
          CONTACT@NOCTENDIA.COM
        </a>
        <div className="mt-8 flex items-center justify-center gap-7">
          {[
            {
              label: "X",
              href: "https://x.com/Noctendia",
              path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/noctendia/",
              path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@Noctendia",
              path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z M9.545 15.568V8.432L15.818 12l-6.273 3.568z",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Noctendia on ${s.label}`}
              className="hover:text-white transition-colors"
              style={{ color: COLORS.parchmentDim }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>
        <div
          style={{
            color: COLORS.parchmentDim,
            fontSize: 12,
            marginTop: 40,
            letterSpacing: "0.05em",
          }}
        >
          © 2026 Noctendia Interactive LLC
        </div>
      </footer>
    </div>
  );
}
