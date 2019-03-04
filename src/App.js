import React from "react";
import GUI from "./components/gui.js";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {fancyText: 'fancyText'};
  }

  handleClick() {
    this.setState({fancyText: 'alternative fancy text'});
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
