import {ICampaign, newCampaign} from "../types/Campaign";
import {ICharacter, newCharacter} from "../types/Character";
import {IGroup, newGroup} from "../types/Group";
import {IItem, newItem} from "../types/Item";
import {IQuest, newQuest} from "../types/Quest";
import {IWorld, newWorld} from "../types/World";
import {add, fetchAll} from "../worldBuildingService";
import React, {useState} from "react";
import {useRecoilState} from "recoil";
import {
    campaignState,
    characterState,
    groupState,
    itemState,
    questState,
    selectedCampaignState,
    worldState
} from "../recoil/atoms";
import {Link} from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)<{color: string}>`
    text-decoration: none;
    color: ${props => props.color};
`;

export default function Admintool() {

    const [selectedCampaign, setSelectedCampaign] = useRecoilState(selectedCampaignState);
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
    return(
        <div>
            <StyledLink color='white' to='/'>Back to homepage</StyledLink>
            <select onChange={(e) => setSelectedCampaign(campaigns.filter((c: ICampaign) => c._id === e.target.value)[0])}>
                <option value={undefined}>Select campaign</option>
                {campaigns.map((campaign: ICampaign) => <option value={campaign._id}>{campaign.name}</option>)}
            </select>
            <ul style={{backgroundColor: '#FFFFFF'}}>
                <li>
                    {campaigns.map((campaign: ICampaign) => campaign.name+', ')}
                </li>
                <li>
                    {characters.map((characters: ICharacter) => characters.name+', ')}
                </li>
                <li>
                    {groups.map((groups: IGroup) => groups.name+', ')}
                </li>
                <li>
                    {items.map((items: IItem) => items.name+', ')}
                </li>
                <li>
                    {quests.map((quests: IQuest) => quests.name+', ')}
                </li>
                <li>
                    {worlds.map((world: IWorld) => world.name+', ')}
                </li>
            </ul>
            <input value={worldInput} onChange={(value) => setWorldInput(value.target.value)}/>
            <button onClick={() => {
                add(newCampaign(worldInput), 'Campaign');
                fetchAll(setState);
            }}>Add campaign</button>
            <button onClick={() => {
                add(newItem(worldInput), 'Item');
                fetchAll(setState);
            }}>Add item</button>
            <button onClick={() => {
                add(newQuest(worldInput), 'Quest');
                fetchAll(setState);
            }}>Add quest</button>
            <button onClick={() => {
                add(newWorld(worldInput), 'World');
                fetchAll(setState);
            }}>Add world</button>
        </div>
    )
}