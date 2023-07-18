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
  searchContent: {
    backgroundColor: "#fbfbfb",
    margin: 1,
    flex: 1,
  },
  searchBox: {
    padding: 10,
    flexDirection: "row",
  },
  searchInput: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#999",
    height: 25,
    padding: 5,
    borderRadius: 10,
  },
  cancelButton: {
    alignSelf: "center",
  },
  searchEmptyContainer: {
    paddingHorizontal: 50,
    paddingVertical: 100,
    alignItems: "center",
  },
  searchEmptyTitle: {
    fontFamily: fontType.bold,
    fontSize: 24,
  },
  searchEmptyQuery: {
    fontFamily: fontType.bold,
    fontSize: 24,
  },
  searchEmptyText: {
    fontFamily: fontType.medium,
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
});

export default styles;
