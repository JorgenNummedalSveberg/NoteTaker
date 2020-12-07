import {selectedCampaignState} from "../recoil/atoms";
import {useRecoilValue} from "recoil";
import React, {useContext, useRef} from "react";
import {add} from "../worldBuildingService";
import {newCharacter} from "../types/Character";
import {APIContext} from "../App";

export default function CharacterForm(props: { handleClose: () => void }) {
    const campaign = useRecoilValue(selectedCampaignState);
    const nameInput = useRef<HTMLInputElement>(null);
    const descriptionInput = useRef<HTMLTextAreaElement>(null);
    const socialInput = useRef<HTMLInputElement>(null);
    const wealthInput = useRef<HTMLSelectElement>(null);
    const update = useContext(APIContext);

    function handleSubmit() {
        if (wealthInput.current && descriptionInput.current && socialInput.current && nameInput.current) {
            add(newCharacter(nameInput.current.value, descriptionInput.current.value, socialInput.current.value, wealthInput.current.value, campaign._id), 'Character', update);
            props.handleClose();
        }
    }

    return (
        <form>
            <label htmlFor="name">Name</label><br/>
            <input ref={nameInput} type="text" placeholder='John Doe'/><br/>
            <label htmlFor="description">Description</label><br/>
            <textarea rows={5} cols={50} ref={descriptionInput} placeholder='Is an asshole who wears blue coats'/><br/>
            <label htmlFor="socialStatus">Social status</label><br/>
            <input ref={socialInput} type="text" placeholder='Beggar, king, etc...'/><br/>
            <select ref={wealthInput}>
                <option value='Unknown'>Unknown</option>
                <option value='Poor'>Poor</option>
                <option value='Average'>Average</option>
                <option value='Relatively rich'>Relatively rich</option>
                <option value='Rich'>Rich</option>
                <option value='Stupidly rich'>Stupidly rich</option>
            </select><br/>
            <input type="button" onClick={handleSubmit} value="Create"/>
        </form>
    )
}