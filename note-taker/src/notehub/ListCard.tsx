import styled from "styled-components";
import {ICampaign} from "../types/Campaign";
import {ICharacter} from "../types/Character";
import {IGroup} from "../types/Group";
import {IItem} from "../types/Item";
import {IQuest} from "../types/Quest";
import {IWorld} from "../types/World";
import Popup from "../admintool/Popup";
import React, {useContext, useState} from "react";
import {deleteSubject} from "../worldBuildingService";
import CharacterEditor from "../editors/CharacterEditor";
import {APIContext} from "../App";
import ItemForm from "../admintool/ItemForm";
import {useRecoilValue} from "recoil";
import {characterState} from "../recoil/atoms";

export const ListCard = styled.div`
    width: 450px;
    background-color: white;
    border-radius: 5px;
    border: solid black 1px;
    margin: 10px;
    padding: 10px;
`;

function EditButton(props: { Element: (props: any) => JSX.Element, subject: any, type: string }) {

    const [popup, setPopup] = useState(false);

    function handleClose() {
        setPopup(false);
    }

    return (
        <div>
            <button id='addButton' onClick={() => setPopup(true)}>Edit</button>
            {popup ? (
                <Popup setPopup={setPopup}>
                    <props.Element type={props.type} subject={props.subject} handleClose={handleClose}/>
                </Popup>
            ) : null}
        </div>

    )
}

function DeleteButton(props: { type: string, id: string }) {
    const [popup, setPopup] = useState(false);
    const update = useContext(APIContext)

    function handleClose() {
        deleteSubject(props.id, props.type, update)
        setPopup(false);
    }

    return (
        <div>
            <button id='deleteButton' onClick={() => setPopup(true)}>Delete</button>
            {popup ? (
                <Popup setPopup={setPopup}>
                    <button onClick={handleClose}>Confirm</button>
                </Popup>
            ) : null}
        </div>
    )
}

export function CampaignCard(props: { campaign: ICampaign }) {
    return (
        <ListCard><p>hello</p></ListCard>
    )
}

export function CharacterCard(props: { character: ICharacter }) {
    return (
        <ListCard>
            <h3>{props.character.name}</h3>
            <p>Aliases: {props.character.aliases.join(', ')}</p>
            <p>Description: {props.character.description}</p>
            <p>Social status/work: {props.character.socialStatus}</p>
            <p>Wealth: {props.character.wealth}</p>
            <EditButton type={'Character'} subject={props.character} Element={CharacterEditor}/>
            <DeleteButton type={'Character'} id={props.character._id}/>
        </ListCard>
    )
}

export function GroupCard(props: { group: IGroup }) {
    return (
        <ListCard>
            <h3>{props.group.name}</h3>
            <p>Description: {props.group.description}</p>
            <p>Social status/work: {props.group.socialStatus}</p>
            <p>Wealth: {props.group.wealth}</p>
            <EditButton type={'Group'} subject={props.group} Element={CharacterEditor}/>
            <DeleteButton type={'Group'} id={props.group._id}/>
        </ListCard>
    )
}

export function ItemCard(props: { item: IItem }) {
    return (
        <ListCard>
            <h3>{props.item.name}</h3>
            <p>Description: {props.item.description}</p>
            <DeleteButton type={'Item'} id={props.item._id}/>
        </ListCard>
    )
}

export function QuestCard(props: { quest: IQuest }) {
    const characters = useRecoilValue(characterState);
    const giver: ICharacter = characters.filter((x: ICharacter) => x._id === props.quest.giver)[0];
    return (
        <ListCard>
            <h3>{props.quest.name}</h3>
            <p>Quest giver: {giver.name}</p>
            <p>Gold reward: {props.quest.goldReward}</p>
            <p>Objective: {props.quest.objective}</p>
            <DeleteButton type={'Quest'} id={props.quest._id}/>
        </ListCard>
    )
}

export function WorldCard(props: { world: IWorld }) {
    return (
        <ListCard><p>hello</p></ListCard>
    )
}