import React from 'react';
import { Bar } from 'react-chartjs-2';

class Histogram extends React.Component {
  render() {
    let densityData = {
      data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638]
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
              left: 16
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
