import Card, { CardProps } from "@/components/shared/Card";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Card component", () => {
  it("renders the card with the correct title and status", () => {
    const mockProps: CardProps = {
      index: 0,
      id: 1,
      title: "Test Task",
      status: "completed",
      users: [1, 2],
    };

    render(<Card {...mockProps} />);

    // Verify the title is displayed
    expect(screen.getByText("Test Task")).toBeInTheDocument();

    // Verify the status is displayed
    expect(screen.getByText("todo")).toBeInTheDocument();
  });

  //   it("allows changing the task status via the dropdown menu", () => {
  //     const mockProps: CardProps = {
  //       index: 0,
  //       id: 1,
  //       title: "Test Task",
  //       status: "todo",
  //       users: [1, 2],
  //     };

  //     render(<Card {...mockProps} />);

  //     // Find the dropdown trigger and click it
  //     const dropdownTrigger = screen.getByRole("button", {
  //       name: /change status/i,
  //     });
  //     userEvent.click(dropdownTrigger);

  //     // Click the option to change the status to "in-progress"
  //     const inProgressOption = screen.getByText("in-progress");
  //     userEvent.click(inProgressOption);

  //     // Verify the status has been updated
  //     expect(screen.getByText("in-progress")).toBeInTheDocument();
  //   });
});
