import React, { Component } from "react";
import CharaCard from "./components/CharaCard";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Characters from "./characters.json";

class App extends Component {
    state = {
        clicked: false,
        curScore: 0,
        topScore: 0,
        Characters,
    };

    clickedImage = (id) => {
        if (this.state.clicked === true) {
            alert("Sorry, That was an incorrect guess. You lose!")
            this.setState({curScore: this.state.curScore = 0});
        } else {
            this.setState({clicked: this.state.clicked = true });
            this.setState({curScore: this.state.curScore + 1});
            this.setState({topScore: this.state.topScore + 1});
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