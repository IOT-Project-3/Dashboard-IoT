import React from "react";
import { Button } from "@/components/ui/button.jsx";
import InfoCard from "@/components/common/InfoCard.jsx";

function ZoneInondable() {
  return (
    <div>
      <header>
        <div>
          <h2>Aire de Chaumont - Zone inondable</h2>
          <p>Monitoring en temps réel</p>
        </div>
        <div>
          <Button>Notifier par e-mail</Button>
        </div>
      </header>
      <main>
        <section className="flex flex-row gap-3">
          <InfoCard title="Dernière mesure" data="4.18m" />
          <InfoCard
            title="Date et heure de la mesure"
            data="20/10/2025 14:27"
          />
          <InfoCard title="État global" data="Critique" />
        </section>
        <section>{/*Graph*/}</section>
      </main>
    </div>
  );
}

export default ZoneInondable;
