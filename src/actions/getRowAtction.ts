export default function getRowAtction(row: number) {
  return {
    type: "ROW",
    payload: row
  };
}
