import { useReducer, useCallback } from "react";

import reducer, { ACTION_TYPES, EMPTY_STATE } from "./reducer";

function useConfigReducer() {
  const [state, dispatch] = useReducer(reducer(), {
    ...EMPTY_STATE,
  });

  const { layerStyle } = state;

  const setLayerStyle = useCallback(
    (newLayerStyle) => {
      return dispatch({ type: ACTION_TYPES.SET_STYLE, payload: newLayerStyle });
    },
    [dispatch]
  );

  return {
    layerStyle,
    setLayerStyle,
  };
}

export default useConfigReducer;
