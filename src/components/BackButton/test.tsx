import { render, screen } from "@testing-library/react";
import BackButton from ".";

describe("<BackButton />", () => {
  it("should render the back button", () => {
    render(<BackButton />);

    const children = screen.getByRole("link", { name: /back/i });

    expect(children).toBeInTheDocument();
  });
});
