import { useState } from 'react';
import Dashboard from './Dashboard';
import Careers from './Careers';
import Assessment from './Assessment';
import BookSession from './BookSession';
import Resources from './Resources';

const NAVS = [
  "Dashboard", "Explore Careers", "Quiz", "Book Session", "Resources"
];

export default function App() {
  const [page, setPage] = useState("Dashboard");
  return (
    <>
      <nav className="top-nav">
        {NAVS.map(nav => (
          <span key={nav}
            className={page===nav ? "nav-active" : ""}
            onClick={()=>setPage(nav)}
          >{nav}</span>
        ))}
      </nav>
      {page==="Dashboard" && <Dashboard />}
      {page==="Explore Careers" && <Careers />}
      {page==="Quiz" && <Assessment />}
      {page==="Book Session" && <BookSession />}
      {page==="Resources" && <Resources />}
    </>
  );
}
