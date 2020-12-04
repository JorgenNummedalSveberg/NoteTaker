import React, {useState} from 'react';
import IWorld from "../public/types/World";
import {addWorld, fetchAll} from "./worldBuildingService";

function App() {
    const [worldInput, setWorldInput] = useState('')
    const [data, setData] = useState({
        campaigns: [],
        characters: [],
        groups: [],
        items: [],
        quests: [],
        worlds: []
    });
    fetchAll(setData);
    return (
        <div>
          <ul>
              <li>
                  {data.campaigns.map((campaigns: IWorld) => campaigns.name)}
              </li>
              <li>
                  {data.characters.map((characters: IWorld) => characters.name)}
              </li>
              <li>
                  {data.groups.map((groups: IWorld) => groups.name)}
              </li>
              <li>
                  {data.items.map((items: IWorld) => items.name)}
              </li>
              <li>
                  {data.quests.map((quests: IWorld) => quests.name)}
              </li>
              <li>
                  {data.worlds.map((world: IWorld) => world.name)}
              </li>
          </ul>
          <input value={worldInput} onChange={(value) => setWorldInput(value.target.value)}/>
          <button onClick={() => addWorld(worldInput)}>Add world</button>
        </div>
    );
}

export default App;
