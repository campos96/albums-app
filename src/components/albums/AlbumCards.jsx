import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import styles from "./album.style";
import getAlbums from "../../services/album.service";

const AlbumCards = ({ navigation }) => {
  const AlbumList = getAlbums();
  return (
    <View style={styles.container}>
      <FlatList
        data={AlbumList}
        renderItem={({ index, item }) => (
          <Card
            {...item}
            onPress={() =>
              navigation.navigate("AlbumSongs", { albumId: item.id })
            }
          />
        )}
      />
    </View>
  );
};

export const Card = ({
  id,
  title,
  type,
  publish,
  author,
  coverUrl,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.album}>
        <View style={{ marginRight: 10 }}>
          <Image style={styles.albumCover} source={{ uri: coverUrl }} />
        </View>
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Text style={styles.albumTitle}>{title}</Text>
          <Text style={styles.albumAutor}>
            {type} - {author}
          </Text>
          {type === "Album" && (
            <Text style={styles.albumPublish}>{publish}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AlbumCards;
