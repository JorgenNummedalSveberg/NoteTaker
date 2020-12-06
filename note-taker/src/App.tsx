import React, {useState} from 'react';
import Homepage from "./homepage/Homepage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
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
import CharacterEditor from "./editors/CharacterEditor";

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
            <Route path={'/admintool'} exact component={Admintool}/>
            <Route path={'/notehub'} exact component={Notehub}/>
            <Route path={'/editor'}>
                <Switch>
                    <Route path={'/character'} exact component={CharacterEditor}/>
                </Switch>
            </Route>
        </BrowserRouter>
    );
}

export default App;
