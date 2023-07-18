import { View, Text, TouchableOpacity } from "react-native";
import AlbumCards from "./AlbumCards";
import styles from "./album.style";

const Albums = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 10, flexDirection: "row" }}>
        <View>
          <Text style={styles.title}>Your Library</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.pillButton}
            onPress={() => navigation.navigate("SearchAlbums")}
          >
            <Text style={styles.pillButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <AlbumCards navigation={navigation} />
    </View>
  );
};

export default Albums;
