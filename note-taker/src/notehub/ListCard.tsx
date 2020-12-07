import styled from "styled-components";
import {ICampaign} from "../types/Campaign";
import {ICharacter} from "../types/Character";
import {IGroup} from "../types/Group";
import {IItem} from "../types/Item";
import {IQuest} from "../types/Quest";
import {IWorld} from "../types/World";
import {StyledLink} from "../admintool/Admintool";
import {Link} from "react-router-dom";
import Popup from "../admintool/Popup";
import CharacterForm from "../admintool/CharacterForm";
import React, {Component, useState} from "react";
import {fetchAll} from "../worldBuildingService";
import {useRecoilState} from "recoil";
import {campaignState, characterState, groupState, itemState, questState, worldState} from "../recoil/atoms";
import CharacterEditor from "../editors/CharacterEditor";
import GroupEditor from "../editors/GroupEditor";

export const ListCard = styled.div`
    width: 450px;
    background-color: white;
    border-radius: 5px;
    border: solid black 1px;
    margin: 10px;
    padding: 10px;
`;

function EditButton(props: {Element: (props: any ) => JSX.Element, subject: any}) {
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
    const [popup, setPopup] = useState(false);

    function handleClose() {
        setPopup(false);
        fetchAll(setState);
    }
    return (
        <div>
            <button id='addButton' onClick={() => setPopup(true)}>Edit</button>
            {popup?(
                <Popup setPopup={setPopup}><props.Element subject={props.subject} handleClose={handleClose}/></Popup>
            ):null}
        </div>

    )
}

export function CampaignCard(props: {campaign: ICampaign}) {
    return(
        <ListCard><p>hello</p></ListCard>
    )
}
export function CharacterCard(props: {character: ICharacter}) {
    return(
        <ListCard>
            <h3>{props.character.name}</h3>
            <p>{props.character.description}</p>
            <p>{props.character.socialStatus}</p>
            <p>{props.character.wealth}</p>
            <EditButton subject={props.character} Element={CharacterEditor}/>
        </ListCard>
    )
}

export function GroupCard(props: {group: IGroup}) {
    return(
        <ListCard>
            <h3>{props.group.name}</h3>
            <p>{props.group.description}</p>
            <p>{props.group.socialStatus}</p>
            <p>{props.group.wealth}</p>
            <EditButton subject={props.group} Element={GroupEditor}/>
        </ListCard>
    )
}
export function ItemCard(props: {item: IItem}) {
    return(
        <ListCard><p>hello</p></ListCard>
    )
}
export function QuestCard(props: {quest: IQuest}) {
    return(
        <ListCard><p>hello</p></ListCard>
    )
}
export function WorldCard(props: {world: IWorld}) {
    return(
        <ListCard><p>hello</p></ListCard>
    )
}