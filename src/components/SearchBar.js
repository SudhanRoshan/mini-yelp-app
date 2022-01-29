import { React } from "react";
import { View, TextInput, StyleSheet, TextInputBase } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}></Feather>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 7,
    backgroundColor: "#D3D3D3",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
