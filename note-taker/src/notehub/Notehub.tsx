import {useRecoilState, useRecoilValue} from "recoil";
import {characterState, selectedCampaignState} from "../recoil/atoms";
import React from "react";
import {StyledLink} from "../admintool/Admintool";
import SearchList from "./SearchList";
import {campaignFilter, inCampaign} from "../recoil/selectors";
import styled from "styled-components";

const Lists = styled.div`
    display: flex;
    justify-content: center;we
    flex-wrap: wrap;
`;

const Header = styled.div`
    text-align: center;
`;

export default function Notehub() {
    const [selectedCampaign] = useRecoilState(selectedCampaignState)
    const elements = useRecoilValue(campaignFilter)
    return (
        <div>
            <Header>
                <StyledLink color='white' to='/'>Back to homepage</StyledLink>
                {selectedCampaign.name}
            </Header>
            <Lists>
                <SearchList list={elements.characters} type='Character'/>
            </Lists>
        </div>
    )
}