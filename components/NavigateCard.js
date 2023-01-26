import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import navCardStyles from "../styles/navCard-styles";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import Favorites from "./Favorites";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

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
              returnKeyType={"search"}
              enablePoweredByContainer={false}
              keepResultsAfterBlur={true}
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={400}
              query={{
                key: GOOGLE_MAPS_APIKEY,
                language: "en",
              }}
              minLength={2}
              onPress={(data, details = null) => {
                dispatch(
                  setDestination({
                    location: details.geometry.location,
                    description: data.description,
                  })
                );
                navigation.navigate("RideCard");
              }}
            />
          </View>
          <Favorites />
        </View>
      </SafeAreaView>
    </>
  );
};

export default NavigateCard;
