import {atom} from "recoil";

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