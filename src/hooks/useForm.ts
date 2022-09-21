import { useState, useCallback } from 'react';
import { ISelection, IStateChangeProps } from 'types/form';

interface IUseForm {
  initialValues: Array<ISelection>;
  onSubmit: ({ values }: { values: Array<ISelection> }) => void;
  validateState: ({ values }: { values: Array<ISelection> }) => boolean;
}

export function useForm({ initialValues, onSubmit, validateState }: IUseForm) {
  const [values, setValues] = useState<Array<ISelection>>(initialValues);

  const handleChange = useCallback(
    ({ key }: { key: string }) =>
      ({ nextValue }: IStateChangeProps) => {
        const nextValues = values.map(value => {
          if (value.key === key) {
            return {
              ...value,
              value: nextValue,
              error: false,
            };
          }
          return value;
        });

        setValues(nextValues);
      },
    [values],
  );

  const handleSubmit = () => {
    console.log(values);
    if (validateState({ values })) {
      onSubmit({ values });
      return;
    }

    const nextValues = values.map(value => {
      if (value.isRequired) {
        return {
          ...value,
          error: true,
        };
      }
      return value;
    });

    setValues(nextValues);
  };

  const removeAll = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);

  return {
    values,
    handleChange,
    handleSubmit,
    removeAll,
  };
}
