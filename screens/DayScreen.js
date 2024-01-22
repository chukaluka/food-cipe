import { View, Text } from 'react-native'
import React from 'react'

const DayScreen = ({ route }) => {

    const { mondayInput, tuesdayInput, /* ... Repeat for other days */ } = route.params;


  return (
<View className='flex-1 justify-center items-center'>
      <Text>Manage Your Food</Text>
      <Text>Monday Input: {mondayInput}</Text>
      <Text>Tuesday Input: {tuesdayInput}</Text>
      {/* ... Repeat for other days */}
    </View>
  )
}

export default DayScreen