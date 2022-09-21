import { IconButton, Required } from 'components';
import { Divider } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import * as S from './ResultTitleCard.style';

interface IResultTitleCardProps {
  title: string;
  description: string;
  isIncludeRequiredForm: boolean;
}

export function ResultTitleCard({
  title,
  description,
  isIncludeRequiredForm,
}: IResultTitleCardProps) {
  console.log(isIncludeRequiredForm);

  return (
    <S.CardContainer style={{ maxWidth: '600px' }}>
      <S.CardTop />
      <S.CardContentWrapper>
        <S.CardTitle>{title}</S.CardTitle>
        {description && <S.CardDescription>{description}</S.CardDescription>}
      </S.CardContentWrapper>
      <Divider />

      <S.CardBottomWrapper>
        <S.CardBottomInfo>
          <span>
            <IconButton>
              <VisibilityOffIcon />
            </IconButton>
            <S.EmailText>
              hello0523@gmail.com <p>(공유되지 않음)</p>
            </S.EmailText>
          </span>
          <IconButton>
            <CloudDoneOutlinedIcon />
          </IconButton>
        </S.CardBottomInfo>
        {isIncludeRequiredForm && (
          <S.RequiredWrapper>
            <Required />
            필수항목
          </S.RequiredWrapper>
        )}
      </S.CardBottomWrapper>
    </S.CardContainer>
  );
}
