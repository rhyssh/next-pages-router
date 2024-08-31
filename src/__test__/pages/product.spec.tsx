import ProductPage from "@/pages/about";
import { render, screen } from "@testing-library/react";

describe("Product Page", () => {
  it("render product page", () => {
    const page = render(<ProductPage />);

    expect(page).toMatchSnapshot();
  });
});
