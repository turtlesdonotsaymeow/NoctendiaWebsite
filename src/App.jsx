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
          An independent studio making story-driven RPGs set in beautiful,
          dying worlds.
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
          Every game its own world
        </h2>
        <p
          style={{
            color: COLORS.parchmentDim,
            fontSize: 17,
            lineHeight: 1.8,
          }}
        >
          Noctendia is a series of role-playing games. Some are built as
          grid-based tactics, others as traditional turn-based journeys.
          Each game stands entirely on its own, with its own cast, its own
          story, and its own world. What they share is a tone: ruin and
          beauty side by side, old institutions, and the quiet dread of
          things not fully understood.
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
            You wake as Aerin, a Doll: an advanced automaton from an ancient
            civilization thought long extinct. Around you is a beautiful
            city at the brink of death. Among the ruins are survivors of
            the Collegium, once the capital institution for trade,
            education, and the arts, and above all for Hunting, the work
            that kept nightmarish monsters at bay so people could live in
            peace. Its Hunters were known as Companies. This is the story
            of Company 12.
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
          building story-driven RPGs. Its first game, Noctendia:
          Company 12, is now in development.
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
