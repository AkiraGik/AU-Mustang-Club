import { useMemo, useState } from "react";
import { allTimePlayers, positionOrder } from "../data/players";
import Avatar from "../components/Avatar";

export default function AllTimePlayers() {
  const [query, setQuery] = useState("");
  const [position, setPosition] = useState("All");

  const filtered = useMemo(() => {
    return allTimePlayers
      .filter((p) => (position === "All" ? true : p.position === position))
      .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => positionOrder.indexOf(a.position) - positionOrder.indexOf(b.position));
  }, [query, position]);

  return (
    <div className="page">
      <div className="page-header">
        <h1>All-Time Players</h1>
        <p>Every player who has represented the club, past and present.</p>
      </div>

      <div className="filters">
        <input
          type="search"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="filter-input"
        />
        <select value={position} onChange={(e) => setPosition(e.target.value)} className="filter-select">
          <option value="All">All Positions</option>
          {positionOrder.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </select>
      </div>

      <div className="roster-list">
        {filtered.map((p, i) => (
          <div className="roster-row" key={i}>
            <Avatar name={p.name} size={44} />
            <div className="roster-info">
              <div className="roster-name">{p.name}</div>
              <div className="roster-meta">
                {p.position} &middot; {p.yearsActive}
              </div>
            </div>
            <span className={`badge ${p.status === "Active" ? "badge-active" : "badge-alumni"}`}>
              {p.status}
            </span>
          </div>
        ))}
        {filtered.length === 0 && <p className="empty-state">No players match your search.</p>}
      </div>
    </div>
  );
}
