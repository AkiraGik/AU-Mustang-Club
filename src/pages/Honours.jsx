import { honours, recentResults, upcomingFixtures, roadmap } from "../data/honours";

function formatDate(d) {
  return new Date(d).toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Honours() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Honours &amp; Fixtures</h1>
        <p>Trophies won, recent results, upcoming matches, and the club's yearly roadmap.</p>
      </div>

      <section className="squad-section">
        <h2 className="squad-section-title">Honours</h2>
        <div className="honours-list">
          {honours.map((h, i) => (
            <div className="honours-row" key={i}>
              <span className="honours-season">{h.season}</span>
              <span className="honours-competition">{h.competition}</span>
              <span
                className={`badge ${h.result === "Champions" ? "badge-active" : "badge-alumni"}`}
              >
                {h.result}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="squad-section two-col">
        <div>
          <h2 className="squad-section-title">Recent Results</h2>
          <div className="match-list">
            {recentResults.map((m, i) => (
              <div className="match-row" key={i}>
                <span className="match-date">{formatDate(m.date)}</span>
                <span className="match-opponent">{m.opponent}</span>
                <span className="match-score">{m.score}</span>
                <span className={`match-result match-${m.result}`}>{m.result}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="squad-section-title">Upcoming Fixtures</h2>
          <div className="match-list">
            {upcomingFixtures.map((m, i) => (
              <div className="match-row" key={i}>
                <span className="match-date">{formatDate(m.date)}</span>
                <span className="match-opponent">{m.opponent}</span>
                <span className="match-venue">{m.venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="squad-section">
        <h2 className="squad-section-title">Season Roadmap</h2>
        <p className="section-sub">What happens throughout the club year, month by month.</p>
        <div className="roadmap">
          {roadmap.map((r, i) => (
            <div className="roadmap-item" key={i}>
              <div className="roadmap-month">{r.month}</div>
              <div className="roadmap-line">
                <div className="roadmap-dot" />
                {i < roadmap.length - 1 && <div className="roadmap-connector" />}
              </div>
              <div className="roadmap-content">
                <h3>{r.title}</h3>
                <p>{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
