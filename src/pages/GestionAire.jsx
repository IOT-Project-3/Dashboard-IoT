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
        <Graphs />
      </div>
    </div>
  );
}

export default GestionAire;
