import React from "react";
import { shallow } from "enzyme";
import Nav from "../../Nav";

describe("Nav", () => {
  it("Nav renders correctly", () => {
    const component = shallow(<Nav />);
    expect(component).toMatchSnapshot();
  });
});
