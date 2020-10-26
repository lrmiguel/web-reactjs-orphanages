import React from "react";

import SidebarDashboard from "../components/SidebarDashboard";

import '../styles/pages/dashboard.css';
import OrphanageCard from "../components/OrphanageCard";

export default function Dashboard() {
  return (
    <div id="page-dashboard">
      <div className="sidebar-container">
        <SidebarDashboard activeScreen='approved-orphanages' />
      </div>
      <div className="active-screen">
        <header>
          <div className="header">
            <h1>
              Orfanatos Cadastrados
            </h1>
            <p>2 orfanatos</p>
          </div>
          <hr />
          <div className="cards-container">
            <OrphanageCard />
            <OrphanageCard />
            <OrphanageCard />
          </div>
        </header>
      </div>
    </div>
  );
}