import React from "react";
import Graphs from "@/components/common/Graphs.jsx";

function ToutVoir() {
  return (
    <>
      <Graphs
        chartData={[
          { mois: "January", fréquentation: 186, vent: 10 },
          { mois: "February", fréquentation: 305, vent: 20 },
          { mois: "March", fréquentation: 237, vent: 15 },
          { mois: "April", fréquentation: 73, vent: 20 },
          { mois: "May", fréquentation: 209, vent: 22 },
          { mois: "June", fréquentation: 214, vent: 26 },
        ]}
        line={350}
      />
    </>
  );
}

export default ToutVoir;
