import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { useNavigation } from '@react-navigation/native'; 

const EditProfileScreen = () => {
  const { token } = useAuth(); 
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [dob, setDob] = useState('');
  const [preferences, setPreferences] = useState([]);
  const [newPreference, setNewPreference] = useState('');
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Fetch the profile data
    axios.get('https://mumble-backend-8az2.onrender.com/api/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
   .then(response => {
    setProfile(response.data);
   // setPreferences(response.data.userPreferences || []);
   const fetchedPreferences = response.data.userPreferences || [];
   setPreferences(fetchedPreferences.map(p => p.tag)); // Only keep tags in the state
  })
    .catch(error => {
      console.error('Error fetching profile data:', error);
    });
  }, []);

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePicture(result.uri);
    }
  };

    const handleAddPreference = () => {
      const trimmedPreference = newPreference.trim();
      if (trimmedPreference && !preferences.includes(trimmedPreference)) {
        const newPreferenceObj = {
          tag: trimmedPreference,
          weight: 1,
          lastUpdated: new Date().toISOString(),
        };
        setPreferences([...preferences, newPreferenceObj]);
        setNewPreference('');
      }
  };

  const handleSaveChanges = async () => {
    if (profile) {
        try {
          await axios.put('https://mumble-backend-8az2.onrender.com/api/preferences', {
            email: profile.email, // Ensure profile is defined and has the email property
            userPreferences: preferences.map(tag => ({
              tag,
              weight: 1, // Assuming weight remains 1 for all preferences; adjust if necessary
              lastUpdated: new Date().toISOString(),
            })),
          }, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });
          console.log('Preferences updated successfully');
          navigation.navigate('Profile');
        } catch (error) {
          console.error('Error updating preferences:', error);
        }
      } else {
        console.error('Profile data is not available');
      }
  };
  
  

  const handleRemovePreference = async (preferenceToRemove) => {
    try {
      // Remove the preference from the UI state
      const updatedPreferences = preferences.filter(p => p !== preferenceToRemove);
      setPreferences(updatedPreferences);
  
      // Send request to the backend to update preferences
      if (profile) {
        await axios.put('https://mumble-backend-8az2.onrender.com/api/preferences', {
          email: profile.email,
          userPreferences: updatedPreferences.map(tag => ({
            tag,
            weight: 1, // Assuming weight remains 1 for all preferences; adjust if necessary
            lastUpdated: new Date().toISOString(),
          })),
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        console.log('Preferences updated successfully');
      } else {
        console.error('Profile data is not available');
      }
    } catch (error) {
      console.error('Error removing preference:', error);
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={handleImagePick} style={styles.imageWrapper}>
          {profilePicture ? (
            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
          ) : (
            <Text style={styles.imagePlaceholder}>Add Profile Picture</Text>
          )}
        </TouchableOpacity>
        <View style={styles.detailsWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#B0B0B0"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your date of birth (YYYY-MM-DD)"
            placeholderTextColor="#B0B0B0"
            value={dob}
            onChangeText={setDob}
          />
        </View>
      </View>

      <View style={styles.preferencesContainer}>
        <Text style={styles.preferenceTitle}>Edit Preferences</Text>
        {preferences.map((preference, index) => (
          <View key={index} style={styles.preferenceItem}>
            <Text style={styles.preferenceText}>{preference}</Text>
            <TouchableOpacity onPress={() => handleRemovePreference(preference)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TextInput
          style={styles.input}
          placeholder="Add new preference"
          placeholderTextColor="#B0B0B0"
          value={newPreference}
          onChangeText={setNewPreference}
        />
        <TouchableOpacity style={styles.mainbutton} onPress={handleAddPreference}>
          <Text style={styles.mainText}>Add Preference</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.mainbutton,styles.savebutton]} onPress={handleSaveChanges}>
        <Text style={styles.mainText}>Save Changes</Text>
      </TouchableOpacity>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  imageWrapper: {
    marginRight: 16,
    borderRadius: 50,
    borderColor: '#778396',
    borderWidth: 1,
    overflow: 'hidden',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: '100%',
    height: '100%',
  },
  imagePlaceholder: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  detailsWrapper: {
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: '#778396',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  preferencesContainer: {
    marginBottom: 24,
  },
  preferenceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    padding: 10,
    borderColor: '#778396',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  preferenceText: {
    fontSize: 16,
    color: '#333',
  },
  removeButton: {
    color: '#E91E63',
    fontWeight: 'bold',
  },
  mainbutton: {
    backgroundColor: '#E91E63',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 0,
    alignItems: 'center',
  },
  mainText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  savebutton:{
    marginTop:-15,
  }
});

export default EditProfileScreen;
