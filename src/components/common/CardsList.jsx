import React from "react";
import AppCard from "@/components/common/AppCard.jsx";

function CardsList({ cards }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((item) => (
        <AppCard icone={<item.icone />} titre={item.titre} texte={item.texte} />
      ))}
    </div>
  );
}

export default CardsList;
