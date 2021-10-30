import React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils from 'react-dom/test-utils';
import { act } from "react-dom/test-utils";
import Like from "../like";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(
      <Like />,
      container
    );
  });
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe("Testing Like component", () => {
    it("Defaults to Likes: 0", () => {
      const likes = document.getElementsByTagName("p");
      expect(likes[0].textContent).toBe("Likes: 0");
    });
    it("Increments to Likes: 1", () => {
        const likes = document.getElementsByTagName("p");
        const likeButton = document.getElementById("increment");
        ReactTestUtils.Simulate.click(likeButton);
        expect(likes[0].textContent).toBe("Likes: 1");
      });
      it("Decrements to Likes: 1", () => {
        const likes = document.getElementsByTagName("p");
        const dislikeButton = document.getElementById("decrement");
        ReactTestUtils.Simulate.click(dislikeButton);
        expect(likes[0].textContent).toBe("Likes: -1");
      });
});

