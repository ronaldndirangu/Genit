import React from "react";
import { shallow } from "enzyme";
import Table from "../../Table";

const numbers = ["0722111333", "0719888444", "0703999888"];

describe("Table", () => {
  it("Table renders correctly", () => {
    const handleSort = jest.fn();
    const component = shallow(
      <Table numbers={numbers} handleSort={handleSort} />
    );
    component.find("th.table-header__no").simulate("click");
    expect(component).toMatchSnapshot();
    expect(handleSort).toHaveBeenCalled();
  });
});
