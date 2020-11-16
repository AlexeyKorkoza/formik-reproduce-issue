import { act, cleanup, renderHook } from "@testing-library/react-hooks";
import { useFormik } from "formik";

import { useTestHook } from "./hook";

jest.mock('formik');

describe("useTestHook hook", () => {
  afterEach(() => {
    cleanup();
  });

  it("should call onSubmit method", () => {
    let onSubmitMock = null;

    useFormik.mockImplementation(({ onSubmit }) => {
      onSubmitMock = onSubmit = jest.fn();

      return {
        handleSubmit: onSubmit
      };
    });

    const { result } = renderHook(() => useTestHook());
    act(() => {
      result.current.useFormikProps.handleSubmit({
        firstName: "first",
        lastName: "last"
      });
    });

    expect(onSubmitMock).toHaveBeenCalled();
  });
});
