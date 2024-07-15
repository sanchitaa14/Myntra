import React from 'react';
import { ScrollView, Text, View, TextInput, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const categories = [
  { id: '1', name: 'Shirts', image: 'https://m.media-amazon.com/images/I/71slaXZxIlL._AC_UY1100_.jpg' },
  { id: '2', name: 'T-shirts', image: 'https://www.redwolf.in/image/cache/catalog/featured_categories/t-shirts-for-women-featured-480x480.jpg?m=1710314724' },
  { id: '3', name: 'Casual Shoes', image: 'https://baccabucci.com/cdn/shop/products/MG_5242.jpg?v=1633514122' },
  { id: '4', name: 'Jeans', image: 'https://assets.ajio.com/medias/sys_master/root/20240430/C6Hk/6630475505ac7d77bb33248e/-473Wx593H-467162954-black-MODEL.jpg' },
  { id: '5', name: 'Sports Shoes', image: 'https://m.economictimes.com/thumb/msid-102082914,width-1200,height-1200,resizemode-4,imgsize-32090/branded-sports-shoes-for-men-in-india-from-nike-to-puma.jpg' },
  { id: '6', name: 'Kurta Sets', image: 'https://assets.ajio.com/medias/sys_master/root/20231010/PFA8/652579b4afa4cf41f53926cd/-473Wx593H-466692941-offwhite-MODEL.jpg' },
  { id: '7', name: 'Kurtas', image: 'https://i.etsystatic.com/17457268/r/il/502c1c/4708081514/il_570xN.4708081514_qwxa.jpg' },
  { id: '8', name: 'Dresses', image: 'https://assets.ajio.com/medias/sys_master/root/20240406/jTor/6610dc8616fd2c6e6aa17c06/-473Wx593H-466855053-yellow-MODEL.jpg' },
  { id: '9', name: 'Tops', image: 'https://images.glowroad.com/faceview/ae/d7i/d9a/bh/imgs/pd/1698771846107_1864190866__3__2-removebg-preview__5_-xlgn400x400.png?productId=P-23608985' },
  { id: '10', name: 'Accessories', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIW8vFxiu48eQBLA26125EzXOgwhZDcfAtFg&s' },
];

const Home = () => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryContainer}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Image source={{ uri: 'https://life.myntra.com/wp-content/themes/myntra_life/assets/img/Myntra-logo-horizontal.png' }} style={styles.logo} />
          <View style={styles.headerIcons}>
            <Ionicons name="notifications-outline" size={24} color="black" style={styles.headerIcon} />
            <Ionicons name="heart-outline" size={24} color="black" style={styles.headerIcon} />
            <Ionicons name="cart-outline" size={24} color="black" style={styles.headerIcon} />
          </View>
        </View>

        {/* Search Bar */}
        <TextInput
          placeholder="Search for Casual Coor"
          style={styles.searchBar}
        />

        {/* Category Tabs */}
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Fashion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Beauty</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Ionicons name="grid-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryList}
        />

        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <Text style={styles.promoText}>Sign Up For Exciting Deals!</Text>
          <View style={styles.promoOffer}>
            <Text style={styles.promoOfferText}>NEW USER? FLAT ₹200 OFF</Text>
            {/* <Text style={styles.promoCode}>CODE: MYNTRA200</Text> */}
          </View>
          <Image source={{ uri: 'https://www.gyftr.com/blog/wp-content/uploads/2019/04/banners21554285340.jpg' }} style={styles.promoImage} />
        </View> 
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' },
  logo: { width: 100, height: 40 },
  headerIcons: { flexDirection: 'row' },
  headerIcon: { marginHorizontal: 10 },
  searchBar: { backgroundColor: '#f0f0f0', borderRadius: 5, paddingHorizontal: 10, margin: 10, height: 40 },
  tabContainer: { flexDirection: 'row', justifyContent: 'space-around', padding: 10 },
  tab: { alignItems: 'center', backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 20, borderColor: 'black', borderWidth: 1 },
  tabText: { fontSize: 16 },
  categoryList: { paddingVertical: 10 },
  categoryContainer: { alignItems: 'center', margin: 10 },
  categoryImage: { width: 50, height: 50, borderRadius: 25 },
  categoryText: { marginTop: 5, fontSize: 12 },
  promoBanner: { alignItems: 'center', marginVertical: 20 },
  promoText: { fontSize: 18, fontWeight: 'bold' },
  promoOffer: { justifyContent: 'center',flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10, backgroundColor: '#f0f0f0', borderRadius: 5, alignContent: 'center', alignItems: 'center' },
  promoOfferText: { marginLeft:65, fontSize: 16, fontWeight: 'bold', alignItems: 'center', alignContent: 'center', justifyContent: 'center' },
  promoCode: { fontSize: 16, color: 'blue' },
  promoImage: { width: '100%', height: 150, marginVertical: 10 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderTopWidth: 1, borderTopColor: '#ddd' },
  bottomNavText: { fontSize: 12 },
});

export default Home;
