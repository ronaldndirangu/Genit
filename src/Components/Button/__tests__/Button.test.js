import React from "react";
import { shallow } from "enzyme";
import Button from "../../Button";

describe("Button", () => {
  it("generates contacts", () => {
    const action = jest.fn();
    const button = shallow(<Button action={action}>Ok!</Button>);
    button.simulate("click");
    expect(action).toHaveBeenCalled();
  });
});
