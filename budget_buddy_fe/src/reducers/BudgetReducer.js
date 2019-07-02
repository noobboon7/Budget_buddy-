let initialState = {
  budget: {
    item: "",
    amount: 0,
    description: "",
    catagory:""
  }
}

const budgetReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SAVE_BUDGET_TO_STATE":
    let budgetObj = action.payload
      return {
        ...state,
        item: budgetObj.item,
        amount: budgetObj.amount,
        description: budgetObj.description,
        catagory: budgetObj.catagory

      }

    default:
      return state;
  }
}

export default budgetReducer
