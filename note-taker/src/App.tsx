import React, {createContext, useState} from 'react';
import Homepage from "./homepage/Homepage";
import {BrowserRouter, Route} from "react-router-dom";
import Admintool from "./admintool/Admintool";
import {useSetRecoilState} from "recoil";
import {campaignState, characterState, groupState, itemState, questState, worldState} from "./recoil/atoms";
import {fetchType} from "./worldBuildingService";
import Notehub from "./notehub/Notehub";

export const APIContext = createContext(
    {
        all: () => {
        }, campaign: () => {
        }, character: () => {
        },
        group: () => {
        }, item: () => {
        }, quest: () => {
        }, world: () => {
        }
    });
const Provider = APIContext.Provider;

function App() {
    const [first, setFirst] = useState(true);
    const setCampaigns = useSetRecoilState(campaignState);
    const setCharacters = useSetRecoilState(characterState);
    const setGroups = useSetRecoilState(groupState);
    const setItems = useSetRecoilState(itemState);
    const setQuests = useSetRecoilState(questState);
    const setWorlds = useSetRecoilState(worldState);

    function setState(state: { campaigns: [], characters: [], groups: [], items: [], quests: [], worlds: [] }) {
        setCampaigns(state.campaigns);
        setCharacters(state.characters);
        setGroups(state.groups);
        setItems(state.items);
        setQuests(state.quests);
        setWorlds(state.worlds);
    }

    const update = {
        all: () => fetchType('All').then(lists => setState(lists)),
        campaign: () => fetchType('Campaign').then(list => setCampaigns(list)),
        character: () => fetchType('Character').then(list => setCharacters(list)),
        group: () => fetchType('Group').then(list => setGroups(list)),
        item: () => fetchType('Item').then(list => setItems(list)),
        quest: () => fetchType('Quest').then(list => setQuests(list)),
        world: () => fetchType('World').then(list => setWorlds(list)),
    }
    if (first) {
        update.all();
        setFirst(false);
    }
    return (
        <Provider value={update}>
            <BrowserRouter>
                <Route path={'/'} exact component={Homepage}/>
                <Route path={'/admintool'} component={Admintool}/>
                <Route path={'/notehub'} component={Notehub}/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
