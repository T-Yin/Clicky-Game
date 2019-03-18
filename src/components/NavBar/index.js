import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <>
            <nav className="navbar fixed-top">
                <span className="title h2">Memory Clicky Game</span>
                <span className="current-score h4"> <b>Current Score: </b>{props.curScore} | <b>Top Score: </b>{props.topScore}</span>
            </nav>
            <div className="jumbotron jumbotron-fluid m-0">
                <div className="container">
                    <h1 className="display-4 text-center"> <b>It's Adventure Time!</b></h1>
                    <p className="h4 text-center m-2">Test your memory in this algebraic clicky game!
                    Each time an image is clicked your score goes up, but if you click on the same image twice you lose!</p>
                </div>
            </div>
        </>
    )
}

export default NavBar;