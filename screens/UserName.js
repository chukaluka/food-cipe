import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, {FlipInEasyY, Easing} from 'react-native-reanimated';

const UserName = ({ navigation }) => {
    const [name, setName] = useState('');

    const pressNavigate = () => {
        if (name.trim() !== '') {
        navigation.navigate('HomeScreens', { name })
    } else {
        alert('Please enter your name');
      }
    }
    

  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
        }}>
    <View className='flex-1 justify-center items-center bg-yellow-400'>
      <Animated.View entering={FlipInEasyY.duration(500).delay(400).easing(Easing.ease)} style={styles.div} className='w-4/5 p-6 bg-white rounded-2xl shadow-2xl'>
        <View className='justify-center items-center pb-7'>
            <FontAwesome5 name="user-circle" size={50} color="#8f3903" />
        </View>
        
        <TextInput
          className='h-12 border rounded-lg mb-4 px-4'
          placeholder="What's Your Name?"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <TouchableOpacity onPress={pressNavigate} className='bg-yellow-700 p-4 rounded-lg'>
          <Text className='text-white font-bold text-center'>Enter</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default UserName;

const styles = StyleSheet.create ({
    div: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 15,
    }
})