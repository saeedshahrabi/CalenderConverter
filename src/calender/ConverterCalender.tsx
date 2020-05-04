import React, { Component } from "react";
// import "moment/locale/fa";
// import 'moment/locale/ar';
import moment from "moment-jalaali";

interface IProps {
  timestamp: number;
  shamsi: false;
}

export default class ConvertToDate extends Component<any> {
  getTimestampToDatejalaali = (timestamp: number) => {
    return moment(timestamp * 1000).format("jYYYY/jM/jD");
  };

  getTimestampToDateGregorian = (timestamp: number) => {
    return moment(timestamp * 1000)
      .locale("en")
      .format("YYYY/MM/DD");
  };
  getYearjalaali = (timestamp: number) => {
    return moment(timestamp * 1000).format("jYYYY");
  };

  getYearGregorian = (timestamp: number) => {
    return moment(timestamp * 1000).format("YYYY");
  };

  getMonthjalaali = (timestamp: number) => {
    moment.loadPersian({ usePersianDigits: true });
    return moment(timestamp * 1000)
      .locale("fa")
      .format("jMMM");
  };

  getMonthGregorian = (timestamp: number) => {
    return moment(timestamp * 1000)
      .locale("en")
      .format("MMM");
  };
  /*

*/
  getDayjalaali(timestamp: number) {
    const days = [
      "یکشنبه",
      "دوشنبه",
      "سه شنبه",
      "چهارشنبه",
      " پنج شنبه",
      "جمعه",
      "شنبه",
    ];
    let m = new Date(timestamp * 1000);
    let x = m.getDay();
    return days[x];
  }
  getDayGregorian(timestamp: number) {
    const days = [
      "sunday",
      "monday",
      "tuesday ",
      " wednesday",
      "thursday ",
      "friday",
      "saturday ",
    ];
    let m = new Date(timestamp * 1000);
    console.log(m, 76543);
    let x = m.getDay();
    return days[x];
  }

  render() {
    return (
      <>
        <table
          className={
            this.props.shamsi === false ? "table table-striped block" : "none"
          }
        >
          {console.log(this.props.shamsi, 15)}
          <thead className="text-center">
            <tr>
              <th colSpan={2}>gregorian</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>Full Year</td>
              <td>{this.getTimestampToDateGregorian(this.props.timestamp)}</td>
            </tr>
            <tr>
              <td>Year</td>
              <td>{this.getYearGregorian(this.props.timestamp)}</td>
            </tr>
            <tr>
              <td>Month</td>
              <td>{this.getMonthGregorian(this.props.timestamp)}</td>
            </tr>
            <tr>
              <td>Day</td>
              <td>{this.getDayGregorian(this.props.timestamp)}</td>
            </tr>
          </tbody>
        </table>
        <table
          className={
            this.props.shamsi === false
              ? "table table-striped none"
              : "block table table-striped"
          }
        >
          <thead className="text-center">
            <tr>
              <th colSpan={2}>تقویم شمسی</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td> {this.getTimestampToDatejalaali(this.props.timestamp)}</td>
              <td>تقویم کامل شمسی</td>
            </tr>
            <tr>
              <td> {this.getYearjalaali(this.props.timestamp)}</td>
              <td>سال</td>
            </tr>
            <tr>
              <td> {this.getMonthjalaali(this.props.timestamp)}</td>
              <td>ماه</td>
            </tr>
            <tr>
              <td> {this.getDayjalaali(this.props.timestamp)}</td>
              <td>روز</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
