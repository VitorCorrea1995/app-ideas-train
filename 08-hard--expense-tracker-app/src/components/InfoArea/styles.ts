import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFFFFF;
  box-shadow: 0px 0px 5px #CCC;
  border-radius: 10px;
  padding: 20px;
  margin-top: -40px;
  display: flex;
  align-items: center;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  padding-bottom: 7px;
  font-size: 25px;
  cursor: pointer;
  background-color: blue;
  color: white;
  font-weight: bold;
  border: 2px solid gray;
`;

export const MonthTitle = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ResumeArea = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
`;