import * as React from "react";
import { SafeAreaView } from "react-native";
import { Layout } from "@ui-kitten/components";

const Page = ({ children }) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#ececec" }}>
    <Layout
      appearance="default"
      style={{
        minHeight: "100%",
        backgroundColor: "#ececec",
        padding: 20,
      }}
    >
      {children}
    </Layout>
  </SafeAreaView>
);

export default Page;
