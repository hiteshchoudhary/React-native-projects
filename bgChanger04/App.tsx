/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#FFFFFF');
  const [randomRecColor, setRandomRecColor] = useState('#FFFFFF');
  const [randomCirColor, setRandomCirColor] = useState('#FFFFFF');
  const [randomTriColor, setRandomtriColor] = useState('#FFFFFF');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateColorAll = () => {
    let bgColor = generateColor();
    let recColor = generateColor();
    let cirColor = generateColor();
    let triColor = generateColor();

    setRandomBackground(bgColor);
    setRandomRecColor(recColor);
    setRandomCirColor(cirColor);
    setRandomtriColor(triColor);
    console.log(bgColor);
    console.log(recColor);
    console.log(triColor);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.extContainer, {backgroundColor: randomBackground}]}>
        <View style={[styles.rectangle, {backgroundColor: randomRecColor}]} />

        <View style={[styles.container]}>
          <TouchableOpacity onPress={generateColorAll}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnTxt}>Press Me</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.circle, {backgroundColor: randomCirColor}]} />
        <View style={[styles.triangle, {borderBlockColor: randomTriColor}]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  extContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnTxt: {
    fontSize: 24,
    color: '#FFF',
    textTransform: 'uppercase',
  },
  rectangle: {
    width: 100,
    height: 50,
    position: 'absolute',
    borderColor: '#FFFFFF',
    marginBottom: 45,
    borderWidth: 4,
    left: 40,
    top: 20,
  },
  circle: {
    width: 100,
    height: 100,
    position: 'absolute',
    borderRadius: 50,
    borderColor: '#FFFFFF',
    borderWidth: 4,
    // marginTop: 150,
    bottom: 40,
    right: 50,
  },
  triangle: {
    width: 0,
    height: 0,
    borderTopWidth: 0,
    borderLeftWidth: 45,
    borderRightWidth: 45,
    borderBottomWidth: 45,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    position: 'absolute',
    borderWidth: 4,
    bottom: 40,
    left: 50,
  },
});

export default App;
