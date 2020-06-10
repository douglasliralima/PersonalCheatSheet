import React from 'react';
import SimpleLineGraphic from "./components/SimpleLineGraphic"
import HistogramGraphic from "./components/Histogram/index"


function App() {
  return (
    <div className="App">
      <SimpleLineGraphic/>
      <HistogramGraphic/>
    </div>
  );
}

export default App;
