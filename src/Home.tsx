import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default () => {
  const navigation = useNavigation();
  const handlePress = (routeName: any) => {
    navigation.navigate(routeName);
  };
  return (
    <View style={s.container}>
      <View style={s.row}>
        <TouchableOpacity
          style={s.button}
          onPress={() => handlePress('LiquidSwipe')}>
          <Text style={s.title}>Liquid Swipe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.button}
          onPress={() => handlePress('Binger')}>
          <Text style={s.title}>Binger</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#0D2433',
    paddingTop: 50,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {color: '#000', fontWeight: '600'},
});
