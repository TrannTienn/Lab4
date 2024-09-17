//yethich
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Yeuthich = () => {
  return (
    <View style={styles.screen}>
      <Text>Món ăn yêu thích của bạn!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Yeuthich;
