import { Yalantis } from "../api";
import { IYalantisGetUsers } from "../Interfaces/index";
import moment from "moment";
import months from "../dictionaries/months.json";

const {
  baseUrl,
  get: { getUsers }
} = Yalantis;

export const yalantisGetUsersFetch = (setState: Function): void => {
  fetch(`${baseUrl}${getUsers}`)
    .then(res => res.json())
    .then(
      result => {
        let userList = {} as any;

        for (const key in months) {
          userList[key] = [];
        }

        result.forEach((user: IYalantisGetUsers) => {
          const { dob } = user;
          const birthMonth: number = +moment(dob, "YYYY-MM-DD HH:mm:ss").format(
            "MM"
          );
          const month: any = Object.values(userList)[birthMonth - 1];
          month.push(user);
        });

        setState({
          isLoaded: true,
          userList
        });
      },
      error => {
        setState({
          isLoaded: true,
          error: true
        });
      }
    );
};
