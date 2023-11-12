export const EMPTY_STATE = {
  layerStyle: {},
};

export const ACTION_TYPES = {
  SET_STYLE: "SET_STYLE",
};

const reducer =
  () =>
  (state, { type, payload }) => {
    switch (type) {
      case ACTION_TYPES.SET_STYLE:
        return {
          ...state,
          layerStyle: {
            ...payload,
          },
        };

      default:
        throw new Error(`Unknown config reducer action: ${type}`);
    }
  };

export default reducer;
