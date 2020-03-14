import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: true,
  contentContainerStyle: {paddingTop: 7},
})`
  flex: 1;
  padding: 20px 20px 0;
`;
