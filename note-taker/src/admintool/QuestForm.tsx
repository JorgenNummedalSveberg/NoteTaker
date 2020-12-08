import {selectedCampaignState} from "../recoil/atoms";
import {useRecoilValue} from "recoil";
import React, {useContext, useRef, useState} from "react";
import {add} from "../worldBuildingService";
import {newGroup} from "../types/Group";
import {APIContext} from "../App";
import {newQuest} from "../types/Quest";
import {newCharacter} from "../types/Character";
import {campaignFilter} from "../recoil/selectors";

export default function QuestForm(props: { handleClose: () => void }) {
    const campaign = useRecoilValue(selectedCampaignState);
    const givers = useRecoilValue(campaignFilter).characters.concat(useRecoilValue(campaignFilter).groups);
    const nameInput = useRef<HTMLInputElement>(null);
    const giverInput = useRef<HTMLSelectElement>(null);
    const goldRewardInput = useRef<HTMLInputElement>(null);
    const descriptionInput = useRef<HTMLTextAreaElement>(null);
    const objectiveInput = useRef<HTMLInputElement>(null);
    const update = useContext(APIContext);

    function handleSubmit() {
        if (giverInput.current && descriptionInput.current && goldRewardInput.current && nameInput.current && objectiveInput.current) {
            add(newQuest(nameInput.current.value, giverInput.current.value, goldRewardInput.current.value, descriptionInput.current.value, objectiveInput.current.value, campaign._id), 'Quest', update);
            props.handleClose();
        }
    }

    return (
        <form>
            <label htmlFor="name">Name</label><br/>
            <input ref={nameInput} type="text" placeholder='Idiotic troll capture'/><br/>
            <label htmlFor="reward">Quest giver</label><br/>
            <select ref={giverInput}>
                {givers.map(giver => <option value={giver._id}>{giver.name}</option>)}
            </select><br/>
            <label htmlFor="goldReward">Gold reward</label><br/>
            <input ref={goldRewardInput} type="text" placeholder='100'/><br/>
            <label htmlFor="description">Description</label><br/>
            <textarea rows={5} cols={50} ref={descriptionInput} placeholder='Some idiot wants us to bring trolls'/><br/>
            <label htmlFor="objective">Objective</label><br/>
            <input ref={objectiveInput} type="text" placeholder='Capture trolls'/><br/>
            <input type="button" onClick={handleSubmit} value="Create"/>
        </form>
    )
}