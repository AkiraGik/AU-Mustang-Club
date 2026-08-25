import { useState } from "react";
import { seasons } from "../data/seasons";
import PlayerCard from "../components/PlayerCard";
import Reveal from "../components/Reveal";

export default function SeasonSquads() {
  const [activeYear, setActiveYear] = useState(
    seasons.find((s) => s.current)?.year ?? seasons[0].year
  );
  const season = seasons.find((s) => s.year === activeYear) ?? seasons[0];

  return (
    <div className="page">
      <div className="page-header">
        <h1>Squads &amp; Coaches</h1>
        <p>The players and coaching staff for each season.</p>
      </div>

      <div className="season-tabs">
        {seasons.map((s) => (
          <button
            key={s.year}
            className={`season-tab ${s.year === activeYear ? "active" : ""}`}
            onClick={() => setActiveYear(s.year)}
          >
            {s.year}
          </button>
        ))}
      </div>

      {season.coaches.length > 0 && (
        <Reveal as="section" className="squad-section" key={`${season.year}-coaches`}>
          <h2 className="squad-section-title">Coaching Staff</h2>
          <div className="coach-grid stagger">
            {season.coaches.map((c, i) => (
              <PlayerCard key={i} name={c.name} photo={c.photo} subtitle={c.role} />
            ))}
          </div>
        </Reveal>
      )}

      <Reveal as="section" className="squad-section" key={`${season.year}-players`}>
        <h2 className="squad-section-title">Players — {season.year}</h2>
        <div className="player-grid stagger">
          {season.players.map((p, i) => (
            <PlayerCard
              key={i}
              name={p.name}
              photo={p.photo}
              number={p.number}
              position={p.position}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
