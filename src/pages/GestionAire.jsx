import React, { useState } from "react";
import CardsList from "@/components/common/CardsList.jsx";
import { Home } from "lucide-react";
import Graphs from "@/components/common/Graphs.jsx";
import PageTitle from "../components/common/PageTitle";

const cards = [
  {
    icone: Home,
    titre: "Dernière mesure",
    texte: "4,18m",
  },
  {
    icone: Home,
    titre: "Date et heure de la mesure",
    texte: "20/10/2025 14:27",
  },
  {
    icone: Home,
    titre: "État global",
    texte: "Critique",
  },
];

function GestionAire() {
  return (
    <>
      {/* Nom de la page */}
      <PageTitle>Gestion de l'aire</PageTitle>

      {/* Cartes */}
      <div className="gap-4 flex flex-col">
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
          <CardsList cards={cards} />
        </div>

        {/* Graph */}
        <Graphs
          chartData={[
            { month: "January", visites: 186, wind: 70 },
            { month: "February", visites: 305, wind: 50 },
            { month: "March", visites: 237, wind: 20 },
            { month: "April", visites: 73, wind: 60 },
            { month: "May", visites: 209, wind: 20 },
            { month: "June", visites: 214, wind: 10 },
          ]}
        />
      </div>
    </>
  );
}

export default GestionAire;
