import React from "react";

import SideBar from "./side-bar";
import MapPreview from "./map-preview";
import { ConfigProvider } from "../config";

import "./style.css";

function MapStyleEditor({ config = {} }) {
  return (
    <ConfigProvider config={config}>
      <div className="editor-wrapper">
        <div className="side-bar">
          <SideBar />
        </div>

        <div className="map-preview">
          <MapPreview />
        </div>
      </div>
    </ConfigProvider>
  );
}

export default MapStyleEditor;
