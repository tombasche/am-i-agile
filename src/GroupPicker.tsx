import CSS from 'csstype';

import React, { FunctionComponent, useState } from "react";
import Confetti from 'react-dom-confetti';

import { Button } from "./Button";
import { PickedGroup } from './PickedGroup';


type GroupPickerProps = {
    groupPicker: Function
}

export const GroupPicker:FunctionComponent<{groupPicker: Function}> = (props: GroupPickerProps) => {

    const [group, setGroup] = useState();
    const [triggerConfetti, setTriggerConfetti] = useState(false);

    return <div style={groupPickerContainerStyle}>
        <Button handleClick={
            () => {
                setGroup(props.groupPicker());
                setTriggerConfetti(true)
            }
        }>
            Whose turn is it?
        </Button>
        <div style={confettiContainerStyle}>
            <Confetti active={ triggerConfetti } config={confettiConfig} />
            <PickedGroup group={group}/>
            <Confetti active={ triggerConfetti } config={confettiConfig}/>
        </div>
    </div>
    
}

const groupPickerContainerStyle: CSS.Properties = {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center"
};

const confettiContainerStyle: CSS.Properties = {
    display: "flex",
    flexFlow: "row",
    justifyContent: "center"
}

const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 12000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };