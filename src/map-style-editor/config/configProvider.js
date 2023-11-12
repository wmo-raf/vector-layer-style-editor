import React, { useEffect } from "react";

import Context from "./context";
import useConfigReducer from "./useConfigReducer";

function ConfigProvider({ config, children }) {
  const { initialLayerStyle } = config;

  const { setLayerStyle, layerStyle } = useConfigReducer();

  useEffect(() => {
    if (initialLayerStyle) {
      setLayerStyle(initialLayerStyle);
    }
  }, []);

  const state = {
    ...config,
    layerStyle,
    actions: {
      setLayerStyle,
    },
  };

  return <Context.Provider value={state}>{children}</Context.Provider>;
}

export default ConfigProvider;
