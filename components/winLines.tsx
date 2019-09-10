import React from 'react';
import { View } from 'react-native';
import { game } from '../App';
import { styles } from '../style';
import * as Animatable from "react-native-animatable";


const WinLines = () => {
  return (
    <View style={styles.marginAuto}>

        <Animatable.View animation={game.gameOverAnimation}  style={game.showWin1() ? styles.showWin1 : styles.default}></Animatable.View>
        <Animatable.View animation={game.gameOverAnimation}  style={game.showWin2() ? styles.showWin2 : styles.default}></Animatable.View>
        <Animatable.View animation={game.gameOverAnimation}  style={game.showWin3() ? styles.showWin3 : styles.default}></Animatable.View>

        <Animatable.View animation={game.gameOverAnimation}  style={game.showWin4() ? styles.showWin4 : styles.default}></Animatable.View> 
        <Animatable.View animation={game.gameOverAnimation}  style={game.showWin5() ? styles.showWin5 : styles.default}></Animatable.View>
        <Animatable.View animation={game.gameOverAnimation}  style={game.showWin6() ? styles.showWin6 : styles.default}></Animatable.View>

        <Animatable.View animation={game.gameOverAnimation}  style={game.showWin7() ? styles.showWin7 : styles.showWin7}></Animatable.View>
        <Animatable.View animation={game.gameOverAnimation}  style={game.showWin8() ? styles.showWin8 : styles.showWin8}></Animatable.View>
        </View>
  );
};

export default WinLines;