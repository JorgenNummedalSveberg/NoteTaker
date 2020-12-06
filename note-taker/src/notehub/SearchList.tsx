import styled from "styled-components";
import {ICampaign} from "../types/Campaign";
import {ICharacter} from "../types/Character";
import {IWorld} from "../types/World";
import {IQuest} from "../types/Quest";
import {IItem} from "../types/Item";
import {IGroup} from "../types/Group";
import {CampaignCard, CharacterCard, GroupCard, ItemCard, ListCard, QuestCard, WorldCard} from "./ListCard";
import React, {useState} from "react";
import CharacterForm from "../admintool/CharacterForm";
import Popup from "../admintool/Popup";
import {fetchAll} from "../worldBuildingService";
import {useRecoilState} from "recoil";
import {campaignState, characterState, groupState, itemState, questState, worldState} from "../recoil/atoms";

const Root = styled.div`
    width: 500px;
    background-color: white;
    border: solid black 2px;
`;
const List = styled.div`
    width: 500px;
    height: 500px;
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const SearchBar = styled.div`
    width: 500px;
    height: 80px;
    display: flex;
    justify-content: center;
    #searchbar {width: 420px; margin: 20px 0 20px 0;};
    #addButton {width: 300px; margin: 20px 0 20px 0;};
`;
const DividerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;
const Line = styled.div`
    background-color: black;
    height: 1px;
    width: 450px;
`;
function Divider() {
    return (
        <DividerContainer>
            <Line/>
        </DividerContainer>
    )
}

export default function SearchList(props: {list: (ICampaign | ICharacter | IGroup | IItem | IQuest | IWorld)[], type: string}) {
    const [input, setInput] = useState('');
    const [popup, setPopup] = useState(false);
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
    function handleClose() {
        setPopup(false);
        fetchAll(setState);
    }
    const list = props.list.filter(element => element.name.toLowerCase().includes(input.toLowerCase()));
    return(
        <Root>
            <SearchBar>
                <input id='searchbar' value={input} onChange={e => setInput(e.target.value)}/>
            </SearchBar>
            <Divider/>
            <List>{list.map(element => {
                switch (props.type) {
                    case 'Campaign':
                        return <CampaignCard key={element._id} campaign={element as ICampaign}/>
                    case 'Character':
                        return <CharacterCard key={element._id} character={element as ICharacter}/>
                    case 'Group':
                        return <GroupCard key={element._id} group={element as IGroup}/>
                    case 'Item':
                        return <ItemCard key={element._id} item={element as IItem}/>
                    case 'Quest':
                        return <QuestCard key={element._id} quest={element as IQuest}/>
                    case 'World':
                        return <WorldCard key={element._id} world={element as IWorld}/>
                    default:
                        return <ListCard>Unsupported type</ListCard>
                }
            })}</List>
            <Divider/>
            <SearchBar>
                <button id='addButton' onClick={() => setPopup(true)}>Add {props.type}</button>
                {popup?(
                    <Popup setPopup={setPopup}><CharacterForm handleClose={handleClose}/></Popup>
                ):null}
            </SearchBar>
        </Root>
    )
}