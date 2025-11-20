import React from "react";
import { Home } from "lucide-react";
import CardsList from "@/components/common/CardsList.jsx";

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

function ZoneInondable() {
  return (
    <>
      <CardsList cards={cards} />
    </>
  );
}

export default ZoneInondable;
