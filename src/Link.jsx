import "./styles/Link.css";
import logo from "./assets/logo.png";

// TODO: sesuaikan kalau URL final berbeda dari domain di bawah.
const LINKS = [
  {
    label: "Web SenPlay Anime",
    subtitle: "Nonton Anime Sub Indo",
    href: "https://anime.senplay.web.id",
    icon: "anime",
  },
  {
    label: "Web SenPlay Donghua",
    subtitle: "Streaming Donghua Terlengkap",
    href: "https://donghua.senplay.web.id",
    icon: "donghua",
  },
  {
    label: "Web SenPlay Movie",
    subtitle: "Nonton Movie",
    href: "https://movie.senplay.web.id",
    icon: "movie",
  },
  {
    label: "Web SenPlay Komik",
    subtitle: "Baca Komik Sub Indo",
    href: "https://komik.senplay.web.id",
    icon: "komik",
  },
  {
    label: "Join Our Community",
    subtitle: "Gabung Discord Server SenPlay",
    href: "https://discord.gg/5rCDYCTsG2",
    icon: "discord",
  },
];

function IconAnime() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 8.5 5 4h14l2 4.5" />
      <rect x="3" y="8.5" width="18" height="11.5" rx="1.5" />
      <path d="m7 4 2 4.5M13 4l2 4.5M17 4l2 4.5" />
    </svg>
  );
}

function IconDonghua() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8z" />
      <path d="M19 15.5 19.8 17.5 21.5 18.3 19.8 19.1 19 21 18.2 19.1 16.5 18.3 18.2 17.5z" />
    </svg>
  );
}

function IconMovie() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m9 9 5 3-5 3z" />
    </svg>
  );
}

function IconKomik() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 5.5C4 4.67 4.67 4 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5z" />
      <path d="M20 5.5c0-.83-.67-1.5-1.5-1.5H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5z" />
    </svg>
  );
}

function IconDiscord() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .079.009c.12.1.246.198.373.293a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.419-2.157 2.419z" />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

const ICONS = {
  anime: IconAnime,
  donghua: IconDonghua,
  movie: IconMovie,
  komik: IconKomik,
  discord: IconDiscord,
};

export default function Link() {
  return (
    <section className="linkpage" aria-labelledby="linkpage-heading">
      <div className="linkpage__glow" aria-hidden="true" />

      <div className="linkpage__container">
        <div className="linkpage__avatar-ring">
          <img src={logo} alt="Logo SenPlay" className="linkpage__avatar" />
        </div>

        <h1 id="linkpage-heading" className="linkpage__brand">
          SenPlay
        </h1>

        <p className="linkpage__badge">Kumpulan Link Resmi SenPlay</p>

        <p className="linkpage__desc">
          Akses semua layanan streaming SenPlay — anime, donghua, movie, dan
          komik — dalam satu tempat.
        </p>

        <hr className="linkpage__divider" />

        <div className="linkpage__list">
          {LINKS.map((link) => {
            const Icon = ICONS[link.icon];

            return (
              <a
                key={link.href}
                href={link.href}
                className="linkpage__card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="linkpage__card-icon" aria-hidden="true">
                  <Icon />
                </span>

                <span className="linkpage__card-body">
                  <span className="linkpage__card-title">{link.label}</span>

                  <span className="linkpage__card-subtitle">
                    {link.subtitle}
                  </span>
                </span>

                <span className="linkpage__card-arrow" aria-hidden="true">
                  <IconArrow />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}