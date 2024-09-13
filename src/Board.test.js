
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

test("renders board properly", () => {
  const { container } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={1} />);
  expect(container.firstChild).toHaveClass("Board");
});

test("cell clicking toggles correct cells", () => {
  const { getByTestId } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={1} />);
  const cell = getByTestId("cell-0-0");
  fireEvent.click(cell);
  // Check that correct cells have been toggled
});

test("shows win message when all cells are off", () => {
  const { getByText } = render(<Board nrows={3} ncols={3} chanceLightStartsOn={0} />);
  expect(getByText("You Won!")).toBeInTheDocument();
});
