import React, { useState } from "react";
import CardsList from "@/components/common/CardsList.jsx";
import { Home } from "lucide-react";
import Graphs from "@/components/common/Graphs.jsx";

function GestionAire() {
  const [cards, setCards] = useState([
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
    {
      icone: Home,
      titre: "Batterie du capteur",
      texte: "72%",
    },
  ]);
  return (
    <div>
      <CardsList cards={cards} />
      <div className={"pt-4"}>
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
      </div>
    </div>
  );
}

export default GestionAire;
