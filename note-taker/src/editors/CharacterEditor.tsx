import React, {useState} from "react";
import {ICharacter} from "../types/Character";
import {edit} from "../worldBuildingService";

export default function CharacterEditor(props: {subject: ICharacter, handleClose: () => void}) {
    const [description, setDescription] = useState('');
    const [socialStatus, setSocialStatus] = useState('');
    const [wealth, setWealth] = useState('');

    function handleEdit() {
        let result: {description?: string, socialStatus?: string, wealth?: string} = {};
        if (description !== '') {
            result.description = description;
        }
        if (socialStatus !== '') {
            result.socialStatus = socialStatus;
        }
        if (wealth !== '') {
            result.wealth = wealth;
        }
        edit(result,
            'Character',
            props.subject._id);
        props.handleClose();
    }

    return (
        <form>
            <h3>{props.subject.name}</h3>
            <label htmlFor="description">Description</label><br/>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='Is an asshole who wears blue coats'/><br/>
            <label htmlFor="socialStatus">Social status</label><br/>
            <input type="text" value={socialStatus} onChange={e => setSocialStatus(e.target.value)} placeholder='Beggar, king, etc...'/><br/>
            <label htmlFor="wealth">Wealth</label><br/>
            <input type="text" value={wealth} onChange={e => setWealth(e.target.value)} placeholder='poor'/><br/>
            <input type="button" onClick={handleEdit} value="Update"/>
        </form>
    )
}