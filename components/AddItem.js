import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

const AddItem = (props) => {
  const [text, setText] = useState("");

  const onChange = (text) => setText(text);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Item "
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity activeOpacity={0} 
      style={styles.btn} 
      onPress={() => props.addItem(text)} >
        <Text style={styles.btnText}>
          <MaterialIcons
            name="add"
            size={30}
            color="white"
            style={styles.btnIcon}
          />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    // alignItems:'center',
    flexDirection: "row",
  },
  input: {
    height: 70,
    fontSize: 22,
    color: "dodgerblue",
    width: "50%",
  },
  btn: {
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 15,
    backgroundColor: "#1c75cc",
    width: "50%",
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 10,
    borderBottomWidth: 5,
    borderColor: "#6fbffb",
    flexDirection: "row",
  },
  btnText: {
    fontSize: 22,
    color: "white",
    letterSpacing: 2,
  },
  btnIcon: {
    position: "absolute",
    bottom: 15,
    left: 25,
    fontSize: 35,
  },
});
