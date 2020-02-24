import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '-100%')};
  z-index: 1;
  border-radius: 2px;
  width: min-content;

  span {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: start;
    height: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 10px;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
`;
