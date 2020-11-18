import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';
import { useTestHook } from "./hook";

jest.mock('./hook')

test('renders learn react link', () => {
  useTestHook.mockReturnValue({
    isOpenModal: true,
    toggleModal: jest.fn(),
    useFormikProps: {
      handleBlur: jest.fn(),
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
    }
  })

  render(<App />);
  // get the submit button of the form
  const submitBtn = screen.getByText("Submit");
  // click on it as a user would do,
  // this should call the form
  fireEvent.submit(submitBtn)
});
