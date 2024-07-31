import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';

const DATA = [
  {
    id: '1',
    title: 'Roadster',
    description: 'Women Mid-length blue dress',
    price: '₹645',
    discount: '66% OFF',
    rating: '4.6',
    reviews: '8',
    image: 'https://images.meesho.com/images/products/155287845/pzfiw_512.jpg',
  },
  {
    id: '2',
    title: 'FNOCKS',
    description: 'Women Pink Plaid Long Skirt',
    price: '₹959',
    discount: '68% OFF',
    rating: '3.5',
    reviews: '17',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBH6MnrnBcrG3Q7Wb0LcNJX4TXlHqYIIHu4A&s', 
  },
];

const HomeScreen = () => {
  const navigation = useNavigation()
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('ProductDetail', { item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.discount}>{item.discount}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{item.rating}</Text>
        <Text style={styles.reviews}>★ {item.reviews}</Text>
      </View>
      </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
    <View style={styles.container}>
      
      <View style={styles.categories}>
        <Text style={styles.category}>All</Text>
        <Text style={styles.category}>Trousers</Text>
        <Text style={styles.category}>Lingerie Accessories</Text>
        <Text style={styles.category}>Dresses</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
    </SafeAreaView>
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
  logo: {
    fontSize: 15,
  },
  icon: {
    fontSize: 20,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  category: {
    fontSize: 16,
  },
  list: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  discount: {
    fontSize: 14,
    color: '#f00',
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: '#ffa500',
  },
  reviews: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;
