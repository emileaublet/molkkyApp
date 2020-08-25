import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

import { List, Divider } from "@ui-kitten/components";
import { View } from "react-native";

const TodoList = ({ todos, toggleTodo }) => {
  const renderItem = ({ item, index }) => {
    return (
      <Todo
        key={index}
        {...item}
        text={`${item.text}`}
        onClick={() => toggleTodo(item.id)}
      />
    );
  };
  return (
    <View>
      <List
        data={todos}
        renderItem={renderItem}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
