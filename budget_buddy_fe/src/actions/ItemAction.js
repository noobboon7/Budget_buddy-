export const addItemToBackend = budget => {
  debugger
  return dispatch => {
    return fetch("http://localhost:3000/budgets", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.token
      },
      body: JSON.stringify({budget})
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          alert(data.message)
          // alert(data.error)
        } else {
          // debugger
          dispatch(addItem(data.budget))
        }
      })
  }
}


const addItem = (dreamItem) => ({
  type: 'ADD_ITEMS',
  payload: dreamItem
});

export const deleteItem = (dreamItem) => ({
  type: 'DELETE_ITEM',
  payload: dreamItem
});

export const getItemFetch = () => {
  return dispatch => {
    // debugger
    const token = localStorage.token;
    if (token) {
      // debugger
      return fetch(`http://localhost:3000/get_user_budgets`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            // debugger
            alert(data.error)
          } else {
            // debugger
            dispatch(addItem(data))
          }
        })
    }
  }
}
