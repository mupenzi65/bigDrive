import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env'
import { setOrgin,setDestination } from '../slices/navSlice';
import {useDispatch} from 'react-redux'
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
  const dispatch=useDispatch()
    

  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='p-5'>
        <Image
        source={{
          uri:'https://links.papareact.com/gzs'
        }}
        style={{
          width:100,
          height:100,
          resizeMode:'contain'
        }}
        
        />
        <GooglePlacesAutocomplete 
        styles={{
          container:{
            flex:0
          },
          textInput:{
            fontSize:18
          }
        }}
        onPress={(data,details =null)=>{
          dispatch(setOrgin({
            location:details.geometry.location,
            description:data.description
          }))
          dispatch(setDestination(null))
          

        }}
        enablePoweredByContainer={false}
        minLength={2}
        debounce={400}
        placeholder='where From'
        nearbyPlacesAPI='GooglePlacesSearch'
        fetchDetails={true}
        returnKeyType={'search'}
        query={{
          key:GOOGLE_MAPS_APIKEY,
          language:"en"
        }}
        
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen