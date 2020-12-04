import IWorld from "../public/types/World";

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

export function addWorld(name: string) {
    const world: IWorld = {name: 'TestWorld'+name}
    const req = ({
        method: 'POST',
        body: JSON.stringify(world),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    fetch('http://localhost:5000/add?type=World', req);
}