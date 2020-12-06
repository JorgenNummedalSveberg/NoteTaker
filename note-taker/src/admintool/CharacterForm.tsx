import {selectedCampaignState} from "../recoil/atoms";
import {useRecoilValue} from "recoil";
import React, {useState} from "react";
import {add} from "../worldBuildingService";
import {newCharacter} from "../types/Character";

export default function CharacterForm(props: {setOpen: (bool: boolean) => void}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [socialStatus, setSocialStatus] = useState('');
    const [wealth, setWealth] = useState('');
    const campaign = useRecoilValue(selectedCampaignState);

    function handleSubmit() {
        add(newCharacter(name, description, socialStatus, wealth, campaign._id), 'Character');
        props.setOpen(false);
    }
    return (
        <form>
            <label htmlFor="name">Name</label><br/>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='John Doe'/><br/>
            <label htmlFor="description">Description</label><br/>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='Is an asshole who wears blue coats'/><br/>
            <label htmlFor="socialStatus">Social status</label><br/>
            <input type="text" value={socialStatus} onChange={e => setSocialStatus(e.target.value)} placeholder='Beggar, king, etc...'/><br/>
            <label htmlFor="wealth">Wealth</label><br/>
            <input type="text" value={wealth} onChange={e => setWealth(e.target.value)} placeholder='poor'/><br/>
            <input type="submit" onClick={handleSubmit} value="Create"/>
        </form>
    )
}