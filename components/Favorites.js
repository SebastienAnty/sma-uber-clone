import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { Text, View, FlatList, TouchableOpacity } from "react-native";

const data = [
  {
    id: "home1",
    icon: "home",
    location: "Home",
    destination: "Delray Beach, FL",
  },
  {
    id: "work",
    icon: "briefcase",
    location: "Work",
    destination: "Boca Raton, FL",
  },
  {
    id: "vacation",
    icon: "briefcase",
    location: "Vacation",
    destination: "Port-au-Prince, Haiti",
  },
];

const Favorites = () => {
  return (
    <>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
          )}
          renderItem={({ item: { location, destination, icon } }) => (
            <TouchableOpacity style={tw`flex-row items-center p-5`}>
              <Icon
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                type="ionicon"
                color="white"
                size={18}
                name={icon}
              />
              <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default Favorites;
