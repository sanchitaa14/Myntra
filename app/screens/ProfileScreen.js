import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const vouchers = [
  { id: '1', name: '500 Rs Myntra Gift Voucher', expires: 'Expires on 10/10/2024', expired: false },
  { id: '2', name: '1000 Rs Myntra Gift Voucher', expires: 'Expires on 12/12/2024', expired: false },
  { id: '3', name: '200 Rs Myntra Gift Voucher', expires: 'Expired on 01/01/2023', expired: true },
];

const outfits = [
  { id: '1', name: 'Casual Outfit', likes: 150, image: require('../assets/outfit1.jpg') },
  { id: '2', name: 'Summer Dress', likes: 200, image: require('../assets/outfit2.jpg') },
  { id: '3', name: 'Formal Wear', likes: 120, image: require('../assets/outfit3.jpg') },
  { id: '4', name: 'Farewell', likes: 300, image: require('../assets/outfit4.jpg') },
  { id: '5', name: 'Prom dress', likes: 180, image: require('../assets/outfit5.jpg') },
];

const savedOutfits = [
  { id: '1', name: 'Casuals', likes: 220, image: require('../assets/outfit6.jpg') },
  { id: '2', name: 'Date Night Dress', likes: 180, image: require('../assets/outfit7.jpg') },
  { id: '3', name: 'Intern look', likes: 250, image: require('../assets/outfit8.jpg') },
  { id: '4', name: 'Beach wear', likes: 190, image: require('../assets/outfit9.jpg') },
];

const badges = [
  require('../assets/badge2.png'),
  require('../assets/badge1.jpg'),
  require('../assets/badge3.png'),
];

const ProfileScreen = ({ navigation }) => {
  const [voucherClicked, setVoucherClicked] = useState(null);
  const [outfitClicked, setOutfitClicked] = useState(null);
  const [initialClicked, setInitialClicked] = useState(false);

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleInitialClick}
          style={[styles.initialsCircle, initialClicked && styles.fadeOut]}
        >
          <Text style={styles.initials}>TT</Text>
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
      </View>
      <View style={styles.badgesContainer}>
        <View style={styles.badgeRow}>
          <Image source={require('../assets/badge2.png')} style={styles.badge} />
          <Image source={require('../assets/badge1.jpg')} style={[styles.badge, styles.largeBadge]} />
          <Image source={require('../assets/badge3.png')} style={styles.badge} />
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
              <Image source={require('../assets/heart.png')} style={styles.heartIcon} />
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
});

export default ProfileScreen;
