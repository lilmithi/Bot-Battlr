import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, handleAdd, releaseFromArmy }) {
  console.log(bots);
  // Your code here
  const renderBots = bots.map((bot, index) => {
    return (
      <BotCard
        key={index}
        bot={bot}
        handleAdd={handleAdd}
        releaseFromArmy={releaseFromArmy}
      />
    );
  });
  return (
    <div className="ui four column grid">
      <div className="row"></div>
      {/* <BotCard bots={bots}/> */}
      {renderBots}
    </div>
  );
}

export default BotCollection;
