import React from 'react';
import { ajax } from 'jquery';
import Header from './Header.jsx';
import CoinChart from './CoinChart.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData: []
    }
  }

  componentDidMount() {
    ajax({
      method: 'get',
      url: '/api/bitcoin',
      success: (data) => {
        console.log(data);
        this.setState({
          coinData: data
        })
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <CoinChart coinData={this.state.coinData} />
      </div>
    )
  }
}

export default App;