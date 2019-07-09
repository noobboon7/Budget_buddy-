import React,{ Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'DreamItem',
		'Expenses',
		'Wallet'
	],
	datasets: [{
		data: [50, 50, 1000],
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
