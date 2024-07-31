import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';

const SavedCard = ({ onAnimationFinish }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 0.8, 
      duration: 500,
      useNativeDriver: false, 
    }).start();

    const timeout = setTimeout(() => {
      onAnimationFinish();
    }, 1000); 

    return () => {
      clearTimeout(timeout);
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
  }, [onAnimationFinish, opacity]);

  return (
    <Animated.View style={[styles.animationContainer, { opacity }]}>
      <Image
        source={require('./assets/Animation.gif')} 
        style={styles.gifImage}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    borderRadius: 10,
    zIndex: 1000,
  },
  gifImage: {
    width: 280,
    height: 200,
    top:-45,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default SavedCard;
