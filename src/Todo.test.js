import { render, screen, cleanup, fireEvent} from '@testing-library/react';
import App from './App';

test('home page rendering', () =>{
  render(<App />)
  expect(screen.getByTestId("appHeading")).toHaveTextContent(/Todo App/i);
  expect(screen.queryByPlaceholderText(/Add your items to the list/))
  expect(screen.getByRole("button", { name: "Add Items" })).toBeInTheDocument();
  expect(screen.getByTestId("fallbackMessage")).toHaveTextContent(/Add items to the list to display here/i);
})

test("captures add items click", () => {
  function handleAddItems() {
    done();
  }
  const { getByText } = render(
    <App onClick={handleAddItems}>Go</App>
  );
  const node = getByText("Add Items");
  fireEvent.click(node);
});

afterEach(cleanup);
