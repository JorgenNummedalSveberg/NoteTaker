import {CreateButton, ObjectSelectionList, StringInput, StringList, StringSelection} from "./ObjectCreation";
import React, {useEffect, useState} from "react";
import {campaignState, groupState, itemState, moldableMass, questState, selectedCampaignState} from "../recoil/atoms";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {blankCharacter, newCharacter} from "../types/Character";
import Popup from "./Popup";
import {campaignFilter} from "../recoil/selectors";

const wealthList = ['Unknown', 'Poor', 'Average', 'Relatively rich', 'Rich', 'Stupidly rich']

export function CharacterCreation(props: {editor?: false | string}) {
    const [popup, setPopup] = useState(false);
    const setObject = useSetRecoilState(moldableMass);
    const campaign = useRecoilValue(selectedCampaignState);
    const groups = useRecoilValue(campaignFilter).groups;
    const campaigns = useRecoilValue(campaignState);
    const items = useRecoilValue(campaignFilter).items;
    const quests = useRecoilValue(campaignFilter).quests;

    useEffect(() => {
        setObject(blankCharacter(campaign._id))
    })
    return (
        <div>
            <button onClick={() => setPopup(true)}>Create</button>
            {popup?<Popup setPopup={setPopup}>
                {props.editor?<h3>{props.editor}</h3>:<StringInput property={'name'}/>}
                <StringInput property={'aliases'}/>
                <StringInput property={'description'} area={true}/>
                <StringList property={'specialTraits'}/>
                <StringList property={'thoughtsSurrounding'}/>
                <StringInput property={'socialStatus'}/>
                <ObjectSelectionList property={'groups'} list={groups}/>
                <StringSelection property={'wealth'} list={wealthList}/>
                <ObjectSelectionList property={'negativeStanding'} list={groups}/>
                <ObjectSelectionList property={'positiveStanding'} list={groups}/>
                {props.editor?<></>:<ObjectSelectionList property={'campaigns'} list={campaigns}/>}
                <ObjectSelectionList property={'items'} list={items}/>
                <ObjectSelectionList property={'questsGiven'} list={quests}/>
                <ObjectSelectionList property={'questsParticipated'} list={quests}/>
                <CreateButton type={'Character'}/>
            </Popup>:null}
        </div>
    )
}