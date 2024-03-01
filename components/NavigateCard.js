import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setOrgin,setDestination } from '../slices/navSlice';
import {useDispatch} from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";
const NavigateCard = () => {
  const dispatch=useDispatch()
  const navigation=useNavigation()
  return (
    <SafeAreaView className={"bg-white flex-1 flex-shrink"}>
      <Text className="text-center py-5 text-xl">Good morning ,Mupenzi</Text>
      <View className="border-t border-gray-200 flex-shrink  ">
        <View>
        <GooglePlacesAutocomplete
          fetchDetails={true}
          enablePoweredByContainer={false}
          returnKeyType={"search"}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          styles={InputBoxStyles}
          placeholder="where to"
          debounce={400}
          nearbyPlacesAPI="GooglePlacesSearch"
          onPress={(data,details =null)=>{
            dispatch(setDestination({
              location:details.geometry.location,
              description:data.description
            }))
            navigation.navigate('RideOptionCard')
          }}
        />
        </View>
        <NavFavourites />
        
      </View>
      <View className='flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100'>
        <TouchableOpacity onPress={()=>navigation.navigate('RideOptionCard')} className='flex justify-between flex-row bg-black w-24 px-4 py-2 rounded-full'>
          <Icon name="car" type="font-awesome" color='white' size={16} />
          <Text className='text-white text-center'>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className='flex flex-row  w-24  px-4 rounded-full'>
          <Icon name="fast-food-outline" type="ionicon" color='black' size={16} />
          <Text className=' text-center'>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;
const InputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },

  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
