import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import { useConfig } from "../../config";

import defaultMapStyle from "./default-map-style.json";

export default function Map() {
  const { layerId, layerType, layerSourceConfig, layerStyle } = useConfig();

  const mapContainer = useRef(null);
  const map = useRef(null);

  const [lng] = useState(24);
  const [lat] = useState(2);

  const [zoom] = useState(3);

  const initializeVectorLayer = () => {
    const geojson = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Point",
            coordinates: [24, 2],
          },
        },
      ],
    };

    map.current.addSource(layerId, {
      type: "geojson",
      data: geojson,
    });

    map.current.addLayer({
      id: layerId,
      source: layerId,
      ...layerStyle,
    });
  };

  const updateVectorLayer = () => {
    if (!map.current) return;

    if (!map.current.getLayer(layerId)) {
      return initializeVectorLayer();
    }

    // update paint properties
    const paintProperties = layerStyle.paint;
    Object.keys(paintProperties).forEach((key) => {
      map.current.setPaintProperty(layerId, key, paintProperties[key]);
    });
  };

  const onMapLoad = (map) => {};

  useEffect(() => {
    if (Object.keys(layerStyle)) {
      updateVectorLayer();
    }
  }, [layerStyle]);

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: defaultMapStyle,
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.addControl(new maplibregl.NavigationControl(), "bottom-right");

    map.current.on("load", () => {
      onMapLoad(map.current);
    });
  }, [lng, lat, zoom]);

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      ref={mapContainer}
      className="map"
    />
  );
}
