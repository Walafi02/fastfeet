import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '-100%')};
  z-index: 1;
  border-radius: 2px;
  width: min-content;
  background: #fff;

  > span {
    color: #999999;
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 15px auto;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 10px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
      margin-right: 5px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;
