import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';


const HomeScreens = () => {
    const route = useRoute();
    const { name } = route.params || {};

  return (
    <View className='flex-1 justify-center items-center'>
      <Text>Hello, {name}</Text>
    </View>
  )
}

export default HomeScreens