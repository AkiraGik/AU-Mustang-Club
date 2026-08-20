import Crest from "./Crest";
import { club } from "../data/club";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-brand">
          <Crest size={36} />
          <div>
            <div className="footer-name">{club.shortName}</div>
            <div className="footer-thai">{club.thaiName}</div>
          </div>
        </div>

        <div className="footer-social">
          <a href={club.social.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={club.social.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} {club.shortName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
