import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { getAlbum, getAlbumSongs } from "../../services/album.service";
import styles from "./albumDetails.style";

const AlbumSongs = ({ albumId, navigation }) => {
  const album = getAlbum(albumId);
  const albumSongs = getAlbumSongs(albumId);
  console.log(albumSongs);
  return (
    <View>
      <FlatList
        data={albumSongs}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View
                style={{
                  paddingVertical: 10,
                  flexDirection: "row",
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={styles.songName}>{item.name}</Text>
                  <TouchableHighlight style={styles.songAuthor}>
                    <Text>{album.author}</Text>
                  </TouchableHighlight>
                </View>
                <View>
                  <TouchableOpacity>
                    <Text style={styles.songOptionsButton}>...</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        scrollEnabled={false}
      />
    </View>
  );
};

export default AlbumSongs;
