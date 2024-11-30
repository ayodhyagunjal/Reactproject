import React from "react";
import '../styles/AboutPage.css';

const AboutPage = () => {
  const data = [
    { id: 1, name: "Item 1", description: "This is the description for Item 1" },
    { id: 2, name: "Item 2", description: "This is the description for Item 2" },
    { id: 3, name: "Item 3", description: "This is the description for Item 3" },
  ];

  return (
    <div className="about-page">
      <h1>Welcome to the About Page</h1>
      <ul className="data-list">
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
