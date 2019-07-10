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
      case "ADD_ITEM":
      let dreamItem = action.payload
      // debugger
      return {
        itemList: [
          ...state.itemList,
          {imgURL: dreamItem.img_url},
          ...dreamItem
        ]
      }

      case "DELETE_ITEM":
      return{
        ...state,
      }


    default:
      return state;
  }
}

export default budgetReducer
