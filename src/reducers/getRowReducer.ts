const InitialState = {
  row: null
};

export default function getRowReducer(state: {} = InitialState, action: any) {
  switch (action.type) {
    case "ROW":
      return { ...state, row: action.payload };

    default:
      return state;
  }
}
