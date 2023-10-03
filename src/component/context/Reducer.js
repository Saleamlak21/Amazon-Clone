export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  // console.log(action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "Remove_From_Array":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id == action.id
      );

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

    case "SET-USER":
      return {
        ...state,
        user: action.user,
      };

    case "CLEAN_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
