"use client";
import React, { useState } from "react";
const Skills = ({ data }) => {
  const [activeTab, setActibeTab] = useState("soft");

  const setBg = (active) => (activeTab === active ? "bg-yellow" : "bg-grey");
  const setTabsAligment = (tab) =>
    tab === "soft" ? "text-left" : "text-right";

  // Membuat menjadi Variabel
  const tabs = (
    <div className="flex">
      {["soft", "hard"].map((el) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBg(el)} ${setTabsAligment(el)} `}
          onClick={() => setActibeTab(el)}
        >
          {el} Skill
        </button>
      ))}
    </div>
  );

  const content = (
    <ul
      className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${
        activeTab == "soft" ? "justify-start" : "justify-end"
      }`}
    >
      {data[activeTab].map(({ icon, text }) => (
        <li key={text} className="skill">
          <span>{icon}</span>
          {text}
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      {tabs}
      {content}
    </div>
  );
};

export default Skills;
