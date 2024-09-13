
import { render, fireEvent } from "@testing-library/react";
import Cell from "./Cell";

test("renders a lit cell properly", () => {
  const { container } = render(<Cell isLit={true} />);
  expect(container.firstChild).toHaveClass("Cell-lit");
});

test("renders an unlit cell properly", () => {
  const { container } = render(<Cell isLit={false} />);
  expect(container.firstChild).not.toHaveClass("Cell-lit");
});
