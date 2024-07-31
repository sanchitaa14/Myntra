import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.image !== prevState.image) {
      return {
        image: nextProps.image,
      };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.image !== prevProps.image) {
      // Perform any side effects here
    }
  }

  render() {
    const { items, name, navigation, setShowSavedAnimation } = this.props;
    const { image } = this.state;

    return (
      <TouchableOpacity
        onPress={() => setShowSavedAnimation(true)}
        onLongPress={() => navigation.navigate('OutfitDetails', { items })}
      >
        <View style={styles.card}>
          <Image
            source={{ uri: image }}
            style={styles.cardImage}
            onError={(error) => console.log('Image loading error:', error.nativeEvent.error)}
          />
          <View style={styles.cardFooter}>
            <Text style={styles.outfitName}>{name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
});

export default Card;
