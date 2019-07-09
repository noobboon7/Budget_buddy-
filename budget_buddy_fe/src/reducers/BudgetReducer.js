let initialState = {
  itemList: [],
  budget: {
    item: "",
    amount: 0,
    description: "",
    catagory: "",
    imgURL: ""
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
      case "ADD_ITEM":
      // debugger
      let dreamItem = action.payload
      return {
        itemList: [
        ...state.itemList,
        dreamItem]
      }

    default:
      return state;
  }
}

export default budgetReducer
