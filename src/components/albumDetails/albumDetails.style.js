import { StyleSheet } from "react-native";

const fontType = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#dfdfdf",
  },
  album: {
    backgroundColor: "#fbfbfb",
    padding: 10,
    margin: 1,
    flex: 1,
  },
  header: { },
  albumTitle: {
    fontFamily: fontType.bold,
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  albumAutor: {
    fontFamily: fontType.bold,
    fontSize: 14,
    color: "#333",
  },
  albumPublish: {
    fontFamily: fontType.medium,
    fontSize: 12,
    color: "#333",
  },
  albumCover: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  albumCoverBox: {
    backgroundColor: "white",
    borderRadius: 0,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    width: 230,
    height: 230,
    alignSelf: "center",
    marginVertical: 5,
  },
  songName: {
    fontFamily: fontType.bold,
    fontSize: 16,
    color: "#333",
  },
  songAuthor: {
    fontFamily: fontType.regular,
    fontSize: 12,
    color: "#333",
  },
  songOptionsButton: {
    fontFamily: fontType.bold,
    fontSize: 24,
    color: "#333",
    alignSelf: "flex-end",
  },
  songCover: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    borderRadius: 0,
    overflow: "hidden",
  },
});

export default styles;
