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

const PlaylistSongs = ({ albumId, navigation }) => {
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
              <View style={{ flexDirection: "row", paddingVertical: 5 }}>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={styles.songCover}
                    source={{ uri: item.album.coverUrl }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    paddingVertical: 10,
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={styles.songName}>{item.name}</Text>
                    <TouchableHighlight style={styles.songAuthor}>
                      <Text>{item.album.author}</Text>
                    </TouchableHighlight>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Text style={styles.songOptionsButton}>...</Text>
                    </TouchableOpacity>
                  </View>
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

export default PlaylistSongs;
