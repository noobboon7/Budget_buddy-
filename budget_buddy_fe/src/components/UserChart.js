import React,{ Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: [
		'DreamItem',
		'Expenses',
		'Wallet'
	],
	datasets: [{
		data: [50, 80, 100],
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
      <Doughnut data={data}/>
    )
  }
}
export default (UserChart);
