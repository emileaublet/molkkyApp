import * as React from "react";
import Layout from "../components/Layout";
import { Text } from "@ui-kitten/components";
import TodoWrapper from "../components/TodoWrapper";

const Home = (props) => {
  return (
    <Layout>
      <Text category="h1">Todo</Text>
      <TodoWrapper />
    </Layout>
  );
};

export default Home;
