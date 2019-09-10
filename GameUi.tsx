import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Game } from "./Logic and Tests/Game";
import { styles } from "./style";



export default class TicTacToe extends Component {
    onPress(i: number) {
      game.onClick(i);
      game.gameOver();
      game.getWinner();
      this.forceUpdate();
    }
  
    onRestart() {
      game.restart();
      this.forceUpdate();
    }
  
    render() {
      return (
       
      );
    }
  }
  