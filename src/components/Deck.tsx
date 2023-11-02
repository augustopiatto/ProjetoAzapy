import Card from "./Card";
import React from "react";
import { HeroesContext } from "@/contexts/HeroesContext";

export default function Deck() {
  const { filteredDeck } = React.useContext(HeroesContext);

  return (
    <div className="pt-10 px-10 flex flex-wrap justify-center gap-10">
      {filteredDeck &&
        filteredDeck.length &&
        filteredDeck.map((card) => <Card card={card} key={card.id} />)}
    </div>
  );
}
