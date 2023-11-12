// App.js
import React from "react";
import { View } from "react-native";
import { Block } from "./components/Block";
import { Counter } from "./components/Counter";
import { Timer } from "./components/Timer";

const App = () => {
  return (
    <View>
      <Block>
        <Counter />
        <Timer />
      </Block>
    </View>
  );
};

export default App;
