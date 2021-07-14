import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  AppThemeProvider,
  lightTheme,
  Button,
  Modal,
  TextInput,
} from '@datorama/app-components';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);
  const toggleOpen = () => setIsModalOpen((isOpen) => !isOpen);

  const onChange = ({ target: { value } }: any) => {
    setIsError(false);
    setInputValue(value);
  };

  const submit = () => {
    if (inputValue === '42') {
      setIsError(true);
      return;
    }
    console.log('Hooray!');
    toggleOpen();
  };

  return (
    <AppThemeProvider
      theme={lightTheme}
      provider={ThemeProvider}
      customColorPrefixes={[]}
    >
      <Container>
        <Button onClick={toggleOpen}>Open Dialog</Button>
        <StyledModal open={isModalOpen} toggleOpen={toggleOpen} size="medium">
          <TextInput
            label="Can't be 42"
            value={inputValue}
            onChange={onChange}
            error={isError}
            errorMessage={isError ? 'No the meaning of life' : null}
          ></TextInput>
          <Footer>
            <StyledButton secondary onClick={toggleOpen}>
              Cancel
            </StyledButton>
            <StyledButton onClick={submit}>Submit</StyledButton>
          </Footer>
        </StyledModal>
      </Container>
    </AppThemeProvider>
  );
};

const Container = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModal = styled(Modal)`
  .footer {
    display: none;
  }
`;

const Footer = styled.div`
  width: 100%;
  border-top: 1px solid #f1f2f5;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 30px;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  right: 0;
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
`;

export default App;
