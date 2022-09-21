import { IFormState } from 'types/form';

interface IFormCardInactiveProps {
  form: IFormState;
}

export function FormCardInactive({ form }: IFormCardInactiveProps) {
  console.log(form);
  return (
    <div>
      <h1>FormCardInactive</h1>
    </div>
  );
}
