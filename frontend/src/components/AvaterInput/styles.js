import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }

    span {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      svg {
        height: 127px;
        width: 127px;
        color: #dddddd;
      }

      span {
        color: #dddddd;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
`;
