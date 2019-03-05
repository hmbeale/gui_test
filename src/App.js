import React from "react";
import GUI from "./components/gui.js";
import { playerMoveForward, playerAttack, playerDefend,
         playerFlee } from './components/logic.js'


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

      playerMoveForward();
  }

  handleButtonTwoClick = () => {
    playerAttack();
  }

  handleButtonThreeClick = () => {
    playerDefend();
  }

  handleButtonFourClick = () => {
    playerFlee();
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
