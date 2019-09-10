
import React from 'react';
import { Text, View } from 'react-native';
import { game } from '../App';
import { styles } from '../style';
import * as Animatable from "react-native-animatable";



const Title = () => {

  function detectTurn() {
    return game.currentPlayer === "X";
  }

  
  return (
   

    <View style={styles.titleFlex}>
    <View style={game.gameOver() ?  styles.invisible : styles.titleFlex }>
      <Text style={styles.title}>C</Text>
      <Animatable.Text
        style={styles.title}
        animation={detectTurn() ? "" : "swing"}
        iterationCount={game.gameOver() ? 1 : 99}
        iterationDelay={game.gameOver() ? 9999 : 0}
        direction="normal"
      >O
      </Animatable.Text>
      <Text style={styles.title}>DELE</Text>
      <Animatable.Text
        style={styles.title}
        animation={detectTurn() ? "swing" : ""}
        iterationCount={game.gameOver() ? 1 : 99}//0 is working but its trowing warning.
        iterationDelay={game.gameOver() ? 9999 : 0} //Not best Option. Still moves after time.
        direction="normal"
      >
        X
      </Animatable.Text>
      </View>

      <View style={game.gameOver() ? styles.titleFlex : styles.invisible}>
      <Animatable.Text
        style={styles.title}
        animation={detectTurn() ? "" : "swing"}
        iterationCount={game.gameOver() ? 1 : 99}
        iterationDelay={game.gameOver() ? 9999 : 0}
        direction="normal"
      > {game.getWinner()}</Animatable.Text>
      <Text style={styles.title}>{game.isTie() ? "Tie" : " WIN"} </Text>
      </View>
    </View>
  );
};

export default Title;