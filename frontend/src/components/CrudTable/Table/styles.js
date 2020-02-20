import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  border-spacing: 0 10px;

  thead {
    tr {
      th {
        font-weight: bold;
        text-align: left;
        color: #444;
        padding: 0 10px;

        &:last-child {
          text-align: right;
        }
      }
    }
  }

  tbody {
    tr {
      background: #fff;

      td {
        padding: 10px;
        color: #666666;

        &:first-child {
          width: 40px;
        }

        &:last-child {
          width: 40px;
          text-align: right;

          svg {
            cursor: pointer;

            &:hover {
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
`;
