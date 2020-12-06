import {selector} from "recoil";
import {characterState, groupState, itemState, questState, selectedCampaignState} from "./atoms";
import {ICharacter} from "../types/Character";
import {ICampaign} from "../types/Campaign";
import {IGroup} from "../types/Group";
import {IItem} from "../types/Item";
import {IQuest} from "../types/Quest";
import React from 'react';

export const campaignFilter = selector({
    key: 'campaignFilter',
    get: ({get}) => {
        const campaign = get(selectedCampaignState);
        const characters = inCampaign(campaign, get(characterState));
        const groups = inCampaign(campaign, get(groupState));
        const items = inCampaign(campaign, get(itemState));
        const quests = inCampaign(campaign, get(questState));
        return {characters, groups, items, quests}
    }
})

export function inCampaign(campaign: ICampaign, list: (ICharacter | IGroup | IItem | IQuest)[]): (ICharacter | IGroup | IItem | IQuest)[] {
    return list.filter(item => item.campaigns.includes(campaign._id));
}