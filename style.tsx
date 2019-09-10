import { StyleSheet } from "react-native";
import { game } from "./App";

const cellSize = 100;
const gridMargin = 10;
const WinLineThick = 4;
const Length_L = cellSize * 3 + gridMargin * 2
const Length_D = Math.sqrt((Length_L*Length_L)*2)


export const styles = StyleSheet.create({
  bodyContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#46dd6c"
  },
  GridBackground: {
    flexDirection: "row",
    backgroundColor: "white"
  },
  cellContent: {
    backgroundColor: "#46dd6c",
    color: "white",
    width: cellSize,
    height: cellSize,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 50
  },
  marginBot: {
    marginBottom: gridMargin
  },
  marginLeft: {
    marginLeft: gridMargin
  },
  title: {
    color: "white",
    fontWeight: "bold",
    paddingBottom: "15%",
    // paddingTop: "%",
    fontSize: 60,
    marginLeft: "auto",
    marginRight: "auto"
  },
  titleSmall: {
    color: "white",
    fontWeight: "bold",
    paddingBottom: "15%",
    // paddingTop: "%",
    fontSize: 40,
    marginLeft: "auto",
    marginRight: "auto"
  },
  button: {
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 12,
    color: "white",
    fontSize: 20,
    overflow: "hidden",
    padding: 12,
    textAlign: "center"
  },
  text: {
    color: "white",
    fontSize: 50
  },
  overlay: {
    // width: "100%",
    // height: "57%",
    position: "absolute",
    zIndex: 1,
    backgroundColor: "#46dd6c",
    display: "flex",
    justifyContent: "center",
    alignContent: "center"
  },
  overlayGameOver: {
    flexDirection: "row",
    opacity: 0
  },
  invisible: {
    display: "none"
  },
  opacity: {
    opacity: 0
  },

  textWinner: {
    fontSize: 45,
    color: "white",
    marginLeft: "auto",
    marginRight: "auto"
  },
  tie: {
    fontSize: 150,
    color: "white",
    marginLeft: "auto",
    marginRight: "auto"
  },
  XOText: {
    fontSize: 200,
    color: "white",
    marginLeft: "auto",
    marginRight: "auto"
  },
  titleFlex: {
    // position: "absolute",
    display: "flex",
    flexDirection: "row"
  },
  default: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "white",
    height: 0
  },
  showWin1: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "white",
    height: WinLineThick,
    marginTop: -cellSize + gridMargin * 2 - 2,
    transform: [{ rotate: `0deg` }],
    width: Length_L
  },
  showWin2: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "white",
    height: WinLineThick,
    marginTop: 25 + 2,
    transform: [{ rotate: `0deg` }],
    width: Length_L
  },
  showWin3: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "white",
    height: WinLineThick,
    marginTop: 150 - gridMargin - 2,
    transform: [{ rotate: `0deg` }],
    width: Length_L
  },
  showWin4: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "white",
    height: WinLineThick,

    marginTop: 25+2,
    transform: [{ rotate: `90deg` }],
    marginLeft: 0 - cellSize - gridMargin,
    width: Length_L
  },
  showWin5: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "white",
    height: WinLineThick,
    marginTop: 25 + 2,
    transform: [{ rotate: `90deg` }],
    width: Length_L
  },
  showWin6: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "white",
    height: WinLineThick,
    marginTop: 25 + 2,
    marginLeft: cellSize + gridMargin,
    transform: [{ rotate: `90deg` }],
    width: Length_L
  },
  showWin7: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "white",
    height: WinLineThick,
    marginTop: 25 + 2,
    transform: [{ rotate: `45deg` }],
    width: Length_D,
    marginLeft: -66
    
  },
  showWin8: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "white",
    height: WinLineThick,
    marginTop: 25 + 2,
    transform: [{ rotate: `135deg` }],
    width: Length_D,
    marginLeft: -66
  },
  marginAuto: {
    position: "absolute",
    marginTop: 300,
    paddingLeft: 320
  }
});
