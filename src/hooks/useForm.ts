import { useState, useCallback } from 'react';
import { ISelection, IStateChangeProps } from 'types/form';

interface IUseForm {
  initialValues: Array<ISelection>;
  onSubmit: ({ values }: { values: Array<ISelection> }) => void;
  validateState: ({ values }: { values: Array<ISelection> }) => boolean;
}

interface IUseFormReturn {
  values: Array<ISelection>;
  handleChange: ({
    key,
  }: {
    key: string;
  }) => ({ nextValue }: IStateChangeProps) => void;
  handleSubmit: () => void;
  removeAll: () => void;
  isInit: boolean;
  setIsInit: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * useForm
 *
 * 사용자의 입력값을 다루는 커스텀 훅 입니다.
 *
 * @param initialValues
 * @param onSubmit
 * @param validateState
 * @returns {values, handleChange, handleSubmit, removeAll, isInit, setIsInit}
 */

export function useForm({
  initialValues,
  onSubmit,
  validateState,
}: IUseForm): IUseFormReturn {
  const [values, setValues] = useState<Array<ISelection>>(initialValues);
  const [isInit, setIsInit] = useState<boolean>(false);

  // 사용자의 입력값을 다루는 함수입니다.
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

  // 사용자의 입력값을 제출하는 함수입니다.
  const handleSubmit = () => {
    // 사용자의 입력값이 유효한지 검사합니다.
    if (validateState({ values })) {
      // 유효한 경우 onSubmit 함수를 실행합니다.
      onSubmit({ values });
      return;
    }

    // 유효하지 않은 경우 에러를 담은 상태값을 반환합니다.
    const nextValues = values.map(value => {
      if (
        value.isRequired &&
        (value.value === '' || value.value.length === 0)
      ) {
        return {
          ...value,
          error: true,
        };
      }
      return value;
    });

    setValues(nextValues);
  };

  // 사용자의 입력값을 초기화하는 함수입니다.
  const removeAll = useCallback(() => {
    setIsInit(true);
    setValues(initialValues);
  }, [initialValues]);

  return {
    values,
    handleChange,
    handleSubmit,
    removeAll,
    isInit,
    setIsInit,
  };
}
