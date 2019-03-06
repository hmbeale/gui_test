import React from "react";
import GUI from "./components/gui.js";
import { playerMoveForward, playerAttack, playerDefend,
         playerFlee } from './components/mainLogic.js'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lineOneText: 'welcome text'
    };
  }

  handleButtonOneClick = () => {
    this.setState(
      {
      lineOneText: this.state.lineOneText ===
      'click button one again' ?
      'click button one':
      'click button one again'});

      console.log(playerMoveForward());
  }

  handleButtonTwoClick = () => {
    //playerAttack returns text based on game logic
    console.log(playerAttack());
  }

  handleButtonThreeClick = () => {
    //playerDefend returns text based on game logic
    console.log(playerDefend());
  }

  handleButtonFourClick = () => {
    //playerFlee returns text based on game logic
    console.log(playerFlee());
  }

  render() {
    const lineOneText = this.state.lineOneText;
    const mediaPath = this.state.mediaPath;

    return (
      <GUI
        lineOneText = {lineOneText}
        mediaPath = {mediaPath}
        handleButtonOneClick={this.handleButtonOneClick}
        handleButtonTwoClick = {this.handleButtonTwoClick}
        handleButtonThreeClick = {this.handleButtonThreeClick}
        handleButtonFourClick = {this.handleButtonFourClick}
        />
    )
  }
}

export default App;
