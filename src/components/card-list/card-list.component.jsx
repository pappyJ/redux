import React from "react";

import { Card } from "./../card/card-component";

import "./card-list.style.css";

export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.currentState.map((el) => (
        <Card key={el.id} monster={el}></Card>
      ))}
    </div>
  );
};
