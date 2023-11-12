import { createContext } from "use-context-selector";

const defaultContext = {
  layerId: null,
  layerType: "",
  layerSourceConfig: {},
  initialLayerStyle: {},
  apiCallbacks: {},
  actions: {
    setLayerStyle: () => null,
  },
};

export default createContext(defaultContext);
