import React,{ Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'DreamItem',
		'Expenses',
		'Wallet'
	],
	datasets: [{
		data: [50, 50, 100],
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
  render() {
    return(
      <div className="chart">
        <h2>Home Chart</h2>
      <Doughnut data={data}/>
      </div>
    )
  }
}
export default (UserChart);
