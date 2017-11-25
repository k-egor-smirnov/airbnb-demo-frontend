import React from 'react';
import { Bar } from 'react-chartjs-2';

class Histogram extends React.Component {
  render() {
    let densityData = {
      data: [10, 10, 20, 25, 45, 40, 40, 20]
    };

    return (
      <Bar
        height={80}
        data={{
          labels: ['1', '2', '3', '4', '5', '6', '7', '8'],

          datasets: [densityData]
        }}
        options={{
          layout: {
            padding: {
              left: 16,
              right: 16
            }
          },
          animation: {
            duration: 0
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          scales: {
            xAxes: [
              {
                display: false,
                barPercentage: 1,
                categoryPercentage: 1
              }
            ],
            yAxes: [
              {
                display: false,
                barPercentage: 1,
                categoryPercentage: 1,
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }}
      />
    );
  }
}

export default Histogram;
