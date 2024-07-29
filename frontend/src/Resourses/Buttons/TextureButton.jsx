// import React from 'react';
// import { Text, Pressable, Animated, StyleSheet } from 'react-native';

// const TextureButton = ({ onPress }) => {
//     const glowValue = new Animated.Value(0);

//     React.useEffect(() => {
//         const glowAnimation = Animated.loop(
//             Animated.sequence([
//                 Animated.timing(glowValue, {
//                     toValue: 1,
//                     duration: 1000,
//                     useNativeDriver: false,
//                 }),
//                 Animated.timing(glowValue, {
//                     toValue: 0,
//                     duration: 1000,
//                     useNativeDriver: false,
//                 }),
//             ])
//         );
//         glowAnimation.start();
//         return () => glowAnimation.stop();
//     }, []);

//     const backgroundColor = glowValue.interpolate({
//         inputRange: [0, 1],
//         outputRange: ['#ccffcc', '#ffcc99'],
//     });

//     return (
//         <Pressable
//             style={[styles.customBtn, { backgroundColor  : "#ccffcc"}]}
//             onPress={onPress}
//         >
//             <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
//         </Pressable>
//     );
// };

// const styles = StyleSheet.create({
//     customBtn: {
//         width: 130,
//         height: 40,
//         borderRadius: 5,
//         padding: 10,
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: '#fff',
//         fontFamily: 'Lato',
//         fontWeight: '500',
//         transition: '0.3s ease all', // Not used here
//         shadowColor: '#000',
//         shadowOffset: { width: 1, height: 3 },
//         shadowOpacity: 0.5,
//         shadowRadius: 2,
//         elevation: 3,
//     },
//     buttonText: {
//         color: '#000',
//     },
// });

// export default TextureButton;

import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Animated } from 'react-native';

const TextureButton = ({ onPress, buttonText, buttonStyle = {}, textStyle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const scaleValue = new Animated.Value(1);

  const handleHoverIn = () => {
    setIsHovered(true);
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handleHoverOut = () => {
    setIsHovered(false);
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
    ...(isHovered
      ? {
          backgroundColor: buttonStyle.hoverBackgroundColor || '#000',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          elevation: 10,
        }:
        {
          backgroundColor: buttonStyle.backgroundColor || '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }),
  };

  return (
    <TouchableWithoutFeedback onPressIn={handleHoverIn} onPressOut={handleHoverOut} onPress={onPress}>
      <Animated.View style={[styles.button, animatedStyle]}>
        <Text style={[styles.buttonText, textStyle]}>{buttonText}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = {
  button: {
    margin: '10px',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
};

export default TextureButton;
