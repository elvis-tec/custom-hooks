export const todoReducer = (initialState = [], action = {}) => {
  switch (action.type) {
    case "[TODO] add todo":
      return [...initialState, action.payload];
      break;
    case "[TODO] remove todo":
      return initialState.filter((todo) => todo.id !== action.payload);
      break;

    case "[TODO] toggle todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload){
            return {
                ...todo,
                done: !todo.done
            }
        }

        return todo;
      });
      break;

    default:
      return initialState;
      break;
  }
};
