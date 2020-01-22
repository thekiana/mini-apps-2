import React from 'react';
import { Line } from 'react-chartjs-2';

class CoinChart extends React.Component {
  
  render() {

    const dates = Object.keys(this.props.coinData);
    const values = Object.values(this.props.coinData);

    const getDay = (timestamps) => {
      var newDates = [];

      for (var i = 0; i < timestamps.length; i++) {
        var sliced = timestamps[i].slice(-2);
        var newDate = `Sept ${sliced}`;

        newDates.push(newDate);
      }

      return newDates;
    }

    const newDates = getDay(dates);

    const chartData = {
      labels: newDates,
      datasets: [
        {
          label: 'Bitcoin Price Index',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: values
        }
      ]
    };

    return (
      <div>
        <Line data={chartData} />
      </div>
    )
  }

}

export default CoinChart;