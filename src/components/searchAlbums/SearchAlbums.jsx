import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import styles from "./searchAlbum.style";
import { useState } from "react";
import { Card } from "../albums/AlbumCards";
import { searchAlbums } from "../../services/album.service";

const SearchAlbums = ({ navigation }) => {
  const [albums, setAlbums] = useState([]);
  const [query, setQuery] = useState("");

  const handleOnChange = (search) => {
    setQuery(search);
    search === "" ? setAlbums([]) : setAlbums(searchAlbums(search));
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContent}>
        <View style={styles.searchBox}>
          <View style={{ width: "85%" }}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search Your Library"
              onChangeText={handleOnChange}
            ></TextInput>
          </View>
          <View
            style={{
              width: "15%",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}
          >
            <TouchableOpacity style={styles.cancelButton}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {albums && (
            <View>
              <FlatList
                data={albums}
                renderItem={({ item }) => {
                  return (
                    <Card
                      {...item}
                      onPress={() =>
                        navigation.navigate("AlbumSongs", { albumId: item.id })
                      }
                    />
                  );
                }}
              />
            </View>
          )}
        </View>
        <View>
          {albums.length == 0 && query != "" && (
            <View style={styles.searchEmptyContainer}>
              <Text style={styles.searchEmptyTitle}>Couldn't find</Text>
              <Text style={styles.searchEmptyQuery}>"{query}"</Text>
              <Text style={styles.searchEmptyText}>
                Try searching again using a different spelling or keywork.
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default SearchAlbums;
