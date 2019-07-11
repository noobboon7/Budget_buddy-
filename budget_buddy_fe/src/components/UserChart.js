import React,{ Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connect } from 'react-redux';



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
		const {wallet, dreamItems} = this.props
		const budgetItems = dreamItems.map((item) => item.targetgoal)
		const budgetTotal = budgetItems.reduce((a,b) => a + b, 0)
		console.log(wallet, dreamItems);
		console.log(budgetItems, budgetTotal);
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
