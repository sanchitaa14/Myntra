import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import trendsData from '../../trends.json'; // Ensure this path is correct
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header'

const BlogListScreen = () => {
  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />

        <FlatList
          data={trendsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.blogContainer}>
              <View style={styles.writerContainer}>
                <Image style={styles.writerImage} source={{ uri: item.writer_profile_image }} />
                <Text style={styles.writerName}>{item.writer_name}</Text>
              </View>
              <Text style={styles.blogTitle}>{item.title}</Text>
              {item.images && item.images.map((image, index) => (
                <TouchableOpacity key={index} onPress={() => openLink(image.link)}>
                  <Image style={styles.image} source={{ uri: image.url }} />
                </TouchableOpacity>
              ))}
              <Text style={styles.blogContent}>{item.content}</Text>
              {/* Additional elements like product links */}
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  blogContainer: {
    marginBottom: 20,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  writerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  writerImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  writerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  blogTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  blogContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default BlogListScreen;
