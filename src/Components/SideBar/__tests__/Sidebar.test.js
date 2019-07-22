import React from "react";
import { shallow } from "enzyme";
import SideBar from "../../SideBar";

describe("SideBar", () => {
  it("SideBar renders correctly", () => {
    const component = shallow(<SideBar />);
    expect(component).toMatchSnapshot();
  });
});
