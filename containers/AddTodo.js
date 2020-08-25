import * as React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { View, Keyboard } from "react-native";

import { Button, Input } from "@ui-kitten/components";

const AddTodo = ({ dispatch }) => {
  // let input = useRef();
  // const [text, setText] = useState();
  const [value, setValue] = React.useState("");

  const handleSubmit = () => {
    if (!value.trim()) {
      return;
    }
    dispatch(addTodo(value));
    setValue("");

    Keyboard.dismiss();
  };
  return (
    <View>
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      > */}

      <Input
        placeholder="Place your Text"
        value={value}
        onChangeText={(nextValue) => setValue(nextValue)}
      />

      <Button type="submit" onPress={() => handleSubmit()}>
        Add Todo
      </Button>
    </View>
  );
};

export default connect()(AddTodo);
