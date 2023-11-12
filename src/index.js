import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./index.css";

const container = document.getElementById("app");
const root = createRoot(container);

const apiCallbacks = {
  onLayerStyleChanged: (layerId, style) => {
    console.log("on layer style changed", layerId, style);
  },
  fetchColumnsForLayer: (layerId) => {
    console.log("fetch columns for layer", layerId);
    return Promise.resolve([]);
  },
  fetchUniqueColumnValues: (layerId, column) => {
    console.log("fetch unique column values for layer", layerId, column);
    return Promise.resolve([]);
  },
};

const config = {
  layerType: "circle",
  layerId: "layer-1",
  layerSourceConfig: {
    type: "vector",
    tiles: "mapbox://mapbox.660ui7x6",
  },
  initialLayerStyle: {
    type: "circle",
    paint: {
      "circle-color": "red",
      "circle-radius": 10,
    },
  },
  apiCallbacks,
};

root.render(<App config={config} apiCallbacks={apiCallbacks} />);
