import styled from "styled-components";
import {ICampaign} from "../types/Campaign";
import {ICharacter} from "../types/Character";
import {IGroup} from "../types/Group";
import {IItem} from "../types/Item";
import {IQuest} from "../types/Quest";
import {IWorld} from "../types/World";

export const ListCard = styled.div`
    width: 450px;
    background-color: white;
    border-radius: 5px;
    border: solid black 1px;
    margin: 10px;
    padding: 10px;
`;

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
        </ListCard>
    )
}
export function GroupCard(props: {group: IGroup}) {
    return(
        <ListCard><p>hello</p></ListCard>
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