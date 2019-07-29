import React, { Component } from "react";
import SideBar from "../../Components/SideBar";
import Table from "../../Components/Table";
import phoneNumberGenerator from "../../Utils/generateNumbers";
import "./index.scss";

export default class Home extends Component {
  state = {
    amount: null,
    numbers: [],
    error: null,
    asc: false
  };

  componentDidMount() {
    const numbers = JSON.parse(localStorage.getItem("numbers"));
    if (numbers && numbers.length > 0) {
      this.setState({ numbers: numbers.sort() });
      this.setState({ asc: false });
    }
  }

  generateNumbers = e => {
    e.preventDefault();
    const { amount } = this.state;
    const numbers = phoneNumberGenerator(amount);
    this.setState({ numbers: numbers.sort() });
    this.setState({ asc: false });
    localStorage.setItem("numbers", JSON.stringify(numbers));
  };

  handleChange = e => {
    this.setState({ amount: e.target.value });
  };

  handleSort = e => {
    e.preventDefault();
    const { asc, numbers } = this.state;

    this.setState({ asc: !asc });

    if (!asc) {
      this.setState({ numbers: numbers.sort() });
    } else {
      this.setState({ numbers: numbers.reverse() });
    }
  };

  render() {
    const { numbers, amount, asc } = this.state;
    const disable = amount > 10000 || amount < 1;

    return (
      <div className="home">
        <SideBar
          handleChange={this.handleChange}
          handleClick={this.generateNumbers}
          amount={amount}
          disable={disable}
        />
        <div className="home-container">
          <Table numbers={numbers} handleSort={this.handleSort} asc={asc} />
        </div>
      </div>
    );
  }
}
