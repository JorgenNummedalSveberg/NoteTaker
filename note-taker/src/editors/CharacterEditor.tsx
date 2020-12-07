import React, {useState} from "react";
import {ICharacter} from "../types/Character";
import {edit} from "../worldBuildingService";

export default function CharacterEditor(props: {subject: ICharacter, handleClose: () => void}) {
    const [description, setDescription] = useState(props.subject.description);
    const [socialStatus, setSocialStatus] = useState(props.subject.socialStatus);
    const [wealth, setWealth] = useState(props.subject.wealth);

    function handleEdit() {
        let result: {description?: string, socialStatus?: string, wealth?: string} = {};
        if (description !== props.subject.description) {
            result.description = description;
        }
        if (socialStatus !== props.subject.socialStatus) {
            result.socialStatus = socialStatus;
        }
        if (wealth !== props.subject.wealth) {
            result.wealth = wealth;
        }
        if (Object.entries(result).length > 0) {
            edit(result,
                'Character',
                props.subject._id);
        }
        props.handleClose();
    }

    return (
        <form>
            <h3>{props.subject.name}</h3>
            <label htmlFor="description">Description</label><br/>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)}/><br/>
            <label htmlFor="socialStatus">Social status</label><br/>
            <input type="text" value={socialStatus} onChange={e => setSocialStatus(e.target.value)}/><br/>
            <label htmlFor="wealth">Wealth</label><br/>
            <input type="text" value={wealth} onChange={e => setWealth(e.target.value)}/><br/>
            <input type="button" onClick={handleEdit} value="Update"/>
        </form>
    )
}