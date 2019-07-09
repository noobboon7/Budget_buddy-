import React,{ Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};


class UserChart extends Component {
  // state={
  //   chartData: {}
  // }

  render() {
    return(
      <div className="chart">
        <h2>Doughnut Example</h2>
      <Doughnut data={data}/>
      </div>
    )
  }
}
export default (UserChart);
