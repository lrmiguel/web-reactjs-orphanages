import React from 'react';

import { Map, Marker, TileLayer } from "react-leaflet";
import { FiEdit3 } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';

import mapIcon from "../utils/mapIcon";

import '../styles/components/orphanage-card.css';

export default function OrphanageCard() {
  return (
    <div className="orphanage-card">
      <div className="map-preview">
        <Map
          center={[-23.6343339, -46.5258909]}
          zoom={16}
          style={{ width: '100%', height: '100%', borderRadius: 20 }}
          dragging={false}
          touchZoom={false}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
        >
          <TileLayer
            url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}
          />
          <Marker interactive={false} icon={mapIcon} position={[-23.6343339, -46.5258909]} />
        </Map>
      </div>
      <footer>
        <div className="rodape">
          <div className="rodape-content">
            <h2>Orfanato EsperançaOrfanato EsperançaOrfanato EsperançaOrfanato EsperançaOrfanato EsperançaOrfanato Esperança</h2>
            <div className="approval-options">
              <button className="options-button">
                <FiEdit3 size={24} />
              </button>
              <button className="options-button">
                <AiOutlineDelete size={24} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
} 