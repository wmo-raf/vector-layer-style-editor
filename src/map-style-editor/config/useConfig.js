import { identity, useContextSelector } from "../../react";

import Context from "./context";

function useConfig(selector) {
  return useContextSelector(Context, selector || identity);
}

export default useConfig;
