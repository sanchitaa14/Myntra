// Header.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.dropdownContainer}>
        <Text style={styles.dropdownText}>Myntra</Text>
        <Image source={{ uri: 'https://www.svgrepo.com/show/80156/down-arrow.svg' }} style={styles.dropdownIcon} />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image source={{ uri: 'https://w7.pngwing.com/pngs/608/913/png-transparent-computer-icons-google-search-symbol-mobile-search-search-for-miscellaneous-logo-mobile-phones-thumbnail.png' }} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{ uri: 'https://i.pinimg.com/474x/45/51/ef/4551efac117fb0282e0a51fcf1f59377.jpg' }} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
  },
  dropdownIcon: {
    width: 16,
    height: 16,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
});

export default Header;
