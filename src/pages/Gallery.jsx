import { useMemo, useState } from "react";
import Reveal from "../components/Reveal";
import { galleryItems, galleryCategories } from "../data/gallery";

const PATTERNS = [
  "linear-gradient(135deg, #14202b, #c8102e)",
  "linear-gradient(135deg, #c8102e, #14202b)",
  "linear-gradient(135deg, #1f3a52, #8f1f2b)",
  "linear-gradient(135deg, #8f1f2b, #1f3a52)",
];

export default function Gallery() {
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => galleryItems.filter((g) => category === "All" || g.category === category),
    [category]
  );

  return (
    <div className="page">
      <div className="page-header">
        <h1>Gallery</h1>
        <p>Match day, training and team moments through the years.</p>
      </div>

      <div className="filters">
        {galleryCategories.map((c) => (
          <button
            key={c}
            className={`chip ${category === c ? "active" : ""}`}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <Reveal key={category} className="gallery-grid stagger">
        {filtered.map((item, i) => (
          <figure className="gallery-tile" key={i}>
            {item.src ? (
              <img src={item.src} alt={item.caption} />
            ) : (
              <div
                className="gallery-placeholder"
                style={{ background: PATTERNS[i % PATTERNS.length] }}
              >
                <span>{item.category}</span>
              </div>
            )}
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </Reveal>
    </div>
  );
}
