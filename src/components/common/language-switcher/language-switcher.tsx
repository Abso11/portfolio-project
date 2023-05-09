import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledButton, StyledWrapper } from './language-switcher.styled';

export const LanguageSwitcher = (): JSX.Element => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>(i18n.language);

  const changeLanguage = (language: string): void => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  return (
    <StyledWrapper>
      <StyledButton isActive={selectedLanguage.includes('en')} onClick={() => changeLanguage('en')}>
        EN
      </StyledButton>
      <StyledButton isActive={selectedLanguage.includes('pl')} onClick={() => changeLanguage('pl')}>
        PL
      </StyledButton>
    </StyledWrapper>
  );
};
