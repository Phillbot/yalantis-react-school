export default function getRowAtction(rowFromRedux: number) {
  return {
    type: "ROW",
    payload: rowFromRedux
  };
}
