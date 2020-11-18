import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // get the submit button of the form
  const submitBtn = screen.getByText("Submit");
  // click on it as a user would do,
  // this should call the form
  fireEvent.click(submitBtn)
});
