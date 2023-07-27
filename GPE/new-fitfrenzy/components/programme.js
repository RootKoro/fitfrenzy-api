import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const DATA = [
  {
    id: 1,
    name: "Cardio",
    time: "30 min - Muscu",
    Restant: "01:34",
    photo:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Ffitness-vision-stretching-with-black-woman-runner-outdoor-blurred-background-cardio-endurance-training-exercise-sports-music-with-young-athlete-getting-ready-workout_590464-207227.jpg%3Fw%3D1480&f=1&nofb=1&ipt=ec00523c259bd1d49b445250cef5ff3e4cd5af3e0580afd1ca4f5f99171e53f9&ipo=images",
  },
  {
    id: 2,
    name: "vélo",
    time: "30 min - Muscu",
    Restant: "01:34",
    photo:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.la2015.org%2Fwp-content%2Fuploads%2FGym-Workout-Using-Exercise-Bikes.jpg&f=1&nofb=1&ipt=67d2b01ffea8b5e4f2812a3a273ea330607c4561a706b7e723779d3aa88b795b&ipo=images",
  },
  {
    id: 3,
    name: "Pectoro",
    time: "30 min - Muscu",
    Restant: "01:34",
    photo:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-ami-drupal.heartyhosting.com%2Fsites%2Fmuscleandfitness.com%2Ffiles%2Fstyles%2Ffull_node_image_1090x614%2Fpublic%2Fmedia%2FIncline-Dumbbell-Bench_0.jpg%3Fitok%3D4iD6YxMe&f=1&nofb=1&ipt=598ac140ad9c3bb2ff688fecaa6229d018d5724f1324d0684856834273c4d1eb&ipo=images",
  },
  {
    id: 4,
    name: "Cadio",
    time: "30 min - Muscu",
    Restant: "01:34",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
  },
];

const Programme = () => {
  const Item = ({ item, index }) => (
    <View style={styles.item}>
        <View style={styles.left}>
        <Image
        // source={item.photo}
        source={{ uri: item.photo }}
        resizeMode="cover"
        style={{ height: 100, width: "100%", borderRadius:8 }}
      />
        </View>

        <View style={styles.right}>
            <Text style={styles.title}>{item.name}</Text>
             <Text style={styles.time}>{item.time}</Text>

            <View style={styles.centerGlobe}>
                <View style={styles.globeCercle}>
                <Text style={{ color: "white" }}>{item.Restant}</Text>
                </View>
        </View>
        </View>
      
     
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={Item}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Programme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    color:"white",
  },
  item: {
    flexDirection:"row",
    color:"white",
    marginVertical: 8,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 23,
    color:"white",
    padding:1
  },
  left:{
     
      width:"30%",
      height:"100%",
  },
  right:{
      width:"70%",
    height:"100%",
    paddingLeft:15,
  },
  centerGlobe: {
    flexDirection: "row",
    padding:1
  },
  globeCercle: {
    textAlign: "center",
    width: 50,
    height: 40,
    borderRadius: 100,
    borderColor: "orange",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  time:{
fontSize:12,
color:"white",
padding:1
  }
});
