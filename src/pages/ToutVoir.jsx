import React from "react";
import Graphs from "@/components/common/Graphs.jsx";

function ToutVoir() {
  return (
    <>
      <Graphs
        chartData={[
          { Day: "01", visites: 186, wind: 18 },
          { Day: "02", visites: 305, wind: 25 },
          { Day: "03", visites: 237, wind: 16 },
          { Day: "04", visites: 73, wind: 10 },
          { Day: "05", visites: 209, wind: 2 },
          { Day: "06", visites: 214, wind: -6 },
          { Day: "07", visites: 186, wind: 18 },
          { Day: "08", visites: 305, wind: 25 },
          { Day: "09", visites: 237, wind: 16 },
          { Day: "10", visites: 73, wind: 10 },
          { Day: "11", visites: 209, wind: 2 },
          { Day: "12", visites: 214, wind: -6 },
          { Day: "13", visites: 186, wind: 18 },
          { Day: "14", visites: 305, wind: 25 },
          { Day: "15", visites: 237, wind: 16 },
          { Day: "16", visites: 73, wind: 10 },
          { Day: "17", visites: 209, wind: 2 },
          { Day: "18", visites: 214, wind: -6 },
          { Day: "19", visites: 186, wind: 18 },
          { Day: "20", visites: 305, wind: 25 },
          { Day: "21", visites: 237, wind: 16 },
          { Day: "22", visites: 73, wind: 10 },
          { Day: "23", visites: 209, wind: 2 },
          { Day: "24", visites: 214, wind: -6 },
          { Day: "25", visites: 186, wind: 18 },
          { Day: "26", visites: 305, wind: 25 },
          { Day: "27", visites: 237, wind: 16 },
          { Day: "28", visites: 73, wind: 10 },
          { Day: "29", visites: 209, wind: 2 },
          { Day: "30", visites: 214, wind: -6 },
        ]}
      />
      <Graphs
        chartData={[
          { Month: "January", visites: 186 },
          { Month: "February", visites: 305 },
          { Month: "March", visites: 237 },
          { Month: "April", visites: 73 },
          { Month: "May", visites: 209 },
          { Month: "June", visites: -214 },
        ]}
      />
    </>
  );
}

export default ToutVoir;
