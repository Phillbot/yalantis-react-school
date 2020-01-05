const InitialState = {
  rowFromRedux: null
};

export default function getRowReducer(state: {} = InitialState, action: any) {
  switch (action.type) {
    case "ROW":
      return { ...state, rowFromRedux: action.payload };

    default:
      return state;
  }
}
