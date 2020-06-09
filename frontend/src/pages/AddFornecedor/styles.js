import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: inline;
  flex-direction: row;

  input {
    width: 100%;
    margin-bottom: 15px;
    margin-top: 10px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 1px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;
  }
  input:focus {
    border-color: #b0d235;
  }

  /* Style the label to display next to the inputs */
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #b0d235;
  border: 0;
  padding: 10px 15px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #b0d235;
      text-decoration: none;
    }
  }
`;
