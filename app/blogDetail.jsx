import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const BlogDetailScreen = ({ route }) => {
  const { image } = route.params;

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <Text>No image available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
});

export default BlogDetailScreen;
