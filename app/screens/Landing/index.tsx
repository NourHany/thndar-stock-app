/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, View, StyleSheet, RefreshControl} from 'react-native';
import {debounce} from 'lodash';

import {useFetchStocks} from '../../hooks/useFetchStocks';
import ListItem from '../../components/atoms/ListItem';
import {Ticker} from '../../shared/types';
import Header from '../../components/molecules/Header';
import {Card, Container, SafeAreaViewContainer} from './Landing.styled';

const Landing = () => {
  const DEBOUNCE_DELAY = 1000;

  const [refreshing, setRefreshing] = useState(false);

  const {items, getTickers, loadMore} = useFetchStocks();

  const debouncedSearch = useCallback(
    debounce((search: string) => {
      if (search === '') {
        getTickers();
        return;
      }
      getTickers(search);
    }, DEBOUNCE_DELAY),
    [],
  );

  const handleSearch = useCallback(
    (search: string) => {
      debouncedSearch(search);
    },
    [debouncedSearch],
  );

  useEffect(() => {
    getTickers();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    // setTimeout is used to simulate the loading of data
    setTimeout(async () => {
      await getTickers();
      setRefreshing(false);
    }, 500);
  };

  const renderItem = ({item}: {item: Ticker}) => {
    return (
      <View style={styles.cardContainer}>
        <Card>
          <ListItem item={item} />
        </Card>
      </View>
    );
  };

  return (
    <SafeAreaViewContainer>
      <Header onSearch={handleSearch} />

      <Container>
        <FlatList
          data={items}
          keyExtractor={(item, index) => `${item.name} - ${index}`}
          renderItem={renderItem}
          onEndReached={loadMore}
          onEndReachedThreshold={0.2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          refreshControl={
            <RefreshControl
              tintColor={'#fff'}
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />
      </Container>
    </SafeAreaViewContainer>
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 1,
  },
});

export default Landing;
