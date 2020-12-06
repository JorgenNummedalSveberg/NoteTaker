import {atom} from "recoil";
import {newCampaign} from "../types/Campaign";

export const campaignState = atom({
    key: 'campaigns',
    default: []
})
export const characterState = atom({
    key: 'characters',
    default: []
})
export const groupState = atom({
    key: 'groups',
    default: []
})
export const itemState = atom({
    key: 'items',
    default: []
})
export const questState = atom({
    key: 'quests',
    default: []
})
export const worldState = atom({
    key: 'worlds',
    default: []
})
export const selectedCampaignState = atom({
    key: 'selectedCampaign',
    default: newCampaign('default'),
})