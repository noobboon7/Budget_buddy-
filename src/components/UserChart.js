import React,{ Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';


class UserChart extends Component {
	render() {
		const {wallet, dreamItems} = this.props
		const budgetItems = dreamItems.map((item) => item.targetgoal)
		const budgetTotal = budgetItems.reduce((a,b) => a + b, 0)

const data = {
	labels: [
		'DreamItem',
		'Expenses',
		'Wallet'
	],
	datasets: [{
		data: [budgetTotal, 80, wallet],
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
		console.log(wallet, dreamItems);
		// console.log(budgetItems, budgetTotal);
    return(
      <Doughnut data={data}/>
    )
  }
}


const mapStateToProps = ({UserReducer, BudgetReducer}) => {
	// console.log(BudgetReducer.itemList);
	return{
		wallet: UserReducer.amount,
		dreamItems: BudgetReducer.itemList
	}
}

export default connect(mapStateToProps)(UserChart);
