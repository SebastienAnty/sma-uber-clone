import React from "react";
import { Text, View, SafeAreaView, Image } from "react-native";
import NavOptions from "../components/NavOptions";
import homeStyles from "../styles/home-styles";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={homeStyles.safeArea}>
      <View style={homeStyles.logoContainer}>
        <Image
          style={homeStyles.logoImage}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
          }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 28,
              backgroundColor: "#f4f4f4",
            },
            description: {
              backgroundColor: "#f4f4f4",
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          placeholder="Where From"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default Home;
