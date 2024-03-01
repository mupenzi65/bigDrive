import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon }from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import {useSelector} from 'react-redux'
import { selectOrgin } from '../slices/navSlice'
const data=[
    {
        id:"123",
        title:'Get a ride',
        image:"https://links.papareact.com/3pn",
        screen:"MapScreen",
    },
    {
        id:"456",
        title:'Order Food',
        image:"https://links.papareact.com/28w",
        screen:"EatScreen",
    }
]




const NavOptions = () => {
    const navigation=useNavigation()
    const origin=useSelector(selectOrgin)
  return (
   <FlatList keyExtractor={(item)=>item.id} data={data} horizontal renderItem={({item})=>(
    <TouchableOpacity onPress={()=>navigation.navigate(item.screen)}  disabled={!origin} className='p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 rounded w-40'>
        <View className={`${!origin && 'opacity-20'}`}>
            <Image 
             source={{
                uri:item.image
             }}
             style={{width:120,height:120,resizeMode:'contain'}}
            
            
            />
            <Text className='mt-2 text-lg font-medium'>
                {item.title}
            </Text>
            <Icon className='p-2 bg-black rounded-full w-10 mt-4' name='arrowright' color='white' type='antdesign' />
        </View>
    </TouchableOpacity>
   )} />
  )
}

export default NavOptions