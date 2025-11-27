import React from "react";
import CardsList from "@/components/common/CardsList.jsx";
import { Home, User2 } from "lucide-react";

const cards = [
  {
    icone: User2,
    titre: "Total",
    texte: "250",
  },
];

function Users() {
  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
        <CardsList cards={cards} />
      </div>
    </>
  );
}

export default Users;
