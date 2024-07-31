import React, { useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity,Text } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { useNavigation } from '@react-navigation/native';
import SavedCard from '../screens/SavedCard';
import { Link } from 'expo-router';
import { LogBox } from 'react-native';
import AddIcon from '../assets/add.png';
import ShareIcon from '../assets/share.png'; 
import SavedIcon from '../assets/saved.png';
import ProfileIcon from '../assets/profile.png'; 
import PointsIcon from '../assets/points.png';
import LogoIcon from '../assets/icon.png';
import Header from '../../components/Header';

LogBox.ignoreLogs(['Animated: `useNativeDriver` was not specified.']);

const Tinder = () => {
  const navigation = useNavigation();

  const initialCards = [
    {
      id: '1',
      name:'day-out',
      image: require('../assets/card1.png'),
      items: [
        { name: 'Item 1', price: '$20', image: require('../assets/item1.png'), id: '98979', webUrl: 'https://www.bing.com/ck/a?!&&p=f167ab4ad9e95afaJmltdHM9MTcyMDkxNTIwMCZpZ3VpZD0yOTdmOGZkNy1hNWIyLTY0MGYtM2QwNC05ZDgxYTRiNDY1ZDgmaW5zaWQ9NTQxNQ&ptn=3&ver=2&hsh=3&fclid=297f8fd7-a5b2-640f-3d04-9d81a4b465d8&u=a1L3Nob3AvcHJvZHVjdHBhZ2U_cT1teW50cmErZHJlc3MmZmlsdGVycz1zY2VuYXJpbyUzYSUyMjE3JTIyK2dUeXBlJTNhJTIyMTIlMjIrZ0lkJTNhJTIyMTM1MzQyNDE0Njc0JTIyK2dJZEhhc2glM2ElMjIwJTIyK2dHbG9iYWxPZmZlcklkcyUzYSUyMjEzNTM0MjQxNDY3NCUyMitBdWNDb250ZXh0R3VpZCUzYSUyMjAlMjIrR3JvdXBFbnRpdHlJZCUzYSUyMjEzNTM0MjQxNDY3NCUyMitOb25TcG9uc29yZWRPZmZlciUzYSUyMlRydWUlMjImcHJvZHVjdHBhZ2U9dHJ1ZSZGT1JNPVNIUFBEUCZicm93c2U9dHJ1ZSZjdmlkPTMyN0FEMkJGNkFDQTQwNEZCQ0MwNDk4Q0U1MkQ3RjU3&ntb=1' },
        { name: 'Item 2', price: '$30', image: require('../assets/item2.png'), id: '298979', webUrl: 'https://www.bing.com/ck/a?!&&p=f167ab4ad9e95afaJmltdHM9MTcyMDkxNTIwMCZpZ3VpZD0yOTdmOGZkNy1hNWIyLTY0MGYtM2QwNC05ZDgxYTRiNDY1ZDgmaW5zaWQ9NTQxNQ&ptn=3&ver=2&hsh=3&fclid=297f8fd7-a5b2-640f-3d04-9d81a4b465d8&u=a1L3Nob3AvcHJvZHVjdHBhZ2U_cT1teW50cmErZHJlc3MmZmlsdGVycz1zY2VuYXJpbyUzYSUyMjE3JTIyK2dUeXBlJTNhJTIyMTIlMjIrZ0lkJTNhJTIyMTM1MzQyNDE0Njc0JTIyK2dJZEhhc2glM2ElMjIwJTIyK2dHbG9iYWxPZmZlcklkcyUzYSUyMjEzNTM0MjQxNDY3NCUyMitBdWNDb250ZXh0R3VpZCUzYSUyMjAlMjIrR3JvdXBFbnRpdHlJZCUzYSUyMjEzNTM0MjQxNDY3NCUyMitOb25TcG9uc29yZWRPZmZlciUzYSUyMlRydWUlMjImcHJvZHVjdHBhZ2U9dHJ1ZSZGT1JNPVNIUFBEUCZicm93c2U9dHJ1ZSZjdmlkPTMyN0FEMkJGNkFDQTQwNEZCQ0MwNDk4Q0U1MkQ3RjU3&ntb=1' },
        { name: 'Item 3', price: '$25', image: require('../assets/item3.png'), id: '398979', webUrl: 'https://www.bing.com/ck/a?!&&p=0d96084bc5150290JmltdHM9MTcyMDkxNTIwMCZpZ3VpZD0yOTdmOGZkNy1hNWIyLTY0MGYtM2QwNC05ZDgxYTRiNDY1ZDgmaW5zaWQ9NTQzNg&ptn=3&ver=2&hsh=3&fclid=297f8fd7-a5b2-640f-3d04-9d81a4b465d8&u=a1L3Nob3AvcHJvZHVjdHBhZ2U_cT1teW50cmErZHJlc3MmZmlsdGVycz1zY2VuYXJpbyUzYSUyMjE3JTIyK2dUeXBlJTNhJTIyMTIlMjIrZ0lkJTNhJTIyODU4MDg2OTQ1MjUlMjIrZ0lkSGFzaCUzYSUyMjAlMjIrZ0dsb2JhbE9mZmVySWRzJTNhJTIyODU4MDg2OTQ1MjUlMjIrQXVjQ29udGV4dEd1aWQlM2ElMjIwJTIyK0dyb3VwRW50aXR5SWQlM2ElMjI4NTgwODY5NDUyNSUyMitOb25TcG9uc29yZWRPZmZlciUzYSUyMlRydWUlMjImcHJvZHVjdHBhZ2U9dHJ1ZSZGT1JNPVNIUFBEUCZicm93c2U9dHJ1ZSZjdmlkPTMyN0FEMkJGNkFDQTQwNEZCQ0MwNDk4Q0U1MkQ3RjU3&ntb=1' },
      ],
    },
    {
      id: '2',
      name:'go to look',
      image: require('../assets/card2.png'),
      items: [
        { name: 'Item 4', price: '$40', image: require('../assets/item4.png'), id: '498979', webUrl: 'https://www.bing.com/ck/a?!&&p=f167ab4ad9e95afaJmltdHM9MTcyMDkxNTIwMCZpZ3VpZD0yOTdmOGZkNy1hNWIyLTY0MGYtM2QwNC05ZDgxYTRiNDY1ZDgmaW5zaWQ9NTQxNQ&ptn=3&ver=2&hsh=3&fclid=297f8fd7-a5b2-640f-3d04-9d81a4b465d8&u=a1L3Nob3AvcHJvZHVjdHBhZ2U_cT1teW50cmErZHJlc3MmZmlsdGVycz1zY2VuYXJpbyUzYSUyMjE3JTIyK2dUeXBlJTNhJTIyMTIlMjIrZ0lkJTNhJTIyMTM1MzQyNDE0Njc0JTIyK2dJZEhhc2glM2ElMjIwJTIyK2dHbG9iYWxPZmZlcklkcyUzYSUyMjEzNTM0MjQxNDY3NCUyMitBdWNDb250ZXh0R3VpZCUzYSUyMjAlMjIrR3JvdXBFbnRpdHlJZCUzYSUyMjEzNTM0MjQxNDY3NCUyMitOb25TcG9uc29yZWRPZmZlciUzYSUyMlRydWUlMjImcHJvZHVjdHBhZ2U9dHJ1ZSZGT1JNPVNIUFBEUCZicm93c2U9dHJ1ZSZjdmlkPTMyN0FEMkJGNkFDQTQwNEZCQ0MwNDk4Q0U1MkQ3RjU3&ntb=1' },
        { name: 'Item 5', price: '$35', image: require('../assets/item5.png'), id: '598979', webUrl: 'https://www.bing.com/ck/a?!&&p=137ac9e0dd2ee5aeJmltdHM9MTcyMDkxNTIwMCZpZ3VpZD0yOTdmOGZkNy1hNWIyLTY0MGYtM2QwNC05ZDgxYTRiNDY1ZDgmaW5zaWQ9NTM2Ng&ptn=3&ver=2&hsh=3&fclid=297f8fd7-a5b2-640f-3d04-9d81a4b465d8&u=a1L3Nob3AvcHJvZHVjdHBhZ2U_cT1teW50cmErZHJlc3MmZmlsdGVycz1zY2VuYXJpbyUzYSUyMjE3JTIyK2dUeXBlJTNhJTIyMTIlMjIrZ0lkJTNhJTIyMTkzNTg2NDg4OTE5JTIyK2dJZEhhc2glM2ElMjIwJTIyK2dHbG9iYWxPZmZlcklkcyUzYSUyMjE5MzU4NjQ4ODkxOSUyMitBdWNDb250ZXh0R3VpZCUzYSUyMjAlMjIrR3JvdXBFbnRpdHlJZCUzYSUyMjE5MzU4NjQ4ODkxOSUyMitOb25TcG9uc29yZWRPZmZlciUzYSUyMlRydWUlMjImcHJvZHVjdHBhZ2U9dHJ1ZSZGT1JNPVNIUFBEUCZicm93c2U9dHJ1ZSZjdmlkPTMyN0FEMkJGNkFDQTQwNEZCQ0MwNDk4Q0U1MkQ3RjU3&ntb=1' },
        { name: 'Item 6', price: '$50', image: require('../assets/item6.png'), id: '698979', webUrl: 'https://www.bing.com/ck/a?!&&p=9c69bfa400deace5JmltdHM9MTcyMDkxNTIwMCZpZ3VpZD0yOTdmOGZkNy1hNWIyLTY0MGYtM2QwNC05ZDgxYTRiNDY1ZDgmaW5zaWQ9NTM0NQ&ptn=3&ver=2&hsh=3&fclid=297f8fd7-a5b2-640f-3d04-9d81a4b465d8&u=a1L3Nob3AvcHJvZHVjdHBhZ2U_cT1teW50cmErZHJlc3MmZmlsdGVycz1zY2VuYXJpbyUzYSUyMjE3JTIyK2dUeXBlJTNhJTIyMTIlMjIrZ0lkJTNhJTIyMTAxMDc4NTU0MDg5JTIyK2dJZEhhc2glM2ElMjIwJTIyK2dHbG9iYWxPZmZlcklkcyUzYSUyMjEwMTA3ODU1NDA4OSUyMitBdWNDb250ZXh0R3VpZCUzYSUyMjAlMjIrR3JvdXBFbnRpdHlJZCUzYSUyMjEwMTA3ODU1NDA4OSUyMitOb25TcG9uc29yZWRPZmZlciUzYSUyMlRydWUlMjImcHJvZHVjdHBhZ2U9dHJ1ZSZGT1JNPVNIUFBEUCZicm93c2U9dHJ1ZSZjdmlkPTMyN0FEMkJGNkFDQTQwNEZCQ0MwNDk4Q0U1MkQ3RjU3&ntb=1' },
        { name: 'Item 7', price: '$45', image: require('../assets/item7.png'), id: '798979', webUrl: 'https://www.bing.com/ck/a?!&&p=644cda30872f35afJmltdHM9MTcyMDkxNTIwMCZpZ3VpZD0yOTdmOGZkNy1hNWIyLTY0MGYtM2QwNC05ZDgxYTRiNDY1ZDgmaW5zaWQ9NTMzMQ&ptn=3&ver=2&hsh=3&fclid=297f8fd7-a5b2-640f-3d04-9d81a4b465d8&u=a1L3Nob3AvcHJvZHVjdHBhZ2U_cT1teW50cmErZHJlc3MmZmlsdGVycz1zY2VuYXJpbyUzYSUyMjE3JTIyK2dUeXBlJTNhJTIyMTIlMjIrZ0lkJTNhJTIyMTkzNTg2NDg4OTQzJTIyK2dJZEhhc2glM2ElMjIwJTIyK2dHbG9iYWxPZmZlcklkcyUzYSUyMjE5MzU4NjQ4ODk0MyUyMitBdWNDb250ZXh0R3VpZCUzYSUyMjAlMjIrR3JvdXBFbnRpdHlJZCUzYSUyMjE5MzU4NjQ4ODk0MyUyMitOb25TcG9uc29yZWRPZmZlciUzYSUyMlRydWUlMjImcHJvZHVjdHBhZ2U9dHJ1ZSZGT1JNPVNIUFBEUCZicm93c2U9dHJ1ZSZjdmlkPTMyN0FEMkJGNkFDQTQwNEZCQ0MwNDk4Q0U1MkQ3RjU3&ntb=1' },
      ],
    },
    {
      id: '3',
      name:'cute outfit',
      image: require('../assets/card3.png'),
      items: [
        { name: 'Item 8', price: '$60', image: require('../assets/item8.png'), id: '898979', webUrl: 'https://www.bing.com/ck/a?!&&p=5cc9351bb9c1bde2JmltdHM9MTcyMDkxNTIwMCZpZ3VpZD0yOTdmOGZkNy1hNWIyLTY0MGYtM2QwNC05ZDgxYTRiNDY1ZDgmaW5zaWQ9NTIxOQ&ptn=3&ver=2&hsh=3&fclid=297f8fd7-a5b2-640f-3d04-9d81a4b465d8&u=a1L3Nob3AvcHJvZHVjdHBhZ2U_cT1teW50cmErZHJlc3MmZmlsdGVycz1zY2VuYXJpbyUzYSUyMjE3JTIyK2dUeXBlJTNhJTIyMTIlMjIrZ0lkJTNhJTIyMTk2NDQxNjg3MzIzJTIyK2dJZEhhc2glM2ElMjIwJTIyK2dHbG9iYWxPZmZlcklkcyUzYSUyMjE5NjQ0MTY4NzMyMyUyMitBdWNDb250ZXh0R3VpZCUzYSUyMjAlMjIrR3JvdXBFbnRpdHlJZCUzYSUyMjE5NjQ0MTY4NzMyMyUyMitOb25TcG9uc29yZWRPZmZlciUzYSUyMlRydWUlMjImcHJvZHVjdHBhZ2U9dHJ1ZSZGT1JNPVNIUFBEUCZicm93c2U9dHJ1ZSZjdmlkPTMyN0FEMkJGNkFDQTQwNEZCQ0MwNDk4Q0U1MkQ3RjU3&ntb=1' },
        { name: 'Item 9', price: '$55', image: require('../assets/item9.png'), id: '998979', webUrl: 'https://www.bing.com/ck/a?!&&p=644cda30872f35afJmltdHM9MTcyMDkxNTIwMCZpZ3VpZD0yOTdmOGZkNy1hNWIyLTY0MGYtM2QwNC05ZDgxYTRiNDY1ZDgmaW5zaWQ9NTMzMQ&ptn=3&ver=2&hsh=3&fclid=297f8fd7-a5b2-640f-3d04-9d81a4b465d8&u=a1L3Nob3AvcHJvZHVjdHBhZ2U_cT1teW50cmErZHJlc3MmZmlsdGVycz1zY2VuYXJpbyUzYSUyMjE3JTIyK2dUeXBlJTNhJTIyMTIlMjIrZ0lkJTNhJTIyMTkzNTg2NDg4OTQzJTIyK2dJZEhhc2glM2ElMjIwJTIyK2dHbG9iYWxPZmZlcklkcyUzYSUyMjE5MzU4NjQ4ODk0MyUyMitBdWNDb250ZXh0R3VpZCUzYSUyMjAlMjIrR3JvdXBFbnRpdHlJZCUzYSUyMjE5MzU4NjQ4ODk0MyUyMitOb25TcG9uc29yZWRPZmZlciUzYSUyMlRydWUlMjImcHJvZHVjdHBhZ2U9dHJ1ZSZGT1JNPVNIUFBEUCZicm93c2U9dHJ1ZSZjdmlkPTMyN0FEMkJGNkFDQTQwNEZCQ0MwNDk4Q0U1MkQ3RjU3&ntb=1' },
      ],
    },
  ];

  const [cards, setCards] = useState(initialCards);
  const [showSavedAnimation, setShowSavedAnimation] = useState(false);

  const Card = ({ image, items, name }) => (
    <TouchableOpacity
      onPress={() => setShowSavedAnimation(true)}
      onLongPress={() => navigation.navigate('OutfitDetails', { items })}
    >
      <View style={styles.card}>
        <Image source={image} style={styles.cardImage} />
        <View style={styles.cardFooter}>
          <Text style={styles.outfitName}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleYup = (card) => {
    handleCardRemoval(card.id);
  };

  const handleNope = (card) => {
    handleCardRemoval(card.id);
  };

  const handleCardRemoval = (cardId) => {
    const updatedCards = cards.filter((card) => card.id !== cardId);
    const removedCard = cards.find((card) => card.id === cardId);
    setCards([...updatedCards, removedCard]);
  };

  const handleAnimationFinish = () => {
    setShowSavedAnimation(false);
  };

  
  const handleShare = () => { 
    console.log('Share button pressed');
  };

 
  const handleSaved = () => {
    alert('Item saved');
  };

  const handlePoints = () => {
    navigation.navigate('Points');
  };
  
  const handleprofile = () => {
    // navigation.navigate('Profile')
    <Link href ="/ProfileScreen"/>
  };

  const handleAdd = () => {
    navigation.navigate('AddOutfit');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <TouchableOpacity onPress={handleSaved} style={[styles.button, styles.leftButton]}>
        <View style={styles.buttonContainer}>
          <Image source={SavedIcon} style={styles.icon} />
        </View>
      </TouchableOpacity>

     
      <View style={styles.logo}>
          <Image source={LogoIcon} style={styles.logo} />
        </View>

      
      <TouchableOpacity onPress={handleShare} style={[styles.button, styles.rightButton]}>
        <View style={styles.buttonContainer}>
          <Image source={ShareIcon} style={styles.icon} />
        </View>
      </TouchableOpacity>
      
      
      <TouchableOpacity onPress={handleAdd} style={[styles.largeButton, styles.centerButton]}>
      <Link href ="../screens/AddOutfitScreen">
        <View style={styles.largebuttonContainer}>
          <Image source={AddIcon} style={[styles.icon, styles.largeIcon]} />
        </View>
        </Link>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={handlePoints} style={[styles.largeButton, styles.bottomleftButton]}>
      <Link href ="../screens/PointsScreen">
        <View style={styles.largebuttonContainer}>
          <Image source={PointsIcon} style={[styles.icon, styles.largeIcon]} />
        </View>
        </Link>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={handleprofile} style={[styles.largeButton, styles.bottomrightButton]}>
      <Link href ="../screens/ProfileScreen">
        <View style={styles.largebuttonContainer}>
        
          <Image source={ProfileIcon} style={[styles.icon, styles.largeIcon]} />
        </View>
        </Link>
      </TouchableOpacity>
      
      
      <SwipeCards
        cards={cards}
        renderCard={(cardData) => <Card image={cardData.image} items={cardData.items} name={cardData.name} />}
        handleYup={handleYup}
        handleNope={handleNope}
        stackSize={2}
        showYup={true}
        showNope={true}
        yupText="Like"
        nopeText="Nope"
        cardRemoved={() => console.log('Card removed')}
        animateCardOpacity 
        useNativeDriver={true}
        containerStyle={styles.swipeCards} 
      />
      
      {showSavedAnimation && <SavedCard onAnimationFinish={handleAnimationFinish} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    backgroundColor: '#ffffff',
  },
  
  card: {
    width: 300,
    marginTop: -10,
    height: 450, 
    borderRadius: 10,
    borderWidth: 1,  
    borderColor: '#e1e1e1',
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    justifyContent: 'space-between', 
  },
  cardImage: {
    width: '100%',
    height: '85%', 
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  cardFooter: {
    width: '100%',
    height: '15%', 
    backgroundColor: '#FF69B4',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'peach', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  outfitName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    position: 'absolute',
    padding: 10,
    zIndex: 10,
    paddingTop:70,
  },
  logo:{
    position: 'absolute',
    top: 45,
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  leftButton: {
    top: 20,
    left: 20,
  },
  rightButton: {
    top: 20,
    right: 20,
  },
  bottomleftButton: {
    bottom: 10,
    left: 45,
  },
  bottomrightButton: {
    bottom: 10,
    right: 45,
    
  },
  centerButton: {
    bottom: 10,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF69B4',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  largeButton: {
    position: 'absolute',
    padding: 10,
    zIndex: 10,
    
  },
  largebuttonContainer: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF69B4',
    borderRadius: 40,
    
  },
  largeIcon: {
    width: 50, 
    height: 50, 
  },
});

export default Tinder;