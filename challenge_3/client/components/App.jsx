import React from 'react';
import ButtonPad from './ButtonPad.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      value: e
    });
  }

  render() {
    return (
      <div>
        <ButtonPad handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App;