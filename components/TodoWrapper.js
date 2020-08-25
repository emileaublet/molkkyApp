import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import { clearAll } from "../actions";
import { connect } from "react-redux";
import { Button } from "@ui-kitten/components";

const TodoWrapper = ({ dispatch }) => {
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
      <Button onPress={() => dispatch(clearAll())}>Clear all</Button>
    </>
  );
};

export default connect()(TodoWrapper);
