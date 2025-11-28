import React from "react";
import AppCard from "@/components/common/AppCard.jsx";

function CardsList({ cards }) {
  return (
    <>
      {cards.map((item, key) => (
        <AppCard
          key={key}
          icone={<item.icone />}
          titre={item.titre}
          texte={item.texte}
        />
      ))}
    </>
  );
}

export default CardsList;
