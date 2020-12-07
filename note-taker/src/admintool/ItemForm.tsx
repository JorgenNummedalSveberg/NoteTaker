import {selectedCampaignState} from "../recoil/atoms";
import {useRecoilValue} from "recoil";
import React, {useContext, useRef} from "react";
import {add} from "../worldBuildingService";
import {APIContext} from "../App";
import {newItem} from "../types/Item";

export default function ItemForm(props: { handleClose: () => void }) {
    const campaign = useRecoilValue(selectedCampaignState);
    const nameInput = useRef<HTMLInputElement>(null);
    const descriptionInput = useRef<HTMLTextAreaElement>(null);
    const update = useContext(APIContext);

    function handleSubmit() {
        if (descriptionInput.current && nameInput.current) {
            add(newItem(nameInput.current.value, descriptionInput.current.value, campaign._id), 'Item', update);
            props.handleClose();
        }
    }

    return (
        <form>
            <label htmlFor="name">Name</label><br/>
            <input ref={nameInput} type="text" placeholder='Ice breaker'/><br/>
            <label htmlFor="description">Description</label><br/>
            <textarea rows={5} cols={50} ref={descriptionInput} placeholder='Can be used as a joke or to call forth Ragnarock'/><br/>
            <input type="button" onClick={handleSubmit} value="Create"/>
        </form>
    )
}