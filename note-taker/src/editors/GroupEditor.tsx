import React, {useState} from "react";
import {edit} from "../worldBuildingService";
import {IGroup} from "../types/Group";

export default function GroupEditor(props: {subject: IGroup, handleClose: () => void}) {
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
                'Group',
                props.subject._id);
        }
        props.handleClose();
    }

    return (
        <form>
            <h3>{props.subject.name}</h3>
            <label htmlFor="description">Description</label><br/>
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} /><br/>
            <label htmlFor="socialStatus">Social status</label><br/>
            <input type="text" value={socialStatus} onChange={e => setSocialStatus(e.target.value)}/><br/>
            <label htmlFor="wealth">Wealth</label><br/>
            <input type="text" value={wealth} onChange={e => setWealth(e.target.value)} placeholder='poor?'/><br/>
            <input type="button" onClick={handleEdit} value="Update"/>
        </form>
    )
}