import Avatar from "./Avatar";

export default function PlayerCard({ name, photo, position, number, subtitle }) {
  return (
    <div className="player-card">
      <div className="player-card-photo">
        <Avatar name={name} photo={photo} size={104} />
        {number != null && <span className="player-card-number">{number}</span>}
      </div>
      <div className="player-card-name">{name}</div>
      {position && <div className="player-card-position">{position}</div>}
      {subtitle && <div className="player-card-subtitle">{subtitle}</div>}
    </div>
  );
}
