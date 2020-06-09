import styled, { css } from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  /* display: flex; default */
  /* flex-direction: column;  default */
  flex: 1;
  background-color: #27272b;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const Titulo = styled.Text`
  color: #f5f5f5;
  font-size: 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: #b0d235;
`;

export const InputLogin = styled.TextInput`
  width: 100%;
  margin-bottom: 15px;
  margin-top: 10px;
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 15px;
  color: #f5f5f5;
  background: rgba(0, 0, 0, 0.19);
  border: 1px solid transparent;

  ${(props) =>
    props.focus &&
    css`
      border-color: #b0d235;
    `}
`;
