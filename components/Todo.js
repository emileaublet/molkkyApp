import React from "react";
import PropTypes from "prop-types";

import { List, ListItem, Text } from "@ui-kitten/components";

const Todo = ({ onClick, completed, text }) => (
  <ListItem
    onPress={onClick}
    description={completed && "Is completed"}
    title={text}
  ></ListItem>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
