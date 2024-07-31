import React from 'react';
import { ScrollView, Text, View, TextInput, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import Swiper from 'react-native-swiper';

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
const images = [
  { uri: 'https://newspaperads.ads2publish.com/wp-content/uploads/2019/05/single-fashion-for-the-free-shoppers-stop-central-myntra-ad-bombay-times-29-03-2019.png' },
  { uri: 'https://www.gethucinema.com/wp-content/uploads/2021/12/HrithikRoshan-38.jpg' },
  { uri: 'https://southindianactress.in/wp-content/uploads/2022/07/Samantha-Myntra-57.jpg' },
];
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
const Home = () => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryContainer}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );
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
      <ScrollView>
        {/* Header */}
        <View style={styles.headerMyntra}>
          <Image source={{ uri: 'https://life.myntra.com/wp-content/themes/myntra_life/assets/img/Myntra-logo-horizontal.png' }} style={styles.logoMyntra} />
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

        <Swiper style={styles.wrapper} showsButtons={true}>
          {images.map((image, index) => (
            <View style={styles.slide} key={index}>
              <Image source={{ uri: image.uri }} style={styles.imageSwiper} resizeMode="cover" />
            </View>
          ))}
        </Swiper>

        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <Text style={styles.promoText}>Sign Up For Exciting Deals!</Text>
          <View style={styles.promoOffer}>
            <Text style={styles.promoOfferText}>NEW USER? FLAT ₹200 OFF</Text>
            {/* <Text style={styles.promoCode}>CODE: MYNTRA200</Text> */}
          </View>
          <Image source={{ uri: 'https://www.gyftr.com/blog/wp-content/uploads/2019/04/banners21554285340.jpg' }} style={styles.promoImage} />
        </View>
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

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  headerMyntra: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center' },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSwiper: {
    width: '100%',
    height: '100%',
  },
  logoMyntra: { width: 100, height: 40 },
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
  promoOffer: { justifyContent: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 10, backgroundColor: 'red', alignContent: 'center', alignItems: 'center' },
  promoOfferText: { marginLeft: 65, fontSize: 16, fontWeight: 'bold', alignItems: 'center', alignContent: 'center', justifyContent: 'center', color: 'white' },
  promoCode: { fontSize: 16, color: 'blue' },
  promoImage: { width: '100%', height: 150, marginVertical: 10 },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', padding: 10, borderTopWidth: 1, borderTopColor: '#ddd' },
  bottomNavText: { fontSize: 12 },
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

export default Home;
