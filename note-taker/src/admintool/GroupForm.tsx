import {selectedCampaignState} from "../recoil/atoms";
import {useRecoilValue} from "recoil";
import React, {useState} from "react";
import {add} from "../worldBuildingService";
import {newCharacter} from "../types/Character";
import {newGroup} from "../types/Group";

export default function GroupForm(props: {handleClose: () => void}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [socialStatus, setSocialStatus] = useState('');
    const [wealth, setWealth] = useState('');
    const campaign = useRecoilValue(selectedCampaignState);

    function handleSubmit() {
        add(newGroup(name, description, socialStatus, wealth, campaign._id), 'Group');
        props.handleClose();
    }
    return (
        <form>
            <label htmlFor="name">Name</label><br/>
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='The Beatles'/><br/>
            <label htmlFor="description">Description</label><br/>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='Make good music'/><br/>
            <label htmlFor="socialStatus">Social status</label><br/>
            <input type="text" value={socialStatus} onChange={e => setSocialStatus(e.target.value)} placeholder='Musicians'/><br/>
            <label htmlFor="wealth">Wealth</label><br/>
            <input type="text" value={wealth} onChange={e => setWealth(e.target.value)} placeholder='poor?'/><br/>
            <input type="button" onClick={handleSubmit} value="Create"/>
        </form>
    )
}