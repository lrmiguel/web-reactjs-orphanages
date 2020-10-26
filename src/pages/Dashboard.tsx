import React, { useContext } from "react";

import SidebarDashboard from "../components/SidebarDashboard";

import '../styles/pages/dashboard.css';
import OrphanageCard from "../components/OrphanageCard";
import MenuContext from "../contexts/MenuContext";

export default function Dashboard() {
  const { activeMenu } = useContext(MenuContext);

  return (
    <div id="page-dashboard">
      <div className="sidebar-container">
        <SidebarDashboard activeScreen='approved-orphanages' />
      </div>
      { activeMenu === 'approved-orphanages' ?
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
        :
        <div className="active-screen">
          <header>
            <div className="header">
              <h1>
                Cadastros pendentes
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
      }
    </div>
  );
}