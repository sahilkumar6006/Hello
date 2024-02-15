// Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3498db', // Set the background color of the header
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff', // Set the text color of the header
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;