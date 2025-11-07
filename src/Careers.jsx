// src/Careers.jsx
import React, { useState } from 'react';
import './Careers.css';

const CATEGORIES = [
  "All Categories", "Technology", "Business", "Creative", "Healthcare", "Finance", "Engineering"
];

const CAREERS = [
  {
    name: "Software Developer",
    category: "Technology",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    name: "Data Analyst",
    category: "Business",
    img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
  },
  {
    name: "Graphic Designer",
    category: "Creative",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
  },
  {
    name: "Nurse",
    category: "Healthcare",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Financial Advisor",
    category: "Finance",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    name: "Civil Engineer",
    category: "Engineering",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b",
  },
  {
    name: "Digital Marketer",
    category: "Business",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    name: "Mechanical Engineer",
    category: "Engineering",
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5",
  }
];

export default function Careers() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [search, setSearch] = useState('');

  const filteredCareers = CAREERS.filter(c =>
    (selectedCategory === "All Categories" || c.category === selectedCategory) &&
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="careers-page">
      <h2>Explore Career Paths</h2>
      <div className="subtitle">
        Discover diverse careers that match your interests and skills
      </div>
      <input
        className="search-careers"
        type="text"
        placeholder="Search careers..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="category-filters">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={cat === selectedCategory ? "filter-btn active" : "filter-btn"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="career-count">Showing {filteredCareers.length} careers</div>
      <div className="careers-grid">
        {filteredCareers.map(career => (
          <div className="career-card" key={career.name}>
            <img src={career.img} alt={career.name} />
            <span className="career-category">{career.category}</span>
            <div className="career-name">{career.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
