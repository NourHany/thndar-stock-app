import React from 'react';
import {Image} from 'react-native';

import {HeaderContainer, SearchBar} from './Header.styled';

type HeaderProps = {
  onSearch: (search: string) => void;
};

const Header = ({onSearch}: HeaderProps) => {
  return (
    <HeaderContainer>
      <Image
        source={require('../../../assets/nasdaq-logo.png')}
        style={{
          width: '100%',
          height: 100,
          marginBottom: 16,
        }}
      />
      <SearchBar
        placeholder="Search"
        placeholderTextColor="#fff"
        onChangeText={e => onSearch(e)}
      />
    </HeaderContainer>
  );
};

export default Header;
