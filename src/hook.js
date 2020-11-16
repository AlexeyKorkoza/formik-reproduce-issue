import { useFormik } from "formik";

export const useTestHook = () => {
  const useFormikProps = useFormik({
    initialValues: {
      firstName: "",
      lastName: ""
    },
    onSubmit: (values) => {
      console.log(values);
      // here I send the data to the backend
    },
    validateOnBlur: true
  });

  return {
    useFormikProps
  };
};
