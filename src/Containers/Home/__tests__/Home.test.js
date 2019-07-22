import React from "react";
import { mount, shallow } from "enzyme";
import Home from "../../Home";
import { create } from "react-test-renderer";

const numbers = ["0722111333", "0719888444", "0703999888"];

describe("Home", () => {
  it("Home renders correctly", () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
  });

  it("Changes state on entering amount", () => {
    const e = {
      target: {
        value: "100"
      }
    };
    const component = create(<Home />);
    const instance = component.getInstance();
    instance.handleChange(e);
    expect(instance.state.amount).toBe("100");
  });

  it("Changes state on sorting numbers", () => {
    const e = {
      preventDefault: () => {}
    };
    const component = create(<Home asc={true} />);
    const instance = component.getInstance();
    instance.handleSort(e);
    expect(instance.state.asc).toBe(true);
  });

  it("Changes state on generating numbers", () => {
    const e = {
      preventDefault: () => {}
    };
    const component = create(<Home />);
    const instance = component.getInstance();
    instance.setState({ amount: "5" });
    instance.generateNumbers(e);
    expect(instance.state.numbers.length).toBe(5);
  });
});
