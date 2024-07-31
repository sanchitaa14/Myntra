import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity,ActivityIndicator  } from 'react-native';
import axios from 'axios';
import { useAuth } from './AuthContext';

const vouchers = [
  { id: '1', name: '500 Rs Myntra Gift Voucher', expires: 'Expires on 10/10/2024', expired: false },
  { id: '2', name: '1000 Rs Myntra Gift Voucher', expires: 'Expires on 12/12/2024', expired: false },
  { id: '3', name: '200 Rs Myntra Gift Voucher', expires: 'Expired on 01/01/2023', expired: true },
];

const outfits = [
  { id: '1', name: 'Casual Outfit', likes: 150, image: require('./assets/outfit1.jpg') },
  { id: '2', name: 'Summer Dress', likes: 200, image: require('./assets/outfit2.jpg') },
  { id: '3', name: 'Formal Wear', likes: 120, image: require('./assets/outfit3.jpg') },
  { id: '4', name: 'Farewell', likes: 300, image: require('./assets/outfit4.jpg') },
  { id: '5', name: 'Prom dress', likes: 180, image: require('./assets/outfit5.jpg') },
];

const savedOutfits = [
  { id: '1', name: 'Casuals', likes: 220, image: require('./assets/outfit6.jpg') },
  { id: '2', name: 'Date Night Dress', likes: 180, image: require('./assets/outfit7.jpg') },
  { id: '3', name: 'Intern look', likes: 250, image: require('./assets/outfit8.jpg') },
  { id: '4', name: 'Beach wear', likes: 190, image: require('./assets/outfit9.jpg') },
];

const badges = [
  require('./assets/badge2.png'),
  require('./assets/badge1.jpg'),
  require('./assets/badge3.png'),
];

const ProfileScreen = ({ navigation }) => {
  
  const [voucherClicked, setVoucherClicked] = useState(null);
  const [outfitClicked, setOutfitClicked] = useState(null);
  const [initialClicked, setInitialClicked] = useState(false);
  const [profile, setProfile] = useState(null);
  const { token } = useAuth(); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [preferences, setPreferences] = useState([]);
  const [dominantPreferences, setDominantPreferences] = useState([]);

   useEffect(() => {
    let isMounted = true;
    const fetchProfileData = async () => {
    
      try {
        
        const response = await axios.get('https://mumble-backend-8az2.onrender.com/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (isMounted) { // Check if component is still mounted
          setProfile(response.data);
          const userPreferences = response.data.userPreferences || [];
          setPreferences(response.data.userPreferences || []);
          setDominantPreferences(getDominantPreferences(userPreferences));
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    const getDominantPreferences = (preferences) => {
      // Check if preferences is an array and sort if true
      return Array.isArray(preferences)
        ? preferences
            .sort((a, b) => b.weight - a.weight)
            .slice(0, 6)
        : [];
    };
  
    
    if (token) {
      fetchProfileData();
    }
   else {
    setLoading(false); // If no token, stop loading
  }
  return () => {
    isMounted = false;
  };
  }, [token]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Display loading indicator
  }

  if (error) {
    return <Text>Error fetching profile: {error.message}</Text>;
  }

  if (!profile) {
    return <Text>No profile data available</Text>;
  }


  const handleVoucherClick = (voucherId) => {
    setVoucherClicked(voucherId);
    setTimeout(() => {
      setVoucherClicked(null);
    }, 500);
  };

  const handleOutfitClick = (outfitId) => {
    setOutfitClicked(outfitId);
    setTimeout(() => {
      setOutfitClicked(null);
    }, 500);
  };

  const handleInitialClick = () => {
    setInitialClicked(true);
    setTimeout(() => {
      setInitialClicked(false);
    }, 500);  
  };

  const handleSavedOutfitClick = (outfitId) => {
    setOutfitClicked(outfitId);
    setTimeout(() => {
      setOutfitClicked(null);
    }, 500);
  };

  const renderBadge = ({ item }) => (
    <View style={styles.badgedownWrapper}>
      <Image source={item.image} style={styles.badgedownImage} />
      <View style={styles.badgedownDescription}>
        <Text style={styles.badgedownTitle}>{item.title}</Text>
        <Text style={styles.badgedownText}>{item.description}</Text>
      </View>
    </View>
  );

  // Static badge data
  const badgeData = [
    {
      id: '1',
      image: require('./assets/badge1.jpg'),
      title: 'Top Contributor',
    description: '50 outfits posted',
    },
    {
      id: '2',
      image: require('./assets/badge2.png'),
      title: 'Fashion Enthusiast',
      description: '100 outfits liked',
    },
    {
      id: '3',
      image: require('./assets/badge3.png'),
      title: 'Style Guru',
    description: '10 outfit shares',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleInitialClick}
          style={[styles.initialsCircle, initialClicked && styles.fadeOut]}
        >
          <Text style={styles.initials}>M</Text>
        </TouchableOpacity>
        <View style={styles.statsContainer}>
          <Text style={styles.statsLabel}>Daily Swipes</Text>
          <Text style={styles.statsValue}>24/30</Text>
          <View style={styles.separator}>
            <View style={styles.pinkLine} />
            <View style={styles.greyLine} />
          </View>
          <Text style={styles.statsLabel}>Available Points</Text>
          <Text style={styles.statsValue}>1200</Text>
        </View>
        <TouchableOpacity
          style={styles.editProfileButton}
          onPress={() => navigation.navigate('EditProfile')} // Adjust this line as needed
        >
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.badgesContainer}>
        <View style={styles.badgeRow}>
          <Image source={require('./assets/badge2.png')} style={styles.badge} />
          <Image source={require('./assets/badge1.jpg')} style={[styles.badge, styles.largeBadge]} />
          <Image source={require('./assets/badge3.png')} style={styles.badge} />
        </View>
      </View>
      <Text style={styles.vouchersTitle}>Your Vouchers</Text>
      <FlatList
        data={vouchers}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleVoucherClick(item.id)}
            style={[styles.voucher, item.expired && styles.expiredVoucher, voucherClicked === item.id && styles.clickedVoucher]}
          >
            <Text style={styles.voucherName}>{item.name}</Text>
            <Text style={styles.voucherExpires}>{item.expires}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.vouchersContainer}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.outfitsTitle}>Your Outfits</Text>
      <FlatList
        data={outfits}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleOutfitClick(item.id)}
            style={[styles.outfit, outfitClicked === item.id && styles.clickedOutfit]}
          >
            <Image source={item.image} style={styles.outfitImage} />
            <Text style={styles.outfitName}>{item.name}</Text>
            <View style={styles.likesContainer}>
              <Text style={styles.likes}>{item.likes}</Text>
              <Image source={require('./assets/heart.png')} style={styles.heartIcon} />
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.outfitsContainer}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.savedOutfitsTitle}>Saved Outfits</Text>
      <FlatList
        data={savedOutfits}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => handleSavedOutfitClick(item.id)}
            style={[styles.savedOutfit, outfitClicked === item.id && styles.clickedOutfit]}
          >
            <Image source={item.image} style={styles.savedOutfitImage} />
            <Text style={styles.savedOutfitName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.savedOutfitsContainer}
        showsHorizontalScrollIndicator={false}
      />
       <View style={styles.badgesdownContainer}>
       <Text style={styles.badgesdownTitle}>Your Badges</Text>
        <FlatList
          data={badgeData}
          renderItem={renderBadge}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.badgesdownList}
        />
      </View>
    <Text style={styles.preferencesTitle}>Your Preferences</Text>
    <View style={styles.preferencesContainer}>
  {profile.userPreferences && dominantPreferences.length > 0 ? (
    dominantPreferences.map((preference, index)  => (
      <View key={index} style={styles.preference}>
        <Text style={styles.preferenceText}># {preference.tag}</Text>
      </View>
    ))
  ) : (
    <Text style={styles.noPreferencesText}>No preferences found.</Text>
  )}
</View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  initialsCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E91E63',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 9,
  },
  initials: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  fadeOut: {
    opacity: 0.5,
  },
  separator: {
    flexDirection: 'row',
    height: 4,
    width: '70%',
    marginVertical: 20,
  },
  pinkLine: {
    flex: 8,
    backgroundColor: '#E91E63',
  },
  greyLine: {
    flex: 2,
    backgroundColor: '#ccc',
  },
  statsContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 40,
    top:20,
  },
  statsLabel: {
    fontSize: 14,
    color: '#666',
  },
  statsValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  badgesContainer: {
    alignItems: 'flex-start',
    marginTop: -30,
    left:-10,
    width: 40,
    height: 40,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    width: 40,
    height: 40,
    marginHorizontal: -3,
  },
  largeBadge: {
    width: 60,
    height: 60,
  },
  vouchersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  vouchersContainer: {
    height: 100,
    marginBottom: 20,
  },
  voucher: {
    width: 200,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#E91E63',
    marginHorizontal: 8,
  },
  expiredVoucher: {
    backgroundColor: '#ccc',
  },
  clickedVoucher: {
    opacity: 0.7,
  },
  voucherName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  voucherExpires: {
    fontSize: 14,
    color: '#fff',
  },
  outfitsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  outfitsContainer: {
    height: 200,
    marginBottom: 20,
  },
  outfit: {
    width: 150,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  outfitImage: {
    width: '100%',
    height: 120,
  },
  outfitName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  savedOutfitsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  savedOutfitsContainer: {
    height: 170,
    marginBottom: 20,
  },
  savedOutfit: {
    width: 150,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    marginHorizontal: 8,
    overflow: 'hidden',
  },
  savedOutfitImage: {
    width: '100%',
    height: 120,
  },
  savedOutfitName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  seeSaved: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 8,
  },
  likes: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 4,
  },
  heartIcon: {
    width: 16,
    height: 16,
  },
    preferencesTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#E91E63', // Myntra-themed pink
      marginVertical: 10,
    },
    preferencesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap', // Allows wrapping of items to the next line
      marginVertical: 10,
    },
    preference: {
      backgroundColor: '#E0E0E0', // Grey background
      borderRadius: 8, // Rounded corners
      paddingHorizontal: 12,
      paddingVertical: 6,
      margin: 4,
      borderColor: '#B0B0B0', // Slightly darker border for better visibility
      borderWidth: 1,
    },
    preferenceText: {
      fontSize: 14,
      color: '#333', // Dark text for better contrast
    },
    noPreferencesText: {
      fontSize: 14,
      color: '#666',
    },
    badgesdownContainer: {
      marginVertical: 20,
      paddingHorizontal: 10,
    },
    badgesdownTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    badgesdownList: {
      alignItems: 'center',
    },
    badgedownWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
      padding: 10,
      backgroundColor: '#f8f8f8',
      borderRadius: 8,
      borderColor: '#ddd',
      borderWidth: 1,
    },
    badgedownImage: {
      width: 50,
      height: 50,
    },
    badgedownDescription: {
      marginLeft: 10,
      justifyContent: 'center',
    },
    badgedownTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    badgedownText: {
      fontSize: 14,
      color: '#666',
    },
    editProfileButton: {
      position: 'absolute',
      bottom: -50, // Adjust as needed
      right: 10, // Adjust as needed
      backgroundColor: '#E91E63',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    editProfileButtonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
});

export default ProfileScreen;