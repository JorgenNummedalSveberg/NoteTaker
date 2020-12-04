import {ICampaign} from "./types/Campaign";
import {ICharacter} from "./types/Character";
import {IWorld} from "./types/World";
import {IItem} from "./types/Item";
import {IQuest} from "./types/Quest";
import {IGroup} from "./types/Group";

export function fetchAll(setData: (data: {campaigns:  [], characters: [], groups: [], items: [], quests: [], worlds: []}) => void) {

    fetch('http://localhost:5000/getAll').then(response => {
        if (response.ok) {
            response.json().then(results => {
                setData({
                    campaigns: results.campaigns,
                    characters: results.characters,
                    groups: results.groups,
                    items: results.items,
                    quests: results.quests,
                    worlds: results.worlds
                })
            })
        } else {
            setData({
                campaigns: [],
                characters: [],
                groups: [],
                items: [],
                quests: [],
                worlds: [],
            })
            window.alert("Couldn't fetch");
        }
    })
}

export function add(payload: ICampaign | ICharacter | IGroup | IItem | IQuest | IWorld, type: string) {
    const req = ({
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    fetch('http://localhost:5000/add?type='+type, req);
}