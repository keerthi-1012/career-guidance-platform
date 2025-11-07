import './Dashboard.css';

export default function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard-main-advanced">
      <nav className="navbar">
        <div className="navbar-left">
          <span className="logo"><span className="logo-icon">🎓</span> CareerGuide</span>
          <span className="nav-link active">Dashboard</span>
          <span className="nav-link">Explore Careers</span>
          <span className="nav-link">Quiz</span>
          <span className="nav-link">Book Session</span>
          <span className="nav-link">Resources</span>
        </div>
        <div className="navbar-right">
          <span className="avatar"></span>
          <span className="user-name">{user?.name || 'John Doe'}</span>
          <button className="logout-btn" onClick={onLogout}>Logout</button>
        </div>
      </nav>

      <div className="dashboard-content-advanced">
        <div className="stats-row">
          <div className="stat-card">
            <div>Completed Sessions</div>
            <div className="stat-value">1 <span className="icon-green">✔️</span></div>
          </div>
          <div className="stat-card">
            <div>Upcoming Sessions</div>
            <div className="stat-value">1 <span className="icon-blue">🕒</span></div>
          </div>
          <div className="stat-card">
            <div>Careers Explored</div>
            <div className="stat-value">8+ <span className="icon-purple">🧭</span></div>
          </div>
          <div className="stat-card">
            <div>Progress</div>
            <div className="stat-value">65% <span className="icon-orange">📈</span></div>
          </div>
        </div>
        <div className="actions-activity-row">
          <div className="quick-actions">
            <h3>Quick Actions</h3>
            <p>Get started with these key features</p>
            <div className="actions-grid">
              <div className="action-card blue">
                <div className="action-title">Explore Careers</div>
                <div className="action-desc">Discover career paths that match your interests</div>
              </div>
              <div className="action-card purple">
                <div className="action-title">Take Assessment</div>
                <div className="action-desc">Complete a quiz to identify your strengths</div>
              </div>
              <div className="action-card green">
                <div className="action-title">Book Counseling</div>
                <div className="action-desc">Schedule a session with a career counselor</div>
              </div>
              <div className="action-card orange">
                <div className="action-title">Browse Resources</div>
                <div className="action-desc">Access guides, articles, and videos</div>
              </div>
            </div>
          </div>
          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <p>Your latest actions on the platform</p>
            <ul>
              <li>
                <span className="dot"></span>
                Completed Career Assessment<br/><span className="activity-date">2 days ago</span>
              </li>
              <li>
                <span className="dot"></span>
                Explored Software Developer Career<br/><span className="activity-date">3 days ago</span>
              </li>
              <li>
                <span className="dot"></span>
                Read "How to Build an Impressive Resume"<br/><span className="activity-date">5 days ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
