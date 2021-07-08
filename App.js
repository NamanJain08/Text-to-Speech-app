import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  speak() {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  }

  render() {
    return (
      <View style = {styles.container}>
        <Header
            backgroundColor={'#56A3BF'}
            centerComponent={{
              text: 'TEXT TO HERA',
              style: { color: '#fff', fontSize: 28 },
            }}
          />

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9y6wD4OWeuH50H2El2rFSQ2fxqjSKpli1sxtsKzbq8BoWKmj_NITy5npHy2p3eaMUSf8&usqp=CAU',
          }}
        />
          
        <TextInput
            style = {styles.inputBox}
            onChangeText={text => {
              this.setState({ text: text });
            }}
            value={this.state.text}
            defaultValue = {"The"}
            placeholder = "Type your text here"
          />

        <TouchableOpacity style = {styles.speechButton}
        onPress = {() => {
          this.speak()
        }}>
          <Text style = {styles.displayText}>Click to Hear</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 2,
    fontSize: 20,
    borderColor: 'white',
    color: '#2C5361',
    borderRadius: 20
  },
  displayText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black'
  },
  speechButton:{
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 50,
    backgroundColor: 'white'
  },
  imageIcon: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: 'center'
  }
});
