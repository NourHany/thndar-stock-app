import {TextInput, View} from 'react-native';
import styled from 'styled-components/native';

export const HeaderContainer = styled(View)`
  margin-bottom: 16px;
  background-color: #e5e5e5;
  padding: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

export const SearchBar = styled(TextInput)`
  padding: 12px;
  background-color: #1e1e1e;
  border: 1px solid #333;
  border-radius: 8px;
  color: white;
`;
