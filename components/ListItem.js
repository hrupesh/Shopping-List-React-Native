import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

// import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const ListItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} style={styles.listItem}>
      <View style={styles.listView}>
        <Text style={styles.listText}>{props.item.text}</Text>
        <AntDesign name="delete" size={24} color="tomato" 
        onPress={() => props.deleteItem(props.item.id)} />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
    listItem:{
        padding:20,
        backgroundColor:'#c8e4f9',
        borderBottomColor:'dodgerblue',
        borderBottomWidth:1.5,
        marginHorizontal:15,
        marginVertical:5,
        borderRadius:15,
    },
    listView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    listText:{
        fontSize:25
    }
});
