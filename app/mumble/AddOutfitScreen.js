import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const AddOutfitScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const [tags, setTags] = useState('');
  const [items, setItems] = useState([{ itemName: '', itemLink: '', itemId: '' }]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const addItem = () => {
    setItems([...items, { itemName: '', itemLink: '', itemId: '' }]);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const uploadImageToFirebase = async (imageUri) => {
    const formData = new FormData();
    formData.append('file', {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'photo.jpg',
    });
  
    try {
      const response = await axios.post('https://mumble-backend-8az2.onrender.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.url;
    } catch (error) {
      console.error('Error uploading image to Firebase:', error);
      return null;
    }
  };
  
  const handleSubmit = async () => {
    if (!photo) {
      console.error('No photo selected');
      return;
    }
    // Photo URL is already correctly handled by the uploadImageToFirebase function
    const imageUrl = await uploadImageToFirebase(photo);
    if (!imageUrl) {
      console.error('Failed to upload image to Firebase');
      return;
    }
  
    const newOutfit = {
      photo: imageUrl, // URL of the uploaded image
      name,
      tags: tags.split(','),
      items,
    };
  
    try {
      const response= await axios.post('https://mumble-backend-8az2.onrender.com/api/outfits/addOutfit', newOutfit);
      console.log('Outfit added successfully', response.data);
      navigation.goBack();
    } catch (error) {
      console.error('Error adding outfit:', error);
    }
  };
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Outfit Photo</Text>
      <TouchableOpacity onPress={pickImage} style={styles.photoContainer}>
        {photo ? <Image source={{ uri: photo }} style={styles.photo} /> : <Text>Select a Photo</Text>}
      </TouchableOpacity>
      <Text style={styles.label}>Outfit Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter outfit name"
        placeholderTextColor="#666"
      />

      <Text style={styles.label}>Tags</Text>
      <TextInput
        style={styles.input}
        value={tags}
        onChangeText={setTags}
        placeholder="Comma separated tags"
        placeholderTextColor="#666"
      />

      <Text style={styles.label}>Items in the Outfit</Text>
      {items.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <TextInput
            style={styles.input}
            placeholder="Item Name"
            value={item.itemName}
            onChangeText={(value) => handleItemChange(index, 'itemName', value)}
            placeholderTextColor="#666"
          />
          <TextInput
            style={styles.input}
            placeholder="Item Link"
            value={item.itemLink}
            onChangeText={(value) => handleItemChange(index, 'itemLink', value)}
            placeholderTextColor="#666"
          />
          <TextInput
            style={styles.input}
            placeholder="Item ID"
            value={item.itemId}
            onChangeText={(value) => handleItemChange(index, 'itemId', value)}
            placeholderTextColor="#666"
          />
          {index < items.length - 1 && <View style={styles.separator} />}
        </View>
      ))}

      <TouchableOpacity onPress={addItem} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Item</Text>
      </TouchableOpacity>

      <View style={{ marginBottom: 40 }}>
        <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Add Outfit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
    color: '#E91E63',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
    borderRadius: 8,
    color: '#333',
  },
  photoContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    marginBottom: 16,
    borderRadius: 8,
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  itemContainer: {
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightpink',
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: '#E91E63',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#880E4F',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddOutfitScreen;
