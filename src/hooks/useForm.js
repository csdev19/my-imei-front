import { useState } from 'react';

export const useForm = (initialState = {}) => {

  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setValues({
      ...values,
      [name] : value
    });
  };

  const cleanForm = () => {
    setValues({
      initialState
    });
  }

  const setData = (values) => {
    setValues(values)
  }

  return [values, handleInputChange, cleanForm, setData];
}
