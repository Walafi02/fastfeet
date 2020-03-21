import styled from 'styled-components/native';

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;
`;

export const ProblemsList = styled.FlatList.attrs({
  showVerticalScrollIndicator: true,
  contentContainerStyle: {paddingTop: 7},
})`
  flex: 1;
  background: #fff;
  margin: 0 16px;
  border-radius: 4px;
  border: 1px solid #0000001a;
`;

export const Problem = styled.View`
  flex-direction: row;
  padding: 10px;
  margin-bottom: 4px;
`;

export const ViewProblemsDescription = styled.View`
  flex: 5;
`;

export const TextProblemsDescription = styled.Text`
  color: #999999;
  font-size: 16px;
`;

export const ViewProblemsDate = styled.View`
  flex: 2;
  align-items: flex-end;
`;

export const ProblemsDate = styled.Text`
  color: #c1c1c1;
  font-size: 14px;
`;
