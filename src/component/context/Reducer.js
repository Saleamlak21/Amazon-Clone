// create an initial state for the basket and user
export const initialState = {
  basket: [],
  user: null,
};

// create a reducer to manage the state of the basket and user
const reducer = (state, action) => {
  // check the action type
  switch (action.type) {

    // if the action type is ADD_TO_BASKET
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      
    // if the action type is Remove_From_Array
    case "Remove_From_Array":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id == action.id
      );
      // create a new basket
      const newBasket = [...state.basket];

      if (index > -1) {
        newBasket.splice(index, 1);
      } else {
        console.log(`can't remove the  item`);
      }
      return {
        ...state,
        basket: newBasket,
      };

    // if the action type is SET-USER
    case "SET-USER":
      return {
        ...state,
        user: action.user,
      };

    // if the action type is CLEAN_BASKET
    case "CLEAN_BASKET":
      return {
        ...state,
        basket: [],
      };

   // if the action type is not found
    default:
      return state; 
  }
};
// export the reducer
export default reducer;
