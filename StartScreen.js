import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const zenImage = require('./assets/zen.png')

export default class StartScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => { navigate('Quote') }}>
          <Image source={zenImage} style={styles.buttonImage} />
          <Text style={styles.readyText}>I am ready to relax...</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#889dad',
    alignItems: 'center',
    justifyContent: 'center',
  },
  readyText: {
    fontSize: 22,
    fontStyle: 'italic',
    marginTop: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#889dad',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  buttonImage: {
    width: 200,
    height: 200,
  },
});
