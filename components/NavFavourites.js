import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { Icon } from "react-native-elements";
const data = [
  {
    id: "123",
    icon: "home",
    location: "home",
    destination: "kigali serana hotel",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "work",
    destination: "kigali convetion center",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={()=>(
        <View className='bg-gray-200' style={{height:0.5}}/>
  )}
      renderItem={({ item: { destination, location, icon } }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            className="mr-4 bg-gray-300 p-3 rounded-full"
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
