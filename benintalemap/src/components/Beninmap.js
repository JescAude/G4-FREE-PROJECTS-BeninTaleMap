/*
** EPITECH PROJECT, 2025
** G4-FREE-PROJECTS-BeninTaleMap
** File description:
** Beninmap
*/

import React, { useEffect, useRef } from 'react';
import { Map, config, MapStyle, NavigationControl, Popup, Marker} from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './Beninmap.css'

const MAPTILER_KEY = 'x8aIWdX8NggFcmbfZ2HU';
config.apiKey = MAPTILER_KEY;

export default function BeninMap3D() {
  const mapContainer = useRef(null);
  const map = useRef(null);
const villes = [
  { name: "Parakou", coords: [2.625, 9.345] },
  { name: "Cotonou", coords: [2.4219, 6.3703] },
  { name: "Porto-Novo", coords: [2.6322, 6.4969] },
  { name: "Djougou", coords: [1.6667, 9.7000] },
  { name: "Natitingou", coords: [1.3840, 10.3000] },
  { name: "Abomey", coords: [1.9833, 7.1833] },
  { name: "Ouidah", coords: [2.0833, 6.3667] },
  { name: "Allada", coords: [2.1500, 6.6333] },
  { name: "Nikki", coords: [3.1833, 9.9333] },
  { name: "Savalou", coords: [1.7333, 7.9333] },
  { name: "Dassa-Zoumè", coords: [2.2000, 7.7500] },
  { name: "Kétou", coords: [2.6000, 7.3500] },
  { name: "Tchaourou", coords: [2.6000, 8.8833] },
  { name: "Bohicon", coords: [2.0667, 7.1667] },
];

  useEffect(() => {
    if (!map.current) {
      map.current = new Map({
        container: mapContainer.current,
        style: MapStyle.BASIC,
        center: [2.6, 9.2],
        zoom: 7,
        pitch: 45,
        bearing: 0,
        terrain: { source: 'maptiler-terrain' },
      });

      map.current.addControl(new NavigationControl(), 'top-right');
      map.current.on('load', () => {
        villes.forEach((ville) => {
          const marker = new Marker({ color: 'red' })
            .setLngLat(ville.coords)
            .setPopup(new Popup().setHTML(`
              <div class="popup-3d">
                <h3>${ville.name}</h3>
                <p>Ville du Bénin</p>
              </div>`))
            .addTo(map.current);
        });
        map.current.on('mouseenter', 'villes-points', () => {
        map.current.getCanvas().style.cursor = 'pointer';
      });

        map.current.on('mouseleave', 'villes-points', () => {
        map.current.getCanvas().style.cursor = '';
      });
    });
  }
}, []);

return <div ref={mapContainer} style={{ width: '100vw', height: '100vh' , position: 'relative'}} />;
}
