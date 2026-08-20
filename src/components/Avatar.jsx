const COLORS = ["#8f1f2b", "#14202b", "#c8102e", "#1f3a52", "#a3161f"];

function colorFor(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return COLORS[Math.abs(hash) % COLORS.length];
}

function initialsFor(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Avatar({ name, photo, size = 96 }) {
  if (photo) {
    return (
      <img
        className="avatar avatar-photo"
        src={photo}
        alt={name}
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      className="avatar avatar-initials"
      style={{ width: size, height: size, background: colorFor(name), fontSize: size * 0.36 }}
      aria-label={name}
      title={name}
    >
      {initialsFor(name)}
    </div>
  );
}
