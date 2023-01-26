import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import navCardStyles from "../styles/navCard-styles";

const NavigateCard = () => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
        <Text
          style={{
            textAlign: "center",
            paddingTop: "5%",
            paddingBottom: "5%",
            fontSize: 20,
            lineHeight: 28,
          }}
        >
          Good morning, Sebas
        </Text>
        <View
          style={{
            borderTopWidth: 0.2,
            borderColor: "rgb(229, 231, 235)",
            flexShrink: 1,
          }}
        >
          <View>
            <GooglePlacesAutocomplete
              placeholder="Where are you going?"
              styles={navCardStyles}
              fetchDetails={true}
              enablePoweredByContainer={false}
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default NavigateCard;
