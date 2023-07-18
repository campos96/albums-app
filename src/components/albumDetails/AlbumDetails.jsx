import { View, Text, Image, ScrollView } from "react-native";
import { getAlbum } from "../../services/album.service";
import styles from "./albumDetails.style";
import AlbumSongs from "./AlbumSongs";
import PlaylistSongs from "./PlaylistSongs";

const AlbumDetails = ({ route, navigation }) => {
  const { albumId } = route.params;
  const album = getAlbum(albumId);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.album}>
          <View style={styles.header}>
            <View style={styles.albumCoverBox}>
              <Image
                style={styles.albumCover}
                source={{ uri: album.coverUrl }}
              />
            </View>
            <View style={{ paddingTop: 10 }}>
              <Text style={styles.albumTitle}>{album.title}</Text>
              {album.type === "Playlist" && (
                <View>
                  <Text style={styles.albumPublish}>{album.description}</Text>
                  <View style={{ flexDirection: "row", columnGap: 5 }}>
                    <Text style={styles.albumAutor}>{album.author}</Text>
                    <Text style={styles.albumAutor}>-</Text>
                    <Text style={styles.albumAutor}>{album.likes} likes</Text>
                  </View>
                  <View style={{ flexDirection: "row", columnGap: 5 }}>
                    <Text style={styles.albumPublish}>{album.songs} songs</Text>
                    <Text style={styles.albumPublish}>-</Text>
                    <Text style={styles.albumPublish}>{album.duration}</Text>
                  </View>
                </View>
              )}
              {album.type === "Album" && (
                <Text style={styles.albumAutor}>{album.author}</Text>
              )}
            </View>
            {album.type === "Album" && (
              <View
                style={{ flexDirection: "row", columnGap: 5, marginTop: 5 }}
              >
                <Text style={styles.albumPublish}>{album.type}</Text>
                <Text style={styles.albumPublish}>-</Text>
                <Text style={styles.albumPublish}>{album.publish}</Text>
              </View>
            )}
          </View>
          <View style={{ marginTop: 10 }}>
            {album.type === "Album" && (
              <AlbumSongs albumId={album.id} navigation={navigation} />
            )}
            {album.type === "Playlist" && (
              <PlaylistSongs albumId={album.id} navigation={navigation} />
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AlbumDetails;
