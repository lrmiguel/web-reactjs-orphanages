import React, { useContext } from 'react';
import { BiMap } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FiPower } from 'react-icons/fi';

import MenuContext from '../contexts/MenuContext';
import AuthContext from '../contexts/AuthContext';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/components/sidebar-dashboard.css';

interface SidebarDashboardProps {
    activeScreen: string;
}

export default function SidebarDashboard(props: SidebarDashboardProps) {
    const { activeMenu, activateMenu } = useContext(MenuContext);
    const { signOut } = useContext(AuthContext);

    return (
        <aside className="app-sidebar-dashboard">
            <img src={mapMarkerImg} alt="Happy" />

            <div className="menu">
                <button
                    type="button"
                    className={"menu-button " + (activeMenu === 'approved-orphanages' ? 'menu-button-active' : '')}
                    onClick={event => activateMenu('approved-orphanages')}
                >
                    <BiMap size={24} />
                </button>
                <button
                    type="button"
                    className={"menu-button " + (activeMenu === 'pending-orphanages' ? 'menu-button-active' : '')}
                    onClick={event => activateMenu('pending-orphanages')}>
                    <AiOutlineInfoCircle size={24} />
                </button>
            </div>

            <footer>
                <button type="button" onClick={event => signOut()}>
                    <FiPower size={24} color="#FFF" />
                </button>
            </footer>
        </aside>
    );
}