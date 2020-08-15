import React from "react";
import { Card } from "../card/card.component";
import "./Card-list.style.css";

export const CardList = ({ monsters }) => {
  return (
    <div className="Card-list">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
