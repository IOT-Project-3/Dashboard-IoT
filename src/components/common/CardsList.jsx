import React from "react";
import AppCard from "@/components/common/AppCard.jsx";

function CardsList({ cards }) {
  return (
    <>
      {cards.map((item) => (
        <AppCard icone={<item.icone />} titre={item.titre} texte={item.texte} />
      ))}
    </>
  );
}

export default CardsList;
