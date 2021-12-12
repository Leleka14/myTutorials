import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default () => {
  return <View style={s.container}></View>;
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D2433',
    paddingTop: 50,
  },
});
