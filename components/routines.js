import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Animated, {FadeInDown} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const Routines = () => {
    const navigation = useNavigation();

    const handleImageClickBreakfast = (imageSource) => {
        navigation.navigate('BreakfastPage', { imageSource});
      };
    const handleImageClickLunch = (imageSource) => {
        navigation.navigate('LunchPage', { imageSource});
      };
    const handleImageClickDinner = (imageSource) => {
        navigation.navigate('DinnerPage', { imageSource});
      };

  return (
    // Animation for the routines ie breakfast, lunch and dinner
    <Animated.View entering={FadeInDown.duration(500).delay(500).springify()}> 
        <ScrollView
            showsVerticalScrollIndicator={false}
        >
            {/* The called onpress function which provides the breakfast image source which will navigate to the RoutinesPage and show only the breakfast image, the breakfast image shown on this page and the breakfast text */}
            <TouchableOpacity onPress={() => handleImageClickBreakfast(require('../assets/images/Breakfast.jpg'))}>
                <Image 
                    source={require('../assets/images/Breakfast.jpg')}
                    style={{width: wp(80), height: hp(20), borderRadius: 10}}
                />
                 <View className='absolute inset-0 p-2'>
                     <Text 
                     style={{fontSize: hp(3)}}
                     className='text-white font-extrabold text-center'>Breakfast</Text>
                </View>
            </TouchableOpacity>

              {/* The called onpress function which provides the lunch image source which will navigate to the RoutinesPage and show only the lunch image, the lunch image shown on this page and the lunch text */}
            <TouchableOpacity className='mt-4' onPress={() => handleImageClickLunch(require('../assets/images/lunch.jpg'))}>
                <Image 
                    source={require('../assets/images/lunch.jpg')}
                    style={{width: wp(80), height: hp(20), borderRadius: 10}}
                />
                 <View className='absolute inset-0 p-2'>
                     <Text 
                     style={{fontSize: hp(3)}}
                     className='text-black font-extrabold text-center'>Lunch</Text>
                </View>
            </TouchableOpacity>

              {/* The called onpress function which provides the dinner image source which will navigate to the RoutinesPage and show only the dinner image, the dinner image shown on this page and the dinner text */}
            <TouchableOpacity className='mt-4' onPress={() => handleImageClickDinner(require('../assets/images/dinner.jpg'))}>
                <Image 
                    source={require('../assets/images/dinner.jpg')}
                    style={{width: wp(80), height: hp(20), borderRadius: 10}}
                />
                 <View className='absolute inset-0 p-2'>
                     <Text 
                     style={{fontSize: hp(3)}}
                     className='text-white font-extrabold text-center'>Dinner</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    </Animated.View>
  )
}

export default Routines

