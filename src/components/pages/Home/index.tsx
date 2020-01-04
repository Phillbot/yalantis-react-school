import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { yalantisGetUsersFetch } from "../../../functions/fetches";
import moment from "moment";
import { IHomeProps, IHomeState, IYalantisGetUsers } from "../../../Interfaces";
import getRowAtction from "../../../actions/getRowAtction";
import { Chart } from "react-google-charts";
import "./home.scss";
import { SkeletonLoaderHome, SkeletonLoaderChart } from "../../SkeletonLoader";

class Home extends Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      userList: {}
    };
  }

  componentDidMount() {
    this.setState = this.setState.bind(this);
    yalantisGetUsersFetch(this.setState);
  }

  render() {
    const { error, isLoaded, userList } = this.state;

    if (error) {
      return (
        <div className="container">
          <h4 className="center mt50 mb50">Произошла ошибка :-(</h4>
          <p className="center">Попробуйте обновить страницу </p>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="container-fluid">
          <SkeletonLoaderHome />
        </div>
      );
    } else {
      const monthAndCount: any[] = [];
      const colors: any[] = [];
      const slices: any = {};

      for (let i = 0; i < Object.keys(userList).length; i++) {
        const month = Object.keys(userList)[i];
        const count: any = Object.values(userList)[i];

        monthAndCount.push([month.slice(0, 3), count.length]);

        const obj = { offset: 0.04 };
        slices[i] = obj;
      }

      for (let i = 0; i < Object.values(userList).length; i++) {
        const users: any = Object.values(userList)[i];

        if (users.length < 2) {
          colors.push("#bdbdbd");
        } else if (users.length > 2 && users.length <= 6) {
          colors.push("#3f51b5");
        } else if (users.length > 6 && users.length <= 10) {
          colors.push("#4caf50");
        } else if (users.length >= 11) {
          colors.push("#f44336");
        }
      }

      const monthUserList: any =
        this.props.row !== null
          ? Object.values(userList)[this.props.row]
          : false;

      return (
        <div className="home container-fluid">
          <Helmet>
            <title>Yalantis React School</title>
          </Helmet>

          <div className="row">
            <div className="col l7 s12">
              <Chart
                className="chart"
                chartType="PieChart"
                loader={
                  <div>
                    <SkeletonLoaderChart />
                  </div>
                }
                data={[["month", "users"]].concat(monthAndCount)}
                options={{
                  title: "Yalantis Users",
                  titleTextStyle: {
                    fontSize: 22
                  },
                  fontName: "Ubuntu",
                  is3D: true,
                  pieSliceText: "label",
                  pieSliceTextStyle: {
                    fontSize: 14,
                    bold: true,
                    color: "#fff"
                  },
                  pieSliceBorderColor: "green",
                  legend: "none",
                  tooltip: {
                    text: "both"
                  },
                  colors,
                  chartArea: {
                    left: 0,
                    top: 50,
                    width: "100%",
                    height: "100%"
                  },
                  slices
                }}
                chartEvents={[
                  {
                    eventName: "ready",
                    callback: ({ chartWrapper, google }) => {
                      const chart: any = chartWrapper.getChart();
                      google.visualization.events.addListener(
                        chart,
                        "onmouseover",
                        (e: any) => {
                          const { row } = e;
                          this.props.getRowToDispatch(row);
                        }
                      );
                      google.visualization.events.addListener(
                        chart,
                        "onmouseout",
                        (e: any) => {
                          this.props.getRowToDispatch(null);
                        }
                      );
                    }
                  }
                ]}
              />
            </div>
            <div className="col l4 s12 users-container">
              {this.props.row !== null ? (
                <h4 className="center">
                  {Object.keys(userList)[this.props.row]}
                </h4>
              ) : (
                ""
              )}

              {this.props.row !== null ? (
                <table className="centered">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Birthday</th>
                    </tr>
                  </thead>

                  <tbody>
                    {monthUserList
                      .sort((a: any, b: any) =>
                        a.dob > b.dob ? 1 : b.dob > a.dob ? -1 : 0
                      )
                      .map((users: IYalantisGetUsers) => {
                        const { id, firstName, lastName, dob } = users;

                        return (
                          <tr key={id}>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>
                              {moment(dob, "YYYY-MM-DD HH:mm:ss").format(
                                "YYYY-MM-DD"
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              ) : (
                <h4 className="center"> Hover month to see data </h4>
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToPRops = (state: any) => {
  return {
    row: state.getRowReducer.row
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getRowToDispatch: (row: number) => {
      dispatch(getRowAtction(row));
    }
  };
};

export default connect(mapStateToPRops, mapDispatchToProps)(Home);
