import './BookSession.css';

export default function BookSession() {
  return (
    <div className="book-session-page">
      <h2>Book Counseling Session</h2>
      <p>Schedule a session with a career counselor.</p>
      <form className="session-form">
        <label>Your Name</label>
        <input type="text" placeholder="Enter name" />
        <label>Preferred Date</label>
        <input type="date" />
        <label>Preferred Time</label>
        <input type="time" />
        <button type="submit">Book Session</button>
      </form>
    </div>
  );
}
