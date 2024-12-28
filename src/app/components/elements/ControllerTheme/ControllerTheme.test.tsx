import { render, fireEvent } from "@testing-library/react";
import { ControllerTheme } from "./ControllerTheme";

describe("ControllerTheme", () => {
  test("should render the component without errors", () => {
    render(<ControllerTheme />);
  });

  test("should toggle the 'dark' class on document element when checkbox is clicked", () => {
    const { getByRole } = render(<ControllerTheme />);
    const checkbox = getByRole("checkbox");
    const documentElement = document.documentElement;
  
    fireEvent.click(checkbox);
  
    expect(documentElement.classList.contains("dark")).toBe(true);
  
    fireEvent.click(checkbox);
  
    expect(documentElement.classList.contains("dark")).toBe(false);
  });

  test("should apply the provided className prop to the label element", () => {
    const className = "custom-class";
    const { getByLabelText } = render(
      <ControllerTheme className={className} />
    );
    const label = getByLabelText("theme-controller");

    expect(label.classList.contains(className)).toBe(true);
  });

  test("should disable the checkbox when disabled prop is true", () => {
    const { getByTestId } = render(<ControllerTheme disabled={true} />);
    const checkbox = getByTestId("theme-checkbox") as HTMLInputElement;
  
    expect(checkbox.disabled).toBe(true);
  });
  
});