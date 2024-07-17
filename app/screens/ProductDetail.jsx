import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon}><Text>←</Text></TouchableOpacity>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity style={styles.icon}><Text>❤</Text></TouchableOpacity>
        <TouchableOpacity style={styles.icon}><Text>🛒</Text></TouchableOpacity>
      </View>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.priceContainer}>
        <Text style={styles.mrp}>MRP {item.price}</Text>
        <Text style={styles.discount}>{item.discount}</Text>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.sizeContainer}>
        <Text style={styles.sizeTitle}>Select Size</Text>
        <View style={styles.sizes}>
          <Text style={styles.size}>28</Text>
          <Text style={styles.size}>30</Text>
          <Text style={styles.size}>32</Text>
          <Text style={styles.size}>34</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Bag</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  mrp: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: '#555',
  },
  discount: {
    fontSize: 18,
    color: '#f00',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  sizeContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  sizeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  size: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#f00',
    padding: 15,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailScreen;
