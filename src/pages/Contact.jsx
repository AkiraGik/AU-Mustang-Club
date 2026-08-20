import { club } from "../data/club";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("This form is a placeholder — connect it to an email service or form backend to receive messages.");
  }

  return (
    <div className="page">
      <div className="page-header">
        <h1>Contact</h1>
        <p>Get in touch, ask about joining, or reach out for match/sponsorship enquiries.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Club Details</h2>
          <dl className="contact-list">
            <div>
              <dt>Club</dt>
              <dd>{club.name}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{club.location}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{club.email}</dd>
            </div>
            <div>
              <dt>Facebook</dt>
              <dd>
                <a href={club.social.facebook} target="_blank" rel="noreferrer">
                  {club.social.facebook.replace("https://www.", "")}
                </a>
              </dd>
            </div>
            <div>
              <dt>Instagram</dt>
              <dd>
                <a href={club.social.instagram} target="_blank" rel="noreferrer">
                  {club.social.instagram.replace("https://www.", "")}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send a Message</h2>
          <label>
            Name
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
