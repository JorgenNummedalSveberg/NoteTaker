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
    z-index: 101;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
`;
const Dialogue = styled.div`
    background-color: white;
    z-index: 110;
    padding: 20px;
    border-radius: 10px;
`;
const PopupGrid = styled.div`
    display: flex;
    justify-content: center;
    padding: 200px;
`;
export default function Popup(props: {children: JSX.Element | JSX.Element[], handleClose:() => void}) {
    return (
        <div>
            <Background onClick={()=> props.handleClose}></Background>
            <PopupBox>
                <PopupGrid>
                    <Dialogue>{props.children}</Dialogue>
                </PopupGrid>
            </PopupBox>
        </div>
    )
}