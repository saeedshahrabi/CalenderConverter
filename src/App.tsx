import React, { Component } from "react";
import "./style/style.scss";
import Header from "./header/Header";
import ConvertToDate from "./calender/ConverterCalender";
export class App extends Component {
  state = {
    timestamp: 15251544515,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        timestamp: 5111118,
      });
    }, 5000);
  }
  render() {
    return (
      <>
        <Header />
        <ConvertToDate shamsi={true} timestamp={Number(this.state.timestamp)} />
      </>
    );
  }
}
