import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionCard from '../components/RideOptionCard';
import { useNavigation } from '@react-navigation/native'
import { Icon } from "react-native-elements";
const MapScreen = () => {
  const Stack=createNativeStackNavigator()
  const navigation=useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} className='absolute left-8 z-50 p-3 top-16 bg-gray-100 shadow-lg rounded-full'>
        <Icon name='menu' />
      </TouchableOpacity>
      <View className='h-1/2'>
       <Map />
      </View>
      <View className='h-1/2'>
        <Stack.Navigator>
          <Stack.Screen name='NavigateCard' component={NavigateCard} options={{
            headerShown:false
          }}/>
          <Stack.Screen name='RideOptionCard' component={RideOptionCard} options={{headerShown:false}}  />
        </Stack.Navigator>


      </View>
      </View>

  )
}

export default MapScreen

