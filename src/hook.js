import { useFormik } from "formik";
import { useState } from "react";

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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  }

  return {
    isOpenModal,
    toggleModal,
    useFormikProps,
  };
};
