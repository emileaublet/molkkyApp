import * as React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";

import { Layout, Divider, List, Text, Button } from "@ui-kitten/components";

// Mock game
const oldMockGame = {
  rules: {
    gameOf: 50,
    overdraftReturnTo: 25,
    numbersOfPlayers: 4,
  },
  players: [
    {
      name: "Jeanne",
      history: [9, 0, 12, 4, 2, 10, 7, 0, 7, 5],
      current: 30,
      eliminated: false,
    },
    {
      name: "Lucien",
      history: [3, 0, 3, 4, 2, 6, 7, 0, 0, 0],
      current: 25,
      eliminated: true,
    },
    {
      name: "Marie-Claude",
      history: [2, 4, 5, 4, 2, 6, 7, 0, 4, 5],
      current: 39,
      eliminated: false,
    },
    {
      name: "Emile",
      history: [1, 0, 10, 4, 5, 6, 7, 0, 4, 5],
      current: 42,
      eliminated: false,
    },
  ],
  currentPlayer: 2,
  winner: null,
};

const newMockGame = {
  rules: {
    gameOf: 40,
    overdraftReturnTo: 20,
    numbersOfPlayers: 4,
  },
  players: [
    {
      name: "Jeanne",
      history: [],
      current: 0,
      eliminated: false,
    },
    {
      name: "Lucien",
      history: [],
      current: 0,
      eliminated: false,
    },
    {
      name: "Marie-Claude",
      history: [],
      current: 0,
      eliminated: false,
    },
    {
      name: "Emile",
      history: [],
      current: 0,
      eliminated: false,
    },
  ],
  currentPlayer: 0,
  winner: null,
};

export const Game = (props) => {
  // const startGameForMock = oldMockGame;
  const startGameForMock = newMockGame;

  const [game, setGame] = React.useState(startGameForMock);
  const [history, setHistory] = React.useState([
    JSON.stringify(startGameForMock),
  ]);

  const randomScore = () => Math.floor(Math.random() * 13);

  const measureScore = (rules, currentScore, scoreToAdd) => {
    let newScore = currentScore + scoreToAdd;
    if (newScore > rules.gameOf) {
      return rules.overdraftReturnTo;
    }
    return newScore;
  };

  const handleWinner = (player) => alert(`Bravo ${player.name} !`);

  const nextPlayer = (current) => {
    const newPlayer = current + 1;
    if (game.players[newPlayer] === undefined) {
      return nextPlayer(-1);
    }
    if (game.players[newPlayer].eliminated) {
      return nextPlayer(newPlayer);
    }
    return newPlayer;
  };
  const handleUndo = () => {
    const newHistory = [...history];
    newHistory.pop();
    const restoredGame = [...newHistory].pop();
    setGame(JSON.parse(restoredGame));
    setHistory(newHistory);
  };
  const pushToHistory = (entry) => {
    const newHistory = [...history];
    newHistory.push(JSON.stringify(entry));
    setHistory(newHistory);
  };
  const handlePlay = (score) => {
    const newGame = { ...game };
    const player = newGame.players[game.currentPlayer];
    player.history.push(score);
    player.current = measureScore(game.rules, player.current, score);
    if (player.current === game.rules.gameOf) {
      handleWinner(player);
    } else {
      newGame.currentPlayer = nextPlayer(game.currentPlayer);
    }

    setGame(newGame);
    pushToHistory(newGame);
  };

  const renderItem = ({ item, index }) => {
    const description = item.eliminated
      ? `${item.name} is eliminated`
      : item.history.length > 0
      ? `Played ${item.history[item.history.length - 1]} last turn`
      : `Never played`;
    return (
      <View
        style={{
          backgroundColor: index === game.currentPlayer ? "black" : "white",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 8,
          paddingVertical: 16,
          opacity: item.eliminated ? 0.5 : 1,
        }}
      >
        <View
          style={{
            flexGrow: 1,
          }}
        >
          <Text
            category="s1"
            style={{ color: index === game.currentPlayer ? "white" : "black" }}
          >
            {item.name}
          </Text>
          <Text
            category="c1"
            style={{ color: index === game.currentPlayer ? "#eee" : "#444" }}
          >
            {description}
          </Text>
        </View>
        <View
          style={{
            flexShrink: 0,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#eee",
            height: 42,
            width: 42,
            maxWidth: 42,
            borderRadius: 100,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {item.current}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <Layout style={{ backgroundColor: "transparent" }}>
      <Text category="c1">
        We're playing a game of {game.rules.gameOf} points. In strict-mode, if
        you exceed {game.rules.gameOf} points, you go back to{" "}
        {game.rules.overdraftReturnTo}
      </Text>
      <View>
        <List
          style={{ marginTop: 24 }}
          data={game.players}
          ItemSeparatorComponent={Divider}
          renderItem={renderItem}
        />
      </View>
      <View
        style={{
          marginTop: 32,
          borderTopWidth: 1,
          borderTopColor: "#cecece",
          paddingTop: 32,
        }}
      >
        <Text category={"s1"}>
          {game.players[game.currentPlayer].name}'s turn
        </Text>
        <Button
          onPress={() => handlePlay(randomScore())}
          style={{ marginTop: 12 }}
        >
          Play random!
        </Button>
        {history.length > 1 && (
          <Button
            appearance="outline"
            onPress={() => handleUndo()}
            style={{ marginTop: 12 }}
          >
            Ooops, undo!
          </Button>
        )}
      </View>
    </Layout>
  );
};
