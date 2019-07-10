let initialState = {
  itemList: [],
  expense: {
    id:"",
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
      case "ADD_ITEMS":
      let dreamItem = action.payload
      // debugger
      return {
        itemList: [
          ...state.itemList,
          ...dreamItem
        ]
      }

      case "DELETE_ITEM":
      let id = action.payload

      return{
        ...state.itemList.filter(id !== id )

      }


    default:
      return state;
  }
}

export default budgetReducer
