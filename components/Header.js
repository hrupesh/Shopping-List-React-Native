import React, { useState }from "react";
import { StyleSheet, Text, View } from "react-native";


const Header = (props) => {

    const { title } = useState('');

  return (
    <View style={styles.header}>
      <Text style={styles.headertext}> {props.title} </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: "dodgerblue",
    width: "100%",
    height: 75,
    alignItems:'center',
    justifyContent:'center'
  },
  headertext: {
    fontSize: 35,
    color:'white',
    letterSpacing:4,
  },
});
