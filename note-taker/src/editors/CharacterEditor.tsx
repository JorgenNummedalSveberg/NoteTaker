import React, {useContext, useRef} from "react";
import {ICharacter} from "../types/Character";
import {edit} from "../worldBuildingService";
import {IGroup} from "../types/Group";
import {APIContext} from "../App";

export default function CharacterEditor(props: { subject: ICharacter | IGroup, handleClose: () => void, type: 'Character' | 'Group' }) {
    const descriptionInput = useRef<HTMLTextAreaElement>(null);
    const socialInput = useRef<HTMLInputElement>(null);
    const wealthInput = useRef<HTMLSelectElement>(null);
    const update = useContext(APIContext)

    function handleEdit() {
        if (wealthInput.current && descriptionInput.current && socialInput.current) {
            let result: { description?: string, socialStatus?: string, wealth?: string } = {};
            if (descriptionInput.current.value !== props.subject.description) {
                result.description = descriptionInput.current.value;
            }
            if (socialInput.current.value !== props.subject.socialStatus) {
                result.socialStatus = socialInput.current.value;
            }
            if (wealthInput.current.value !== props.subject.wealth) {
                result.wealth = wealthInput.current.value;
            }
            if (Object.entries(result).length > 0) {
                edit(result,
                    props.type,
                    props.subject._id,
                    update);
            }
            props.handleClose();
        }
    }

    return (
        <form>
            <h3>{props.subject.name}</h3>
            <label htmlFor="description">Description</label><br/>
            <textarea rows={5} cols={50} defaultValue={props.subject.description} ref={descriptionInput}/><br/>
            <label htmlFor="socialStatus">Social status</label><br/>
            <input defaultValue={props.subject.socialStatus} ref={socialInput} type="text"/><br/>
            <label htmlFor="wealth">Wealth</label><br/>
            <select defaultValue={props.subject.wealth} ref={wealthInput}>
                <option value='Unknown'>Unknown</option>
                <option value='Poor'>Poor</option>
                <option value='Average'>Average</option>
                <option value='Relatively rich'>Relatively rich</option>
                <option value='Rich'>Rich</option>
                <option value='Stupidly rich'>Stupidly rich</option>
            </select><br/>
            <input type="button" onClick={handleEdit} value="Update"/>
        </form>
    )
}