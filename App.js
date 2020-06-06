import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import { uuid } from "uuidv4";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
  });
};

export default function App() {
  fetchFonts();

  const [items, setItems] = useState([
    { id: uuid(), text: "Milk" },
    { id: uuid(), text: "Eggs" },
    { id: uuid(), text: "Bread" },
    { id: uuid(), text: "Beer" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    setItems(prevItems => {
      if(text === '' || text === undefined){
        alert("Enter an Item Please 🙏🏽");
        return [...prevItems];
      }
      return [{id:uuid(),text:text}, ...prevItems];
    });
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        style={{ marginTop: 30 }}
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "flex-start",
    fontFamily: "Nunito-Regular",
  },
});
