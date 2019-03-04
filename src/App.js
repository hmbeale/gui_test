import React from "react";
import GUI from "./components/gui.js";

const mediaPaths = [
  '../thumbnails/map0.png',
  '../thumbnails/map1.png',
  '../thumbnails/map2.png'
]

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fancyText: 'click button one',
      mediaPath: '../thumbnails/map0.png',
    };
  }

  handleButtonOneClick = () => {
    this.setState({fancyText: this.state.fancyText ===
      'click button one again' ?
      'click button one':
      'click button one again'});
  }

  handleButtonTwoClick = () => {
    this.setState({mediaPath: mediaPaths[1]})
    console.log('clicked');
  }

  render() {
    const fancyText = this.state.fancyText;
    const mediaPath = this.state.mediaPath;

    return (
      <GUI
        fancyText = {fancyText}
        mediaPath = {mediaPath}
        handleButtonOneClick={this.handleButtonOneClick}
        handleButtonTwoClick = {this.handleButtonTwoClick}
        />
    )
  }
}
export default App;
