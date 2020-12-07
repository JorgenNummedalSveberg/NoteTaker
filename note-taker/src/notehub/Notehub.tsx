import {useRecoilState, useRecoilValue} from "recoil";
import {selectedCampaignState} from "../recoil/atoms";
import React from "react";
import {StyledLink} from "../admintool/Admintool";
import SearchList from "./SearchList";
import {campaignFilter} from "../recoil/selectors";
import styled from "styled-components";
import CharacterForm from "../admintool/CharacterForm";
import GroupForm from "../admintool/GroupForm";
import ItemForm from "../admintool/ItemForm";

const Lists = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Header = styled.div`
    text-align: center;
    color: white;
`;

export default function Notehub() {
    const [selectedCampaign] = useRecoilState(selectedCampaignState)
    const elements = useRecoilValue(campaignFilter)
    return (
        <div>
            <Header>
                <StyledLink color='white' to='/'>Back to homepage</StyledLink>
                <h1>{selectedCampaign.name}</h1>
            </Header>
            <Lists>
                <SearchList Form={CharacterForm} list={elements.characters} type='Character'/>
                <SearchList Form={GroupForm} list={elements.groups} type='Group'/>
                <SearchList Form={ItemForm} list={elements.items} type='Item'/>
            </Lists>
        </div>
    )
}