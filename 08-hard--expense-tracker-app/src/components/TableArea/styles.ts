import styled from 'styled-components';


export const Table = styled.table`
  width: 100%;
  background-color: #FFFFFF;
  padding: 20px;
  box-shadow: 0px 0px 0px 5px #CCCCCC;
  border-radius: 10px;
  margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{width?: number, textAlign?: string}>`
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  padding: 10px 0;
  text-align: ${props => props.textAlign || 'left'};
  word-wrap: break-word;
`;