import {SafeAreaView, View} from 'react-native';
import styled from 'styled-components';

export const SafeAreaViewContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: #121212;
`;

export const Container = styled(View)`
  flex: 1;
  background-color: #121212;
`;

export const Card = styled(View)`
  width: 180px;
  height: 100px;
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 0 16px;
`;
