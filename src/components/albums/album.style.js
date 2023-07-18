import { StyleSheet } from "react-native";

const fontType = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#dfdfdf",
  },
  title: {
    fontSize: 20,
    fontFamily: fontType.bold,
    fontWeight: "900",
  },
  pillButton: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#555",
    alignSelf: "flex-end",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    overflow: "hidden",
    color: "red",
  },
  pillButtonText: {
    fontFamily: fontType.regular,
  },
  album: {
    backgroundColor: "#fbfbfb",
    padding: 10,
    margin: 1,
    flexDirection: "row",
  },
  albumTitle: {
    fontFamily: fontType.bold,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  albumAutor: {
    fontFamily: fontType.medium,
    fontSize: 16,
    color: "#333",
  },
  albumPublish: {
    fontFamily: fontType.regular,
    fontSize: 12,
    color: "#333",
  },
  albumCover: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    borderRadius: 5,
    overflow: "hidden",
  },
});

export default styles;
