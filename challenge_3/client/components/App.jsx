import React from 'react';
import ButtonPad from './ButtonPad.jsx';
import Play from './Play.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      round: 0,
      current: 0
    }

    this.handleClick = this.handleClick.bind(this);
    this.playFrame = this.playFrame.bind(this);
  }

  handleClick(e) {
    this.setState({
      current: e
    });

    if (this.state.round === 1) {
      let prevState = this.state.value;
      let prevRound = this.state.round;
      if (e === 10) {
        alert('Strike');
        this.setState({
          value: prevState + 10,
          round: prevRound + 1
        });
      } else {
        this.setState({
          value: e + prevState,
          round: prevRound + 1
        });
      }
    } else if (this.state.round === 2) {
      let prevState = this.state.value;
      let prevRound = this.state.round;
      if (e === 10) {
        alert('Strike');
        this.setState({
          value: prevState + 10,
          round: prevRound + 1
        });
      } else {
        this.setState({
          value: e + prevState,
          round: prevRound + 1
        });
      }
    }
  }

  playFrame() {
    this.setState({
      round: 1
    });
  }

  render() {
    return (
      <div>
        <Play value={this.state.value} playFrame={this.playFrame} current={this.state.current} />
        <ButtonPad handleClick={this.handleClick} />
      </div>
    )
  }
}

export default App;