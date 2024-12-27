import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Landing');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Image
        source={require('../../assets/nasdaq-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.footerText}>Nour Hany</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  footerText: {
    position: 'absolute',
    bottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default SplashScreen;
