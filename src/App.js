import React from "react";

import "./App.css";

import MapStyleEditor from "./map-style-editor/components";

// create hello world react component
function App({ config = {}, apiCallbacks = {} }) {
  return (
    <div className="editor-wrapper">
      <MapStyleEditor config={config} apiCallbacks={apiCallbacks} />
    </div>
  );
}

export default App;
