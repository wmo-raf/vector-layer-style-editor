import React from "react";

import { useConfig } from "../../config";

import "./style.css";

function SideBar() {
  const {
    layerId,
    layerStyle,
    actions: { setLayerStyle },
    apiCallbacks: { onLayerStyleChanged },
  } = useConfig();

  const onButtonClick = () => {
    setLayerStyle({
      type: "circle",
      paint: {
        "circle-color": "green",
        "circle-radius": 20,
      },
    });

    if (onLayerStyleChanged) {
      onLayerStyleChanged(layerId, layerStyle);
    }
  };

  return (
    <div className="sidebar-container">
      <button style={{ margin: 20 }} onClick={onButtonClick}>
        Set Style
      </button>
    </div>
  );
}

export default SideBar;
