import {useRecoilState} from "recoil";
import {campaignState, selectedCampaignState} from "../recoil/atoms";
import {ICampaign} from "../types/Campaign";
import React from "react";
import styled from "styled-components";
import './homepage.css';
import {Link} from "react-router-dom";
import {StyledLink} from "../admintool/Admintool";

const CampaignCard = styled.div`
    background-color: brown;
    width: 400px;
    height: 100px;
    margin: 25px;
    border: solid #FFD700 5px;
    text-align: center;
    font-size: 40px;
`;

const CampaignDisplay = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    a {text-decoration: none; color: white;}
`;

export default function Homepage() {
    const [campaigns] = useRecoilState(campaignState);
    const [selectedCampaign, setSelectedCampaign] = useRecoilState(selectedCampaignState);
    return (
        <div>
            <StyledLink color='white' to='admintool'>
                <CampaignCard>Admin</CampaignCard>
            </StyledLink>
            <CampaignDisplay>
                {campaigns.map((campaign: ICampaign) => (
                    <Link to="notehub" >
                        <CampaignCard onClick={()=>setSelectedCampaign(campaign)}>{campaign.name}</CampaignCard>
                    </Link>
                ))}
            </CampaignDisplay>
        </div>
    )
}