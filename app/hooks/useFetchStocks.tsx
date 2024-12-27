import {useState, useCallback} from 'react';
import Config from 'react-native-config';
import Toast from 'react-native-toast-message';
import axios from 'axios';

import {Ticker} from '../shared/types';

export const useFetchStocks = () => {
  const LIMIT = 15;

  const [items, setItems] = useState<Ticker[]>([]);
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState('');

  const getTickers = useCallback(async (search: string = '') => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.polygon.io/v3/reference/tickers?limit=${LIMIT}&search=${search}&apiKey=${Config.REACT_NATIVE_API_KEY}`,
      );
      setItems(prev =>
        search ? response.data.results : [...prev, ...response.data.results],
      );
      setNextUrl(response.data.next_url);
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Failed to fetch tickers',
        text2:
          'You reached the rate limit of the request, Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMore = useCallback(async () => {
    if (!nextUrl) return;

    setLoading(true);

    try {
      const response = await axios.get(
        `${nextUrl}&apiKey=${Config.REACT_NATIVE_API_KEY}`,
      );
      setItems(prev => [...prev, ...response.data.results]);
      setNextUrl(response.data.next_url);
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Failed to fetch tickers',
        text2: 'You reached the limit of the request, Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  }, [nextUrl]);

  return {items, loading, nextUrl, getTickers, loadMore};
};
