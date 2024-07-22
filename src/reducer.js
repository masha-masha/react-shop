export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_GOODS" : 
      return {
        ...state,
        goods: payload || [],
        loading: false,
      }
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    case "ADD_TO_CART": {
      const itemIndex = state.order.findIndex((el) => el.id === payload.id);
      let newOrder;
      if (itemIndex === -1) {
        const newItem = { ...payload, quantity: 1 };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((el, i) =>
          i === itemIndex ? { ...el, quantity: el.quantity + 1 } : el
        );
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    }
    case "INC_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) =>
          payload.id === el.id ? { ...el, quantity: el.quantity + 1 } : el
        ),
      };
    case "DEC_QUANTITY":
      return {
        ...state,
        order: state.order.map((el) =>
          payload.id === el.id
            ? { ...el, quantity: el.quantity > 0 ? el.quantity - 1 : 0 }
            : el
        ),
      };
    case 'TOGGLE_CART':
        return {
            ...state,
            isCartShow: !state.isCartShow
        }
    default:
      return state;
  }
};
