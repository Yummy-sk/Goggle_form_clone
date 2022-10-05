import {
  Required,
  DropDownViewer,
  TextViewer,
  RadioViewer,
  CheckBoxViewer,
} from 'components';
import { ISelection, IStateChangeProps } from 'types/form';
import * as S from './SelectionCard.style';

interface ISelectionCardProps {
  isInit: boolean;
  setIsInit: React.Dispatch<React.SetStateAction<boolean>>;
  form: ISelection;
  handleChange: ({ nextValue }: IStateChangeProps) => void;
}

/**
 * SelectionContent
 *
 * Form 옵션에 따른 컴포넌트를 보여주는 컴포넌트 입니다.
 *
 * @param isInit - 초기화 여부
 * @param setIsInit - 초기화 함수
 * @param form - 선택 정보
 * @param handleChange - 선택 정보 변경 함수
 * @returns JSX.Element
 */

function SelectionContent({
  isInit,
  setIsInit,
  form,
  handleChange,
}: ISelectionCardProps) {
  const { type } = form;

  switch (type) {
    case 'long-text':
      return (
        <TextViewer
          form={form}
          type='long-text'
          isEditable
          handleChange={handleChange}
        />
      );
    case 'short-text':
      return (
        <TextViewer
          form={form}
          type='short-text'
          isEditable
          handleChange={handleChange}
        />
      );
    case 'radio':
      return (
        <RadioViewer
          isInit={isInit}
          setIsInit={setIsInit}
          form={form}
          handleChange={handleChange}
        />
      );
    case 'checkbox':
      return (
        <CheckBoxViewer
          isInit={isInit}
          setIsInit={setIsInit}
          form={form}
          handleChange={handleChange}
        />
      );
    case 'dropdown':
      return (
        <DropDownViewer form={form} isEditable handleChange={handleChange} />
      );
    default:
      return null;
  }
}

/**
 * SelectionCard
 *
 * 사용자가 선택한 옵션을 보여주는 컴포넌트 입니다.
 *
 * @param isInit - 초기화 여부
 * @param setIsInit - 초기화 상태 변경 함수
 * @param form - 선택 정보
 * @param handleChange - 선택 정보 변경 함수
 * @returns JSX.Element
 */

export function SelectionCard({
  isInit,
  setIsInit,
  form,
  handleChange,
}: ISelectionCardProps) {
  const { title, isRequired, error } = form;

  return (
    <S.CardContainer style={{ maxWidth: '600px' }} error={error ? 1 : 0}>
      <S.CardWrapper>
        <S.CardHeader>
          {title}
          {isRequired && <Required />}
        </S.CardHeader>
        <SelectionContent
          isInit={isInit}
          setIsInit={setIsInit}
          form={form}
          handleChange={handleChange}
        />
        <S.CardContents />
        {/* 애러라면 에러 상태값을 보여줍니다. */}
        {error && (
          <S.CardVaildator>
            <S.WarningIcon />
            <S.WarningText>필수 질문입니다.</S.WarningText>
          </S.CardVaildator>
        )}
      </S.CardWrapper>
    </S.CardContainer>
  );
}
