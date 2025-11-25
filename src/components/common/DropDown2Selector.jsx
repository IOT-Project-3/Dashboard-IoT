import React from "react";
import DropDownAnneeGraph from "@/components/common/DropDownAnneeGraph.jsx";
import DropDownMoisGraph from "@/components/common/DropDownMoisGraph.jsx";

function DropDown2Selector({ nom, data, getDataFromHardData }) {
  if (nom === "Mois") {
    return (
      <DropDownMoisGraph
        nom={nom}
        data={data}
        getDataFromHardData={getDataFromHardData}
      />
    );
  } else if (nom === "Année") {
    return (
      <DropDownAnneeGraph
        nom={nom}
        data={data}
        getDataFromHardData={getDataFromHardData}
      />
    );
  }
}

export default DropDown2Selector;
