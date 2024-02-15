import React from "react";
import data from './Data'
import { Chart } from "react-google-charts";


 const options = {
  sankey: {
    link: { color: { fill: "#d799ae" } },
    node: {
      colors: ["black"],
      label: { color: "#871b47" },
    },
  },
};
const handleMouseOver = (e) => {
  console.log("hai")
};

const App=()=> {

  return (
    <Chart
      chartType="Sankey"
      width="100%"
      height="500px"
      data={data}
      options={options}
      chartEvents={[
        {
          eventName: "onmouseover",
          callback: handleMouseOver,
        },
      ]}
    />
  );
}
export default App
