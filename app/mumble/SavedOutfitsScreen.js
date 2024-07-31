import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

const savedOutfits = [
  { id: '10', image: require('./assets/outfit10.jpg') },
  { id: '11', image: require('./assets/outfit11.jpg') },
  { id: '12', image: require('./assets/outfit12.jpg') },
  { id: '13', image: require('./assets/outfit13.jpg') },
  { id: '14', image: require('./assets/outfit14.jpg') },
  { id: '15', image: require('./assets/outfit15.jpg') },
  { id: '16', image: require('./assets/outfit16.jpg') },
  { id: '17', image: require('./assets/outfit17.jpg') },
  { id: '18', image: require('./assets/outfit18.jpg') },
  { id: '19', image: require('./assets/outfit19.jpg') },
  { id: '20', image: require('./assets/outfit20.jpg') },
  { id: '21', image: require('./assets/outfit21.jpg') },
  { id: '22', image: require('./assets/outfit22.jpg') },
  { id: '23', image: require('./assets/outfit23.jpg') },
  { id: '24', image: require('./assets/outfit24.jpg') },
  { id: '25', image: require('./assets/outfit25.jpg') },
  { id: '26', image: require('./assets/outfit26.jpg') },
  { id: '27', image: require('./assets/outfit27.jpg') },
  { id: '28', image: require('./assets/outfit28.jpg') },
  { id: '29', image: require('./assets/outfit29.jpg') },
  { id: '30', image: require('./assets/outfit30.jpg') },
  { id: '1', image: require('./assets/outfit1.jpg') },
  { id: '2', image: require('./assets/outfit2.jpg') },
  { id: '3', image: require('./assets/outfit3.jpg') },
  { id: '4', image: require('./assets/outfit4.jpg') },
  { id: '5', image: require('./assets/outfit5.jpg') },
  { id: '6', image: require('./assets/outfit6.jpg') },
  { id: '7', image: require('./assets/outfit7.jpg') },
  { id: '8', image: require('./assets/outfit8.jpg') },
  { id: '9', image: require('./assets/outfit9.jpg') },

];

const SavedOutfitsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {savedOutfits.map((outfit) => (
        <TouchableOpacity key={outfit.id} style={styles.outfitBox}>
          <Image source={outfit.image} style={styles.outfitImage} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  outfitBox: {
    width: '30%',
    aspectRatio: 1, 
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  outfitImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SavedOutfitsScreen;
