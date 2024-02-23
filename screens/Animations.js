import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

const Animations = () => {
  const [micBounceAnimation] = useState(new Animated.Value(1));
  const [searchZoomAnimation] = useState(new Animated.Value(1));
  const [offerRotationAnimation] = useState(new Animated.Value(0));
  const [offerRotationStarted, setOfferRotationStarted] = useState(false);

  useEffect(() => {
    startSearchZoomAnimation();
  }, []);

  const handleMicPress = () => {
    Animated.sequence([
      Animated.timing(micBounceAnimation, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(micBounceAnimation, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const startSearchZoomAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(searchZoomAnimation, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(searchZoomAnimation, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const startOfferRotationAnimation = () => {
    Animated.loop(
      Animated.timing(offerRotationAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();
    setOfferRotationStarted(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity
          style={{marginLeft: 12}}
          onPress={startSearchZoomAnimation}>
          <AnimatedIcon
            name="search"
            color="#F28585"
            size={24}
            style={{transform: [{scale: searchZoomAnimation}]}}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Restaurant name or a dish..."
          placeholderTextColor="#333333"
        />
        <TouchableOpacity style={{marginRight: 12}} onPress={handleMicPress}>
          <AnimatedIcon
            name="mic"
            size={24}
            color="#F28585"
            style={{transform: [{scale: micBounceAnimation}]}}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={startOfferRotationAnimation}>
        <Animated.Image
          source={require('../assets/images/shop_offer.png')}
          style={[
            styles.image,
            {
              transform: [
                {
                  rotate: offerRotationStarted
                    ? offerRotationAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['60deg', '-60deg'],
                        // To rotate 360 deg
                        // outputRange: ['0deg', '360deg'],
                      })
                    : '0deg',
                },
              ],
            },
          ]}
        />
      </TouchableOpacity>
      <Text style={styles.offers}>Offers</Text>
      <Text style={styles.discounts}>Flat Discounts</Text>
    </View>
  );
};

export default Animations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fbf6ee',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
  },
  offers: {
    marginTop: 10,
    color: '#333',
    fontFamily: 'PlaypenSans-Bold',
    marginHorizontal: 12,
    fontSize: 15,
  },
  discounts: {
    fontFamily: 'PlaypenSans-Medium',
    color: '#39a7ff',
    marginHorizontal: 12,
  },
  image: {
    marginTop: 20,
    height: 150,
    width: 150,
  },
});
