import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, SafeAreaView, TouchableOpacity, Text, Alert } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import SavedCard from './SavedCard';
import { useAuth } from './AuthContext';

import { LogBox } from 'react-native';

import AddIcon from './assets/add.png';
import ShareIcon from './assets/share.png';
import SavedIcon from './assets/saved.png';
import ProfileIcon from './assets/profile.png';
import PointsIcon from './assets/points.png';
import LogoIcon from './assets/myntra-logo.png';

import HeartGif from './assets/heart.gif';
import BrokenHeartGif from './assets/brokenheart.gif';

LogBox.ignoreLogs([
  'Animated: `useNativeDriver` was not specified.',
  'Warning: componentWillReceiveProps has been renamed',
  'Animated.event now requires a second argument for options',
]);

const preloadImages = async (imageUrls) => {
  const prefetchPromises = imageUrls.map((url) => Image.prefetch(url));
  return Promise.all(prefetchPromises);
};
const HomeScreen = () => {
  const navigation = useNavigation();
  const [cards, setCards] = useState([]);
  const [showSavedAnimation, setShowSavedAnimation] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [isImagesPreloaded, setIsImagesPreloaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth(); 
  const [userPreferences, setUserPreferences] = useState([]);

  const determineDominantTags = (preferences) => {
    return Object.entries(preferences.reduce((map, pref) => {
      map[pref.tag] = pref.weight;
      return map;
    }, {}))
    .sort(([, weightA], [, weightB]) => weightB - weightA)
    .slice(0, 3) 
    .map(([tag]) => tag);
  };

  const filterOutfitsByDominantTags = (outfits, dominantTags) => {
    return outfits.filter(outfit => outfit.tags.some(tag => dominantTags.includes(tag)));
  };
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('https://mumble-backend-8az2.onrender.com/api/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUserEmail(response.data.email);
        setUserPreferences(response.data.userPreferences || []);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    const fetchOutfits = async (page=1) => {
      try {
        const response = await axios.get('https://mumble-backend-8az2.onrender.com/api/outfits');
        const outfitData = response.data;

        if (!Array.isArray(outfitData)) {
          throw new Error('Fetched data is not an array');
        }
        const imageUrls = outfitData.map((outfit) => outfit.photo);
        
        
        if (userPreferences.length === 0) {
          await fetchUserProfile(); 
        }
       
        const dominantTags = determineDominantTags(userPreferences);
        const filteredOutfits = filterOutfitsByDominantTags(outfitData, dominantTags);
        setCards(filteredOutfits);
        setIsImagesPreloaded(true);
      } catch (error) {
        console.error('Error fetching outfits:', error);
      } finally {
        setLoading(false);
      }
    };
   fetchOutfits();
  }, [token, userPreferences]);
  const Card = ({ image, items, name }) => (
    <TouchableOpacity
      onPress={() => setShowSavedAnimation(true)}
      onLongPress={() => navigation.navigate('OutfitDetails', { items })}
    >
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.cardImage} />
        <View style={styles.cardFooter}>
          <Text style={styles.outfitName}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const handleYup = async(card) => {
    setSwipeDirection('right');
    try {
      await axios.post('https://mumble-backend-8az2.onrender.com/api/swipeRight', {
        email: userEmail,
        tags: card.tags,
      });
    } catch (error) {
      console.error('Error swiping right:', error);
    }
    handleCardRemoval(card._id);
  };

  const handleNope = async(card) => {
    setSwipeDirection('left');
    try {
      await axios.post('https://mumble-backend-8az2.onrender.com/api/swipeLeft', {
        email: userEmail,
        tags: card.tags,
      });
    } catch (error) {
      console.error('Error swiping left:', error);
    }
    handleCardRemoval(card._id);
  };

  const handleCardRemoval = (cardId) => {
    const updatedCards = cards.filter((card) => card._id !== cardId);
    setCards(updatedCards);
    setTimeout(() => setSwipeDirection(null), 1000);
  };

  const handleSaved = () => {
    navigation.navigate('SavedOutfits');
  };

  const handleAnimationFinish = () => {
    setShowSavedAnimation(false);
  };

  const handleShare = () => {
    console.log('Share button pressed');
  };

  const handlePoints = () => {
    navigation.navigate('Points');
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleAdd = () => {
    navigation.navigate('AddOutfit');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleSaved} style={[styles.button, styles.leftButton]}>
        <View style={styles.buttonContainer}>
          <Image source={SavedIcon} style={styles.icon} />
        </View>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image source={LogoIcon} style={styles.logo} />
      </View>

      <TouchableOpacity onPress={handleShare} style={[styles.button, styles.rightButton]}>
        <View style={styles.buttonContainer}>
          <Image source={ShareIcon} style={styles.icon} />
        </View>
      </TouchableOpacity>

      {isImagesPreloaded && (
        <SwipeCards
          cards={cards}
          renderCard={(cardData) => (
            <Card
              key={cardData._id}
              image={cardData.photo} 
              items={cardData.items}
              name={cardData.name}
            />
          )}
          handleYup={handleYup}
          handleNope={handleNope}
          stackSize={2}
          showYup={false}
          showNope={false}
          yupText="Like"
          nopeText="Nope"
          cardRemoved={() => console.log('Card removed')}
          animateCardOpacity
          useNativeDriver={true}
          containerStyle={styles.swipeCards}
        />
      )}
      
      {swipeDirection && (
        <Image
          source={swipeDirection === 'right' ? HeartGif : BrokenHeartGif}
          style={swipeDirection === 'right' ? styles.swipeIconHeart : styles.swipeIconBrokenHeart}
        />
      )} 

      <TouchableOpacity onPress={handleAdd} style={[styles.largeButton, styles.centerButton]}>
        <View style={styles.largeButtonContainer}>
          <Image source={AddIcon} style={[styles.icon, styles.largeIcon]} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePoints} style={[styles.largeButton, styles.bottomLeftButton]}>
        <View style={styles.largeButtonContainer}>
          <Image source={PointsIcon} style={[styles.icon, styles.largeIcon]} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleProfile} style={[styles.largeButton, styles.bottomRightButton]}>
        <View style={styles.largeButtonContainer}>
          <Image source={ProfileIcon} style={[styles.icon, styles.largeIcon]} />
        </View>
      </TouchableOpacity>

      {showSavedAnimation && (
        <View style={styles.savedCardWrapper}>
          <SavedCard onAnimationFinish={() => setShowSavedAnimation(false)} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  card: {
    width: 300,
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
  savedCardWrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  outfitName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  swipeCards: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70, // Adjusted to prevent overlap
  },
  swipeIconHeart: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: '40%',
    alignSelf: 'center',
    zIndex: 1000,
  },
  swipeIconBrokenHeart: {
    width: 100,
    height: 100,
    position: 'absolute',
    top:'40%',
    alignSelf: 'center',
    zIndex: 1000,
  },
  button: {
    position: 'absolute',
    top: 40,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeButton: {
    position: 'absolute',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButton: {
    left: 20,
  },
  rightButton: {
    right: 20,
  },
  centerButton: {
    bottom: 60,
  },
  bottomLeftButton: {
    bottom:60,
    left: 35,
  },
  bottomRightButton: {
    bottom: 60,
    right: 35,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  largeButtonContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  largeIcon: {
    width: 34,
    height: 34,
  },
  logoContainer: {
    position: 'absolute',
    top: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
});

export default HomeScreen;