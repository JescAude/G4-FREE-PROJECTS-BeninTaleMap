/*
** EPITECH PROJECT, 2025
** G4-FREE-PROJECTS-BeninTaleMap
** File description:
** Beninmap
*/

import React, { useEffect, useRef } from 'react';
import { Map, config, MapStyle, NavigationControl, Popup, Marker } from '@maptiler/sdk';
import { useNarrator } from './AIcontext';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './Beninmap.css';
const MAPTILER_KEY = 'x8aIWdX8NggFcmbfZ2HU';
config.apiKey = MAPTILER_KEY;

function normalizeFileName(name) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9\-]/g, '')
    + '.mp3';
}

export default function BeninMap3D({ searchTerm }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const currentAudioRef = useRef(null);
  const { isNarratorEnabled, mapStyle } = useNarrator();

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

  const getMapStyle = () => {
    return mapStyle === 'satellite'
      ? MapStyle.SATELLITE
      : MapStyle.BASIC;
  };

  useEffect(() => {
    if (map.current) {
      map.current.remove();
      map.current = null;
    }

    map.current = new Map({
      container: mapContainer.current,
      style: getMapStyle(),
      center: [2.6, 9.2],
      zoom: 7,
      pitch: 45,
      bearing: 0,
    });

    map.current.addControl(new NavigationControl(), 'top-right');

    map.current.on('style.load', () => {
      if (map.current.getSource('maptiler-terrain')) {
        map.current.setTerrain({ source: 'maptiler-terrain' });
      }
    });

    map.current.on('load', () => {
      villes.forEach((ville) => {
        const marker = new Marker({ color: 'red' })
          .setLngLat(ville.coords)
          .setPopup(
            new Popup().setHTML(`
              <div class="popup-3d">
                <h3>${ville.name}</h3>
                <p>Ville du Bénin</p>
              </div>`)
          )
          .addTo(map.current);

        marker.getElement().addEventListener('click', () => {
          if (!isNarratorEnabled) return;

          if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current.currentTime = 0;
          }

          const audioFile = normalizeFileName(ville.name);
          const newAudio = new Audio(`/audio/${audioFile}`);
          currentAudioRef.current = newAudio;

          newAudio.play().catch(err => {
            console.error(`Erreur de lecture audio pour ${ville.name}:`, err);
          });
        });
      });
    });
  }, [mapStyle, isNarratorEnabled]);

  useEffect(() => {
    if (!searchTerm || !map.current) return;

    const ville = villes.find(v =>
      v.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (!ville) return;

    const mapInstance = map.current;

    const flyToVille = () => {
      mapInstance.flyTo({
        center: ville.coords,
        zoom: 11,
        speed: 1.4,
        curve: 1.2,
        essential: true,
      });
    };

    if (mapInstance.isStyleLoaded()) {
      flyToVille();
    } else {
      mapInstance.once('styledata', flyToVille);
    }
  }, [searchTerm]);

  return (
    <div
      ref={mapContainer}
      style={{ width: '100vw', height: '100vh', position: 'relative' }}
    />
  );
}
