import React from "react";
import GUI from "./components/gui.js";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {fancyText: 'click button one'};
  }

  handleClick = () => {
    this.setState({fancyText: this.state.fancyText ===
      'click button one again' ?
      'click button one':
      'click button one again'});
  }

  render() {
    const fancyText = this.state.fancyText;

    return (
      <GUI
        fancyText = {fancyText}
        handleClick={this.handleClick}
        />
    )
  }
}
export default App;
