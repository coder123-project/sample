import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
export default class Message extends React.Component {


  render() {
    return (
      <View style={styles.container}>
    <Text> hello </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.2,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    paddingLeft: 45,
    fontFamily: 'Alkatra',
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 70,
    right: 175,
    top: -10,
    bottom: -30,
    zIndex: -1,
  },
  iconImage: {
    position: 'absolute',
    height: 70,
    width: 150,
    resizeMode: 'contain',
    right: -50,
    top: -25,
  },
});
