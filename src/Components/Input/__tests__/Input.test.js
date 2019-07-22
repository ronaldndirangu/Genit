import React from "react";
import { shallow } from "enzyme";
import Input from "../../Input";

describe("Input", () => {
  it("generates contacts", () => {
    const action = jest.fn();
    const input = shallow(<Input action={action} />);
    input.simulate("change");
    expect(action).toHaveBeenCalled();
  });
});
