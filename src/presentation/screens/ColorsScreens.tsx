import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../config/exa-theme';

export const ColorsScreens = () => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handlePress = () => {
    const color = getRandomColor();
    
  };

  return (
    <View>
      <Text>ColorsScreens</Text>
      <Pressable style={styles.botton2} onPress={handlePress}>
        <Text style={{color: '#000000', fontSize: 20}}>Cambiar Color</Text>
      </Pressable>
    </View>
  );
};
