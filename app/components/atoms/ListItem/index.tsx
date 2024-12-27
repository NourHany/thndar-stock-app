import React from 'react';

import {Ticker} from '../../../shared/types';
import {ListItemContainer, Name, TickerText} from './ListItem.styled';

type ListItemProps = {
  item: Ticker;
};

const ListItem = ({item}: ListItemProps) => {
  return (
    <ListItemContainer>
      <TickerText>Ticker: {item.ticker}</TickerText>
      <Name>Name: {item.name}</Name>
    </ListItemContainer>
  );
};

export default ListItem;
