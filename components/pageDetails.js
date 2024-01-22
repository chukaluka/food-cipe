import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const PageDetails = () => {

    const navigation = useNavigation();

      // Use state to store the input values for each day
  const [mondayInput, setMondayInput] = useState('');
  const [tuesdayInput, setTuesdayInput] = useState('');
  const [wednesdayInput, setWednesdayInput] = useState('');
  const [thursdayInput, setThursdayInput] = useState('');
  const [fridayInput, setFridayInput] = useState('');
  const [saturdayInput, setSaturdayInput] = useState('');
  const [sundayInput, setSundayInput] = useState('');
    
  pressHandler = () => {
    navigation.navigate('DayScreen', {
      // Pass the input values to the next screen
        mondayInput,
        tuesdayInput,
        wednesdayInput,
        thursdayInput,
        fridayInput,
        saturdayInput,
        sundayInput,
    });
  };

  return (
    <View className='m-7'>
        <View className='mb-6'>
            <Text className='p-1 font-medium'>Monday</Text>
            <TextInput
                style={styles.firstView} 
                multiline
                className='p-3 mt-1'
                value={mondayInput}
                onChangeText={(text) => setMondayInput(text)}
            />
        </View>
        <View className='mb-6'>
            <Text className='p-1 font-medium'>Tuesday</Text>
            <TextInput
                style={styles.firstView} 
                multiline
                className='p-3 mt-1'
                value={tuesdayInput}
                onChangeText={(text) => setTuesdayInput(text)}
            />
        </View>
        <View className='mb-6' >
            <Text className='p-1 font-medium'>Wednesday</Text>
            <TextInput
                style={styles.firstView} 
                multiline
                className='p-3 mt-1'
                onChangeText={(text) => setWednesdayInput(text)}
            />
        </View>
        <View className='mb-6'>
            <Text className='p-1 font-medium'>Thursday</Text>
            <TextInput
                style={styles.firstView} 
                multiline
                className='p-3 mt-1'
                onChangeText={(text) => setThursdayInput(text)}
            />
        </View>
        <View className='mb-6'>
            <Text className='p-1 font-medium'>Friday</Text>
            <TextInput
                style={styles.firstView} 
                multiline
                className='p-3 mt-1'
                onChangeText={(text) => setFridayInput(text)}
            />
        </View>
        <View className='mb-6' >
            <Text className='p-1 font-medium'>Saturday</Text>
            <TextInput
                style={styles.firstView} 
                multiline
                className='p-3 mt-1'
                onChangeText={(text) => setSaturdayInput(text)}
            />
        </View>
        <View className='mb-6' >
            <Text className='p-1 font-medium'>Sunday</Text>
            <TextInput
                style={styles.firstView} 
                multiline
                className='p-3 mt-1'
                onChangeText={(text) => setSundayInput(text)}
            />
        </View>

        {/* Button */}
        <View style={styles.buttonView}>
            <TouchableOpacity 
            style={styles.button}
            onPress={pressHandler}
            >
                <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default PageDetails

const styles = StyleSheet.create({
    firstView: {
        backgroundColor: 'white',
        borderRadius: 10,
        // shadow for ios
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 20,
        },
        shadowRadius: 10,
        // shadow for android
        elevation: 5,
    },
    buttonView: {
        alignItems: 'center'
      },

      buttonText: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'serif',
        letterSpacing: 3
      },

      button: {
        backgroundColor: 'hsl(120, 40%, 30%)',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },

})

