// components/WhoWeAreHeader.jsx
import React from "react";
import TeamCardGrid from "./TeamCardGrid";
import teamMembers from "./Hooks/ExecutiveTeamMembers";

export default function ExecutiveTeamHeader() {
    
    return (
        <div className="min-h-screen bg-gradient-to-b bg-white">
            
            <div className="max-w-6xl mx-auto px-6">
                <TeamCardGrid members={teamMembers} />
            </div>
        </div>
    );
}
