import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList , Image} from "react-native";
import yelp from "../api/yelp";
import { set } from "react-native-reanimated";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
        
      <Text>{result.name}</Text>
      <FlatList 
      data= {result.photos}
      keyExtractor={(photo) => photo}
      renderItem={({item}) => {
return <Image style={styles.imageStyle} source={{uri:item}}></Image>
      }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
    imageStyle:{
height:200,
width:300,
marginLeft:10,
marginBottom:10
    }
});

export default ResultsShowScreen;
