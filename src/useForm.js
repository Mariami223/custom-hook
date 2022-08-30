import { useState, useEffect } from "react";

const useForm = (callback, validateLogin) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateLogin(values));
    callback();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors(validateLogin(values));
      setIsSubmit(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [values]);

  return {
    values,
    handleChange,
    handleSubmit,
    errors,
    setIsSubmit,
    isSubmit,
  };
};
export default useForm;
