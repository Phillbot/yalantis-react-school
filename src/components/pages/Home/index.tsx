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

    const { rowFromRedux, getRowToDispatch } = this.props;

    if (error) {
      return (
        <div className="container center">
          <h4 className="mt50 mb50">Произошла ошибка :-(</h4>
          <p>Попробуйте обновить страницу</p>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div className="container-fluid">
          <SkeletonLoaderHome />
        </div>
      );
    } else {
      let monthAndCount: any[] = [];
      let colors: any[] = [];

      const slices: any = {};

      const monthUserList: any =
        rowFromRedux !== null ? Object.values(userList)[rowFromRedux] : false;

      const selectedMonth: any =
        rowFromRedux !== null ? Object.keys(userList)[rowFromRedux] : false;

      Object.keys(userList).forEach((month: any, i) => {
        const count: any = Object.values(userList)[i];
        monthAndCount = [...monthAndCount, [month.slice(0, 3), count.length]];
        slices[i] = { offset: 0.04 };
      });

      Object.values(userList).forEach((users: any) => {
        if (users.length < 2) {
          colors = [...colors, "#bdbdbd"];
        } else if (users.length > 2 && users.length <= 6) {
          colors = [...colors, "#3f51b5"];
        } else if (users.length > 6 && users.length <= 10) {
          colors = [...colors, "#4caf50"];
        } else if (users.length >= 11) {
          colors = [...colors, "#f44336"];
        }
      });

      const chartOptions = {
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
          left: "5%",
          top: 50,
          width: "85%",
          height: "85%"
        },
        slices
      };

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
                options={chartOptions}
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
                          getRowToDispatch(row);

                          chart.pea[0].slices[row].offset = 0.2;
                        }
                      );
                      google.visualization.events.addListener(
                        chart,
                        "onmouseout",
                        (e: any) => {
                          getRowToDispatch(null);
                        }
                      );
                    }
                  }
                ]}
              />
            </div>
            <div className="col l4 s12 users-container">
              {rowFromRedux !== null ? (
                <h4 className="center">{selectedMonth}</h4>
              ) : (
                ""
              )}

              {rowFromRedux !== null ? (
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
    rowFromRedux: state.getRowReducer.rowFromRedux
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getRowToDispatch: (rowFromRedux: number) => {
      dispatch(getRowAtction(rowFromRedux));
    }
  };
};

export default connect(mapStateToPRops, mapDispatchToProps)(Home);
