import { Link } from "react-router-dom";
import Crest from "../components/Crest";
import { club } from "../data/club";
import { honours, recentResults } from "../data/honours";
import { seasons } from "../data/seasons";

export default function Home() {
  const currentSeason = seasons.find((s) => s.current) ?? seasons[0];
  const lastResult = recentResults[0];

  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-crest">
          <Crest size={120} />
        </div>
        <h1>{club.shortName}</h1>
        <p className="hero-thai">{club.thaiName}</p>
        <p className="hero-tagline">{club.tagline}</p>
        <div className="hero-actions">
          <Link to="/squads" className="btn btn-primary">
            Meet the Squad
          </Link>
          <Link to="/honours" className="btn btn-outline">
            Honours &amp; Results
          </Link>
        </div>
      </section>

      <section className="home-stats">
        <div className="stat-card">
          <div className="stat-label">Current Season</div>
          <div className="stat-value">{currentSeason.year}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Honours</div>
          <div className="stat-value">{honours.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Last Result</div>
          <div className="stat-value">
            {lastResult.result} {lastResult.score}
          </div>
          <div className="stat-sub">vs {lastResult.opponent}</div>
        </div>
      </section>

      <section className="home-about">
        <h2>Our Story</h2>
        {club.history.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section className="home-links">
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
      </section>
    </div>
  );
}
