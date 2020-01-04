export interface IYalantisGetUsers {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
}

export interface IHomeState {
  error: null | string;
  isLoaded: boolean;
  userList: object;
}

export interface IHomeProps {
  row: null | number;
  getRowToDispatch: Function;
}
