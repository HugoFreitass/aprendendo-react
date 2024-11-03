import "./ConfirmationButton.css"
import React from "react";
import { Link } from "react-router-dom"

export default function ConfirmationButton(props){
    return(
        <>    
            <Link to={props.link}>
            <button className="confirmation-button" >{props.content}</button>
            </Link> 
        </>
    );
}