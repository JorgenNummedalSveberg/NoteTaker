import React, {useState} from 'react';
import IWorld from "../public/types/World";

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

function fetchAll(setData: (data: {campaigns:  [], characters: [], groups: [], items: [], quests: [], worlds: []}) => void) {

    fetch('http://localhost:5000/getAll').then(response => {
        if (response.ok) {
            response.json().then(results => {
                setData({
                    campaigns: results.campaigns,
                    characters: results.characters,
                    groups: results.groups,
                    items: results.items,
                    quests: results.quests,
                    worlds: results.worlds
                })
            })
        } else {
            setData({
                campaigns: [],
                characters: [],
                groups: [],
                items: [],
                quests: [],
                worlds: [],
            })
            window.alert("Couldn't fetch");
        }
    })
}

function addWorld(name: string) {
    const world: IWorld = {name: 'TestWorld'+name}
    const req = ({
        method: 'POST',
        body: JSON.stringify(world),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    fetch('http://localhost:5000/add?type=World', req);
}

export default App;
