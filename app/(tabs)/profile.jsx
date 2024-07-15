import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileInitial}>S</Text>
          <View style={styles.adminBadge}>
            <Text style={styles.adminText}>Admin</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Basics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Size Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Skin & Hair</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.options}>
        <View>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Insider</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Coupons</Text>
        </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.personalLoan}>
        <Text style={styles.personalLoanText}>Personal Loan</Text>
        <Text style={styles.personalLoanSubtext}>Get Instant loan up to ₹8 Lakhs</Text>
      </TouchableOpacity>

      <View style={styles.footerOptions}>
        <TouchableOpacity style={styles.footerOption}>
          <Text style={styles.footerOptionText}>Payments & Currencies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerOption}>
          <Text style={styles.footerOptionText}>Earn & Redeem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerOption}>
          <Text style={styles.footerOptionText}>Manage Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerOption}>
          <Text style={styles.footerOptionText}>Challenges</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerOption}>
          <Text style={styles.footerOptionText}>Starred Dresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerOption}>
          <Text style={styles.footerOptionText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerOption}>
          <Text style={styles.footerOptionText}>Myntra Suggests</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerOption}>
          <Text style={styles.footerOptionText}>Settings</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logOut}>
        <Text style={styles.logOutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInitial: {
    fontSize: 24,
    color: '#333',
  },
  adminBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'green',
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  adminText: {
    fontSize: 10,
    color: 'white',
  },
  addButton: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  addText: {
    fontSize: 16,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  navItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    borderWidth: 1,
  },
  navText: {
    fontSize: 14,
    color: '#333',
  },
  options: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',    
   
  },
  option: {
    paddingHorizontal:40,  
    paddingVertical: 15,
    borderWidth:1,
    marginBottom: 16,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  personalLoan: {
    padding: 16,
    backgroundColor: '#ffebee',
    borderRadius: 8,
    marginBottom: 16,
  },
  personalLoanText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  personalLoanSubtext: {
    fontSize: 14,
    color: '#d32f2f',
  },
  footerOptions: {
    marginBottom: 16,
  },
  footerOption: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  footerOptionText: {
    fontSize: 16,
    color: '#333',
  },
  logOutText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d32f2f',
  },
  logOut: {
    padding: 16,
    backgroundColor: '#ffebee',
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: 'red',
    alignContent: 'center',
    alignItems: 'center'
  }
});

export default Profile;
