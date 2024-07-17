import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const PointsScreen = () => {
  
  const isProfileCompleted = true; 
  const isDailyLoginDone = true; 

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.pointsContainer}>
          <View style={styles.pointContainer}>
            <Image source={require('../assets/point1.png')} style={styles.pointImage} />
            <View style={styles.pointsContent}>
              <Text style={styles.pointsText}>Available Points</Text>
              <Text style={styles.pointsValue}>1200</Text>
            </View>
          </View>
          <View style={styles.pointContainer}>
            <Image source={require('../assets/point2.png')} style={[styles.pointImage, styles.point2]} />
            <View style={[styles.pointsContent,styles.today]}>
              <Text style={styles.pointsText}>Today's Points</Text>
              <Text style={styles.pointsValue}>50</Text>
            </View>
          </View>
        </View>
        <View style={styles.graphContainer}>
          <Image source={require('../assets/chart.png')} style={styles.chartImage} />
          <Image source={require('../assets/swipe.png')} style={styles.swipeImage} />
          <Text style={styles.graphTitle}>Today's Swipe</Text>
          <Text style={styles.graphData}>15/30</Text>
        </View>
      </View>

      
      <View style={styles.earnPointsSection}>
        <Text style={styles.earnPointsTitle}>Earn Points</Text>
        <TouchableOpacity style={styles.challenge}>
          <View style={styles.challengeDetails}>
            <Text style={styles.challengeText}>Complete Your Profile</Text>
          </View>
          {isProfileCompleted ? (
            null
          ) : <View style={styles.pointsCircle}>
            <Text style={styles.pointsValueCircle}>+50</Text>
          </View>}
          {isProfileCompleted && (
            <Image source={require('../assets/check.png')} style={styles.checkIcon} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.challenge}>
          <View style={styles.challengeDetails}>
            <Text style={styles.challengeText}>Refer a Friend and Earn</Text>
          </View>
          <View style={styles.pointsCircle}>
            <Text style={styles.pointsValueCircle}>+80</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.challenge}>
          <View style={styles.challengeDetails}>
            <Text style={styles.challengeText}>Daily Login Points</Text>
          </View>
          {isDailyLoginDone ? null : <View style={styles.pointsCircle}>
            <Text style={styles.pointsValueCircle}>+10</Text>
          </View>}
          {isDailyLoginDone && (
            <Image source={require('../assets/check.png')} style={styles.checkIcon} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.challenge}>
          <View style={styles.challengeDetails}>
            <Text style={styles.challengeText}>Daily Swipe Quota</Text>
          </View>
          <View style={styles.pointsCircle}>
            <Text style={styles.pointsValueCircle}>+15</Text>
          </View>
        </TouchableOpacity>
      </View>

  
      <View style={styles.redeemSection}>
        <Text style={styles.redeemTitle}>Redeem Coupons & Vouchers</Text>
        <TouchableOpacity style={styles.coupon}>
          <View style={styles.couponDetails}>
            <Text style={styles.couponText}>Rs 5000 Myntra Gift Voucher at just 20000 points</Text>
            <View style={styles.pointsContainer}>
              <Text style={styles.pointsValueRight}>1200/20000</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.coupon}>
          <View style={styles.couponDetails}>
            <Text style={styles.couponText}>Rs 200 Myntra Gift Voucher at just 800 points</Text>
            <View style={styles.pointsContainer}>
              <Text style={styles.pointsValueRight}>1200/8000</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.coupon}>
          <View style={styles.couponDetails}>
            <Text style={styles.couponText}>Rs 1000 Myntra Gift Voucher at just 400 points</Text>
            <View style={styles.pointsContainer}>
              <Text style={styles.pointsValueRight}>1200/4000</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.seeMoreContainer}>
          <Text style={styles.seeMoreText}>See More Vouchers</Text>
        </TouchableOpacity>
      </View>
  
  <View style={styles.pointActivitySection}>
        <Text style={styles.pointActivityTitle}>Your Point Activity</Text>
        <View style={styles.activityItem}>
          <Text style={styles.activityTime}>Monday, Jul 15, 2024, 07:57 PM</Text>
          <Text style={styles.activityText}>Completed a daily check-in mission</Text>
          <Text style={styles.activityPoints}>+1</Text>
        </View>
        <View style={styles.activityItem}>
          <Text style={styles.activityTime}>Monday, Jul 15, 2024, 02:15 AM</Text>
          <Text style={styles.activityText}>Completed profile</Text>
          <Text style={styles.activityPoints}>+10</Text>
        </View>
        <View style={styles.activityItem}>
          <Text style={styles.activityTime}>Sunday, Jul 14, 2024, 06:10 PM</Text>
          <Text style={styles.activityText}>Completed a daily check-in mission</Text>
          <Text style={styles.activityPoints}>+1</Text>
        </View>
      </View>

      
      <View style={{ paddingBottom: 40}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pointsContainer: {
    justifyContent: 'center',
    
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    left:-52,
    alignItems:'space-between',
    marginBottom: 10,
  },
  pointImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginTop:20,
  },
  point2:{
    left:-6,
  },
  pointsContent: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  pointsText: {
    fontSize: 14,
    top:-10,
    left:-10,
    color: '#757575',
  },
  pointsValue: {
    fontSize: 16,
    top:-10,
    left:-10,
    fontWeight: 'bold',
    color: '#E91E63', 
  },
  graphContainer: {
    alignItems: 'center',
    marginTop: -5,
  },
  swipeImage: {
    position: 'absolute',
    top: '50%', 
    marginTop: -55,
    width: 60,
    height: 60,
  },
  chartImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  graphTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E91E63',
  },
  graphData: {
    fontSize: 20,
    marginTop: 4,
  },
  earnPointsSection: {
    marginTop: -5,
  },
  earnPointsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#E91E63', 
  },
  today:{
    left:-10,
  },
  challenge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#FFF', 
    borderWidth: 1,
    borderColor: '#E91E63', 
  },
  challengeDetails: {
    flex: 1,
    marginRight: 20,
  },
  challengeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#880E4F', 
  },
  pointsCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFCDD2', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsValueCircle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#880E4F', 
  },
  checkIcon: {
    width: 24,
    height: 24,
    tintColor: '#E91E63', 
  },
  redeemSection: {
    marginTop: 20,
  },
  redeemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#E91E63', 
  },
  coupon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#FFF', 
    borderWidth: 1,
    borderColor: '#E91E63',
  },
  couponDetails: {
    flex: 1,
    marginRight: 20,
  },
  couponText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'brown', 
  },
  pointsContainer: {
    flex: 1,
    alignItems: 'flex-end', 
  },
  pointsValueRight: {
    fontSize: 16,
    fontWeight: 'bold',
    right:-30,
    color: '#E91E63',
  },
  seeMoreContainer: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  seeMoreText: {
    fontSize: 14,
    color: '#E91E63',
    textDecorationLine: 'underline',
  },
  pointActivitySection: {
    marginTop: 20,
  },
  pointActivityTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#E91E63', 
  },
  activityItem: {
    paddingVertical: 8,
  },
  activityTime: {
    fontSize: 12,
    color: '#757575', 
  },
  activityText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#212121', 
  },
  activityPoints: {
    fontSize: 14,
    borderColor:'#E91E63',
    borderRadius:15,
    width:30,
    right:-340,
    top:-20,
    backgroundColor:'#E91E63',
    fontWeight: 'bold',
    color: '#fff', 
  },
});

export default PointsScreen;
