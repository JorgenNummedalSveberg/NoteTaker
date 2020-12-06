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

const Root = styled.div`
    width: 500px;
    height: 581px;
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
    input {width: 420px; margin: 20px 0 20px 0;};
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
    const list = props.list.filter(element => element.name.toLowerCase().includes(input.toLowerCase()));
    return(
        <Root>
            <SearchBar>
                <input value={input} onChange={e => setInput(e.target.value)}/>
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
            <SearchBar>
                <button onClick={() => setPopup(true)}/>
                {popup?(
                    <Popup setOpen={setPopup}><CharacterForm setOpen={setPopup}/></Popup>
                ):null}
            </SearchBar>
        </Root>
    )
}