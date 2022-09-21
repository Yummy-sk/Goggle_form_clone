import { useState, useCallback } from 'react';

interface IUseForm<T, L> {
  initialValues: T;
  errorInitialValues: L;
  onSubmit: (values: T) => void;
  validate: (values: T) => L;
}

function useForm<T, L extends object>({
  initialValues,
  errorInitialValues,
  onSubmit,
  validate,
}: IUseForm<T, L>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<L>(errorInitialValues);

  const handleChange = <K, V>({ type, value }: { type: K; value: V }) => {
    setValues({
      ...values,
      [type as string]: value,
    });
  };

  const handleSubmit = () => {
    const newErrors = validate ? validate(values) : errorInitialValues;
    if (typeof newErrors !== 'object') return;

    if (Object.keys(newErrors).every(key => !newErrors[key as keyof L])) {
      onSubmit(values);
    }
    setErrors(newErrors);
  };

  const removeAll = useCallback(
    (name: string) => {
      setValues({ ...values, [name]: '' });
    },
    [values],
  );

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    removeAll,
  };
}

export default useForm;
