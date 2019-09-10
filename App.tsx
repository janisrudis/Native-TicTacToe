import React, { Component, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Game } from "./Logic and Tests/Game";
import Title from "./components/title";
import WinLines from "./components/winLines";

export const game = new Game();

export default class TicTacToe extends Component {
  //Should replace ForceUpdate with State
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
      <View style={styles.bodyContainer}>
        <Title />

        <WinLines />

        <View style={styles.GridBackground}>
          <View>
            <TouchableOpacity
              onPress={() => this.onPress(0)}
              style={[styles.marginBot, styles.cellContent]}
            >
              <Text style={styles.text}>{game.board[0]}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.onPress(3)}
              style={[styles.marginBot, styles.cellContent]}
            >
              <Text style={styles.text}>{game.board[3]}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.onPress(6)}
              style={styles.cellContent}
            >
              <Text style={styles.text}>{game.board[6]}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.onPress(1)}
              style={[styles.marginLeft, styles.marginBot, styles.cellContent]}
            >
              <Text style={styles.text}>{game.board[1]}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.onPress(4)}
              style={[styles.marginLeft, styles.marginBot, styles.cellContent]}
            >
              <Text style={styles.text}>{game.board[4]}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.onPress(7)}
              style={[styles.marginLeft, styles.cellContent]}
            >
              <Text style={styles.text}>{game.board[7]}</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => this.onPress(2)}
              style={[styles.marginLeft, styles.marginBot, styles.cellContent]}
            >
              <Text style={styles.text}>{game.board[2]}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.onPress(5)}
              style={[styles.marginLeft, styles.marginBot, styles.cellContent]}
            >
              <Text style={styles.text}>{game.board[5]}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.onPress(8)}
              style={[styles.marginLeft, styles.cellContent]}
            >
              <Text style={styles.text}>{game.board[8]}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ height: "10%" }}>
          <TouchableOpacity
            onPress={() => this.onRestart()}
            style={{ padding: "10%" }}
            disabled={game.gameOver() ? false : true}
          >
            <Text style={game.gameOver() ? styles.button : styles.opacity}>
              Play Again
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
