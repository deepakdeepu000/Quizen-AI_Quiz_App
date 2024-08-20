
import React, { useState, useRef } from 'react';
import { View, Text, TouchableWithoutFeedback, Animated, PanResponder } from 'react-native';

const ShadowButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handleHover = (event) => {
    // Check for hover state based on event type (e.g., mouseenter/mouseleave)
    const isEntering = event.nativeEvent.type === 'mouseenter';
    setIsHovered(isEntering);

    Animated.spring(scaleValue, {
      toValue: isEntering ? 0.95 : 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
    backgroundColor: isHovered ? '#4dccc6' : '#00000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: isHovered ? 0.5 : 0.25,
    shadowRadius: isHovered ? 17 : 2.5,
    elevation: isHovered ? 12 : 3,
  };

  return (
    <TouchableWithoutFeedback onHover={handleHover}>
      <Animated.View style={[styles.button, animatedStyle]}>
        <Text style={styles.buttonText}>Generate Questions</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  button: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#eee',
    fontWeight: 'bold',
  },
};

export default ShadowButton;
