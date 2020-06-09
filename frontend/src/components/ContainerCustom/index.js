import styled from 'styled-components';

const ContainerCustom = styled.div`
  max-width: 100%;
  /* background: #f5f5f5; */
  border-radius: 7px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  padding: 30px;
  margin: 10px auto;
  color: #f5f5f5 !important;

  h1 {
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;

export default ContainerCustom;
