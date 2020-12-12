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
import {useRecoilValue} from "recoil";
import {characterState} from "../recoil/atoms";
import {CharacterCreation} from "../admintool/CharacterCreation";

export const ListCardRoot = styled.div`
    width: 450px;
    border-radius: 5px;
    border: solid black 1px;
    margin: 10px;
    padding: 10px;
`;

function ListCard(props:
  {title: string, subject: any, children: JSX.Element | JSX.Element[], edit?: boolean, delete?: boolean, type: string}){
    return (
        <ListCardRoot>
            <h3>{props.title}</h3>
            {props.children}
            {props.edit?<EditButton type={props.type} subject={props.subject}/>:null}
            {props.delete?<DeleteButton type={props.type} id={props.subject._id}/>:null}
        </ListCardRoot>
    )
}

function EditButton(props: {subject: any, type: string }) {

    const [popup, setPopup] = useState(false);

    function handleClose() {
        setPopup(false);
    }

    let editor;
    switch(props.type){
        case 'Character':
            editor = <CharacterEditor subject={props.subject} type={props.type} handleClose={handleClose}/>
            break;
        case 'Group':
            editor = <CharacterEditor subject={props.subject} type={props.type} handleClose={handleClose}/>
            break;
        default:
            editor = null
            break;
    }

    return (
        <div>
            <button id='addButton' onClick={() => {
                console.log(props.type)
                setPopup(true)
            }}>Edit</button>
            {popup && editor ? (
                <Popup setPopup={setPopup}>
                    {editor}
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
                    <p>Are you sure you want to delete this {props.type}?</p>
                    <button onClick={handleClose}>Confirm</button>
                </Popup>
            ) : null}
        </div>
    )
}

export function CampaignCard(props: { campaign: ICampaign }) {
    return (
        <ListCard subject={props.campaign} title={props.campaign.name} type='Campaign' delete>
        </ListCard>
    )
}

export function CharacterCard(props: { character: ICharacter }) {
    return (
        <ListCard title={props.character.name} type='Character' delete edit subject={props.character}>
            <p>Aliases: {props.character.aliases.join(', ')}</p>
            <p>Description: {props.character.description}</p>
            <p>Social status/work: {props.character.socialStatus}</p>
            <p>Wealth: {props.character.wealth}</p>
            <CharacterCreation/>
        </ListCard>
    )
}

export function GroupCard(props: { group: IGroup }) {
    return (
        <ListCard subject={props.group} title={props.group.name} edit delete type='Group'>
            <p>Description: {props.group.description}</p>
            <p>Social status/work: {props.group.socialStatus}</p>
            <p>Wealth: {props.group.wealth}</p>
        </ListCard>
    )
}

export function ItemCard(props: { item: IItem }) {
    return (
        <ListCard subject={props.item} title={props.item.name} type='Item' delete>
            <p>Description: {props.item.description}</p>
        </ListCard>
    )
}

export function QuestCard(props: { quest: IQuest }) {
    const characters = useRecoilValue(characterState);
    const giver: ICharacter = characters.filter((x: ICharacter) => x._id === props.quest.giver)[0];
    return (
        <ListCard title={props.quest.name} type='Quest' delete subject={props.quest}>
            <p>Quest giver: {giver.name}</p>
            <p>Gold reward: {props.quest.goldReward}</p>
            <p>Objective: {props.quest.objective}</p>
        </ListCard>
    )
}

export function WorldCard(props: { world: IWorld }) {
    return (
        <ListCard subject={props.world} title={props.world.name} type='World' delete>
        </ListCard>
    )
}