import {ICampaign} from "./types/Campaign";
import {ICharacter} from "./types/Character";
import {IWorld} from "./types/World";
import {IItem} from "./types/Item";
import {IQuest} from "./types/Quest";
import {IGroup} from "./types/Group";

export function add(payload: ICampaign | ICharacter | IGroup | IItem | IQuest | IWorld, type: string, update: any) {
    const req = ({
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    fetch('http://localhost:5000/add?type=' + type, req)
        .then(response => {
            if (response.ok) {
                update[type.toLowerCase()]();
            }
        });
}

export function edit(payload: any, type: string, id: string, update: any) {
    const req = ({
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    fetch('http://localhost:5000/edit?type=' + type + '&id=' + id, req)
        .then(response => {
            if (response.ok) {
                update[type.toLowerCase()]();
            }
        });
}

export function deleteSubject(id: string, type: string, update: any) {
    const req = ({
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    fetch('http://localhost:5000/delete?type=' + type + '&id=' + id, req)
        .then(response => {
            if (response.ok) {
                update[type.toLowerCase()]();
            }
        });
}

export async function fetchType(type: string) {
    return await fetch('http://localhost:5000/get?type=' + type)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        });
}