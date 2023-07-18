import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Albums from "./src/components/albums/Albums";
import AlbumDetails from "./src/components/albumDetails/AlbumDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import SearchAlbums from "./src/components/searchAlbums/SearchAlbums";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#008080" />
      <Stack.Navigator>
        <Stack.Screen
          name="Albums"
          options={{ title: "Albums" }}
          component={Albums}
        />
        <Stack.Screen
          name="AlbumSongs"
          options={{ title: "Album songs" }}
          component={AlbumDetails}
        />
        <Stack.Screen
          name="SearchAlbums"
          options={{ title: "Search Albums" }}
          component={SearchAlbums}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
