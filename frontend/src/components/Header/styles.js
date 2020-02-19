import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Content = styled.div`
  height: 64px;
  padding: 0 34px;
  max-width: 1300px;
  min-width: 1000px;
  margin: 0 auto;

  nav {
    img {
      height: 30px;
      padding-right: 20px;
      margin-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-family: Roboto-Bold;
      font-size: 15px;
      color: #999999;
      text-transform: uppercase;
      font-weight: bold;

      & + a {
        margin-right: 14px;
      }

      &:hover {
        opacity: 0.7;
      }
    }

    .selected {
      color: #444;
    }
  }
`;

export const Profile = styled.div`
  strong {
    font-family: Roboto-Bold;
    font-size: 14px;
    color: #666;
    text-align: left;
  }

  button {
    font-family: Roboto-Regular;
    font-size: 14px;
    color: #de3b3b;
    text-align: right;
    border: 0;
    background: transparent;

    &:hover {
      opacity: 0.7;
    }
  }
`;
