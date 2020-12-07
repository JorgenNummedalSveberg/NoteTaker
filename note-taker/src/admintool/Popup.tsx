import styled from "styled-components";
import React from "react";

const Background = styled.div`
    position: fixed;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.7);
`;
const PopupBox = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
`;
const Dialogue = styled.div`
    background-color: white;
    z-index: 101;
    padding: 20px;
    border-radius: 10px;
`;
const PopupGrid = styled.div`
    display: flex;
    justify-content: center;
    padding: 200px;
`;
export default function Popup(props: {children: JSX.Element | JSX.Element[], setPopup:(boolean: boolean) => void}) {
    document.addEventListener("keydown", handleClose, false)
    function handleClose(event: { key: string; }) {
        if (event.key === 'Escape') {
            props.setPopup(false);
            document.removeEventListener("keydown", handleClose, false);
        }
    }
    return (
        <div>
            <PopupBox>
                <PopupGrid>
                    <Background onClick={() => props.setPopup(false)}></Background>
                    <Dialogue>{props.children}</Dialogue>
                </PopupGrid>
            </PopupBox>
        </div>
    )
}