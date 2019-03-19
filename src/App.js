import React, { Component } from "react";
import CharaCard from "./components/CharaCard";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Characters from "./characters.json";
var shuffle = require('shuffle-array');

class App extends Component {
    state = {
        clicked: [],
        curScore: 0,
        topScore: 0,
        Characters,
    };

    clickedImage = (id) => {
        if (this.state.clicked.includes(id) && this.state.topScore === 12) {
            alert("Congrats, you win!");
        } else if (this.state.clicked.includes(id)) {
            alert("Incorrect, you lose!");
            this.setState({ curScore: this.state.curScore = 0 });
            this.setState({ clicked: [] });
        } else {
            this.setState({ clicked: this.state.clicked.concat(id) });
            this.setState({ curScore: this.state.curScore + 1 });
            if (this.state.curScore >= this.state.topScore) {
                this.setState({ topScore: this.state.topScore + 1 });
            } else {
                this.setState({ topScore: this.state.topScore });
            };
            shuffle(Characters);
        }
    };

    render() {
        return (
            <>
                <NavBar
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Wrapper>
                    {this.state.Characters.map(chara =>
                        (<CharaCard
                            {...chara}
                            key={chara.id}
                            clickFunction={this.clickedImage}
                        />))}
                </Wrapper>
            </>
        );
    }
}

export default App;