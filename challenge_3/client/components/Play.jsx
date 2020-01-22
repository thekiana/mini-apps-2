import React from 'react';

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [],
      value: this.props.value
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      var pushed = this.state.scores.concat(this.props.current);
    
      this.setState({
        scores: pushed
      });
    }
  }

  render() {
    return (
      <div>
        <div className="score-play">
          <h1>Scoreboard</h1>
          <h2>{this.state.scores.map((score, idx = 1) => {
              return ((idx % 2 !== 0) ? `${score} || ` : ` ${score}, `)
            }
          )}</h2>
          <h3>Total: {this.props.value} </h3>

          <h5>Play to bowl! One frame = two rolls.</h5>
        </div>
        
        <button onClick={() => this.props.playFrame()}> Play Frame </button>
      </div>
    )
  }
}

export default Play;