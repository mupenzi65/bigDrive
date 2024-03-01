import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon } from "react-native-elements";
import { Image } from 'react-native';

const data=[
  {
    id:"Uber-X-123",
    title:'UberX',
    multiplier:1,
    image:'https://links.papareact.com/3pn'
  },
  {
    id:"Uber-XL-456",
    title:'Uber XL',
    multiplier:1.2,
    image:'https://links.papareact.com/5w8'
  },
  {
    id:"Uber-LUX-789",
    title:'Uber LUX',
    multiplier:1.75,
    image:'https://links.papareact.com/7pf'
  },
]


const RideOptionCard = () => {
  const navigation=useNavigation()
  const[selected,setSelected]=useState(null)
  
  return (
    <SafeAreaView className='bg-white flex-grow'>
      <TouchableOpacity onPress={()=>navigation.navigate('NavigateCard')} className='absolute z-50 top-3 left-5 p-3 rounded-full'>
         <Icon name='chevron-left' />
      </TouchableOpacity>
      <View>
      <Text className='text-center py-5 text-xl'>Select a Ride</Text>
      </View>
      <FlatList data={data} keyExtractor={(item)=> item.id} renderItem={({item:{id,title,image,multiplier},item})=>(
        <TouchableOpacity onPress={()=>setSelected(item)} className={`flex-row justify-between items-center px-10 ${id===selected?.id && 'bg-gray-200'}`}>
          <Image style={{width:100,height:100,resizeMode:'contain'}} source={{uri:image}} />
          <View className='-ml-6'>
           <Text className='text-xl font-semibold'>{title}</Text>
           <Text>Travel time...</Text>
          </View>
          <Text className='text-xl'>$99</Text>

        </TouchableOpacity>
  )}/>
  <View>
    <TouchableOpacity disabled={!selected} className={`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
      <Text className='text-white text-center text-xl'>Choose {selected?.title}</Text>
    </TouchableOpacity>
  </View>
    </SafeAreaView>
  )
}

export default RideOptionCard