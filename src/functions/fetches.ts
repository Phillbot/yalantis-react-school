import { Yalantis } from "../api";
import { IYalantisGetUsers } from "../Interfaces/index";
import moment from "moment";

export const yalantisGetUsersFetch = (setState: Function): void => {
  const {
    baseUrl,
    get: { getUsers }
  } = Yalantis;

  fetch(`${baseUrl}${getUsers}`)
    .then(res => res.json())
    .then(
      result => {
        const userList = {
          January: [],
          February: [],
          March: [],
          April: [],
          May: [],
          June: [],
          July: [],
          August: [],
          September: [],
          October: [],
          November: [],
          December: []
        } as any;

        result.forEach((user: IYalantisGetUsers) => {
          const { dob } = user;

          const birthMonth: string = moment(dob, "YYYY-MM-DD HH:mm:ss").format(
            "MM"
          );

          const {
            January,
            February,
            March,
            April,
            May,
            June,
            July,
            August,
            September,
            October,
            November,
            December
          } = userList;

          switch (birthMonth) {
            case "01":
              January.push(user);
              break;
            case "02":
              February.push(user);
              break;
            case "03":
              March.push(user);
              break;
            case "04":
              April.push(user);
              break;
            case "05":
              May.push(user);
              break;
            case "06":
              June.push(user);
              break;
            case "07":
              July.push(user);
              break;
            case "08":
              August.push(user);
              break;
            case "09":
              September.push(user);
              break;
            case "10":
              October.push(user);
              break;
            case "11":
              November.push(user);
              break;
            case "12":
              December.push(user);
              break;

            default:
              break;
          }
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
