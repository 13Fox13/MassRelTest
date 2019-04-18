import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
    <View style={styles.container}>
        <Text style={styles.text}>Top news MassRel</Text>
    </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
  text: {
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Header;
