import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { Navigation } from "./components/Navigation";

import { PersistGate } from "redux-persist/es/integration/react";

import configureStore from "./store/configureStore";

const { persistor, store } = configureStore();
const onBeforeLift = () => {
  return;
};
import { Provider } from "react-redux";
// import { store, persistor } from "./store/configureStore";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
        onBeforeLift={onBeforeLift}
      >
        <ApplicationProvider {...eva} theme={eva.light}>
          <Navigation />
          <StatusBar barStyle="dark-content" />
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
}
