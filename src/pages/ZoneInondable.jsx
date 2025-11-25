import React from "react";
import { Home } from "lucide-react";
import CardsList from "@/components/common/CardsList.jsx";
import Graphs from "@/components/common/Graphs.jsx";

function ZoneInondable() {
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
    {
      icone: Home,
      titre: "Batterie du capteur",
      texte: "72%",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <CardsList cards={cards} />
      <Graphs line={120} />
    </div>
  );
}

export default ZoneInondable;
