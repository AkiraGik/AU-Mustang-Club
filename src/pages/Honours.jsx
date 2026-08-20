import { honours, recentResults } from "../data/honours";

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
        <h1>Honours &amp; Results</h1>
        <p>Trophies won and recent results.</p>
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

      <section className="squad-section">
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
      </section>
    </div>
  );
}
