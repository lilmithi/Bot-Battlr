import { React, useState } from "react";
import BotSpecs from "./BotSpecs";
import BotCard from "./BotCard";

function YourBotArmy({ army, handleRemove, releaseFromArmy }) {
  console.log("Army bot: ", army);
  // console.log(id)

  // const [army, setArmy] = useState([]);

  //your bot army code here...

  // function handleArmy() {
  //   setArmy([...army,bot])
  // }
  const renderArmy = army.map((bot, key) => (
    <BotCard
      key={key}
      collection={false}
      bot={bot}
      handleAdd={handleRemove}
      releaseFromArmy={releaseFromArmy}
    />
  ));
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {/* <BotSpecs bot={bot}/> */}
          {renderArmy}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
