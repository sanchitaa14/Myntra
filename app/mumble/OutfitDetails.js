import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Linking } from 'react-native';

const OutfitDetails = ({ route }) => {
  const { items } = route.params;

  const handleAddToCart = (item) => {
    console.log('Added to cart:', item.name);
  };

  const handleItemPress = (item) => {
    const deepLinkUrl = `myntra://item/${item.itemId}`; 
    Linking.openURL(deepLinkUrl).catch(() => {
      Linking.openURL(item.webUrl); 
    });
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => handleItemPress(item)}>
        <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      </TouchableOpacity>
      <View style={styles.cardContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>{item.originalPrice}</Text>
          <Text style={styles.discountedPrice}>{item.discountedPrice}</Text>
          <Text style={styles.discount}>{item.price}</Text>
        </View>
        <Text style={styles.bestPrice}>Best Price {item.bestPrice} with coupon</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.rating}</Text>
          <Text style={styles.reviews}>({item.reviews} reviews)</Text>
        </View>
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => handleAddToCart(item)}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.itemId} // Use id as a unique key
        renderItem={renderItem}
        numColumns={2} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  card: {
    flex: 1,
    margin: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  itemImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  cardContent: {
    marginTop: 8,
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    marginRight: 4,
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 4,
  },
  discount: {
    color: 'red',
    marginRight: 4,
  },
  bestPrice: {
    color: 'green',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontWeight: 'bold',
    marginRight: 4,
  },
  reviews: {
    color: '#888',
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OutfitDetails;
