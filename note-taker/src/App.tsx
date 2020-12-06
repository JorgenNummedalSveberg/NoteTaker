import React, {useState} from 'react';
import Homepage from "./homepage/Homepage";
import {BrowserRouter, Route} from "react-router-dom";
import Admintool from "./admintool/Admintool";
import {useRecoilState} from "recoil";
import {
    campaignState,
    characterState,
    groupState,
    itemState,
    questState,
    worldState
} from "./recoil/atoms";
import {fetchAll} from "./worldBuildingService";
import Notehub from "./notehub/Notehub";

function App() {

    const [first, setFirst] = useState(true);
    const [worldInput, setWorldInput] = useState('');
    const [campaigns, setCampaigns] = useRecoilState(campaignState);
    const [characters, setCharacters] = useRecoilState(characterState);
    const [groups, setGroups] = useRecoilState(groupState);
    const [items, setItems] = useRecoilState(itemState);
    const [quests, setQuests] = useRecoilState(questState);
    const [worlds, setWorlds] = useRecoilState(worldState);

    function setState(state: {campaigns:  [], characters: [], groups: [], items: [], quests: [], worlds: []}) {
        setCampaigns(state.campaigns);
        setCharacters(state.characters);
        setGroups(state.groups);
        setItems(state.items);
        setQuests(state.quests);
        setWorlds(state.worlds);
    }

    if (first) {
        fetchAll(setState);
        setFirst(false)
    }
    return (
        <BrowserRouter>
            <Route path={'/'} exact component={Homepage}/>
            <Route path={'/admintool'} component={Admintool}/>
            <Route path={'/notehub'} component={Notehub}/>
        </BrowserRouter>
    );
}

export default App;
