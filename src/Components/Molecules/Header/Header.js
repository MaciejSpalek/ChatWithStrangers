import React from 'react';
import Button from 'Components/Atoms/Button';
import { useHistory } from 'react-router-dom';
import { StyledContainer, StyledHeading, StyledParagraph } from './Header.styled';

const Header = () => {
  const history = useHistory();
  const handleOnClick = () => {
    history.push('/chat');
  };

  return (
    <StyledContainer>
      <StyledHeading>
        <StyledParagraph text='Find somebody' />
        <StyledParagraph text='to talk' />
      </StyledHeading>
      <Button onClick={handleOnClick} text='Draw' />
    </StyledContainer>
  );
};

export default Header;
