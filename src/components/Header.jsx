import { useState } from "react";
import { NavLink } from "react-router-dom";
import Crest from "./Crest";
import { club } from "../data/club";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/squads", label: "Squads & Coaches" },
  { to: "/gallery", label: "Gallery" },
  { to: "/honours", label: "Honours & Results" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <Crest size={40} />
          <span className="brand-text">
            <span className="brand-name">{club.shortName}</span>
          </span>
        </NavLink>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav ${open ? "site-nav-open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => "site-nav-link" + (isActive ? " active" : "")}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
