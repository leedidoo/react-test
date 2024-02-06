import { render, screen ,fireEvent} from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text",()=>{
  render(<App />);
  const minusButtonElement = screen.getByTestId("minus-button");
  expect(minusButtonElement).toHaveTextContent("-");
});

test("plus button has correct text",()=>{
  render(<App />);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toHaveTextContent("+");
});

test("when the + button is pressed, the counter is to 1",()=>{
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});
test("when the - button is pressed, the counter is to 1",()=>{
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test("on/off button is blue color",()=>{
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle("background-color: blue");
});

// test.only("~~~")-> 이것만 테스트
// test.skip("~~~")-> 이것 테스트 안함

test("prevent the -,+ button from being pressed when the on/dff button is clicked",()=>{
  render(<App />);
  const onOffButtonElement = screen.getByTestId("on/off-button");
  fireEvent.click(onOffButtonElement);
  const plusButtonElement = screen.getByTestId("plus-button");
  expect(plusButtonElement).toBeDisabled();
});