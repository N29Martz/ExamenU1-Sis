import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../../config/exa-theme';

export const TempScreens = () => {
  const [tempI, setTempI] = useState(20);

  const textColor = tempI < 15 ? 'blue' : tempI <= 25 ? 'green' : 'red';

  return (
    <View>
      <Text style={styles.title}>Temperature APP</Text>
      <Text
        style={{
          color: textColor,
          fontSize: 60,
          textAlign: 'center',
          marginBottom: 90,
        }}>
        {tempI}°
      </Text>

      <View style={styles.containerBotton}>
        <Pressable style={styles.button} onPress={() => setTempI(tempI - 1)}>
          <Text style={styles.buttonTitle}>-</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => setTempI(tempI + 1)}>
          <Text style={styles.buttonTitle}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};
