import React from "react";
import { shallow } from "enzyme";
import Pokelist from "./Pokelist";

describe("Pokelist", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Pokelist />);
    expect(wrapper).toMatchSnapshot();
  });
});
