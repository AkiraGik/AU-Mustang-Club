import { Link } from "react-router-dom";
import Crest from "../components/Crest";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import { club } from "../data/club";
import { honours, recentResults } from "../data/honours";
import { seasons } from "../data/seasons";

function renderBold(text) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i}>{part.slice(2, -2)}</strong>
    ) : (
      part
    )
  );
}

export default function Home() {
  const currentSeason = seasons.find((s) => s.current) ?? seasons[0];
  const lastResult = recentResults[0];

  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-crest hero-pop">
          <Crest size={120} />
        </div>
        <h1 className="hero-pop hero-pop-1">{club.shortName}</h1>
        <p className="hero-thai hero-pop hero-pop-2">{club.thaiName}</p>
        <p className="hero-tagline hero-pop hero-pop-3">{club.tagline}</p>
        <div className="hero-actions hero-pop hero-pop-4">
          <Link to="/squads" className="btn btn-primary">
            Meet the Squad
          </Link>
          <Link to="/honours" className="btn btn-outline">
            Honours &amp; Results
          </Link>
        </div>
      </section>

      <Reveal as="section" className="home-stats stagger">
        <div className="stat-card">
          <div className="stat-label">Current Season</div>
          <div className="stat-value">{currentSeason.year}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Honours</div>
          <div className="stat-value">
            <CountUp value={honours.length} />
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Last Result</div>
          <div className="stat-value">
            {lastResult.result} {lastResult.score}
          </div>
          <div className="stat-sub">vs {lastResult.opponent}</div>
        </div>
      </Reveal>

      <Reveal as="section" className="home-about">
        <h2>Our Story</h2>
        {club.history.map((p, i) => (
          <p key={i}>{renderBold(p)}</p>
        ))}
      </Reveal>

      <Reveal as="section" className="home-links stagger">
        <Link to="/squads" className="home-link-card">
          <h3>Squads &amp; Coaches</h3>
          <p>Photos of the squad and coaching staff, season by season.</p>
        </Link>
        <Link to="/gallery" className="home-link-card">
          <h3>Gallery</h3>
          <p>Match day, training and team moments.</p>
        </Link>
        <Link to="/honours" className="home-link-card">
          <h3>Honours &amp; Results</h3>
          <p>Trophies won and recent match results.</p>
        </Link>
      </Reveal>
    </div>
  );
}
