import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import Map from "../components/Map";
import NavigateCard from "../components/NavigateCard";
import RideCard from "../components/RideCard";

const MapScreen = () => {
  const MapStack = createNativeStackNavigator();

  return (
    <>
      <View style={{ height: "50%" }}>
        <Map />
      </View>

      <View style={{ height: "50%" }}>
        <MapStack.Navigator>
          <MapStack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <MapStack.Screen
            name="RideCard"
            component={RideCard}
            options={{
              headerShown: false,
            }}
          />
        </MapStack.Navigator>
      </View>
    </>
  );
};

export default MapScreen;
