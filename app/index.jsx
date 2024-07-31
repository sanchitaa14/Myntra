import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';

const stores = [
  {
    id: '1',
    name: 'Myntra',
    description: "India's Fashion & Beauty Experts",
    image: 'https://images.unidays.world/i/self-serve/customer/3_rfbMEDs0alCqUAAZ_lat8i-g5FCKZNm7nSbUjbv0c=/header/17651455-f407-48e4-ad04-b06e56e0062d',
  },
  {
    id: '2',
    name: 'fwd',
    description: 'Gen-Z Fresh Drops Under ₹999',
    image: 'https://elle.in/wp-content/uploads/2023/05/MYNTRA-SC-30.01.231340-1-scaled.jpg',
  },
  {
    id: '3',
    name: 'Luxe',
    description: 'Unlock The World Of Luxury',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4RQnh_OIH_FVBOs_nh60xY7OBFT1mTVLd3oMik1A6TRKSAnybPk7MYi8DSRrkNOp2pJ8&usqp=CAU',
  },
];

const StoreSelection = () => {
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://www.zestmoney.in/wp-content/uploads/2022/02/Myntra-logo.png' }}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.headerText}>Select Your Store</Text>
      {stores.map(store => (
        <TouchableOpacity key={store.id} style={styles.storeContainer} >
          
          <ImageBackground source={{ uri: store.image }} style={styles.storeImage}>
            <View style={styles.overlay}>
            <Link href="/home">
              <Text style={styles.storeName}>{store.name}</Text> </Link>
              <Text style={styles.storeDescription}>{store.description}</Text>
              <Text style={styles.enterText}>Enter Store →</Text>
            </View>
          </ImageBackground>
         
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  storeContainer: {
    width: '90%',
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  storeImage: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  storeDescription: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 15,
  },
  enterText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default StoreSelection;
