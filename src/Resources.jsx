import './Resources.css';

export default function Resources() {
  const RES = [
    { title: "How to Build an Impressive Resume", type: "Guide", days: 5 },
    { title: "Video: Data Science Explained", type: "Video", days: 11 },
    { title: "Article: Product Management 101", type: "Article", days: 20 },
  ];
  return (
    <div className="resources-page">
      <h2>Browse Resources</h2>
      <p>Access guides, articles, and videos</p>
      <ul className="resource-list">
        {RES.map(r => (
          <li key={r.title}>
            <span className="res-type">{r.type}</span>
            <span className="res-title">{r.title}</span>
            <span className="res-date">{r.days} days ago</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
