let initialState = {
  itemList: [],
  // expense: {
  //   id:"",
  //   item: "",
  //   amount: 0,
  //   description: "",
  //   catagory: "",
  //   imgURL: ""
  // }
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
      case "ADD_ITEM":
      let newItem = action.payload
      // debugger
      return {
        itemList: [
          ...state.itemList,
          newItem
        ]
      }

      case "DELETE_ITEM":
      let id = action.payload
      let deletedItemArray = state.itemList.filter(item => item.id !== id)
      return{
        ...state,
        itemList: deletedItemArray
      }


    default:
      return state;
  }
}

export default budgetReducer
