import { StyleSheet, Text, Image, View ,ScrollView, TouchableOpacity} from "react-native";
import React from "react";
// import { ScrollView,  } from "react-native-gesture-handler";
// import { Iconify } from "react-native-iconify";
import DefaultImage from "../assets/black.png";
import Programme from "../components/programme";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const HomeScreen = () => {
  return (
    <ScrollView style={styles.content}>
      <View style={styles.container}>
        <View style={styles.leftBox}>
          <TouchableOpacity>
          {/* <Ionicons name="md-checkmark-circle" size={40} color="white" />
          <FontAwesomeIcon name="photo" size={40} color="white" /> */}
          <MaterialCommunityIcons name="image-multiple" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.centerBox}>
          <Image style={styles.image} source={{ uri: DEFAULT_IMAGE }} />

          <View>
            <Text style={{ color: "white" , fontSize:20, marginTop:15}}>Dona Ruth </Text>
            
          </View>
        </View>
        <View style={styles.rightBox}>
        <MaterialCommunityIcons name="emoticon" size={40} color="white" />
        </View>
      </View>

      <View style={styles.centerRo}>
        <Text style={{ color: "orange", fontSize:22 }}>Routine sportive</Text>
        <View style={styles.centerLine}></View>
      </View>

      <View style={styles.centerGlobe}>
        <TouchableOpacity style={styles.globeCercle}>
          <Text style={{ color: "white" }}>Démarrer</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ color: "orange" }}>Votre programme</Text>
        <Programme />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  content:{
    flex: 1,
    padding:4,
    backgroundColor: '#000',
    

  },
  container: {
    height: 200,
    marginTop:30,
    flexDirection: "row",
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  leftBox: {
    alignItems:"center",
    width: "20%",
    // backgroundColor: "red",
  },
  centerBox: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    color: "white",
  },
  rightBox: {
    alignItems:"center",
    width: "20%",
    // backgroundColor: "green",
  },
  centerRo: {
    height: 50,
    paddingTop: 5,
  },
  centerLine: {
    height: 2,
    marginTop: 10,
    width: "97%",

    backgroundColor: "white",
  },
  centerGlobe: {
    padding: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  globeCercle: {
    textAlign: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "orange",
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
