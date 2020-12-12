import React, {createRef, useContext} from "react";
import {SetterOrUpdater, useRecoilState, useRecoilValue} from "recoil";
import {moldableMass} from "../recoil/atoms";
import {add} from "../worldBuildingService";
import {APIContext} from "../App";

export function StringInput(props: {property: string, area?: boolean}) {
    const textInput = createRef<HTMLInputElement>();
    const areaInput = createRef<HTMLTextAreaElement>();
    const [object, setObject]: [any, SetterOrUpdater<{}>] = useRecoilState(moldableMass);
    function handleChange() {
        if (textInput.current) {
            object[props.property] = textInput.current.value;
            setObject(object);
        }
        if (areaInput.current) {
            object[props.property] = areaInput.current.value;
            setObject(object);
        }
    }
    return (
        <div>
            <label title={capitalize(props.property)}/>
            {props.area?<input ref={textInput} onChange={handleChange}/>:<textarea ref={areaInput} onChange={handleChange}/>}
        </div>
    )
}
export function StringList(props: {property: string}) {
    const input = createRef<HTMLInputElement>();
    const [object, setObject]: [any, SetterOrUpdater<{}>] = useRecoilState(moldableMass);
    function handleChange() {
        if (input.current) {
            object[props.property].push(input.current.value);
            setObject(object);
        }
    }
    return (
        <div>
            <label title={capitalize(props.property)}/>
            <ul>
                {object[props.property]?object[props.property].map((element: string) => <li>{element}</li>):null}
            </ul>
            <input ref={input}/>
            <button onClick={handleChange}>Add</button>
        </div>
    )
}
export function ObjectSelectionList(props: {property: string, list: {_id: string, name: string}[]}) {
    const input = createRef<HTMLSelectElement>();
    const [object, setObject]: [any, SetterOrUpdater<{}>] = useRecoilState(moldableMass);
    function handleChange() {
        if (input.current) {
            object[props.property].push(input.current.value);
            setObject(object);
        }
    }
    return (
        <div>
            <label title={capitalize(props.property)}/>
            <ul>
                {object[props.property]?object[props.property].map((element: string) => <li>{element}</li>):null}
            </ul>
            <select ref={input}>
                {props.list.map(element => <option value={element._id}>{element.name}</option>)}
            </select>
            <button onClick={handleChange}>Add</button>
        </div>
    )
}
export function ObjectSelection(props: {property: string, list: {_id: string, name: string}[]}) {
    const input = createRef<HTMLSelectElement>();
    const [object, setObject]: [any, SetterOrUpdater<{}>] = useRecoilState(moldableMass);
    function handleChange() {
        if (input.current) {
            object[props.property] = input.current.value;
            setObject(object);
        }
    }
    return (
        <div>
            <label title={capitalize(props.property)}/>
            <select ref={input} onSelect={handleChange}>
                {object[props.property]?props.list.map(element => <option value={element._id}>{element.name}</option>):null}
            </select>
        </div>
    )
}
export function StringSelection(props: {property: string, list: string[]}) {
    const input = createRef<HTMLSelectElement>();
    const [object, setObject]: [any, SetterOrUpdater<{}>] = useRecoilState(moldableMass);
    function handleChange() {
        if (input.current) {
            object[props.property] = input.current.value;
            setObject(object);
        }
    }
    return (
        <div>
            <label title={capitalize(props.property)}/>
            <select ref={input} onSelect={handleChange}>
                {object[props.property]?props.list.map(element => <option value={element}>{element}</option>):null}
            </select>
        </div>
    )
}
export function CreateButton(props: {type: string}) {
    const object = useRecoilValue(moldableMass);
    const update = useContext(APIContext);
    return (
        <button onClick={()=>add(object, props.type, update)}>Dickhead</button>
    )
}
function capitalize(input: string) {
    const firstLetter = input[0];
    let inputString =  input.substring(1);
    let returnString = '';
    returnString += firstLetter.toUpperCase();
    let i = 0;
    while(inputString.length > 0) {
        if (inputString[i] === inputString[i].toUpperCase()) {
            returnString += ' ';
        }
        returnString += inputString[i];
        inputString = inputString.substring(1);
    }
    return returnString;
}