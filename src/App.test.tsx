import { App } from "@/App";
import { render } from "@/utils/test";

describe("App", () => {
  it("should render text", () => {
    const { getByText } = render(<App />);

    const element = getByText("Hello World!");

    expect(element).toBeInTheDocument();
  });
});
