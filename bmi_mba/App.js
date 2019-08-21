import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Picker,
  Alert,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BMI from './components/BMI'


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      region: 'Asian',
      weight: '',
      height: '',
      bmi: '',
    };
  }

  btnPress()
  {
    var bmi = new BMI();
    let w = Number(this.state.weight);
    let h = Number(this.state.height);
    if(this.state.region == 'Asian')
    {
      var k = bmi.bmiCalculate(w,h);
      if(k<=18.5)
      {
        Alert.alert("under weight");
      }
      else if(k>=18.5 && k<=24.9)
      {
        Alert.alert("Normal weight");
      }
      else if(k>=24.9 && k<=29.9)
      {
        Alert.alert("Overweight");
      }
      else if(k>29.9)
      {
        Alert.alert("Obesity");
      }
    }
    else if(this.state.region == 'Western')
    {
      var p = bmi.bmiCalculate(w,h);
      if(p<=19.5)
      {
        Alert.alert("under weight");
      }
      else if(p>=19.5 && p<=34.5)
      {
        Alert.alert("Normal weight");
      }
      else if(p>=34.5 && p<=39.9)
      {
        Alert.alert("Overweight");
      }
      else if(p>39.9)
      {
        Alert.alert("Obesity");
      }
    }
  }


  render() {
    return (
      <LinearGradient
        colors={['#7F7FD5', '#86A8E7', '#91EAE4']}
        style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 50 }}>
          <Text style={styles.txt}>BMI Calculator </Text>
          <TextInput
            style={styles.txtIn2}
            placeholder="Weight"
            onChangeText={text => this.setState({weight:text })}
          />

          <TextInput
            style={styles.txtIn2}
            placeholder="Height"
            onChangeText={text => this.setState({height:text })}
          />

          
            <Picker
              selectedValue={this.state.region}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => this.setState({ region: itemValue })}>
            <Picker.Item label="Asian" value="Asian" />
            <Picker.Item label="Western" value="Western" />
             
            </Picker>
      

          <TouchableOpacity style={styles.viewBtn}>
            <Text
              style={styles.txt}
              onPress={() => this.btnPress()}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  txtIn2: {
    alignItems: 'center',
    height: 40,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  viewBtn: {
    height: 40,
    backgroundColor: 'white',
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
  },

  picker: {
    height:40,
    backgroundColor: 'white',
    padding: 10,
    margin: 5,
    marginLeft : 10,
    marginEnd : 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  txt:{
    textAlign: 'center',
    fontSize: 20, 
    color: '#000000' 
  }
});