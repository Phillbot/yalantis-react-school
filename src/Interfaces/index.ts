export interface IYalantisGetUsers {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
}

export interface IHomeState {
  error: null | boolean;
  isLoaded: boolean;
  userList: object;
}

export interface IHomeProps {
  rowFromRedux: null | number;
  getRowToDispatch: Function;
}
