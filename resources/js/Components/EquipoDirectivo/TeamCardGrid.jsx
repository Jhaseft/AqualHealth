// TeamCardGrid.jsx
import React from "react";
import TeamCard from "./TeamCard";

export default function TeamCardGrid({ members = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {members.map((member, index) => (
        <TeamCard key={index} member={member} />
      ))}
    </div>
  );
}
