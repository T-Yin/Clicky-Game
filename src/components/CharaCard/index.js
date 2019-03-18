import React from "react";
import "./style.css";

function CharaCard(props) {

    return (
        <>
            <img alt={props.name} src={props.image} data-id={props.id} 
                onClick={() => props.clickFunction(props.id)}
            />
        </>
    );
}

export default CharaCard;