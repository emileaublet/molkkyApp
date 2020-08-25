import * as React from "react";
import Layout from "../components/Layout";
import { Text } from "@ui-kitten/components";

import { Game, Winner } from "../components/Game";

const GamePage = (props) => {
  return (
    <Layout>
      <Text category="h1">Game</Text>
      {/* {game.winner && <Winner />} */}
      <Game />
    </Layout>
  );
};

export default GamePage;
