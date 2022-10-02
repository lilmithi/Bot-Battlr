import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useEffect, useState } from "react";

function BotsPage() {
  // console.log("Bots id: ",id)
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  useEffect(() => {
    getBots("http://localhost:8002/bots").then((resp) => {
      setBots(resp);
      // console.log(bots)
    });
    // console.log(bots)
    async function getBots(url) {
      const promise = await fetch(url);
      const response = await promise.json();
      return response;
    }
  }, []);
  function handleArmy(bot) {
    if (!army.includes(bot)) {
      setArmy([...army, bot]);
    }
  }
  function releaseFromArmy(bot) {
    //remove from army
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setArmy(army.filter((b) => b !== bot));
        setBots(bots.filter((b) => b !== bot));
      });
  }
  function removeFromArmy(bot) {
    setArmy(army.filter((b) => b !== bot));
  }
  return (
    <div>
      <YourBotArmy
        army={army}
        handleRemove={removeFromArmy}
        releaseFromArmy={releaseFromArmy}
      />
      <BotCollection
        handleAdd={handleArmy}
        bots={bots}
        releaseFromArmy={releaseFromArmy}
      />
    </div>
  );
}

export default BotsPage;
